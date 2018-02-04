$(document).ready( () => {
  // get the template from the html
  let template = $('#handlebars-clubs').html();

  // custom helpers
  // turns the number of the day into a string
  Handlebars.registerHelper('getDayString', (day) => {
    let dayOfWeek = '';
    switch(day) {
      case 1:
        dayOfWeek = 'Montag';
        break;
      case 2:
        dayOfWeek = 'Dienstag';
        break;
      case 3:
        dayOfWeek = 'Mittwoch';
        break;
      case 4:
        dayOfWeek = 'Donnerstag';
        break;
      case 5:
        dayOfWeek = 'Freitag';
        break;
      case 6:
        dayOfWeek = 'Samstag';
        break;
      case 7:
        dayOfWeek = 'Sonntag';
        break;
      default:
        dayOfWeek = 'Datenfehler';
    }
    return dayOfWeek;
  });

  // compile the template data into a function
  let templateScript = Handlebars.compile(template);
  // getting the data from json file
  const html = templateScript(context);

  // insert the html code into the page
  $('#clubs').append(html);
});
