import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import RuleModal from './components/RuleModal/RuleModal';
import SettingsModal from './components/SettingsModal/SettingsModal';
import GameBoard from './components/GameBoard/GameBoard';
import FinishModal from './components/FinishModal/FinishModal';
import Footer from './components/Footer/Footer';

type STEPS = 'rules' | 'settings' | 'game' | 'finish';
export type GameMode = 'default' | 'random';

function App() {
  const [step, setStep] = useState<STEPS>('rules');
  const [mode, setMode] = useState<GameMode>('default');
  const [questionIndices, setQuestionIndices] = useState([0]);

  useEffect(() => {
    const savedMode = localStorage.getItem('gameMode');
    const savedIndices = localStorage.getItem('questionIndices');

    if (savedMode && savedIndices) {
      setMode(JSON.parse(savedMode));
      setQuestionIndices(JSON.parse(savedIndices));
      setStep('game');
    } else {
      setStep('rules');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameMode', JSON.stringify(mode));
  }, [mode]);

  function handleStart() {
    setStep('settings');
  }

  function handleModeSubmit(mode: GameMode) {
    setMode(mode);
    setStep('game');
  }

  function handleFinishGame() {
    setStep('finish');
  }

  function handleResetGame() {
    localStorage.removeItem('questionIndices');
    localStorage.removeItem('gameMode');
    setStep('rules');
  }

  return (
    <div className="app">
      <Header />
      {step === 'rules' && <RuleModal setNext={handleStart} />}
      {step === 'settings' && <SettingsModal start={handleModeSubmit} />}
      {step === 'game' && (
        <GameBoard
          mode={mode}
          finishGame={handleFinishGame}
          indices={questionIndices}
        />
      )}
      {step === 'finish' && <FinishModal reset={handleResetGame} />}
      <Footer reset={handleResetGame} />
    </div>
  );
}

export default App;
