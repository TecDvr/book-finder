import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';

it('renders w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter />, div);
    ReactDOM.unmountComponentAtNode(div);
})