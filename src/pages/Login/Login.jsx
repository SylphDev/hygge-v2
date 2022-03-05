import React from 'react'
import Form from '../../components/Landing/Form/Form'
import './Login.css'

const Login = () => {
    return (
        <div className="Login-container">
            <div className="Login-form-container">
                <p className='Login-info'>¡Ingresa a tu cuenta y encuentra nuevas aventuras!</p>
                <Form view={'login'} />
            </div>
        </div>
    )
}

export { Login };