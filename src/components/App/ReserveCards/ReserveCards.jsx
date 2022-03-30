import React from 'react'
import './ReserveCards.css'

const ReserveCards = ({ reservation }) => {
    return (
        <div className="Reserve-Card-container">
            <p><b>Nombre del local: </b>{reservation.name}</p>
            <p><b>Fecha de llegada: </b>{reservation.entryDate}</p>
            <p><b>Fecha de salida: </b>{reservation.leaveDate}</p>
            <p><b>Habitacion: </b>{reservation.roomType}</p>
        </div>
    )
}

export { ReserveCards }