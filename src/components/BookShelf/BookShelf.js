import React from 'react'
import BookMini from '../BookMini/BookMini'
import './BookShelf.css'

export default function BookShelf(props){
    return (
        <div className="shelf-container">
            {props.books.length === 0 && (
                <div>Книги не найдены</div>
            )}
        {props.books.map(function (item, index) {
            return <BookMini info={item} key={index}/>
        })}
        </div>
    );
}
