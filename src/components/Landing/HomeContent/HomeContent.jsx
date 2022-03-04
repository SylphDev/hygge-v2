import React from 'react'
import { AboutHygge } from '../AboutHygge/AboutHygge'
import { AboutUs } from '../AboutUs/AboutUs'
import { HyggeDescription } from '../HyggeDescription/HyggeDescription'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import './HomeContent.css'

const HomeContent = () => {
    return (
        <div className="Home-flex">
            <AboutHygge />
            <HyggeDescription />
            <AboutUs />
            <VideoPlayer />
        </div>
    )
}

export { HomeContent }