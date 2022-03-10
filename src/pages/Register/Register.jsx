import React from 'react'
import Form from '../../components/Landing/Form/Form'
import { ServiceButtons } from '../../components/Landing/ServiceButtons/ServiceButtons'
import sunsetImage from '../../assets/images/image-sunset.jpg';
import './Register.css'

const Register = () => {
    return (
        <div className="Register-container">
            <figure className="Image-container">
                <img src={sunsetImage} alt="River image" />
            </figure>
            <div className="Register-form-container">
                <p className='Register-info'>¡Bienvenido a Hygge, tu plataforma de aventuras!</p>
                <ServiceButtons view={'register'} />
                <Form view={'register'} />
            </div>
        </div>
    )
}

export { Register }