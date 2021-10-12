import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Navbar = React.forwardRef((props, ref) => {
    return (
        <nav id='site-header' ref={ref}>
            <ul>
                <li>
                <Link to={{pathname:'/',
                               state:{scrollpoint:undefined}}}>Home</Link>
                </li>
                <li>
                    <Link to={{pathname:'/',
                               state:{scrollpoint:'Projects'}}}>Projects</Link>
                </li>
                <li>
                <Link to={{pathname:'/',
                               state:{scrollpoint:'Skills'}}}>Skills</Link>
                </li>
            </ul>
        </nav>
    )
})

export default Navbar;
