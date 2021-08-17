import React from 'react'
import './Gallery.scss'

export default function Gallery() {

    const games = [
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp',
        'https://static.wixstatic.com/media/bc9d97_6346f6d082314d2188bc59183b920d7a~mv2.jpg/v1/fill/w_311,h_311,al_c,q_90/aod2.webp'
    ]

    return (
        <div>
        <div className='gallery'>
            {games.map((game) => {
                return (
                    <div className='gameContainer'>
                    <img src={game}/>
                </div>);
            })}
        </div>
        <div className='moreGames'>
            <p>More Games</p>
        </div>
            </div>
    )
}
