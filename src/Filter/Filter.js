import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            printType: '',
            bookType: ''
        }
    }

    handleSubmit = event => {
        alert(`${this.state.printType}`)
    }

    handlePrintType = event => {
        this.setState({
            printType: event.target.value
        })
    }

    handleBookType = event => {
        this.setState({
            bookType: event.target.value
        })
    }

    render() {
        return (
            <div className='filter'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='printType'>Print Type: </label>
                    <select name='printType' value={this.state.printType} onChange={this.handlePrintType}>
                        <option value='fiction'>Fiction</option>
                        <option value='non fiction'>Non Fiction</option>
                    </select>
                    <label htmlFor='bookType'>Book Type: </label>
                    <select name='bookType' value={this.state.bookType} onChange={this.handleBookType}>
                        <option value='free'>Free</option>
                        <option value='paid'>Paid</option>
                    </select>
                </form>
            </div>
        )
    }
}