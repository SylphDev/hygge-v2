import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  setHutsAction,
  setReserveAction,
  setUserAction,
  setViewAction,
} from "../../../redux/actions/actions";
import { auth } from "../../../firebase/firebaseConfig";

const Navbar = () => {
  const signOut = async () => {
    await auth.signOut();
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch(
      setUserAction({
        name: null,
        lastName: null,
        email: null,
        country: null,
        city: null,
        photoUrl: null,
        phone: null,
        reserves: {
          active: [],
          finished: [],
        },
      })
    );
    dispatch(setViewAction("landing"));
    dispatch(
      setReserveAction({
        hut: {},
        entry: "",
        leave: "",
        room: "",
        price: 0,
      })
    );
    dispatch(
      setHutsAction({
        name: "",
        description: "",
        photo: [],
        rooms: [],
        city: "",
      })
    );
    signOut();
  };

  return (
    <nav className="Navbar-container">
      <ul className="Navbar-list">
        {user.name === null ? (
          <React.Fragment>
            <Link to={"/"}>
              <li className="Navbar-element">Home</li>
            </Link>
            <Link to={"/login"}>
              <li className="Navbar-element">Ingresa</li>
            </Link>
            <Link to={"/register"}>
              <li className="Navbar-element">Registrate</li>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to={"/"}>
              <li className="Navbar-element">Home</li>
            </Link>
            <Link to={"/search"}>
              <li className="Navbar-element">Buscar</li>
            </Link>
            <Link to={"/profile"}>
              <li className="Navbar-element">{user.name}</li>
            </Link>
            <Link to={"/"}>
              <li onClick={logOut} className="Navbar-element">
                Logout
              </li>
            </Link>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export { Navbar };
