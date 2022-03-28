import React from "react";
import "./Ready.css";
import checkIcon from "../../assets/logos/Check-icon.png";
import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <div className="Ready-container">
    <div className="Content">
        <div className="Image-content">
        <figure className="Image-container">
            <img src={checkIcon} alt="Check" />
        </figure>
        </div>
      <div className="Ready-text">
        <p>
          SU RESERVA SE HA REALIZADO CON ÉXITO
        </p>
      </div>
      </div>
      <div className="Button-container">
      <Link to={"/login"}>
        <button type="button">
          Volver a Home
        </button>
      </Link>
      </div>
      </div>
  );
};

export { Ready };