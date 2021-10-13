import React from 'react'
import './MainPiece.scss'

export default function MainPiece() {
    return (
        <div className='mainPiece'>
            {/* <video className='video' autoPlay loop muted>
                <source src="https://video.wixstatic.com/video/bc9d97_4a02b201501f42e291b3627a3caacf7c/1080p/mp4/file.mp4" type='video/mp4'/>
            </video> */}
            {/* <iframe className='video' src="https://www.youtube.com/embed/1Pi98kyh1Jg?rel=0?version=3&autoplay=1&controls=0&loop=1&mute=1" title="YouTube video player" frameborder="0" allowfullscreen allow='autoplay; loop'></iframe> */}
            <iframe className='video' width="1640" height="1080" src="https://www.youtube.com/embed/1Pi98kyh1Jg?playlist=1Pi98kyh1Jg&loop=1&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop; mute;" allowfullscreen></iframe>
            <div className='overlay'>

                <img src="https://www.picotanks.com/wp-content/uploads/2019/05/PTMM_logo.png"  alt='image of project' className='mainPieceTitle' />
                <ul>
                    <li>
                        <p onClick={()=>{window.open("https://www.youtube.com/watch?v=BmjuDvCMfq8");}}>Watch Trailer</p>
                    </li>
                    <li>
                        <p onClick={()=>{window.open("https://www.picotanks.com");}}>Visit Site</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
