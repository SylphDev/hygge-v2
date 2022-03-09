import React from 'react'
import { Slider } from '../../components/App/Slider/Slider';
import sp1 from '../../assets/testImages/bikiniBottom.png';
import sp2 from '../../assets/testImages/bikiniBottom2.jpeg';
import sp3 from '../../assets/testImages/bikiniBottom3.jpeg';
import { ReserveForm } from '../../components/App/ReserveForm/ReserveForm';
import './Reserve.css'

const Reserve = () => {
    return (
        <div className="Reserve-container">
            <div className="Reserve-hut-info">
                <div className="Slider-hut">
                    <Slider images={[sp1, sp2, sp3]} />
                </div>
                <div className='Hut-info'>
                    <p className='Hut-info-name'>Fondo de Bikini</p>
                    <p className='Hut-info-description'><b>Descripcion:</b> hermosa y pequeña posada con vista al océano. Vecinos muy amigables, aunque disfrutan de tocar clarinete a las 7:00am, Muy cerca del campo de medusas de la localidad</p>
                    <p className='Hut-info-benefits'><b>Beneficios:</b> arquitectura vanguardista inspirada en frutas tropicales. Amplio espacio con varios cuartos y baños. Se aceptan caracoles de mascota</p>
                    <p className='Hut-info-rooms'><b>Tipos de habitacion:</b> apartamento de 4 cuartos y 3 baños. Cocina último modelo y mucha agua</p>
                    <p className='Hut-info-location'><b>Tipo de locacion:</b> Océano aventurero</p>
                </div>
            </div>
            <div className="Reserve-info">
                <ReserveForm />
            </div>
        </div>
    )
}

export { Reserve };