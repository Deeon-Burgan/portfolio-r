import React from 'react'
import './GamePitch.scss'

export default function GamePitch(props) {
    return (
        <div className='gamePitch'>
            <img src={props.image} id='background' />
            <div id='gamePitchContent'>
            <div id='pitchImage'>
                <img src={'https://static.wixstatic.com/media/bc9d97_fd690a5bfe5d4ad4a6ea2e85f0f2c02a~mv2.png/v1/crop/x_24,y_110,w_2284,h_1679/fill/w_612,h_440,al_c,q_95/CMAMP_F03_PNG-24_edited.webp'} alt='games concept art' id='overlayImage' />
            </div>
            <div id='pitchDescription'>
                <h3>{props.tagline}</h3>
                <p>{props.description}</p>
                <div>Watch Trailer</div>
            </div>
            </div>
        </div>
    )
}
