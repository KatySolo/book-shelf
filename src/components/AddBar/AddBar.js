import React, {Component} from 'react';
import './AddBar.css';
import {addBook} from '../../actions'
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch) {
    return {
        addBook: book => dispatch(addBook(book))
    }
}

class AddBar extends Component {
    constructor() {
        super();
        this.state = {
            linkIsClicked: false,
            name: '',
            author: '',
            isComplete: false
        };
    }

    render() {
        return (
            <div className='add-container'>
                <div className={(this.state.linkIsClicked) ? 'hide-label' : 'add-label'}
                     onClick = {() => this.setState({linkIsClicked: !this.state.linkIsClicked})}>
                    {(this.state.linkIsClicked) ? 'Hide' : 'Add Book'}
                </div>
                {this.state.linkIsClicked && (
                        <div className='add-form'>
                            <div className='mini-container add-input'>
                                <div className='mini-name name-input-container'>
                                    <input type='text' placeholder='Title' className='title-input'
                                           onChange={(e) => this.setState({name: e.target.value})}/>
                                </div>
                                <div className='mini-author author-input-container'>
                                    <input type='text' placeholder='Author' className='author-input'
                                           onChange={(e) => this.setState({author: e.target.value})}/>
                                </div>
                            </div>
                            <div className='additional-container'>
                                <div className='completed-container'>
                                    <span className='completed-label'>Completed </span>
                                    <input type='checkbox' className='completed-checkbox'
                                           onChange={() => this.setState({isComplete: !this.state.isComplete})}/>
                                </div>
                                <button className='add-button' onClick={() => this.props.addBook({
                                    name: this.state.name,
                                    year: 0,
                                    author: this.state.author,
                                    description: '',
                                    isComplete: this.state.isComplete
                                })}>Add new book
                                </button>
                            </div>
                        </div>)}
            </div>
        );
    }
}

const ConnectedAddBar = connect(null, mapDispatchToProps)(AddBar);

export default ConnectedAddBar;


// check if isCLicked
// change on click
// add close link
