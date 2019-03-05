import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching_query: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(value) {
        this.setState({searching_query: value.target.value}, this.props.handler(value.target.value));
    }

    render() {
        return (
            <div className='search-container'>
                <input type='text' placeholder='Введите название'
                       value={this.state.searching_query} onChange={this.handleInput}/>
            </div>
        );
    }
}

export default SearchBar
