'use strict';

$(document).ready(function () {
  // Request for NY Times Books API
  var key = nyt_key;
  var selection = void 0,
      url = void 0;
  var htmlString = '';

  $('#select-bs-list').change(function (event) {
    selection = event.target.value;
    url = 'http://api.nytimes.com/svc/books/v3/lists/current/' + selection + '.json?api-key=' + key;

    $.ajax(url).then(addBooks).fail(function (error) {
      return requestError(error, selection);
    });
  });

  function addBooks(data) {
    if (htmlString.length > 0) {
      htmlString = '';
      $('#list-children').empty();
    }
    if (data.results && data.results.books && data.results.books.length > 1) {
      htmlString = data.results.books.map(function (book) {
        return '<article class="row mb-3 bg-light">\n          <div class="col-sm-9 p-3">\n            <h5>Rang: ' + book.rank + ' <small>(Vorwoche: ' + book.rank_last_week + '</small>)</h5>\n            <p>Wochen auf der Liste: ' + book.weeks_on_list + '</p>\n            <h4>Titel: ' + book.title + '</h4>\n            <p>Autor: ' + book.author + '</p>\n            <p>Verlag: ' + book.publisher + '</p>\n            <p>Beschreibung: ' + book.description + '</p>\n          </div>\n          <div class="col-sm-3 p-3">\n            <img class="img-fluid" src="' + book.book_image + '" alt="Buchcover">\n          </div>\n        </article>';
      }).join('');
    } else {
      htmlString = '<p>Leider ist die Anfrage fehlgeschlagen.</p>';
    }

    $('#list-children').append(htmlString);
  }

  function requestError(error, brokenItem) {
    $('#list-children').append('<p>Leider ist die Anzeige der Liste ' + brokenItem + ' fehlgeschlagen.</p>');
  }
});
