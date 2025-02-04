import { GameMode } from '../../App';

type SettingsType = {
  start: (mode: GameMode) => void;
};

function SettingsModal({ start }: SettingsType) {
  function handleSubmit(mode: string) {
    start(mode as GameMode);
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2>Выберите режим игры</h2>
        <button onClick={() => handleSubmit('default')}>
          Вопросы по порядку
        </button>
        <button onClick={() => handleSubmit('random')}>
          Случайный порядок вопросов
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
