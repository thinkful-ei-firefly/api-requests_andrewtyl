function GoogleBooksAPI(props) {
  console.log(props);
  let baseURL = 'https://www.googleapis.com/books/v1/volumes?';
  let apiKey = 'AIzaSyAOUy-bylP36rGl78qLJ7J_kxbI-taPDZI';
  let searchTerm = props.searchTerm.split(' ').join('+');
  console.log(searchTerm);
  let params = `q=${searchTerm}&filter=${props.filter}&printType=${props.printType}&key=${apiKey}&maxResults=${props.maxResults}`;
  console.log(baseURL + params);

  let output = [];

  fetch(baseURL + params)
    .then(results => {
        console.log(results);
        return results.json();
    })
    .then(data => {
        console.log(data.items);
        for (let i = 0; i < props.maxResults; i++){
            let thisResult = data.items[i];
            console.log(thisResult);

            output[i] = {
                id: thisResult.id,
                author: thisResult.volumeInfo.authors[0],
                title: thisResult.volumeInfo.title,
                printType: thisResult.volumeInfo.printType,
                image: thisResult.volumeInfo.imageLinks.thumbnail,
                desc: thisResult.volumeInfo.description
            };
        }
        console.log(output);
        return output;
    })
};

export default GoogleBooksAPI;
