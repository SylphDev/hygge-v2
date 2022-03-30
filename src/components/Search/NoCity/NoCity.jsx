import React from 'react'
import logo from '../../../assets/logos/logo-small-black.png'
import './NoCity.css'

const NoCity = () => {
    return (
        <div className="No-City-container">
            <div className="No-City-info">
                <p>Haz click en cualquier ciudad y podrás encontrar un lugar de ensueño para tus vacaciones</p>
            </div>
            <figure className="No-City-image-container">
                <img src={logo} alt="Hygge" />
            </figure>
        </div>
    )
}

export { NoCity }