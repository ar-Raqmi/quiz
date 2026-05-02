import { useQuiz } from '../context/QuizContext';
import { XCircle } from 'lucide-react';

export default function ReviewGrid() {
  const {
    currentQuestions,
    answers,
    bookmarked,
    setCurrentQuestionIndex,
    setAppState,
    finishQuiz,
  } = useQuiz();

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setAppState('exam');
  };

  return (
    <section className="screen active quiz flex flex-col min-h-screen bg-[#f0f0f0] text-[#111]">
        <div className="quiz-topbar bg-[#111] text-white">
            <div className="quiz-topbar-inner">
                <div className="quiz-topbar-left">
                    <div className="quiz-topbar-logo">People<span>Cert</span></div>
                    <div className="quiz-topbar-qnum">Review Grid</div>
                </div>
                <button className="nav-btn" onClick={() => setAppState('exam')}>
                    <XCircle className="w-5 h-5" />
                </button>
            </div>
        </div>

      <div className="quiz-body flex-1 p-6 md:p-10">
        <h1 className="text-2xl font-bold mb-6">Review Questions</h1>

        <div className="review-grid grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-8">
            {currentQuestions.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isBookmarked = bookmarked.has(q.id);

            let bgClass = 'bg-white text-[#111] border-2 border-[#ddd]';
            if (isBookmarked) bgClass = 'bg-[#ffe8e0] border-[#ff3800] text-[#ff3800]';
            else if (isAnswered) bgClass = 'bg-[#48f2e6]/20 border-[#48f2e6]';

            return (
                <button
                key={q.id}
                onClick={() => handleGoToQuestion(idx)}
                className={`review-cell w-12 h-12 flex items-center justify-center font-bold ${bgClass}`}
                >
                {idx + 1}
                </button>
            );
            })}
        </div>
      </div>

      <div className="quiz-nav flex items-center justify-between p-6 bg-white border-t border-[#ddd]">
        <div className="flex gap-4 text-sm text-[#111]">
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#48f2e6]/20 border border-[#48f2e6]"></div> Answered</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-white border border-[#ddd]"></div> Unanswered</div>
           <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#ffe8e0] border border-[#ff3800]"></div> Bookmarked</div>
        </div>

        <button className="nav-btn primary" onClick={finishQuiz}>
          Submit Exam
        </button>
      </div>
    </section>
  );
}
