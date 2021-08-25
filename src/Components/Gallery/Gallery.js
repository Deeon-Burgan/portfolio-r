import React from 'react'
import './Gallery.scss'

export default function Gallery() {

    const games = [
        'https://eildonlakemotel.netlify.app/static/media/bannerLogo.02a11922.png',
        'https://www.picotanks.com/wp-content/uploads/2019/05/PTMM_logo.png',
        'https://static.wixstatic.com/media/b5ed1f_fc193a273c2c41c791c76288cc17fb15~mv2_d_8000_4500_s_4_2.png/v1/fill/w_307,h_306,q_90/b5ed1f_fc193a273c2c41c791c76288cc17fb15~mv2_d_8000_4500_s_4_2.webp',
        'https://static.wixstatic.com/media/b5ed1f_00862955fb404c398d7afd4734950167~mv2.png/v1/fill/w_307,h_306,fp_0.51_0.61,q_90/b5ed1f_00862955fb404c398d7afd4734950167~mv2.webp',
        'https://lh3.googleusercontent.com/FJULnXYxJ_Vbg0ITDswhiFLrAuuqLrGtEPbZgCGcUiIr3SAvB4rnpO8FGdXBNDP6mw',
        'https://dd-stonks.herokuapp.com/assets/logo-f3d07150d5c60f03e002484f3a3e99b241725d3077386ea5a44a5059a3929155.png',
        'https://i.ibb.co/N74L8m6/Untitledoasfaoifsn.jpg',
        'https://static.wixstatic.com/media/b5ed1f_6c554ab109084cfbb900d33a8c08a3c3~mv2.png/v1/fill/w_548,h_385,al_c,q_85,usm_0.66_1.00_0.01/RockCandyRacer_PNG.webp'
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
            <p>More</p>
        </div>
            </div>
    )
}
