const articles = [
  {
    date: 'January 7, 2018 13:10:00',
    hl: 'Wir heißen unsere neuen Schüler willkommen!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, excepturi ut, qui dolorum' +
      'totam, eaque exercitationem recusandae iure beatae odit possimus perspiciatis quod assumenda animi' +
      'autem tempora, maxime est hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente' +
      'maxime suscipit totam quibusdam aperiam officia, fugiat deleniti ut consectetur a neque repudiandae' +
      'cupiditate, porro aliquam. Recusandae, ratione, illum. Saepe, earum.',
    img: 'https://dummyimage.com/800x450/000000/0011ff.jpg',
    imgAlt: 'Platzhalter',
    imgCaption: 'Unsere neuen Schüler.',
    url: '#'
  },
  {
    date: 'January 7, 2018 13:16:00',
    hl: 'Wir programmieren eine neue Webseite',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, excepturi ut, qui dolorum' +
      'totam, eaque exercitationem recusandae iure beatae odit possimus perspiciatis quod assumenda animi' +
      'autem tempora, maxime est hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente' +
      'maxime suscipit totam quibusdam aperiam officia, fugiat deleniti ut consectetur a neque repudiandae' +
      'cupiditate, porro aliquam. Recusandae, ratione, illum. Saepe, earum.',
    img: 'https://dummyimage.com/800x450/000000/FF69B4.jpg',
    imgAlt: 'Platzhalter',
    imgCaption: 'Unsere neue Website entsteht.',
    url: '#'
  },
  {
    date: 'January 9, 2018 16:59:00',
    hl: 'Die Webseite kommt voran',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, excepturi ut, qui dolorum' +
      'totam, eaque exercitationem recusandae iure beatae odit possimus perspiciatis quod assumenda animi' +
      'autem tempora, maxime est hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente' +
      'maxime suscipit totam quibusdam aperiam officia, fugiat deleniti ut consectetur a neque repudiandae' +
      'cupiditate, porro aliquam. Recusandae, ratione, illum. Saepe, earum.',
    img: 'https://dummyimage.com/800x450/000000/FF69B4.jpg',
    imgAlt: 'Platzhalter',
    imgCaption: 'Das sieht schon ganz toll aus.',
    url: '#'
  },
  {
    date: 'January 9, 2018 17:02:00',
    hl: 'Neuer Physikraum eingeweiht',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, excepturi ut, qui dolorum' +
      'totam, eaque exercitationem recusandae iure beatae odit possimus perspiciatis quod assumenda animi' +
      'autem tempora, maxime est hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente' +
      'maxime suscipit totam quibusdam aperiam officia, fugiat deleniti ut consectetur a neque repudiandae' +
      'cupiditate, porro aliquam. Recusandae, ratione, illum. Saepe, earum.',
    img: 'https://dummyimage.com/800x450/000000/FF69B4.jpg',
    imgAlt: 'Platzhalter',
    imgCaption: 'Der neue Physikraum ist endlich fertig.',
    url: '#'
  },
  {
    date: 'January 9, 2018 17:03:00',
    hl: 'Unser Schulhof wird schöner',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, excepturi ut, qui dolorum' +
      'totam, eaque exercitationem recusandae iure beatae odit possimus perspiciatis quod assumenda animi' +
      'autem tempora, maxime est hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente' +
      'maxime suscipit totam quibusdam aperiam officia, fugiat deleniti ut consectetur a neque repudiandae' +
      'cupiditate, porro aliquam. Recusandae, ratione, illum. Saepe, earum.',
    img: 'https://dummyimage.com/800x450/000000/FF69B4.jpg',
    imgAlt: 'Platzhalter',
    imgCaption: 'Der Schulhof hat neue Bänke.',
    url: '#'
  },
  {
    date: 'January 9, 2018 17:05:00',
    hl: 'Grippewelle rollt über die Schule',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, excepturi ut, qui dolorum' +
      'totam, eaque exercitationem recusandae iure beatae odit possimus perspiciatis quod assumenda animi' +
      'autem tempora, maxime est hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente' +
      'maxime suscipit totam quibusdam aperiam officia, fugiat deleniti ut consectetur a neque repudiandae' +
      'cupiditate, porro aliquam. Recusandae, ratione, illum. Saepe, earum.',
    img: 'https://dummyimage.com/800x450/000000/FF69B4.jpg',
    imgAlt: 'Platzhalter',
    imgCaption: 'Immer mehr Schüler und Lehrer sind krank.',
    url: '#'
  }
];

// generator for short articles
$(document).ready( () => {
  let htmlString = '';
  let i;
  const length = articles.length;
  for (i = length - 1; i > length - 6; i--) {
    const text = articles[i].text;
    const shortText = text.slice(0, 250);
    htmlString = `<article class='row mb-4'>
    <div class='col-md-4 order-12 order-md-1'>
    <img class='img-fluid p-1' src="${articles[i].img}" alt="${articles[i].imgAlt}">
    <figcaption>${articles[i].imgCaption}</figcaption>
    </div>
    <div class='col-md-8 order-1 order-md-12'>
    <h2>${articles[i].hl}</h2>  <span>${articles[i].date}</span>
    <p>${shortText}<a href="${articles[i].url}">... weiterlesen</a></p>
    </div>
    </article>`;
    $('#articles').append(htmlString);
  }
});
