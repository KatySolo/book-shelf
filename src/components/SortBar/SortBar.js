import React, {Component} from 'react'
import './SortBar.css'

class SortBar extends Component {
    render() {
        return (
            <div className='sort-container'>
                Сортировать по
                <span className='sorting-option'> имени</span>
                <span className='sorting-option'> году</span>
                <span className='sorting-option'> прочитаному</span>
            </div>
        );
    }
}

export default SortBar
