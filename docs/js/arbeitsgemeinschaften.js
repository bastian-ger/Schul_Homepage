"use strict";$(document).ready(function(){
// get the template from the html
var e=$("#handlebars-clubs").html();
// custom helpers
// turns the number of the day into a string
Handlebars.registerHelper("getDayString",function(e){var a="";switch(e){case 1:a="Montag";break;case 2:a="Dienstag";break;case 3:a="Mittwoch";break;case 4:a="Donnerstag";break;case 5:a="Freitag";break;case 6:a="Samstag";break;case 7:a="Sonntag";break;default:a="Datenfehler"}return a});
// compile the template data into a function
var a=Handlebars.compile(e)(context);
// getting the data from json file
// insert the html code into the page
$("#clubs").append(a)});