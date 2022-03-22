export function renderPizza(pizza) {
    const pizzaEl = document.createElement('div');
    const priceEl = document.createElement('p');
    const toppingsEl = document.createElement('p');
    const sizeEl = document.createElement('p');
    const crustEl = document.createElement('p');

    pizzaEl.classList.add('pizza');

    priceEl.textContent = `Price: $${pizza.price}`;
    //toppingsEl.textContent = pizza.toppings;
    sizeEl.textContent = pizza.size;
    crustEl.textContent = pizza.crust;

    for (let topping of pizza.toppings) {
        const li = document.createElement('li');

        li.textContent = topping;
        toppingsEl.append(li);
    }

    pizzaEl.append(
        priceEl,
        toppingsEl,
        sizeEl,
        crustEl
    );

    return pizzaEl;
}

export function renderClothes(cloth) {
    const clotheEl = document.createElement('div');
    const priceEl = document.createElement('p');
    const brandEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const sizeEl = document.createElement('p');

    clotheEl.classList.add('clothe');

    priceEl.textContent = `Price: $${cloth.price}`;
    brandEl.textContent = cloth.brand;
    typeEl.textContent = cloth.type;
    sizeEl.textContent = cloth.size;

    clotheEl.append(
        priceEl,
        brandEl,
        typeEl,
        sizeEl
    );

    return clotheEl;
}