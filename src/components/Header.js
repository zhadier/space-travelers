import { NavLink } from 'react-router-dom';
import planet from '../img/planet-logo-2.svg';
import './Header.scss';

const Header = () => (
  <header>
    <NavLink
      className="logo"
      to="/"
    >
      <img className="logo-img" alt="logo" src={planet} />
      <h1 className="title">Space Travelers&apos; Hub</h1>
    </NavLink>
    <nav className="header__nav">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
