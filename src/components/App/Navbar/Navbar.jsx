import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { setUserAction, setViewAction } from '../../../redux/actions/actions';

const Navbar = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(setUserAction({
      name: null
    }));
    dispatch(setViewAction('landing'))
  }

  return (
    <nav className="Navbar-container">
      <ul className="Navbar-list">
        {user.name === null ?
          <React.Fragment>
            <Link to={'/'}><li className="Navbar-element">Home</li></Link>
            <Link to={'/login'}><li className="Navbar-element">Ingresa</li></Link>
            <Link to={'/register'}><li className="Navbar-element">Registrate</li></Link>
          </React.Fragment> :
          <React.Fragment>
            <Link to={'/'}><li className="Navbar-element">Home</li></Link>
            <Link to={'/search'}><li className="Navbar-element">Buscar</li></Link>
            <Link to={'/profile'}><li className="Navbar-element">{user.name}</li></Link>
            <Link to={'/'}><li onClick={logOut} className="Navbar-element">Logout</li></Link>
          </React.Fragment>}
      </ul>
    </nav>
  );
};

export { Navbar };
