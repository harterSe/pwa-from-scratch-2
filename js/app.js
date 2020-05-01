import { COFFEES } from './constant.js';

const container = document.querySelector(".container");

const getTpl = (name, image) => `
  <div class="card">
    <img class="card--avatar" src=${image} />
    <h1 class="card--title">${name}</h1>
    <a class="card--link" href="#">Taste</a>
  </div>`;

const getCoffeeHTML = (coffees) => coffees.reduce((html, { name, image }) => html + getTpl(name, image), '');

const showCoffees = () => container.innerHTML = getCoffeeHTML(COFFEES);

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    console.log(window.location)
    const scope = window.location.pathname;
    const swPath = `${scope}serviceWorker.js`;

    navigator.serviceWorker
      .register(swPath, { scope })
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
