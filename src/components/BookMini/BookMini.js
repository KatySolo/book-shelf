import React from 'react';
import './BookMini.css';
import {BookVisibilities} from '../../actions';

export default function BookMini(props) {
  return (
    <div className={
            (props.visibilityMode === BookVisibilities.SHOW_ALL) ?
            'mini-container' :
                (props.info.isComplete) ?
                    'mini-container shadowed' : 'mini-container'}>
      <div className='mini-name'>{props.info.name}</div>
      <div className='mini-author'>{props.info.author}</div>
    </div>
  );
}

