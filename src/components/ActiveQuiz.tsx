import { useQuiz } from '../context/QuizContext';
import { Bookmark, Clock, ArrowLeft, ArrowRight, CheckCircle2, XCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidDiagram from './MermaidDiagram';
import ArchitectureDiagram from './ArchitectureDiagram';
import { ERDiagram } from './ERDiagram';
import CustomOptionRender from './CustomOptionRender';

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export default function ActiveQuiz() {
  const {
    appState,
    setAppState,
    currentQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswer,
    bookmarked,
    toggleBookmark,
    timeRemaining,
    finishQuiz,
  } = useQuiz();

  const isExam = appState === 'exam';
  const isPractice = appState === 'practice';
  const [showFeedback, setShowFeedback] = useState(false);

  const question = currentQuestions[currentQuestionIndex];
  
  const shuffledOptions = useMemo(() => {
    return [...question.options].sort(() => Math.random() - 0.5);
  }, [currentQuestionIndex, question.options]);

  const hasAnsweredCurrent = !!answers[question.id];
  const userAnswer = answers[question.id];
  const isCorrect = userAnswer === question.correctAnswer;

  useEffect(() => {
    if (isPractice) {
      if (hasAnsweredCurrent) {
        setShowFeedback(true);
      } else {
        setShowFeedback(false);
      }
    }
  }, [currentQuestionIndex, hasAnsweredCurrent, isPractice]);

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (isPractice) {
        finishQuiz();
      } else {
        setAppState('review');
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectOption = (optionId: string) => {
    if (isPractice && hasAnsweredCurrent) return; // Prevent changing answer in practice mode
    setAnswer(question.id, optionId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-pc-off-white font-sans text-pc-dark w-full overflow-hidden">
      {/* Topbar */}
      <div className="bg-pc-dark border-b border-pc-dark3 sticky top-0 z-40">
        <div className="max-w-[900px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="font-outfit text-base font-bold text-white leading-none">
              by<span className="text-pc-cyan"> ar-Raqmi</span>
            </div>
            <div className="w-px h-5 bg-pc-dark3" />
            <div className="text-pc-gray text-xs font-semibold uppercase tracking-wider">
              Question {currentQuestionIndex + 1} <span className="opacity-60 lowercase">of</span> {currentQuestions.length}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isExam && (
              <div className={`flex items-center gap-2 font-mono text-lg font-bold ${timeRemaining <= 60 ? 'text-pc-red animate-pulse' : 'text-pc-cyan'}`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeRemaining)}</span>
              </div>
            )}
            
            {isExam && (
              <button
                onClick={() => toggleBookmark(question.id)}
                className={`p-1.5 rounded transition-colors ${
                  bookmarked.has(question.id) ? 'bg-pc-skipped/20 text-pc-skipped' : 'text-pc-gray hover:text-white'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${bookmarked.has(question.id) ? 'fill-current' : ''}`} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[900px] mx-auto p-6 md:p-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Question Area */}
              <div className="bg-white border-2 border-pc-dark overflow-hidden">
                <div className="flex items-center gap-3 p-4 pb-0">
                  <div className="bg-pc-red text-white font-outfit font-black text-lg w-10 h-10 flex items-center justify-center">
                    {question.id}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 border-2 border-pc-cyan text-pc-dark">
                    // ACTIVE...
                  </span>
                </div>

                <div className="p-7 pt-4">
                  <div className="text-[16px] font-sans font-medium leading-relaxed text-pc-dark mb-6 whitespace-pre-wrap antialiased">
                    {question.text}
                  </div>

                  {question.imageDescription && (
                    <div className="mb-4 p-4 bg-pc-dark/5 rounded-lg text-sm text-pc-dark italic border-l-4 border-pc-cyan">
                      {question.imageDescription}
                    </div>
                  )}

                  {question.diagram === 'er' && (
                    <div className="mb-4">
                      <ERDiagram />
                    </div>
                  )}

                  {question.diagram === 'mermaid' && question.mermaidCode && (
                    <div className="mb-4">
                      <MermaidDiagram chart={question.mermaidCode} />
                    </div>
                  )}

                  {question.diagram === 'architecture' && (
                    <div className="mb-4">
                      <ArchitectureDiagram />
                    </div>
                  )}

                  {question.tables && (
                    <div className="mb-4 flex flex-wrap gap-4 justify-center bg-pc-off-white p-6 border border-pc-dark/10">
                      {question.tables.map(table => (
                        table.rows ? (
                          <div key={table.name} className="w-full overflow-x-auto border border-pc-dark/20 bg-white">
                            <table className="w-full text-sm text-left">
                              <thead className="bg-[#E6E0D9] text-pc-dark font-bold border-b border-pc-dark/20">
                                <tr>
                                  {table.columns.map(col => (
                                    <th key={col.name} className="px-4 py-3 whitespace-nowrap">{col.name}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#E6E0D9]">
                                {table.rows.map((row, i) => (
                                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F3F4F1]"}>
                                    {row.map((cell, j) => (
                                      <td key={j} className="px-4 py-2.5">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div key={table.name} className="border border-pc-dark bg-white min-w-[150px]">
                            <div className="bg-[#E6E0D9] text-pc-dark font-black text-center py-2 border-b border-pc-dark tracking-tight">
                              {table.name}
                            </div>
                            <div className="flex flex-col">
                              {table.columns.map((col, i) => (
                                 <div key={`col-${i}-${col.name}`} className="px-3 py-1.5 text-xs font-mono border-b last:border-b-0 border-pc-dark/10 flex items-center gap-2">
                                    {col.isKey ? <span className="text-pc-red rotate-45 block" style={{ fontSize: '12px' }}>⚿</span> : <span className="w-3"></span>}
                                    <span>{col.name}</span>
                                 </div>
                              ))}
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  )}

                  {question.codeSnippet && (
                    <div className="code-block">
                      <SyntaxHighlighter
                        language={question.language || 'python'}
                        style={vscDarkPlus}
                        customStyle={{ padding: 0, margin: 0, background: 'transparent', fontSize: 'inherit' }}
                        codeTagProps={{ style: { fontFamily: 'inherit' } }}
                      >
                        {question.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  )}

                  <div className="space-y-2">
                    {shuffledOptions.map((option, i) => {
                      const letters = ['A','B','C','D'];
                      const isSelected = userAnswer === option.id;
                      let btnClass = "border-2 border-pc-off-white/80 bg-white hover:border-pc-cyan hover:bg-pc-cyan/5";
                      let radioClass = "border-2 border-pc-off-white/80";

                      if (isSelected) {
                        btnClass = "border-pc-cyan bg-pc-cyan/10";
                        radioClass = "border-pc-cyan bg-pc-cyan";
                      }

                      if (isPractice && showFeedback) {
                        const isThisOptionCorrect = option.id === question.correctAnswer;
                        if (isThisOptionCorrect) {
                          btnClass = "border-pc-correct bg-pc-correct/10";
                          radioClass = "border-pc-correct bg-pc-correct";
                        } else if (isSelected) {
                          btnClass = "border-pc-wrong bg-pc-wrong/10";
                          radioClass = "border-pc-wrong bg-pc-wrong";
                        } else {
                          btnClass = "border-pc-off-white opacity-40 grayscale";
                          radioClass = "border-pc-off-white";
                        }
                      }

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleSelectOption(option.id)}
                          disabled={isPractice && showFeedback}
                          className={`w-full p-4 flex items-start gap-4 transition-all text-left group ${btnClass}`}
                        >
                          <div className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${radioClass}`}>
                            {isSelected && <div className="w-2 h-2 bg-pc-dark rounded-full" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex gap-2">
                              <span className="font-outfit font-extrabold text-sm min-w-[1.25rem]">{letters[i]}</span>
                              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                                {option.text}
                                {option.code && (
                                  <div className="mt-2 rounded border border-pc-dark/10 overflow-hidden">
                                     <SyntaxHighlighter
                                      language="css"
                                      style={vscDarkPlus}
                                      customStyle={{ margin: 0, padding: '10px', fontSize: '12px' }}
                                    >
                                      {option.code}
                                    </SyntaxHighlighter>
                                  </div>
                                )}
                                {option.uiRender && (
                                  <div className="mt-2">
                                    <CustomOptionRender type={option.uiRender} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {isPractice && showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4"
                    >
                      <div className={`p-4 text-xs leading-relaxed border-2 flex gap-3 ${isCorrect ? 'bg-pc-correct/5 border-pc-correct/30 text-[#1a7a43]' : 'bg-pc-wrong/5 border-pc-wrong/30 text-[#b33025]'}`}>
                        <div className="mt-0.5">
                          {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-bold mb-1 uppercase tracking-wider">{isCorrect ? 'Correct Pass' : 'Verification Failed'}</p>
                          <p>{isCorrect ? 'Correct.' : 'Incorrect.'} {question.correctAnswer} is the correct response. {question.text.includes('expected output') || question.codeSnippet ? 'Calculation verified.' : ''}</p>
                        </div>
                      </div>

                      <div className="mt-4 border border-pc-dark3 bg-black p-4 font-mono text-[12px] leading-relaxed text-pc-gray">
                        <div className="flex gap-2">
                          <span className="text-pc-cyan">$</span>
                          <span className="text-pc-gray">check-answer --q{question.id} --selected {userAnswer || 'NULL'} --correct {question.correctAnswer}</span>
                        </div>
                        <div className="mt-1">
                          <span className={isCorrect ? 'text-pc-correct' : 'text-pc-wrong'}>[{isCorrect ? 'PASS' : 'FAIL'}]</span> Access verification complete.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-pc-off-white border-t border-pc-dark/10 p-6">
        <div className="max-w-[900px] mx-auto flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="nav-btn bg-white"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {isExam && (
            <button
              onClick={() => setAppState('review')}
              className="nav-btn bg-white hidden sm:flex"
            >
              Review Grid
            </button>
          )}

          <button
            onClick={handleNext}
            className={`nav-btn primary ${currentQuestionIndex === currentQuestions.length - 1 ? 'bg-pc-red border-pc-red' : ''}`}
          >
            {currentQuestionIndex === currentQuestions.length - 1 ? (
              <>Finish <ArrowRight className="w-4 h-4" /></>
            ) : (
              <>Next <ArrowRight className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
