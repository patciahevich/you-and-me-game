import { FinishProps } from '../FinishModal/FinishModal';
import './Footer.scss';

function Footer({ reset }: FinishProps) {
  return (
    <footer>
      <p>2025</p>
      <button onClick={reset}>Сбросить прогресс</button>
      <a
        href="https://github.com/patciahevich"
        target="_blank"
        rel="noopener noreferrer"
      />
    </footer>
  );
}
export default Footer;
