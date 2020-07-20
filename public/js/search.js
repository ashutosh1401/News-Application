var searchForm = document.querySelector("form");
const searchItem = document.getElementById("search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var searchValue = document.querySelector("input").value;
  console.log(searchValue);
  var url =
    "https://newsapi.org/v2/everything?q=" +
    searchValue +
    "&apiKey=<Your_API_KEY>";
  console.log(url);

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        search.innerHTML = "";
        var articleTitle = [];
        var articleDesc = [];
        var newsUrl = [];
        var srcImage = [];
        var content = [];
        var date = [];
        if (data.articles.length) {
          for (var i = 0; i < data.articles.length; i++) {
            articleTitle.push(data.articles[i].title);
            articleDesc.push(data.articles[i].description);
            newsUrl.push(data.articles[i].url);
            srcImage.push(data.articles[i].urlToImage);
            content.push(data.articles[i].content);
            date.push(data.articles[i].publishedAt);
            //console.log(newsUrl[i]);
            search.innerHTML +=
              `<div class="main-content jumbotron">` +
              `<h3>` +
              articleTitle[i] +
              `</h3>` +
              `<img src="${srcImage[i]}" class="d-block w-100">` +
              `<h6><b>` +
              articleDesc[i] +
              `</b></h6>` +
              `<p>` +
              content[i] +
              `</p>` +
              `<a href="${newsUrl[i]}" target="_blank"> NEWS LINK </a>` +
              `<p>` +
              date[i].slice(0, 10) +
              `</p>`;
          }
        } else {
          search.innerHTML =
            `<div class="jumbotron main-content">` +
            `<h2> Sorry!! Results are not available for this search please try another search </h2>` +
            `</div>`;
        }
      }
    });
  });
});
