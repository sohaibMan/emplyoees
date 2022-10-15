import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctx=useContext(AuthContext);
  const history=useHistory();
  const LogoutHandler=()=>{
    ctx.logout();
    history.push('/');
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {ctx.isLoggedIn ?
          <>
          <li>
          <Link to='/profile'>Profile</Link>
        </li>
          <li>
            <button onClick={LogoutHandler}>Logout</button>
          </li>
          </>
          :
          <li>
            <Link to='/auth'>Login</Link>
          </li>

          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
