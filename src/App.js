import React, {Component} from 'react';
import BookShelf from './components/BookShelf/BookShelf'
import SearchBar from './components/SearchBar/SearchBar'
import SortBar from './components/SortBar/SortBar'
import {searchBook}  from './api/ApiWorker'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
            searching_query: '',
            sorting_query: '',
            sorting_order: ''
        };
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleSortingQuery = this.handleSortingQuery.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    handleSearchQuery(query) {
        this.setState({
            searching_query: query
        },() => {this.performSearch()});
    }

    performSearch() {
        const books = searchBook(this.state.searching_query);
        this.setState({
            books: books
        },()=>{});
    }

    handleSortingQuery(query) {
        const {value, order} = query;
        this.setState({
            sorting_query: value,
            sorting_order: order
        });
    }

    render() {
        return (
            <div className="App">
                <div className='upper-bar'>
                    <SearchBar handler={this.handleSearchQuery}/>
                    <SortBar handler={this.handleSortingQuery}/>
                </div>
                <BookShelf books={this.state.books}/>
            </div>
        );
    }
}

export default App;
