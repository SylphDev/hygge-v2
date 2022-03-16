import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logos/logo-small-white.png'
import { PayPalButton } from "react-paypal-button-v2";
import './Payment.css'

const Payment = () => {
    const reserve = {
        name: 'Fondo de Bikini',
        entryDate: '2022-03-20',
        leaveDate: '2022-03-25',
        roomType: '2 habitaciones',
        price: 50,
    }
    const paypalOptions = {
        clientId: 'AUgMKPphAnKeZEieg2H3DIau_trMB2BN1NmTcH1pAUctC0PsWmCJbRXf52Jbv3Caol60aHPsjLYmnP4J',
        intent: 'capture',
        currency: 'USD'
    }
    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }
    // const location = useLocation()
    // const { hut } = location.state
    return (
        <div className="Payment-container">
            <figure className='Payment-logo'>
                <img src={logo} alt="Hygge logo" />
            </figure>
            <div className="Payment-reserve-info">
                <h3>Resumen de la reserva:</h3>
                <div className="Payment-resume">
                    <p><b>Hospedaje: </b>{reserve.name}</p>
                    <p><b>Fecha de entrada: </b>{reserve.entryDate}</p>
                    <p><b>Fecha de salida: </b>{reserve.leaveDate}</p>
                    <p><b>Habitacion: </b>{reserve.roomType}</p>
                    <p><b>Precio a pagar: </b>${reserve.price}</p>
                </div>
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={reserve.price}
                        onSuccess={data => console.log(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)} />
                </div>
            </div>
        </div>
    )
}

export { Payment };