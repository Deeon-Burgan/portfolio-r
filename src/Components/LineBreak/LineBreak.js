import React from 'react'
import './LineBreak.scss'

export default function LineBreak(props) {
    return (
        <div className='lineBreak'>
            <div />
            <p>{props.line}</p>
            <div />
        </div>
    )
}
