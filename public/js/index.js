const form = document.getElementById("all");

//console.log(value);
const news = document.getElementById("news");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.getElementById("country").value;
  const url =
    "https://newsapi.org/v2/top-headlines?country=" +
    value +
    "&apiKey=<Your_API_KEY>";
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        news.innerHTML = ``;
        var articleTitle = [];
        var articleDesc = [];
        var newsUrl = [];
        var srcImage = [];
        var content = [];
        var date = [];
        for (var i = 0; i < data.articles.length; i++) {
          articleTitle.push(data.articles[i].title);
          articleDesc.push(data.articles[i].description);
          newsUrl.push(data.articles[i].url);
          srcImage.push(data.articles[i].urlToImage);
          content.push(data.articles[i].content);
          date.push(data.articles[i].publishedAt);
          //console.log(newsUrl[i]);
          news.innerHTML +=
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
      }
    });
  });
});

const newForm = document.getElementById("topic");

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newValue = document.getElementById("optTopics").value;
  const newCountry = document.getElementById("ncountry").value;
  console.log(newValue, newCountry);
  const newUrl =
    "https://newsapi.org/v2/top-headlines?country=" +
    newCountry +
    "&category=" +
    newValue +
    "&apiKey=7e82bc1b7e8f42f497706b6a3ec67c39";

  fetch(newUrl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        news.innerHTML = "";
        var articleTitle = [];
        var articleDesc = [];
        var newsUrl = [];
        var srcImage = [];
        var content = [];
        var date = [];
        for (var i = 0; i < data.articles.length; i++) {
          articleTitle.push(data.articles[i].title);
          articleDesc.push(data.articles[i].description);
          newsUrl.push(data.articles[i].url);
          srcImage.push(data.articles[i].urlToImage);
          content.push(data.articles[i].content);
          date.push(data.articles[i].publishedAt);
          //console.log(newsUrl[i]);
          news.innerHTML +=
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
      }
    });
  });
});
