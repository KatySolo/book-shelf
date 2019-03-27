import React, {Component} from 'react';
import './AddBar.css';

class AddBar extends Component {
  constructor() {
    super();
    this.state = {
      linkIsClicked: true,
    };
  }

  render() {
    return (
      <div className='add-container'>
        {(this.state.linkIsClicked) ? (
                        <div className='add-form'>
                          <div className='hide-label' onClick={() => this.setState({linkIsClicked: false}
                          )}>
                                Hide
                          </div>
                          <div className='mini-container add-input'>
                            <div className='mini-name name-input-container'>
                              <input type='text' placeholder='Title' className='title-input'/>
                            </div>
                            <div className='mini-author author-input-container'>
                              <input type='text' placeholder='Author' className='author-input'/>
                            </div>
                          </div>
                          <div className='additional-container'>
                            <div className='completed-container'>
                              <span className='completed-label'>Completed </span>
                              <input type='checkbox' className='completed-checkbox'/>
                            </div>
                            <button className='add-button'>Add new book</button>
                          </div>
                        </div>) :
                    (
                        <div className='add-label' onClick={() => this.setState({linkIsClicked: true})}>Add a new
                            book</div>
                    )}
      </div>
    );
  }
}

export default AddBar;


// check if isCLicked
// change on click
// add close link
