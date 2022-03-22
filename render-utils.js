export function renderPizza(pizza) {
    const pizzaEl = document.createElement('div');
    const priceEl = document.createElement('p');
    const toppingsEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const crustEl = document.createElement('p');

    pizzaEl.classList.add('pizza');

    priceEl.textContent = pizza.price;
    //toppingsEl.textContent = pizza.toppings;
    sizeEl.textContent = pizza.size;
    crustEl.textContent = pizza.crust;

    for (let topping of pizza.toppings) {
        const li = document.createElement('li');

        li.textContent = topping;
        toppingsEl.appendChild(li);
    }

    pizzaEl.append(
        priceEl,
        toppingsEl,
        sizeEl,
        crustEl
    );
}