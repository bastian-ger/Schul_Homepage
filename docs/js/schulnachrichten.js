"use strict";$(document).ready(function(){
// Get the template data from the HTML
var e=$("#handlebars-schulnachrichten").html();
// Gets first 400 letters of a string
Handlebars.registerHelper("shortText",function(e,r){return e.slice(0,400)}),
// Shows only the first element of images array
Handlebars.registerHelper("arrayOnlyFirst",function(e,r){return r.fn(e[0])}),
// Shows only the last five elements of an array
Handlebars.registerHelper("arrayOnlyFifty",function(e,r){var n="";if(e.length<50)for(var t=e.length-1;-1<t;t--)n+=r.fn(e[t]);else for(var a=e.length-1;a>e.length-51;a--)n+=r.fn(e[a]);return n}),
// Gets index of arrays which work without #each
Handlebars.registerHelper("getIndex",function(e,r){return r.indexOf(e)});
// Compile the template data into a function
var r=Handlebars.compile(e)(contextArticles);
// getting data from json file
// Insert the HTML code into the page
$("#articles-many").append(r)});