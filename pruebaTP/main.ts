import {serie} from "./serie.js";

export const series = [
    new serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://www.fayerwayer.com/resizer/piP6lIJtrR34MMn37dkbC7KnVoY=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/36LY7DZFFZDGTAS6IK3VKIVS7I.jpg") ,
    
    new serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
    
    new serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpg"),

    new serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    
    new serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

    new serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
  ];




let tableSeries: HTMLElement = document.getElementById("serie")!;
let textAvg: HTMLElement = document.getElementById("Text")!;
let tarjetaContainer: HTMLElement = document.getElementById("tarjetaContainer")!;
const serieLinks = document.querySelectorAll(".serie-link");


function fullTableSeries(series:serie[]): void
{
    let seriesBody: HTMLElement = document.createElement("tbody");
    for (const Serie of series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
        <td>${Serie.position}</td>
        <td> <a  href="#" class="serie-link"> ${Serie.title}  </a> </td>
        <td>${Serie.platform}</td>
        <td>${Serie.nr_seasons}</td>
      `;
      seriesBody.appendChild(trElement);
    }
    tableSeries.appendChild(seriesBody);
  
}


function averageSeasons(series:serie[]):void
{
  let total_seasons:number = 0;
  let avg:number = 0;
  for (const Serie of series)
    {
        total_seasons += Serie.nr_seasons;
    }
    avg = total_seasons/series.length;
    let text:HTMLElement = document.createElement("p");
    text.textContent = "Seasons average: " + avg;
    textAvg.appendChild(text);
}

function createCard(Serie:serie):void
{
  let tarjeta:HTMLElement = document.createElement("div");
  tarjeta.classList.add("card");
  tarjeta.innerHTML = `
  <div class="card">
  <img src="${Serie.image}" class="card-img-top" alt="Una imagen">
  <div class="card-body">
    <h5 class="card-title">${Serie.title}</h5>
    <p class="card-text">${Serie.description}</p>
    <a href=${Serie.direction} class="btn btn-primary">${Serie.direction}</a>
  </div>
  </div>
`;
tarjetaContainer.appendChild(tarjeta);

}


function t():void{
    serieLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const selectedSerie = series[index];
          createCard(selectedSerie);
      });
  });
}

fullTableSeries(series);
averageSeasons(series);
t();
