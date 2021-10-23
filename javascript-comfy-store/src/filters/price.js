import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInputEl = getElement('.price-filter');
    const priceValueEl = getElement('.price-value');
    // setup filter
    let maxPrice = store.map(product => product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice/100);
    priceInputEl.value = maxPrice;
    priceInputEl.min = 0;
    priceInputEl.max = maxPrice;
    priceValueEl.textContent = `Value: $${maxPrice}`;
    // event listener
    priceInputEl.addEventListener('input',() => {
        const value =parseInt(priceInputEl.value);
        priceValueEl.textContent = `Value: $${value}`;
        const productsEl = getElement('.products-container');
        let filteredStore = store.filter(product => product.price/100 <= value);
        if (filteredStore.length < 1){
            productsEl.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search.</h3>`;
        }else display(filteredStore,productsEl);
    });
};

export default setupPrice;
