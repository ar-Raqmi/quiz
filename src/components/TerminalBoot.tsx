import { useEffect, useState } from 'react';
import './TerminalBoot.css';

interface BootLine {
  text: string;
  delay: number;
}

const bootLines: BootLine[] = [
  {text:'$ python --version', delay:0},
  {text:'Python 3.12.0', delay:300},
  {text:'', delay:400},
  {text:'$ pip install peoplecert-quiz-engine', delay:500},
  {text:'Collecting peoplecert-quiz-engine', delay:700},
  {text:'  Downloading peoplecert_quiz_engine-2.1.0-py3-none-any.whl (184 kB)', delay:900},
  {text:'[OK] Successfully installed peoplecert-quiz-engine-2.1.0', delay:1200},
  {text:'', delay:1300},
  {text:'$ quiz-engine --subject "Advanced Python" --load', delay:1400},
  {text:'[LOADING] Initializing question bank...', delay:1600},
  {text:'[LOADING] Parsing 10 questions...', delay:1900},
  {text:'[READY] Quiz engine initialized.', delay:2200},
];

export function TerminalBoot({ onComplete }: { onComplete: () => void }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let timeout: number;

    const runBoot = async () => {
      for (const line of bootLines) {
        await new Promise(r => timeout = window.setTimeout(r, line.delay ? 200 : 80));
        setDisplayedLines(prev => [...prev, line.text]);
      }
      await new Promise(r => timeout = window.setTimeout(r, 800));
      onComplete();
    };

    runBoot();
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="boot-screen">
      {displayedLines.map((line, i) => (
        <div key={i} className="terminal-line">{line}</div>
      ))}
      <span className="terminal-cursor" />
    </div>
  );
}
