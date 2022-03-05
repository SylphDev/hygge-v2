import React from 'react'
import './ServiceButtons.css'

const ServiceButtons = ({ view }) => {
    return (
        <div className="ServiceButtons-container">
            <button className="Google-button">{view === 'register' ? 'Regístrate con Google' : 'Ingresa con Google'}</button>
            <button className='Twitter-button'>{view === 'register' ? 'Regístrate con Twitter' : 'Ingresa con Twitter'}</button>
            <button className='Facebook-button'>{view === 'register' ? 'Regístrate con Facebook' : 'Ingresa con Facebook'}</button>
        </div>
    )
}

export { ServiceButtons };