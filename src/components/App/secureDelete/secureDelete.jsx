import React from "react";
import { useSelector } from "react-redux";
import "./secureDelete.css";

const SecureDelete = ({ deleteHut, onClose, type }) => {
  return (
    <div className="secureDelete-container">
      <p>Seguro que desea borrar?</p>
      <div className="secureDelete-buttons">
        <button onClick={() => deleteHut(type.name)}>Si</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export { SecureDelete };
