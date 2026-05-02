import { useQuiz } from '../context/QuizContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
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
    timeRemaining,
  } = useQuiz();

  const isExam = appState === 'exam';
  const question = currentQuestions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setAppState('review');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <section className="screen active quiz">
      <div className="quiz-topbar">
        <div className="quiz-topbar-inner">
          <div className="quiz-topbar-left">
            <div className="quiz-topbar-logo">People<span>Cert</span></div>
            <div className="quiz-topbar-sep"></div>
            <div className="quiz-topbar-qnum">Question {currentQuestionIndex + 1} of {currentQuestions.length}</div>
          </div>
          <div className="quiz-topbar-right">
            {isExam && (
              <div className="quiz-timer">
                <i className="fas fa-clock"></i>
                <span>{formatTime(timeRemaining)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="quiz-body">
        <div className="question-area">
          <div className="q-header">
            <div className="q-number">{question.id}</div>
            <span className="q-tag">{question.tag || 'Quiz'}</span>
          </div>
          <div className="q-body">
            <p className="q-text">{question.text}</p>
            {question.codeSnippet && (
              <div className="code-block">
                <SyntaxHighlighter language={question.language || 'javascript'} style={vscDarkPlus} customStyle={{ background: 'transparent' }}>
                  {question.codeSnippet}
                </SyntaxHighlighter>
              </div>
            )}
            <div className="options-list">
              {question.options.map((option, idx) => (
                <button
                  key={option.id}
                  onClick={() => setAnswer(question.id, option.id)}
                  className={`option-btn ${answers[question.id] === option.id ? 'selected' : ''}`}
                >
                  <div className="opt-radio"></div>
                  <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="opt-text">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="quiz-nav">
        <button className="nav-btn" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button className="nav-btn" onClick={() => setAppState('review')}>
          <i className="fas fa-th"></i> Review Grid
        </button>
        <button className="nav-btn primary" onClick={handleNext}>
          {currentQuestionIndex === currentQuestions.length - 1 ? 'Finish' : 'Next'} <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}

  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <div className="screen active quiz flex flex-col min-h-screen bg-[#f0f0f0] text-[#111]">
      <div className="quiz-topbar bg-[#111] text-white">
        <div className="quiz-topbar-inner">
          <div className="quiz-topbar-left">
            <div className="quiz-topbar-logo">People<span>Cert</span></div>
            <div className="quiz-topbar-qnum">Question {currentQuestionIndex + 1} of {currentQuestions.length}</div>
          </div>
          {isExam && (
            <div className="quiz-timer">
              <i className="fas fa-clock"></i>
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="quiz-body flex-1 p-6 md:p-10">
        <div className="question-area border-2 border-[#111] bg-white p-8 rounded-none">
          <div className="q-header mb-6">
            <span className="bg-[#ff3800] text-white px-4 py-1 font-bold text-sm uppercase">
              {question.tag || 'Quiz'}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-6">{question.text}</h2>
          
          {question.codeSnippet && (
            <div className="bg-[#111] text-[#c8d6e5] p-4 mb-6 font-mono text-sm overflow-x-auto">
              <SyntaxHighlighter language={question.language || 'javascript'} style={vscDarkPlus} customStyle={{ background: 'transparent' }}>
                {question.codeSnippet}
              </SyntaxHighlighter>
            </div>
          )}

          <div className="flex flex-col gap-3">
            {question.options.map((option, idx) => (
              <button
                key={option.id}
                onClick={() => setAnswer(question.id, option.id)}
                className={`option-btn ${answers[question.id] === option.id ? 'selected' : ''}`}
              >
                <div className="opt-radio"></div>
                <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="opt-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="quiz-nav flex items-center justify-between p-6 bg-white border-t border-[#ddd]">
        <button className="nav-btn" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          <i className="fas fa-arrow-left"></i> Prev
        </button>
        <button className="nav-btn" onClick={() => setAppState('review')}>
          <i className="fas fa-th"></i> Grid
        </button>
        <button className="nav-btn primary" onClick={handleNext}>
          {currentQuestionIndex === currentQuestions.length - 1 ? 'Submit' : 'Next'} <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
