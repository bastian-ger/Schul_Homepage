"use strict";$(document).ready(function(){
// Get the template data from the HTML
var e=$("#handlebars-home").html();
// Gets first 400 letters of a string
Handlebars.registerHelper("shortText",function(e,t){return e.slice(0,400)}),
// Shows only the first element of images array
Handlebars.registerHelper("arrayOnlyFirst",function(e,t){return t.fn(e[0])}),
// Shows only the last five elements of an array
Handlebars.registerHelper("arrayOnlyFive",function(e,t){var r="";if(e.length<5)for(var n=e.length-1;-1<n;n--)r+=t.fn(e[n]);else for(var a=e.length-1;a>e.length-6;a--)r+=t.fn(e[a]);return r}),
// Gets index of arrays which work without #each
Handlebars.registerHelper("getIndex",function(e,t){return t.indexOf(e)});
// Compile the template data into a function
var t=Handlebars.compile(e)(contextArticles);
// getting data from json file
// Insert the HTML code into the page
$("#articles").append(t);$.ajax("https://api.openweathermap.org/data/2.5/weather?id=6691073&units=metric&lang=de&APPID=9759177ff596f4a5d9be5bdedc97fd4e").done(function(e){var t="";if(e.weather[0]&&e.main&&e.wind){var r=e.weather[0].icon;t='\n        <h4>Das aktuelle Wetter:</h4>\n        <img id="weather-icon" src="https://openweathermap.org/img/w/'+r+'.png" alt="aktuelles Wetter">\n        <p>'+e.weather[0].description+"</p>\n        <p>Temperatur: "+e.main.temp+" °C</p>\n        <p>Luftdruck: "+e.main.pressure+" hPa</p>\n        <p>Luftfeuchtigkeit: "+e.main.humidity+" %</p>\n        <p>Wind Speed: "+e.wind.speed+' m/sek</p>\n        <p class="attribution">Dieser Wetterbericht wird geliefert von <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a>.</p>\n        <p class="attribution">Lizenz: <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International</a></p>'}else t="<p>Es konnten keine aktuellen Wetterdaten geladen werden.</p>";$("#weather").append(t)}).fail(function(e){return t="Wetterbericht",void $("#weather").append("Der "+t+" konnte nicht geladen werden!");var t})});