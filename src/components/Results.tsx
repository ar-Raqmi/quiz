import { useQuiz } from '../context/QuizContext';
import { Award, RefreshCcw, BookOpen } from 'lucide-react';

export default function Results() {
  const { currentQuestions, answers, score, resetQuiz, setAppState } = useQuiz();

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);

  let message = "Keep studying!";
  if (percentage >= 90) message = "Outstanding!";
  else if (percentage >= 70) message = "Great job!";
  else if (percentage >= 50) message = "Passed!";

  return (
    <section className="screen active results flex flex-col items-center justify-center min-h-screen bg-[#111] text-white p-6">
      <div className="max-w-lg w-full text-center bg-[#1a1a1a] p-10 border-2 border-[#252525]">
        <div className={`results-medal w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 ${percentage >= 70 ? 'border-[#2ecc71] text-[#2ecc71]' : 'border-[#e74c3c] text-[#e74c3c]'}`}>
           <Award className="w-10 h-10" />
        </div>
        <h1 className="results-score text-5xl font-black mb-4">{score} <span className="text-lg text-[#888]">/ {total}</span></h1>
        <p className="results-msg text-xl mb-8">{message}</p>
        
        <div className="results-grid flex gap-2 justify-center mb-8">
            {currentQuestions.map((q, idx) => {
                const uAns = answers[q.id];
                const bgClass = uAns === undefined ? 'bg-[#252525]' : uAns === q.correctAnswer ? 'bg-[#2ecc71]' : 'bg-[#e74c3c]';
                return <div key={idx} className={`r-cell w-10 h-10 flex items-center justify-center font-bold ${bgClass}`}>{idx+1}</div>
            })}
        </div>

        <div className="results-actions flex flex-col gap-4">
          <button className="res-btn primary" onClick={() => setAppState('review')}>Review Answers</button>
          <button className="res-btn" onClick={resetQuiz}>Back to Menu</button>
        </div>
      </div>
    </section>
  );
}
