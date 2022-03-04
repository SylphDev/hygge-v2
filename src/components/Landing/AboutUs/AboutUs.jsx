import React from 'react'
import unimetLogo from '../../../assets/logos/Unimet.png'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="About-us">
            <div className="About-us-info">
                <p>Somos estudiantes de la Universidad Metropolitana de Caracas</p>
                <p>Comprometidos con brindar aventuras a todos nuestros clientes</p>
            </div>
            <figure className="Logo-unimet">
                <img src={unimetLogo} alt="Logo Unimet" />
            </figure>
        </div>
    )
}

export { AboutUs }