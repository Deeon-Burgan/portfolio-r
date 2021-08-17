import React from 'react'
import './ImageBreak.scss'

export default function ImageBreak(props) {
    return (
        <div className='imageBreak'>
            <img src={props.image}/>
        </div>
    )
}
