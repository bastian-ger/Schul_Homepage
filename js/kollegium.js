$(document).ready( () => {
  // Get the template data from the HTML
  let template = $('#handlebars-demo').html();

  // Custom Helper
  Handlebars.registerHelper('ifFifth', (index, options) => {
    if ((index === 0 || (index + 1) % 5 === 0)) {
       return options.fn(this);
      }
  });

  // Custom Helper
  Handlebars.registerHelper('joinStrings', (array, options) => {
    return array.join(', ');
  });

  // Custom Helper
  Handlebars.registerHelper('ifFourthOrEnd', (index, array, options) => {
    if (((index + 1) % 4 === 0) || (index === array.length -1)) {
      return options.fn(this);
    }
  });

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);

  // getting data from json file
  const html = templateScript(context);

  // Insert the HTML code into the page
  $('#teachers').append(html);
});
