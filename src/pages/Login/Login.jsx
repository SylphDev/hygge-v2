import React from "react";
import Form from "../../components/Landing/Form/Form";
import { ServiceButtons } from "../../components/Landing/ServiceButtons/ServiceButtons";
import riverImage from "../../assets/images/image-river.jpg";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login-container">
      <figure className="Image-container">
        <img src={riverImage} alt="River" />
      </figure>
      <div className="Login-form-container">
        <p className="Login-info">
          ¡Ingresa a tu cuenta y encuentra nuevas aventuras!
        </p>
        <ServiceButtons vier={"login"} />
        <Form view={"login"} />
        <p className="Login-remember-password">
          Olvidaste tu contraseña? Has click aquí
        </p>
      </div>
    </div>
  );
};

export { Login };
