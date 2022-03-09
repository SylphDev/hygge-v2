import React from 'react'
import { useSelector } from 'react-redux'
import greyImage from '../../assets/images/grey.jpeg'
import './Profile.css'

const Profile = () => {
    const user = useSelector(state => state.user)

    return (
        <div className="Profile-container">
            <div className="Profile-info">
                <p>Tu perfil</p>
                <figure className='Profile-picture'>
                    <img src={greyImage} alt="Profile Picture" />
                </figure>
            </div>
            <form className='Profile-form'>
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id='name' className='input Name-input' placeholder={`${user.name}`} />
                <label htmlFor="country">País</label>
                <input type="text" id='country' className='input Country-input' placeholder={`${user.country}`} />
                <label htmlFor="city">Ciudad</label>
                <input type="text" id='city' className='input City-input' placeholder={`${user.city}`} />
                <label htmlFor="phone">Telefóno</label>
                <input type="number" id='phone' className='input Phone-input' placeholder={`${user.phone}`} />
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id='email' className='input Email-input' placeholder={`${user.email}`} />
            </form>
            <button>Editar perfil</button>
        </div>
    )
}

export { Profile }