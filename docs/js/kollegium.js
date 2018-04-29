"use strict";$(document).ready(function(){
// Get the template data from the HTML
var e=$("#handlebars-demo").html();
// Custom Helper
Handlebars.registerHelper("ifFifth",function(e,r){if(0===e||(e+1)%5==0)return r.fn(void 0)}),
// Custom Helper
Handlebars.registerHelper("joinStrings",function(e,r){return e.join(", ")}),
// Custom Helper
Handlebars.registerHelper("ifFourthOrEnd",function(e,r,n){if((e+1)%4==0||e===r.length-1)return n.fn(void 0)});
// Compile the template data into a function
var r=Handlebars.compile(e)(context);
// getting data from json file
// Insert the HTML code into the page
$("#teachers").append(r)});