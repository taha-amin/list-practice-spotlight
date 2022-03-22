import { getPizzas } from './fetch-utils.js';
import { renderPizza } from './render-utils.js';

import { getClothings } from './fetch-utils.js';
import { renderClothes } from './render-utils.js';

import { getBooks } from './fetch-utils.js';
import { renderBooks } from './render-utils.js';

import { getCandies } from './fetch-utils.js';
import { renderCandies } from './render-utils.js';

//set event listeners
  //get user input
  //use user input to update state
  //update DOM to reflect the new state
const pizzasListEl = document.querySelector('.pizzas-list');
const clothesListEl = document.querySelector('.clothes-list');
const booksListEl = document.querySelector('.books-list');
const candiesListEl = document.querySelector('.candies-list');

window.addEventListener('load', async () => {
  //call function
    fetchAndDisplayPizzas();
    fetchAndDisplayClothes();
    fetchAndDisplayBooks();
    fetchAndDisplayCandies();
});

async function fetchAndDisplayPizzas() {
  //the second the page loads
    //fetch pizzas
    const pizzas = await getPizzas();
    //console.log(pizzas);

    //display pizzas
      //loop through pizzas
    for (let pizza of pizzas) {
        const pizzaEl = renderPizza(pizza);

      //append each pizza
        pizzasListEl.append(pizzaEl);
    }
}

async function fetchAndDisplayClothes() {
    const clothes = await getClothings();

    for (let clothe of clothes) {
        const clotheEl = renderClothes(clothe);

        clothesListEl.append(clotheEl);
    }
}

async function fetchAndDisplayBooks() {
    const books = await getBooks();

    for (let book of books) {
        const bookEl = renderBooks(book);

        booksListEl.append(bookEl);
    }
}

async function fetchAndDisplayCandies() {
    const candies = await getCandies();

    for (let candy of candies) {
        const candyEl = renderCandies(candy);

        candiesListEl.append(candyEl);
    }
}