"use strict";$(document).ready(function(){
// Request for NY Times Books API
var n=nyt_key,s=void 0,i=void 0,t="";function l(e){0<t.length&&(t="",$("#list-children").empty()),t=e.results&&e.results.books&&1<e.results.books.length?e.results.books.map(function(e){return'<article class="row mb-3 bg-light">\n          <div class="col-sm-9 p-3">\n            <h5>Rang: '+e.rank+" <small>(Vorwoche: "+e.rank_last_week+"</small>)</h5>\n            <p>Wochen auf der Liste: "+e.weeks_on_list+"</p>\n            <h4>Titel: "+e.title+"</h4>\n            <p>Autor: "+e.author+"</p>\n            <p>Verlag: "+e.publisher+"</p>\n            <p>Beschreibung: "+e.description+'</p>\n          </div>\n          <div class="col-sm-3 p-3">\n            <img class="img-fluid" src="'+e.book_image+'" alt="Buchcover">\n          </div>\n        </article>'}).join(""):"<p>Leider ist die Anfrage fehlgeschlagen.</p>",$("#list-children").append(t)}$("#select-bs-list").change(function(e){s=e.target.value,i="http://api.nytimes.com/svc/books/v3/lists/current/"+s+".json?api-key="+n,$.ajax(i).then(l).fail(function(e){return n=s,void $("#list-children").append("<p>Leider ist die Anzeige der Liste "+n+" fehlgeschlagen.</p>");var n})})});