import React, {Component} from 'react';
import BookShelf from './components/BookShelf/BookShelf'
import SearchBar from './components/SearchBar/SearchBar'
import SortBar from './components/SortBar/SortBar'
import {searchBook, sortBooks}  from './api/ApiWorker'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
            searching_query: '',
            sorting_query: '',
            desc_order: ''
        };
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleSortingQuery = this.handleSortingQuery.bind(this);
        this.performSearch = this.performSearch.bind(this);
        this.performSort = this.performSort.bind(this);
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
        const {field, isDesc, isComplete} = query;
        this.setState({
            sorting_query: field,
            desc_order: isDesc
        },()=>{this.performSort(isComplete)});
    }

    performSort(isComplete){
        const books = sortBooks(this.state.sorting_query, this.state.desc_order, isComplete);
        this.setState({
            books: books
        },()=>{});
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
