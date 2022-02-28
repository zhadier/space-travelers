import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './Header.scss';

const Header = () => (
  <header>
    <h1 className="logo">Bookstore CMS</h1>
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="categories">Categories</Link>
        </li>
      </ul>
      <ImUser className="user-icon" />
    </nav>
  </header>
);

export default Header;
