import React from "react";
import smallLogo from "../../../assets/logos/logo-small-black.png";
import "./ReserveForm.css";

const ReserveForm = () => {
  return (
    <div className="ReserveForm-container">
      <div className="ReserveForm-info-container">
        <p className="Reserve-title">
          <b>Información de la reserva</b>
        </p>
        <div className="ReserveForm-form-container">
          <form className="ReserveForm-form">
            <div className="Reserve-form-dates">
              <div className="Reserve-form-dates-entry">
                <label htmlFor="entry-date">Fecha de llegada</label>
                <input id="entry-date" type={"date"} />
              </div>
              <div className="Reserve-form-dates-leave">
                <label htmlFor="leave-date">Fecha de salida</label>
                <input id="leave-date" type={"date"} />
              </div>
            </div>
            <div className="Reserve-form-room">
              <label htmlFor="room-type">Tipo de habitacion</label>
              <input id="room-type" type="text" />
            </div>
            <div className="Reserve-form-cost">
              <p>Costo:</p>
              <input type="text" disabled placeholder="$0.00" />
            </div>
          </form>
        </div>
      </div>
      <div className="ReserveForm-button">
        <figure className="Logo-small">
          <img src={smallLogo} alt="Logo" />
        </figure>
        <button>Reservar</button>
      </div>
    </div>
  );
};

export { ReserveForm };
