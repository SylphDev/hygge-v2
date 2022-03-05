import React from 'react'
import './Form.css'

const Form = ({ view }) => {
    return (
        <form className="Form-container">
            {view === 'register' ?
                <React.Fragment>
                    <input type="text" className='input Name-input' placeholder='Nombre completo' />
                    <input type="text" className='input Country-input' placeholder='País' />
                    <input type="text" className='input City-input' placeholder='Ciudad' />
                    <input type="tel" className='input Phone-input' placeholder='Telefóno' />
                </React.Fragment> : null}
            <input type="email" className='input Email-input' placeholder='Correo Electrónico' />
            <input type="password" className='input Password-input' placeholder='Contraseña' />
            <button type='submit'>{view === 'register' ? 'Registrar' : 'Ingresar'}</button>
        </form>
    )
}

export default Form