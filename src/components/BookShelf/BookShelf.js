import React from 'react'
import BookMini from '../BookMini/BookMini'
import './BookShelf.css'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {books: state.books}
};

const BookShelf = ({books}) => (
        <div className="shelf-container">
            {books.length === 0 && (
                <div>Книги не найдены</div>
            )}
        {books.map(function (item, index) {
            return <BookMini info={item} key={index}/>
        })}
        </div>
    );

export default connect(mapStateToProps)(BookShelf);
