import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';

import BookList from './BookList/BookList';

export default class App extends React.Component {

  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchBar />
        <BookList />
      </main>
    );
  }
}