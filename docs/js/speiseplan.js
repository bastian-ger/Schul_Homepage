"use strict";$(document).ready(function(){
// Get the template data from the HTML
var e=$("#handlebars-speiseplan").html();
// Shows only the last five elements of an array
Handlebars.registerHelper("arrayOnlyFive",function(e,n){var r="";if(e.length<5)for(var a=e.length-1;-1<a;a--)r+=n.fn(e[a]);else for(var l=e.length-1;l>e.length-6;l--)r+=n.fn(e[l]);return r});
// Compile the template data into a function
var n=Handlebars.compile(e)(contextSpeiseplan);
// getting data from json file
// Insert the HTML code into the page
$("#speiseplan").append(n)});