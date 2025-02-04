import './FinishModal.scss';

export type FinishProps = {
  reset: () => void;
};

function FinishModal({ reset }: FinishProps) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2>Поздравляю!</h2>
        <p> Вы ответили на все вопросы и стали еще ближе друг к другу! </p>

        <p>Поделитесь своими впечатлениями:</p>
        <ul>
          <li>Какие вопросы вас удивили?</li>
          <li>Что нового вы узнали друг о друге?</li>
        </ul>
        <p>Обсуждение продолжается даже после окончания игры! </p>
        <p>Спасибо, что сыграли вместе! </p>
        <button onClick={reset}>На главную</button>
      </div>
    </div>
  );
}

export default FinishModal;
