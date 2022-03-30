import React, { useState } from "react";
import Form from "../../components/Landing/Form/Form";
import { ServiceButtons } from "../../components/Landing/ServiceButtons/ServiceButtons";
import riverImage from "../../assets/images/image-river.jpg";
import ErrorMessage from "../../components/Landing/ErrorMessage/ErrorMessage";
import { Modal } from "../../components/App/Modal/Modal";
import "./Login.css";
import { useSelector } from "react-redux";

const Login = () => {
  const errorState = useSelector(state => state.error)
  return (
    <div className="Login-container">
      <figure className="Image-container">
        <img src={riverImage} alt="River" />
      </figure>
      <div className="Login-form-container">
        <p className="Login-info">
          ¡Ingresa a tu cuenta y encuentra nuevas aventuras!
        </p>
        <ServiceButtons view={"login"} />
        <Form view={"login"} />
        <p className="Login-remember-password">
          Olvidaste tu contraseña? Has click aquí
        </p>
      </div>
      {errorState.state &&
        <Modal>
          <ErrorMessage />
        </Modal>}
    </div>
  );
};

export { Login };
