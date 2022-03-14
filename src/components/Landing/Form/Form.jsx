import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserAction, setViewAction } from "../../../redux/actions/actions";
import "./Form.css";

const Form = ({ view }) => {
  const dispatch = useDispatch();
  const enter = () => {
    dispatch(setUserAction({ name: "Alex" }));
    dispatch(setViewAction("search"));
  };

  return (
    <form className="Form-container">
      {view === "register" ? (
        <React.Fragment>
          <div className="Form-container-name double-input">
            <input
              type="text"
              className="input Name-input"
              placeholder="Nombre"
            />
            <input
              type="text"
              className="input Name-input"
              placeholder="Apellido"
            />
          </div>
          <div className="Form-container-country double-input">
            <input
              type="text"
              className="input Country-input"
              placeholder="País"
            />
            <input
              type="text"
              className="input City-input"
              placeholder="Ciudad"
            />
          </div>
          <input
            type="number"
            className="input Phone-input"
            placeholder="Telefóno"
          />
        </React.Fragment>
      ) : null}
      <input
        type="email"
        className="input Email-input"
        placeholder="Correo Electrónico"
      />
      <input
        type="password"
        className="input Password-input"
        placeholder="Contraseña"
      />
      <Link to={"/search"}>
        <button onClick={enter} type="button">
          {view === "register" ? "Registrar" : "Ingresar"}
        </button>
      </Link>
    </form>
  );
};

export default Form;
