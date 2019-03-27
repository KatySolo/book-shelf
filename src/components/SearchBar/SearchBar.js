import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setQuery} from '../../actions';


function mapDispatchToProps(dispatch) {
  return {
    setQuery: (query) => dispatch(setQuery(query)),
  };
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {
    return (
      <div className='search-container'>
        <input type='text' placeholder='Поиск по названию'
          value={this.state.query} onChange={(a) => {
            this.setState({
              query: a.target.value,
            }, () => {
              this.props.setQuery(this.state.query);
            });
          }}/>
      </div>
    );
  }
}

const ConnectedSearchingBar = connect(null, mapDispatchToProps)(SearchBar);
export default ConnectedSearchingBar;
