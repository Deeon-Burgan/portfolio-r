import React from 'react'
import SkillsGroup from './group/skillsGroup'
import './Skills.scss'

const Skills = React.forwardRef((props, ref) => {

    const skills={
        'Front-End':{
            "Front-End":[
                {name: 'HTML', icon:'https://image.flaticon.com/icons/png/128/1051/1051277.png', color:'#ffdfc2'},
                {name: 'CSS', icon:'https://image.flaticon.com/icons/png/128/732/732190.png', color:'#d9fcff'},
                {name: 'SCSS', icon:'https://image.flaticon.com/icons/png/128/919/919831.png', color:'#ffd9f6'},
                {name: 'JavaScript', icon:'https://image.flaticon.com/icons/png/128/541/541509.png', color:'#feffd9'},
                {name: 'React.JS', icon:'https://image.flaticon.com/icons/png/128/1126/1126012.png', color:'#d9fff2'}
            ]
        },
        'Back-End':{
            "Back-End":[
                {name: 'Rails', icon:'https://img.icons8.com/windows/72/ruby-on-rails.png', color:'#ffd9d9'},
                {name: 'postgreSQL', icon:'https://img.icons8.com/color/48/000000/postgreesql.png', color:'#d9efff'}
            ]
        },
        'Games':{
            "Games":[
                {name: 'Unity', icon:'https://img.icons8.com/ios-filled/2x/unity.png', color:'#9da5ab'},
                {name: 'C#', icon:'https://image.flaticon.com/icons/png/128/381/381704.png', color:'#efe1fa'},
                {name: 'C++', icon:'https://image.flaticon.com/icons/png/128/74/74897.png', color:'#c0c7cc'},
                {name: 'JavaScript', icon:'https://image.flaticon.com/icons/png/128/541/541509.png', color:'#feffd9'}
            ]
        },
        'Other':{
            "Other":[
                {name: 'Excel', icon:'https://image.flaticon.com/icons/png/128/732/732220.png', color:'#d2facf'},
                {name: 'Python', icon:'https://img-premium.flaticon.com/png/128/3098/premium/3098090.png?token=exp=1630211788~hmac=96e5ca65a802d6b87ba381704320d623', color:'#faf3cf'}
            ]
        }
    }

    return (
        <div className='skills' ref={ref}>
            <SkillsGroup skills={skills['Front-End']}/>
            <SkillsGroup skills={skills['Back-End']}/>
            <SkillsGroup skills={skills['Games']}/>
            <SkillsGroup skills={skills['Other']}/>
        </div>
    )
})

export default Skills;
