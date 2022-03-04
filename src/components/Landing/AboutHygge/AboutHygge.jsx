import React from 'react'
import smallLogo from '../../../assets/logos/logo-small-black.png'
import './AboutHygge.css'

const AboutHygge = () => {
    return (
        <div className="AboutHygge-intro">
            <figure className="Small-Logo">
                <img src={smallLogo} alt="Hygge Logo" />
            </figure>
            <div className="AboutHygge-intro-info">
                <p>Hygge es una plataforma online para reservar posadas en toda Venezuela</p>
                <p>Contamos con las mejores posadas que le den un toque aventurero a tu destino</p>
                <span>No es necesario un hotel 5 estrellas, para tener las mejores vacaciones de tu vida</span>
            </div>
        </div>
    )
}

export { AboutHygge }