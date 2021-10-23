import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const formEl = getElement('.input-form');
    const searchEl = getElement('.search-input');
    formEl.addEventListener('keyup', function () {
        const searchVal = searchEl.value;
        if (searchVal) {
            const filteredStore = store.filter(product => {
                let {name} = product;
                name = name.toLowerCase();
                if (name.startsWith(searchVal)) return product;
            });
            display(filteredStore, getElement('.products-container'));
            if (filteredStore.length < 1) {
                const products = getElement('.products-container');
                products.innerHTML = `<h3 class = "filter-error">Sorry, no products matched your search. </h3>`;
            }
        } else display(store, getElement('.products-container'));
    });
};
export default setupSearch;
