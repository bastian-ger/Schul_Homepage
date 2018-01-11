// generator for short articles
$(document).ready( () => {
  let htmlString = '';
  let i;
  let wholeText = '';
  let shortText = '';
  const length = articles.length;
  for (i = length - 1; i > length - 6; i--) {
    wholeText = articles[i].aText;
    shortText = wholeText.slice(0, 250);
    htmlString =
    `<article class='row mb-4 ml-1 mr-1'>
      <div class='col-md-4 order-12 order-md-1'>
        <img class='img-fluid p-1' src="${articles[i].images[0].img}" alt="${articles[i].images[0].imgAlt}">
        <figcaption>${articles[i].images[0].imgCaption}</figcaption>
      </div>
      <div class='col-md-8 order-1 order-md-12'>
        <h2>${articles[i].hl}</h2>  <span>${articles[i].date}</span>
        <p>${shortText}<a href="${articles[i].url}">... weiterlesen</a></p>
      </div>
    </article>`;
    $('#articles').append(htmlString);
  }
});
