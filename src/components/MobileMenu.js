import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = ({ handleMobileMenu }) => (
  <div className="mobile-menu-container">
    <button
      type="button"
      className="x-btn"
      onClick={handleMobileMenu}
    >
      <AiOutlineClose className="x-icon" />
    </button>
    <nav className="mobile-menu">
      <ul className="mobile-menu__ul">
        <li className="mobile-menu__li">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
            onClick={handleMobileMenu}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/missions"
            onClick={handleMobileMenu}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/profile"
            onClick={handleMobileMenu}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

MobileMenu.propTypes = {
  handleMobileMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
