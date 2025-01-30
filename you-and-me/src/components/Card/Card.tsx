import './Card.scss';

type CardProps = {
  number: number;
  text: string;
  increaseIndex: () => void;
};

function Card(props: CardProps) {
  return (
    <section>
      <div className="card">
        <p className="number">{props.number}</p>
        <p className="content">{props.text}</p>
        <button onClick={props.increaseIndex}>Следующий вопрос</button>
      </div>
    </section>
  );
}

export default Card;
