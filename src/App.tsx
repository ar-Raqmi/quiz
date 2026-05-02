import { useState } from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import MainMenu from './components/MainMenu';
import ActiveQuiz from './components/ActiveQuiz';
import ReviewGrid from './components/ReviewGrid';
import Results from './components/Results';
import { TerminalBoot } from './components/TerminalBoot';

function QuizApp() {
  const [booted, setBooted] = useState(false);
  const { appState } = useQuiz();

  if (!booted) {
    return <TerminalBoot onComplete={() => setBooted(true)} />;
  }

  switch (appState) {
    case 'menu':
      return <MainMenu />;
    case 'practice':
    case 'exam':
      return <ActiveQuiz />;
    case 'review':
      return <ReviewGrid />;
    case 'results':
      return <Results />;
    default:
      return <MainMenu />;
  }
}

export default function App() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}
