import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Log in
    </NavLink>
  </div>
);

export default AuthNav;
