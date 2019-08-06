import React from 'react';
import './SearchBar.css';
import Filter from '../Filter/Filter';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const book = this.state
        console.log(book);
    }

    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <div className='searchBar'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='search'>Search: </label>
                    <input 
                        type='text' 
                        name='search' 
                        id='search' 
                        placeholder='Book Subject'
                        value={this.state.search}
                        onChange={this.handleInputChange}>
                    </input>
                    <button type='submit'>Search</button>
                </form>
                <Filter search={this.state.search}/>
            </div>
        )
    }
}

