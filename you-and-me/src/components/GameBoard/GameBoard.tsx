import { useEffect, useState } from 'react';
import './GameBoard.scss';
import { GameMode } from '../../App';
import { getRandom } from '../../utils/helpers';
import questions from '../../database/questions';

type CardProps = {
  mode: GameMode;
  finishGame: () => void;
  indices: Array<number>;
};

function GameBoard({ mode, finishGame, indices }: CardProps) {
  const [gameIndexes, setGameIndexes] = useState(() =>
    questions.reduce((acc: Array<number>, _item, index) => {
      if (!indices.includes(index)) acc.push(index);
      return acc;
    }, [])
  );

  const [questionIndices, setQuestionIndices] = useState(indices);
  const [index, setIndex] = useState<number>(0);

  function getRandomIndex() {
    if (gameIndexes.length === 0) return;

    const randomIdx = getRandom(gameIndexes.length);
    const questionIndex = gameIndexes[randomIdx];

    setQuestionIndices((prev) => [...prev, questionIndex]);
    setGameIndexes((prev) => prev.filter((_, i) => i !== randomIdx));
    setIndex(questionIndex);
  }

  function getNextIndex() {
    if (gameIndexes.length === 0) return;

    const nextIndex = gameIndexes[0];
    setQuestionIndices((prev) => [...prev, nextIndex]);
    setGameIndexes((prev) => prev.slice(1));
    setIndex(nextIndex);
  }

  useEffect(() => {
    localStorage.setItem('questionIndices', JSON.stringify(questionIndices));
  }, [questionIndices]);

  function nextQuestion() {
    if (gameIndexes.length > 0) {
      if (mode === 'random') {
        getRandomIndex();
      } else {
        getNextIndex();
      }
    } else {
      finishGame();
    }
  }

  return (
    <section>
      <div className="card">
        <h3>{index !== null ? index + 1 : '—'}</h3>
        <p className="content">
          {index !== null ? questions[index] : 'Игра окончена'}
        </p>
        <button onClick={nextQuestion}>Следующий вопрос</button>
      </div>
    </section>
  );
}

export default GameBoard;
