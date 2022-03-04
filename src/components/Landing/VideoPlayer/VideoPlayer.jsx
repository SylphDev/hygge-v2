import React from 'react'
import forestVideo from '../../../assets/videos/Forest.mp4'
import smallLogo from '../../../assets/logos/logo-small-white.png'
import './VideoPlayer.css'

const VideoPlayer = () => {
    return (
        <div className="Video-player">
            <figure className='Video-player-logo'>
                <img src={smallLogo} alt="Hygge's Logo" />
            </figure>
            <video className='Home-video' id='Home-video' loop autoPlay={true} muted>
                <source src={forestVideo} />
            </video>
            <p>Ingresa y encuentra qué aventuras te deparan con nosotros</p>
        </div>
    )
}

export { VideoPlayer };