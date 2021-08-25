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
                <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/240477971_635166014111789_1306910003126622311_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=eRS_bwMBiM8AX_Qsv8z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4e2a3b2497eb2e20babd0a1ac6e1d745&oe=614C3B23'/>
            </div>
            <div id='landingHeading'>
                <h1>Deeon Burgan</h1>
                <Typist className='thingo1' cursorClassName='cursor' sentences={['Web developer', 'Games programmer']} loop={true} pauseTime='2000' typingSpeed='100' deletingSpeed='50' style={typistStyle}/>
            </div>
        </div>
    )
}
