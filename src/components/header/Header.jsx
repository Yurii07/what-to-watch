import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useUserAuth } from 'contexts/UserAuthContext';
import { removeUser } from '../../store/slices/userSlice';
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from '../../hooks/use-auth';

import { useAppDispatch } from 'hooks/redux-hooks';
import './header.scss'

import logo from '../../assets/images/logo.svg';

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
];

const Header = () => {
  const { pathname } = useLocation();
  const { user } = useUserAuth();
  const headerRef = useRef(null);
  const { isAuth } = useAuth();
  const active = headerNav.findIndex(e => e.path === pathname);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);
  const auth = getAuth();
  const signOutHandler = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
      console.log(error, 'error');

    });
  }

  return (
    <div ref={headerRef} className="header">

      <div className="header__wrap container">
        <div className="logo">

          <Link to="/" >  <img src={logo} alt="" className="logo" /></Link>
        </div>

        {isAuth ?
          <ul className="header__nav">
            {
              headerNav.map((e, i) => (
                <li key={i} className={`${i === active ? 'active' : ''}`}>
                  <Link to={e.path}>
                    {e.display}
                  </Link>
                </li>
              ))
            }

            <button onClick={signOutHandler}>log out from <br/>{user.email} </button>

          </ul> :
          <div>
            <Link className='link' to="/login">login</Link> <br/>
            <Link className='link' to="/register">register</Link>
          </div>

        }

      </div>
    </div>
  );
}

export default Header;