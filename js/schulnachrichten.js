$(document).ready( () => {
  // Get the template data from the HTML
  let template = $('#handlebars-schulnachrichten').html();

  // Gets first 400 letters of a string
  Handlebars.registerHelper('shortText', (text, options) => {
    return text.slice(0, 400);
  });

  // Shows only the first element of images array
  Handlebars.registerHelper('arrayOnlyFirst', (array, options) => {
    return options.fn(array[0]);
  });

  // Shows only the last five elements of an array
  Handlebars.registerHelper('arrayOnlyFifty', (array, options) => {
  let ret = "";
  if (array.length < 50) {
    for (let i = array.length - 1; i > -1; i--) {
      ret += options.fn(array[i]);
    }
  }
  else {
    for (let j = array.length - 1; j > array.length - 51; j--) {
      ret += options.fn(array[j]);
    }
  }
  return ret;
  });

  // Gets index of arrays which work without #each
  Handlebars.registerHelper('getIndex', (object, array) => {
    return array.indexOf(object);
  })

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);

  // getting data from json file
  const html = templateScript(contextArticles);

  // Insert the HTML code into the page
  $('#articles-many').append(html);
});
