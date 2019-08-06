import React from 'react';

function Header(props) {
  return (
    <header>
        <div id='title'><h1>Google Book Search</h1></div>
        <form onSubmit={props.onSubmit}><div id='search'>
            <label htmlFor="search-query">Search</label>
            <input type="text" name="search-query" id="search-field"></input>
            <button type="submit">Search</button>
        </div>
        <div id='filters'>
            <div id='print-type'>
                <label htmlFor="print-type">Print Type</label>
                <select name="print-type">
                    <option value="all">All</option>
                </select>
            </div>
            <div id="book-type">
            <label htmlFor="book-type">Book Type</label>
                <select name="book-type">
                    <option value="no-filter">No Filter</option>
                </select>
            </div>
        </div></form>
    </header>  
  )   
}

export default Header