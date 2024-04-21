
// fetch()

const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&";
const url2 = "https://newsapi.org/v2/everything?q=apple&from=2024-03-28&to=2024-03-28&sortBy=popularity&";

const api_key = "apiKey=4a5dea11b4da4b1ebceaefd0b1fa9368"

//DOM
const newsDiv = document.getElementById("news")

function fetchNews() {
    fetch(url2 + api_key)
        .then((response) => response.json())
        .then(newsData => {
            renderNews(newsData.articles);
            console.log(newsData, '---newsData ---');
        })
}
fetchNews();

function renderNews(articles) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (const news of articles) {
        let d = new Date(news.publishedAt)
        newsDiv.innerHTML += `
        <div class = "news">
        <h2>${news.title}</h2>
        <img width="180px" src="${news.urlToImage}" alt="" />
        <p>
        ${days[d.getDay()] + " "
            + d.getHours()+":" 
            + d.getMinutes() + " "
            + d.getFullYear()}
        <b>${news.author} </b>
        </p>
        <p>
        ${news.content}
        </p>
        <a target="_blank" href="${news.url}">read more</a>
        </div>
        `
    }
}