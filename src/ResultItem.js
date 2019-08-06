import React from 'react';

//props keys include id, author, title, printType, image, desc
//API not configured for sales data yet

function ResultItem(props) {
    if (false){ //sales info exists
        //return result with sales info
    }
    else {
        //sales data not available
        return (
            <li id={props.id}>
                <h3 className="book-title">{props.title}</h3>
                <p className="author">{props.author}</p>
                <p className="price">Sale Information Not Available</p>
                <p className="desc">{props.desc}</p>
                <img src={props.image} alt={props.title} ></img>
            </li>
        )}
}

export default ResultItem