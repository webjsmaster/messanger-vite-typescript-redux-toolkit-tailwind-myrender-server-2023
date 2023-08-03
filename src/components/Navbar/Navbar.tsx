import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Authentication</Link>
        </li>
      </ul>
      <button className={style.button}>Theme</button>
    </div>
  );
};

export default Navbar;
