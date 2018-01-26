$(document).ready( () => {
  // Get the template data from the HTML
  let template = $('#handlebars-speiseplan').html();

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

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);

  // getting data from json file
  const html = templateScript(contextSpeiseplan);

  // Insert the HTML code into the page
  $('#speiseplan').append(html);
});
