import React, {Component} from 'react';
import BookShelf from './components/BookShelf/BookShelf'
// import SearchBar from './components/SearchBar/SearchBar'
import SortBar from './components/SortBar/SortBar'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='upper-bar'>
                    {/*<SearchBar />*/}
                    <SortBar />
                </div>
                <BookShelf />
            </div>
        );
    }
}

export default App;
