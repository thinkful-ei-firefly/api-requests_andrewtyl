import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import GoogleBooksAPI from './GoogleBooksAPI';
import ResultItem from './ResultItem';

class App extends Component {
  state = {
    results: []
  };

  searchBooks = (e) => {
    e.preventDefault();
    console.log("submit button pressed");
    const searchQuery = e.target["search-query"].value;
    //const printType = e.target["print-type"].value;
    //const filter = e.target["book-type"].value;
    const searchElements = {
      searchTerm: searchQuery,
      filter: 'partial',
      maxResults: 10,
      printType: 'all'
    }
    GoogleBooksAPI(searchElements)
      .then(data => {
        const results = data.map(item => {
          return (
            <ResultItem {...item} />
          )
        })
        this.setState({results});
      })

  }

  render() {
    return (
      <div>
        <Header onSubmit={this.searchBooks} />
        <div className="results-list">
          {this.state.results}
        </div>
      </div>
    )
  }
}

export default App;
