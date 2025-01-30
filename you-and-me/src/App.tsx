import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Card from './components/Card/Card';
import questions from './database/questions';

const index = 0;

function App() {
  const [questionIndex, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem('gameIndex');
    return savedIndex ? Number(savedIndex) : index;
  });

  const [isStart, setIsStart] = useState(Boolean(questionIndex));

  useEffect(() => {
    localStorage.setItem('gameIndex', questionIndex.toString());
  }, [questionIndex]);

  function increaseIndex() {
    setIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <div className="app">
      <Header />
      {!isStart ? (
        <Modal startGame={setIsStart} />
      ) : (
        <Card
          number={questionIndex + 1}
          text={questions[questionIndex]}
          increaseIndex={increaseIndex}
        />
      )}
    </div>
  );
}

export default App;
