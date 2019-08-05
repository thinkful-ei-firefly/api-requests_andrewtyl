import React, {Component} from 'react';
import './App.css';
import GoogleBooksAPI from './GoogleBooksAPI';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
      }}

    const defaultProps = {
      searchTerm: 'RWBY After the Fall',
      printType: "books",
      filter: "partial",
      maxResults: 10
    };

    GoogleBooksAPI(defaultProps)
    .then(data => {
      console.log(data);
    });
      
      return (
        <div>
          <p>Test</p>
        </div>
      );

export default App;
