import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList';

it('renders w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
    ReactDOM.unmountComponentAtNode(div);
})