import React from 'react';
import ReactDOM from 'react-dom';
import BookInfo from './BookInfo';

it('renders w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
})