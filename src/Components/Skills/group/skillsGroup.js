import React from 'react'
import './skillsGroup.scss'
import Header from '../header/header'


export default function SkillsGroup(props) {

    const objectName = Object.keys(props.skills)[0];
    const skills = props.skills[objectName];


    return (
        <div className='skillsGroup'>
            <Header text={objectName} />
            <div className='skillsContainer'>
                {
                    skills.map((skill) => {
                        return (
                            <div className='skill' style={{background:skill.color}}>
                                <p>{skill.name}</p>
                                <img src={skill.icon}  alt='image of project'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
