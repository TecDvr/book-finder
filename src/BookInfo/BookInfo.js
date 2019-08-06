import React from 'react';
import './BookInfo.css';

export default class BookInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>Book Title</h2>
                <div className='bookInformation'>
                    <img src='#' alt='Book Cover'/>
                    <section>
                        <p>Author</p>
                        <p>Price</p>
                        <p>Description</p>
                    </section>
                </div>
            </div>
        )
    }
}   