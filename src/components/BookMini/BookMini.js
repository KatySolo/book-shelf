import React from 'react'
import './BookMini.css'

export default function BookMini(props) {
    return (
        <div className='mini-container'>
            <div className='mini-name'>{props.info.name}</div>
            <div className='mini-author'>{props.info.author}</div>
        </div>
    );
}
