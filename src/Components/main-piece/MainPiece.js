import React from 'react'
import './MainPiece.scss'

export default function MainPiece() {
    return (
        <div className='mainPiece'>
            <video className='video' autoPlay loop muted>
                <source src='https://video.wixstatic.com/video/bc9d97_4a02b201501f42e291b3627a3caacf7c/720p/mp4/file.mp4' />
            </video>
            <div className='overlay'>

                <img src="https://static.wixstatic.com/media/bc9d97_14df94db12ad46f2bcca9502bf0b5081~mv2.png/v1/fill/w_600,h_240,al_c,q_95/AoD_Logo_NoShadow%20(2).webp" className='mainPieceTitle' />
                <ul>
                    <li>
                        <p>Watch Trailer</p>
                    </li>
                    <li>
                        <p>Visit Site</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
