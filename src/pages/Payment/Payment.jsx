import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logo-small-white.png";
import { PayPalButton } from "react-paypal-button-v2";
import "./Payment.css";
import { useSelector } from "react-redux";

const Payment = () => {
  const navigate = useNavigate();
  const reservation = useSelector(state => state.reserve)
  const reserve = {
    name: reservation.hut.name,
    entryDate: reservation.entry,
    leaveDate: reservation.leave,
    roomType: reservation.room,
    price: reservation.price,
  };
  const paypalOptions = {
    clientId:
      "AUgMKPphAnKeZEieg2H3DIau_trMB2BN1NmTcH1pAUctC0PsWmCJbRXf52Jbv3Caol60aHPsjLYmnP4J",
    intent: "capture",
    currency: "USD",
  };
  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      navigate("/payment/success");
    }
  };
  return (
    <div className="Payment-container">
      <figure className="Payment-logo">
        <img src={logo} alt="Hygge logo" />
      </figure>
      <div className="Payment-reserve-info">
        <h3>Resumen de la reserva:</h3>
        <div className="Payment-resume">
          <p>
            <b>Hospedaje: </b>
            {reserve.name}
          </p>
          <p>
            <b>Fecha de entrada: </b>
            {reserve.entryDate}
          </p>
          <p>
            <b>Fecha de salida: </b>
            {reserve.leaveDate}
          </p>
          <p>
            <b>Habitacion: </b>
            {reserve.roomType}
          </p>
          <p>
            <b>Precio a pagar: </b>${reserve.price}
          </p>
        </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={reservation.price}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export { Payment };
