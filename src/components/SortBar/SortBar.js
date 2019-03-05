import React, {Component} from 'react'
import './SortBar.css'

class SortBar extends Component {
    constructor() {
        super();
        this.state = {
            field: 'name',
            isDesc: true,
            isComplete: false
        };
    }

    render() {
        return (
            <div className='sort-container'>
                Сортировать по
                <span className='sorting-option' onClick={() => {
                    this.setState({
                            field: 'name',
                            isDesc: !this.state.isDesc,
                            isComplete: false
                        },
                        () => {
                            this.props.handler(this.state)
                        })
                }}> имени
                    {this.state.field === 'name' && !this.state.isDesc && (' ↑')}
                    {this.state.field === 'name' && this.state.isDesc && (' ↓')}
                </span>
                <span className='sorting-option' onClick={() => {
                    this.setState({
                            field: 'author',
                            isDesc: !this.state.isDesc,
                            isComplete: false
                        },
                        () => {
                            this.props.handler(this.state)
                        })
                }}> автору {this.state.field === 'author' && !this.state.isDesc && ('↑')}
                {this.state.field === 'author' && this.state.isDesc && ('↓')}
                </span>
                <div className='sorting-option completed' onClick={() => {
                    this.setState({
                            field: 'complete',
                            isDesc: !this.state.isDesc,
                            isComplete: !this.state.isComplete
                        },
                        () => {
                            this.props.handler(this.state)
                        })
                }}> Показать
                    {this.state.field !== 'complete' && !this.state.isComplete && (' непрочитанные')}
                    {this.state.field !== 'complete' && this.state.isComplete && (' все')}
                    {this.state.field === 'complete' && !this.state.isComplete && (' непрочитанные')}
                    {this.state.field === 'complete' && this.state.isComplete && (' все')}
                </div>
            </div>
        );
    }
}

export default SortBar
