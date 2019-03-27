import React, {Component} from 'react';
import {
  setSortingField,
  setSortingOrder,
  setCompleteVisibility,
  BookVisibilities,
  OrderOptions,
  SortingOptions,
} from '../../actions';
import './SortBar.css';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    setSortField: (field) => dispatch(setSortingField(field)),
    setSortOrder: (order) => dispatch(setSortingOrder(order)),
    setCompleteVisibility: (visibility) =>
      dispatch(setCompleteVisibility(visibility)),
  };
}

class SortBar extends Component {
  constructor() {
    super();
    this.state = {
      field: SortingOptions.BY_NAME,
      order: OrderOptions.DESC,
      visibility: BookVisibilities.SHOW_ALL,
    };
  }

  render() {
    return (
      <div className='sort-container'>
                Сортировать по
        <span className='sorting-option' onClick={() => {
          this.setState({
            field: SortingOptions.BY_NAME,
            order: (this.state.order === OrderOptions.DESC) ?
                            OrderOptions.ASC : OrderOptions.DESC,
            visibility: this.state.visibility,
          }, () => {
            this.props.setSortField(this.state.field);
            this.props.setSortOrder(this.state.order);
          });
        }}> имени
          {this.state.field === SortingOptions.BY_NAME &&
          this.state.order === OrderOptions.ASC && (' ↑')}
          {this.state.field === SortingOptions.BY_NAME &&
          this.state.order === OrderOptions.DESC && (' ↓')}
        </span>

        <span className='sorting-option' onClick={() => {
          this.setState({
            field: SortingOptions.BY_AUTHOR,
            order: (this.state.order === OrderOptions.DESC) ?
                            OrderOptions.ASC : OrderOptions.DESC,
            visibility: this.state.visibility,
          }, () => {
            this.props.setSortField(this.state.field);
            this.props.setSortOrder(this.state.order);
          });
        }}> автору
          {this.state.field === SortingOptions.BY_AUTHOR &&
          this.state.order === OrderOptions.ASC && (' ↑')}
          {this.state.field === SortingOptions.BY_AUTHOR &&
          this.state.order === OrderOptions.DESC && (' ↓')}
        </span>

        <div className='sorting-option completed' onClick={() => {
          this.setState({
            visibility: (this.state.visibility === BookVisibilities.SHOW_ALL) ?
                            BookVisibilities.SHOW_COMPLETED :
                BookVisibilities.SHOW_ALL,
          }, () => {
            this.props.setCompleteVisibility(this.state.visibility);
          });
        }}> Показать
          {this.state.field !== SortingOptions.BY_COMPLETED &&
                    this.state.visibility === BookVisibilities.SHOW_ALL
          && (' непрочитанные')}
          {this.state.field !== SortingOptions.BY_COMPLETED &&
                    this.state.visibility === BookVisibilities.SHOW_COMPLETED
          && (' все')}
          {this.state.field === SortingOptions.BY_COMPLETED &&
                    this.state.visibility === BookVisibilities.SHOW_ALL
          && (' непрочитанные')}
          {this.state.field === SortingOptions.BY_COMPLETED &&
                    this.state.visibility === BookVisibilities.SHOW_COMPLETED
          && (' все')}
        </div>
        <div className='sorting-option reset' onClick={() => {
          this.setState({
            field: SortingOptions.BY_NAME,
            order: OrderOptions.DESC,
            visibility: BookVisibilities.SHOW_ALL,
          }, () => {
            this.props.setSortField(SortingOptions.BY_NAME);
            this.props.setSortOrder(OrderOptions.DESC);
            this.props.setCompleteVisibility(BookVisibilities.SHOW_ALL);
            console.log(this.state.field, this.state.order);
          });
        }}>Сбросить
        </div>
      </div>
    );
  }
}

const SortingBar = connect(null, mapDispatchToProps)(SortBar);
export default SortingBar;

// todo reset button acting weird (second tap reverse)
