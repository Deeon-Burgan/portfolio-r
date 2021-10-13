import React from 'react'
import './LandingAbout.scss'
import Typist from 'react-text-typist';

export default function LandingAbout() {

    const typistStyle={
        'fontSize':'clamp(24px, 2vw, 32px)'
    }

    return (
        <div className='landingAbout'>
            <div id='landingImage'>
                <img src='https://scontent.fmel5-1.fna.fbcdn.net/v/t1.15752-9/240477971_635166014111789_1306910003126622311_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=7d0NGiCWD4EAX-1Oww1&_nc_ht=scontent.fmel5-1.fna&oh=4ddeee52dd7735a3fe18ee1a13d94afd&oe=618B8B28'/>
            </div>
            <div id='landingHeading'>
                <h1>Deeon Burgan</h1>
                <Typist className='thingo1' cursorClassName='cursor' sentences={['Web developer', 'Games programmer']} loop={true} pauseTime='2000' typingSpeed='100' deletingSpeed='50' style={typistStyle}/>
            </div>
        </div>
    )
}
