import {serie} from "./serie.js";
import { series } from "./data.js";

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
    createCard(series[0]);
  
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
  //tarjeta.classList.add("card");
  const inner = `
  <div class="card w-70 h-50">
  <img src="${Serie.image}" class="card-img-top" alt="Una imagen">
  <div class="card-body">
    <h5 class="card-title">${Serie.title}</h5>
    <p class="card-text">${Serie.description}</p>
    <a href=${Serie.direction} class="btn btn-primary">${Serie.direction}</a>
  </div>
  </div>
`;
tarjetaContainer.innerHTML = inner;

}




document.addEventListener("DOMContentLoaded", () => {
  const serieLinks = document.querySelectorAll(".serie-link");
  serieLinks.forEach((serieLink, index) => {
    serieLink.addEventListener("click", (event) => {
      event.preventDefault();
      createCard(series[index]);
    });
  });
});


fullTableSeries(series);
averageSeasons(series);

