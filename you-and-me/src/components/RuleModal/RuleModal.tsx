import './RuleModal.scss';

type ModalProps = {
  setNext: () => void;
};

function RuleModal({ setNext }: ModalProps) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h2>
          Добро пожаловать в игру{' '}
          <span className="accent">100 вопросов о нас</span>
        </h2>
        <p>
          Это увлекательное путешествие, которое поможет вам лучше узнать друг
          друга через вопросы и ответы. С каждым вопросом вы откроете что-то
          новое о своем партнере и укрепите ваши отношения.
        </p>
        <h2>Правила игры:</h2>
        <ul>
          <li>Читаете вопрос и отвечаете на него.</li>
          <li>Отвечать можно по очереди или вместе.</li>
          <li>Обсуждайте ответы.</li>
          <li>
            Получайте удовольствие и используйте этот шанс для откровенных и
            интересных разговоров!
          </li>
        </ul>
        <button type="button" onClick={setNext}>
          Далее
        </button>
      </div>
    </div>
  );
}

export default RuleModal;
