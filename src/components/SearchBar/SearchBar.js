import React, {Component} from 'react'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            searching_query: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(value) {
        this.setState({searching_query: value.target.value});
    }

    render() {
        return (
            <div className='search-container'>
                <input type='text' placeholder='Введите название'
                       value={this.props.searchingQuery} onChange={this.handleInput}/>
            </div>
        );
    }
}

export default SearchBar
