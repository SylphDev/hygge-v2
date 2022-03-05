import React from 'react'
import Form from '../../components/Landing/Form/Form'
import { ServiceButtons } from '../../components/Landing/ServiceButtons/ServiceButtons'
import './Register.css'

const Register = () => {
    return (
        <div className="Register-container">
            <div className="Register-form-container">
                <p className='Register-info'>¡Bienvenido a Hygge, tu plataforma de aventuras!</p>
                <ServiceButtons view={'register'} />
                <Form view={'register'} />
            </div>
        </div>
    )
}

export { Register }