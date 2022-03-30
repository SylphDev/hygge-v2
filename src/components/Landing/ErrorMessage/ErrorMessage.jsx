import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorAction } from '../../../redux/actions/actions'
import './ErrorMessage.css'

const ErrorMessage = () => {
    const dispatch = useDispatch()
    const close = () => {
        dispatch(setErrorAction({ state: false, message: '' }))
    }
    const errorState = useSelector(state => state.error)
    return (
        <div className="Error-container">
            <p>Se ha producido un error</p>
            <p className='Error-message'>Error: {errorState.message}</p>
            <p>Por favor, vuelva a intentarlo</p>
            <button className='Error-button' onClick={close}>Regresar</button>
        </div>
    )
}

export default ErrorMessage;