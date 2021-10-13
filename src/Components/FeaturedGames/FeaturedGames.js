import React from 'react'
import './FeaturedGames.scss'
import { Link } from 'react-router-dom'

export default function FeaturedGames() {
    return (
        <div className='flexContainerCenter'>
        <div className='featuredGames'>
            <div id='container1'>

            <div id='game1'>
                <Link to='/project/PicoTanks'>
                <img src='https://i.ytimg.com/vi/0l9YEsXkPig/maxresdefault.jpg'/>
                </Link>
            </div>
            </div>

            <div id='container2'>
            <div id='game2'>
            <Link to='/project/HarvestHands'>
                <img src='https://img.itch.zone/aW1nLzE1NzA2NzYucG5n/original/jSqHLP.png' id='image2'/>
                </Link>
            </div>

            <div id='game3'>
                <h3>
                    Colors Cubed
                </h3>
                <Link to='/project/ColorsCubed'>
                <img src='https://lh3.googleusercontent.com/FJULnXYxJ_Vbg0ITDswhiFLrAuuqLrGtEPbZgCGcUiIr3SAvB4rnpO8FGdXBNDP6mw' id='image3'/>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}
