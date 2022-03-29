import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({ open, children, onClose, deleteHut, hutName }) => {
    if(!open) return null;
    
    return ReactDOM.createPortal(
        <>
        <div className="overlay"/>
        <div className="modal-container">
            <button onClick={deleteHut(hutName)}>Si</button>
            <button onClick={onClose}>No</button>
            { children }</div>
            </>,
            document.getElementById('portal')
    );
}

export { Modal };