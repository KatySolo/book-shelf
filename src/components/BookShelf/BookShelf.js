import React from 'react'
import BookMini from '../BookMini/BookMini'
import './BookShelf.css'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    console.log(state.books);
    return {books: state.books}
};
//todo bookshelf not changing a state
const BookShelf = (props) => (
        <div className="shelf-container">
            {console.log(props)}
            {props.books.length === 0 && (
                <div>Книги не найдены</div>
            )}
        {props.books.map(function (item, index) {
            return <BookMini info={item} key={index}/>
        })}
        </div>
    );

export default connect(mapStateToProps)(BookShelf);
