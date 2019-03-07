import React from 'react'
import './Book.css'

export default function Book(props) {
    return (
        <div className='book-container'>
            <div className='book-name'>{props.info.name}</div>
            <div className='info-row'>
                <span className='book-year'>{props.info.year}</span>
                <span className='book-author'>{props.info.author}</span>
            </div>
            <div className='book-description'>Description: {props.info.description}</div>
            <div className='book-complete'>Book is complete: {props.info.visibility}</div>
        </div>
    );
}
