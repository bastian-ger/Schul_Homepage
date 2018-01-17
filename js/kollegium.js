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

var context =
{
  teachers: [
    {
      "name": 'Max Mustermann',
      "subjects": ['Deutsch', 'Mathematik'],
      "tasks": ['Jugend forscht', 'Begabtenförderung'],
      "code": 'Mm',
      "consultationHours": 'Donnerstag, dritte Stunde',
      "img": '',
      "email": 'max@schuleXYZ.de'
    },
    {
      "name": 'Hans Mustermann',
      "subjects": ['Englisch', 'Biologie'],
      "tasks": ['Beratungslehrer'],
      "code": 'Hm',
      "consultationHours": 'Freitag, fünfte Stunde',
      "img": 'https://dummyimage.com/600x800/000000/9932CC.jpg',
      "email": 'hans@musterschuleXYZ.de'
    },
    {
      "name": 'John Doe',
      "subjects": ['Spanisch', 'Sport'],
      "tasks": ['Bundesjugendspiele', 'Sponsorenlauf'],
      "code": 'Jd',
      "consultationHours": 'Montag, vierte Stunde',
      "img": 'https://dummyimage.com/600x800/000000/9932CC.jpg',
      "email": 'john@musterschuleXYZ.de'
    },
    {
      "name": 'Maxine Doe',
      "subjects": ['Englisch', 'Russisch'],
      "tasks": ['Begabtenförderung'],
      "code": 'Md',
      "consultationHours": 'Mittwoch, sechste Stunde',
      "img": 'https://dummyimage.com/600x800/000000/9932CC.jpg',
      "email": 'maxine@musterschuleXYZ.de'
    },
    {
      "name": 'Franz Mustermann',
      "subjects": ['Religion', 'Mathematik'],
      "tasks": ['Besinnungstage', 'Känguru der Mathematik'],
      "code": 'Fm',
      "consultationHours": 'Dienstag, zweite Stunde',
      "img": 'https://dummyimage.com/600x800/000000/9932CC.jpg',
      "email": 'franz@musterschuleXYZ.de'
    },
    {
      "name": 'Emil Mustermann',
      "subjects": ['Deutsch', 'Politik'],
      "tasks": ['Begabtenförderung', 'Ausflug nach Berlin'],
      "code": 'Em',
      "consultationHours": 'Freitag, vierte Stunde',
      "img": 'https://dummyimage.com/600x800/000000/9932CC.jpg',
      "email": 'emil@musterschuleXYZ.de'
    }
  ]
}

// getting data from json file
const html = templateScript(context);

// Insert the HTML code into the page
$('#teachers').append(html);
