import React, { useState } from "react";
import Form from "../../components/Landing/Form/Form";
import { ServiceButtons } from "../../components/Landing/ServiceButtons/ServiceButtons";
import sunsetImage from "../../assets/images/image-sunset.jpg";
import ErrorMessage from "../../components/Landing/ErrorMessage/ErrorMessage";
import { Modal } from "../../components/App/Modal/Modal";
import "./Register.css";
import { useSelector } from "react-redux";

const Register = () => {
  const errorState = useSelector(state => state.error)
  return (
    <div className="Register-container">
      <figure className="Image-container">
        <img src={sunsetImage} alt="River" />
      </figure>
      <div className="Register-form-container">
        <p className="Register-info">
          ¡Bienvenido a Hygge, tu plataforma de aventuras!
        </p>
        <ServiceButtons view={"register"} />
        <Form view={"register"} />
      </div>
      {errorState.state &&
        <Modal>
          <ErrorMessage />
        </Modal>}
    </div>
  );
};

export { Register };
