import { series } from "./data.js";
var tableSeries = document.getElementById("serie");
var textAvg = document.getElementById("Text");
var tarjetaContainer = document.getElementById("tarjetaContainer");
var serieLinks = document.querySelectorAll(".serie-link");
function fullTableSeries(series) {
    var seriesBody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var Serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(Serie.position, "</td>\n        <td> <a  href=\"#\" class=\"serie-link\"> ").concat(Serie.title, "  </a> </td>\n        <td>").concat(Serie.platform, "</td>\n        <td>").concat(Serie.nr_seasons, "</td>\n      ");
        seriesBody.appendChild(trElement);
    }
    tableSeries.appendChild(seriesBody);
    createCard(series[0]);
}
function averageSeasons(series) {
    var total_seasons = 0;
    var avg = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var Serie = series_2[_i];
        total_seasons += Serie.nr_seasons;
    }
    avg = total_seasons / series.length;
    var text = document.createElement("p");
    text.textContent = "Seasons average: " + avg;
    textAvg.appendChild(text);
}
function createCard(Serie) {
    var tarjeta = document.createElement("div");
    //tarjeta.classList.add("card");
    var inner = "\n  <div class=\"card w-70 h-50\">\n  <img src=\"".concat(Serie.image, "\" class=\"card-img-top\" alt=\"Una imagen\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">").concat(Serie.title, "</h5>\n    <p class=\"card-text\">").concat(Serie.description, "</p>\n    <a href=").concat(Serie.direction, " class=\"btn btn-primary\">").concat(Serie.direction, "</a>\n  </div>\n  </div>\n");
    tarjetaContainer.innerHTML = inner;
}
document.addEventListener("DOMContentLoaded", function () {
    var serieLinks = document.querySelectorAll(".serie-link");
    serieLinks.forEach(function (serieLink, index) {
        serieLink.addEventListener("click", function (event) {
            event.preventDefault();
            createCard(series[index]);
        });
    });
});
fullTableSeries(series);
averageSeasons(series);
