import { getPizzas } from './fetch-utils.js';
import { renderPizza } from './render-utils.js';

//set event listeners
  //get user input
  //use user input to update state
  //update DOM to reflect the new state
const pizzasListEl = document.querySelector('.pizzas-list');

window.addEventListener('load', async () => {
  //call function
    fetchAndDisplayPizzas();
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