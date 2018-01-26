$(document).ready( () => {
  // Get the template data from the HTML
  let template = $('#handlebars-home').html();

  // Gets first 400 letters of a string
  Handlebars.registerHelper('shortText', (text, options) => {
    return text.slice(0, 400);
  });

  // Shows only the first element of images array
  Handlebars.registerHelper('arrayOnlyFirst', (array, options) => {
    return options.fn(array[0]);
  });

  // Shows only the last five elements of an array
  Handlebars.registerHelper('arrayOnlyFive', (array, options) => {
  let ret = '';
  if (array.length < 5) {
    for (let i = array.length - 1; i > -1; i--) {
      ret += options.fn(array[i]);
    }
  }
  else {
    for (let j = array.length - 1; j > array.length - 6; j--) {
      ret += options.fn(array[j]);
    }
  }
  return ret;
  });

  // Gets index of arrays which work without #each
  Handlebars.registerHelper('getIndex', (object, array) => {
    return array.indexOf(object);
  });

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);

  // getting data from json file
  const html = templateScript(contextArticles);

  // Insert the HTML code into the page
  $('#articles').append(html);

  // Request for open weather map
  const key = owm_key;
  const url = `https://api.openweathermap.org/data/2.5/weather?id=6691073&units=metric&lang=de&APPID=${key}`;

  $.ajax(url)
    .done(addWeather)
    .fail( (error) => requestError(error, 'Wetterbericht'));

  function addWeather(data) {
    let htmlString = '';
    if (data.weather[0] && data.main && data.wind) {
      const icon = data.weather[0].icon;
      htmlString = `
        <h4>Das aktuelle Wetter:</h4>
        <img id="weather-icon" src="https://openweathermap.org/img/w/${icon}.png" alt="aktuelles Wetter">
        <p>${data.weather[0].description}</p>
        <p>Temperatur: ${data.main.temp} °C</p>
        <p>Luftdruck: ${data.main.pressure} hPa</p>
        <p>Luftfeuchtigkeit: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/sek</p>
        <p class="attribution">Dieser Wetterbericht wird geliefert von <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a>.</p>
        <p class="attribution">Lizenz: <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International</a></p>`;
    }
    else {
      htmlString = '<p>Es konnten keine aktuellen Wetterdaten geladen werden.</p>';
    }
    $('#weather').append(htmlString);
  }

  function requestError(error, brokenElement) {
    console.log(error);
    $('#weather').append(`Der ${brokenElement} konnte nicht geladen werden!`);
  }
});
