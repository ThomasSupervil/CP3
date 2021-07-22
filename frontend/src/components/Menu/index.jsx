import { Link } from 'react-router-dom';
import './style.scss';

const Menu = () => {
  return (
    <header>
      <Link to='/'>
        <img src='/images/logoMenu.svg' alt='logo' />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to='/scoreboard'>score board</Link>
          </li>
          <li>
            <Link to='/game'>play</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
