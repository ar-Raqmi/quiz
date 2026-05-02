import { useQuiz } from '../context/QuizContext';
import { motion } from 'motion/react';

export default function MainMenu() {
  const { startPractice, startExam } = useQuiz();

  return (
    <section className="screen active landing flex flex-col items-center justify-center min-h-screen bg-[#111] text-white p-6 relative">
      <div className="landing-content relative z-10 max-w-lg w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-14 h-14 border-2 border-[#48f2e6] flex items-center justify-center font-black text-2xl text-[#48f2e6]">PC</div>
          <div className="text-2xl font-bold font-sans">People<span className="text-[#48f2e6]">Cert</span></div>
        </div>
        
        <h1 className="text-5xl font-extrabold mb-4 font-sans">Software Development Quiz</h1>
        <p className="text-[#888] mb-12">Advanced Python — Test your software development knowledge</p>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={startPractice}
            className="group border-2 border-[#252525] bg-[#1a1a1a] p-6 text-left flex items-center gap-6 transition-all hover:border-[#ff3800] hover:bg-[#ff3800]/5"
          >
            <div className="w-12 h-12 border-2 border-[#ff3800] flex items-center justify-center text-[#ff3800] text-xl flex-shrink-0">
              <i className="fas fa-book"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Practice Mode</h3>
              <p className="text-sm text-[#888]">10 questions, instant feedback after each answer</p>
            </div>
          </button>
          
          <button
            onClick={startExam}
            className="group border-2 border-[#252525] bg-[#1a1a1a] p-6 text-left flex items-center gap-6 transition-all hover:border-[#48f2e6] hover:bg-[#48f2e6]/5"
          >
            <div className="w-12 h-12 border-2 border-[#48f2e6] flex items-center justify-center text-[#48f2e6] text-xl flex-shrink-0">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Exam Mode</h3>
              <p className="text-sm text-[#888]">10 questions, 20 minute time limit, review at end</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

