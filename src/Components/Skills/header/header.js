import React from 'react'
import './header.scss'

export default function Header(props) {
    return (
        <div className='skillsHeader'>
            <h3>{props.text}</h3>
        </div>
    )
}
