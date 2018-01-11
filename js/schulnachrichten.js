// generator for short articles
$(document).ready( () => {
  let htmlString = '';
  let htmlStringImages = '';
  let htmlStringAllImages = '';
  let wholeText = '';
  let shortText = '';
  let i, j, article;
  const length = articles.length;
  for (i = length - 1; i > length - 26; i--) {
    htmlStringAllImages = '';
    article = articles[i];
    wholeText = article.aText;
    shortText = wholeText.slice(0, 400);
    for (j = 0; j < article.images.length; j++) {
      htmlStringImages =
      `<div class=''>
        <img class='img-fluid p-1' src="${article.images[j].img}" alt="${article.images[j].imgAlt}">
        <figcaption>${article.images[j].imgCaption}</figcaption>
      </div>`;
      htmlStringAllImages += htmlStringImages;
    }
    htmlString =
    `<article class='row mb-4'>
      <div class='col-md-4 order-12 order-md-1'>
        <img class='img-fluid p-1' src="${article.images[0].img}" alt="${article.images[0].imgAlt}">
        <figcaption>${article.images[0].imgCaption}</figcaption>
      </div>
      <div class='col-md-8 order-1 order-md-12'>
        <h2>${article.hl}</h2>  <span>${article.date}</span>
        <p>${shortText}...</p>
        <!-- Button trigger modal -->
        <div class='row justify-content-center'>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#theModal${i}">
            Öffnen
          </button>
        </div>
      </div>
        <!-- Modal -->
        <div class="modal fade" id="theModal${i}" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Einzelansicht</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <article class='row mb-4'>
                  <div>
                    <h2>${article.hl}</h2>  <span>${article.date}</span>
                    <p>${wholeText}</p>
                  </div>
                  ${htmlStringAllImages}
                </article>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </article>`;

    $('#articles-many').append(htmlString);
  }
});
