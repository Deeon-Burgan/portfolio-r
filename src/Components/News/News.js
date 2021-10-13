import React from 'react'
import './News.scss'

export default function News() {
    return (
        <div id='news'>
            <div className='newsContainer'>
                <div className='newsImage'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/5/56/AIT_Sydney%2C_Logo%2C_Horizontal.png/220px-AIT_Sydney%2C_Logo%2C_Horizontal.png' alt='image of project'/>
                </div>
                <div className='newsDescription'>
                    <h1>Diploma of Full-Stack development completed!</h1>
                    <p>I've finished my course at AIT, and am now a proud owner of a diploma of information technology, which majored in full-stack web development.</p>
                </div>
            </div>
            <div className='newsContainer'>
                <div className='newsImage'>
                <img src='https://lh3.googleusercontent.com/FJULnXYxJ_Vbg0ITDswhiFLrAuuqLrGtEPbZgCGcUiIr3SAvB4rnpO8FGdXBNDP6mw' alt='image of project'/>
                </div>
                <div className='newsDescription'>
                    <h1>Colors cubed released on the play store for closed testing</h1>
                    <p>After multiple attempts, and a vast number of times being pushed away and to the side, Colors Cubed is now available on the play store for closed testers</p>
                </div>
            </div>
            <div className='newsContainer'>
                <div className='newsImage'>
                <img src='https://eildonlakemotel.netlify.app/static/media/bannerLogo.02a11922.png' alt='image of project'/>
                </div>
                <div className='newsDescription'>
                    <h1>Started working on final project in my Diploma course</h1>
                    <p>Working with a fellow classmate, we have just started working on our final project for the course, excited to see what comes from it!</p>
                </div>
            </div>
        </div>
    )
}
