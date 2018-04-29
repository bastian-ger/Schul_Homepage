$(document).ready( () => {
  // Request for NY Times Books API
  const key = '4e1a6cdf3826470a9ec10ba51e15938e';
  let selection, url;
  let htmlString = '';

  $('#select-bs-list').change( event => {
    selection = event.target.value;
    url = `https://api.nytimes.com/svc/books/v3/lists/current/${selection}.json?api-key=${key}`;

    $.ajax(url)
      .then(addBooks)
      .fail( (error) => requestError(error, selection));
  });

  function addBooks(data) {
    if (htmlString.length > 0) {
      htmlString = '';
      $('#list-children').empty();
    }
    if (data.results && data.results.books && data.results.books.length > 1) {
      htmlString = data.results.books.map( book =>
        `<article class="row mb-3 bg-light">
          <div class="col-sm-9 p-3">
            <h5>Rang: ${book.rank} <small>(Vorwoche: ${book.rank_last_week}</small>)</h5>
            <p>Wochen auf der Liste: ${book.weeks_on_list}</p>
            <h4>Titel: ${book.title}</h4>
            <p>Autor: ${book.author}</p>
            <p>Verlag: ${book.publisher}</p>
            <p>Beschreibung: ${book.description}</p>
          </div>
          <div class="col-sm-3 p-3">
            <img class="img-fluid" src="${book.book_image}" alt="Buchcover">
          </div>
        </article>`).join('');
    }
    else {
      htmlString = '<p>Leider ist die Anfrage fehlgeschlagen.</p>';
    }

    $('#list-children').append(htmlString);
  }

  function requestError(error, brokenItem) {
    $('#list-children').append(`<p>Leider ist die Anzeige der Liste ${brokenItem} fehlgeschlagen.</p>`);
  }
});
