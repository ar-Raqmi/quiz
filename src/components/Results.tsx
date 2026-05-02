import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, CheckCircle2, XCircle, Award, BookOpen } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomOptionRender from './CustomOptionRender';

export default function Results() {
  const { currentQuestions, answers, score, resetQuiz } = useQuiz();
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);

  let message = "Good effort!";
  if (percentage >= 90) message = "Outstanding!";
  else if (percentage >= 70) message = "Great job!";
  else if (percentage >= 50) message = "Passed!";
  else message = "Keep studying!";

  if (isReviewMode) {
    const q = currentQuestions[reviewIndex];
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    const userOption = q.options.find(o => o.id === userAnswer);
    const correctOption = q.options.find(o => o.id === q.correctAnswer);

    const handlePrev = () => {
      if (reviewIndex > 0) setReviewIndex(reviewIndex - 1);
    };

    const handleNext = () => {
      if (reviewIndex < total - 1) setReviewIndex(reviewIndex + 1);
    };

    return (
        <div className="screen active quiz flex flex-col min-h-screen bg-[#f0f0f0] text-[#111]">
            <div className="quiz-topbar bg-[#111] text-white">
                <div className="quiz-topbar-inner">
                    <div className="quiz-topbar-left">
                        <div className="quiz-topbar-logo">People<span>Cert</span></div>
                        <div className="quiz-topbar-qnum">Reviewing {reviewIndex + 1} of {total}</div>
                    </div>
                    <button className="nav-btn" onClick={() => setIsReviewMode(false)}>Summary</button>
                </div>
            </div>

            <div className="quiz-body flex-1 p-6 md:p-10">
                <div className="question-area border-2 border-[#111] bg-white p-8 rounded-none">
                    <div className="text-[#ff3800] font-semibold text-sm mb-2 uppercase">Question {reviewIndex + 1}</div>
                    <h2 className="text-2xl font-bold mb-6">{q.text}</h2>

                    {q.codeSnippet && (
                      <div className="bg-[#111] text-[#c8d6e5] p-4 mb-6 font-mono text-sm overflow-x-auto">
                        <SyntaxHighlighter language={q.language || 'javascript'} style={vscDarkPlus} customStyle={{ background: 'transparent' }}>
                          {q.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-4 text-sm mt-4">
                      <div className={`p-4 border-2 ${isCorrect ? 'border-[#2ecc71] bg-[#e8f8ef]' : 'border-[#e74c3c] bg-[#fdeaea]'}`}>
                        <div className="flex items-start gap-4">
                            {isCorrect ? <CheckCircle2 className="w-6 h-6 text-[#2ecc71]" /> : <XCircle className="w-6 h-6 text-[#e74c3c]" />}
                            <div className="flex-1">
                                <span className="font-bold opacity-80 block mb-1">Your Answer - {userAnswer || 'Skipped'}</span>
                                {userOption && <span className="font-medium">{userOption.text}</span>}
                            </div>
                        </div>
                      </div>
                      {!isCorrect && (
                        <div className="p-4 border-2 border-[#2ecc71] bg-[#e8f8ef]">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#2ecc71]" />
                                <div className="flex-1">
                                    <span className="font-bold text-[#2ecc71] block mb-1">Correct Answer</span>
                                    {correctOption && <span className="font-medium">{correctOption.text}</span>}
                                </div>
                            </div>
                        </div>
                      )}
                    </div>
                </div>
            </div>

            <div className="quiz-nav flex items-center justify-between p-6 bg-white border-t border-[#ddd]">
              <button className="nav-btn" onClick={handlePrev} disabled={reviewIndex === 0}><i className="fas fa-arrow-left"></i> Prev</button>
              <button className="nav-btn primary" onClick={handleNext} disabled={reviewIndex === total - 1}>Next <i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    );
  }

  return (
    <div className="screen active results flex flex-col items-center justify-center min-h-screen bg-[#111] text-white p-6">
      <div className="max-w-lg w-full text-center bg-[#1a1a1a] p-10 border-2 border-[#252525]">
        <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 ${percentage >= 70 ? 'border-[#2ecc71] text-[#2ecc71]' : 'border-[#e74c3c] text-[#e74c3c]'}`}>
           <Award className="w-10 h-10" />
        </div>
        <h1 className="text-5xl font-black mb-4">{score} <span className="text-lg text-[#888]">/ {total}</span></h1>
        <p className="text-xl mb-8">{message}</p>
        
        <div className="flex gap-2 justify-center mb-8">
            {currentQuestions.map((q, idx) => {
                const uAns = answers[q.id];
                const bgClass = uAns === undefined ? 'bg-[#252525]' : uAns === q.correctAnswer ? 'bg-[#2ecc71]' : 'bg-[#e74c3c]';
                return <div key={idx} className={`w-10 h-10 flex items-center justify-center font-bold ${bgClass}`}>{idx+1}</div>
            })}
        </div>

        <div className="flex flex-col gap-4">
          <button className="res-btn primary" onClick={() => setIsReviewMode(true)}>Review Answers</button>
          <button className="res-btn" onClick={resetQuiz}>Back to Menu</button>
        </div>
      </div>
    </div>
  );
}
