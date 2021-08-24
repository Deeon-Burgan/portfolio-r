import React from 'react'
import './FeaturedGames.scss'

export default function FeaturedGames() {
    return (
        <div className='flexContainerCenter'>
        <div className='featuredGames'>
            <div id='container1'>

            <div id='game1'>
                <img src='https://i.ytimg.com/vi/0l9YEsXkPig/maxresdefault.jpg'/>
            </div>
            </div>

            <div id='container2'>
            <div id='game2'>
                <img src='https://img.itch.zone/aW1nLzE1NzA2NzYucG5n/original/jSqHLP.png' id='image2'/>
            </div>

            <div id='game3'>
                <h3>
                    Colors Cubed
                </h3>
                <img src='https://lh3.googleusercontent.com/FJULnXYxJ_Vbg0ITDswhiFLrAuuqLrGtEPbZgCGcUiIr3SAvB4rnpO8FGdXBNDP6mw' id='image3'/>
            </div>
            </div>
        </div>
        </div>
    )
}
