import React from 'react';
import './App.css';
import GoogleBooksAPI from './GoogleBooksAPI';

function App() {
  const defaultProps = {
    searchTerm: 'RWBY After the Fall',
    printType: "books",
    filter: "partial",
    maxResults: 10
  };
  
  const p1 = new Promise(() => {
    GoogleBooksAPI(defaultProps);
  });

  p1.then((input) => {
    console.log(input);
  })

  return (
    <p>Test</p>
  )
}

export default App;
