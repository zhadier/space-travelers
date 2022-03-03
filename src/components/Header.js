import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import planet from '../img/planet-logo-2.svg';
import MobileMenu from './MobileMenu';
import './Header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleMobileMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <NavLink
        className="logo"
        to="/"
      >
        <img className="logo-img" alt="logo" src={planet} />
        <h1 className="title">Space Travelers&apos; Hub</h1>
      </NavLink>
      {
        toggle && <MobileMenu handleMobileMenu={handleMobileMenu} />
      }
      <GiHamburgerMenu className="hamburger-menu" onClick={handleMobileMenu} />
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
};

export default Header;
