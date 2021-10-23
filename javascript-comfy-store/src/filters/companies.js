import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let companies = ['all',...new Set( store.map(product => product.company))] ;
    const companiesEl = getElement('.companies');
    companiesEl.innerHTML = companies.map(company =>{
        return ` <button class="company-btn">${company}</button>`
    }).join('');
    companiesEl.addEventListener('click',event => {
        const element = event.target;
        if (element.classList.contains('company-btn')){
            let filteredStore;
            if (element.textContent === 'all') filteredStore = [...store];
            else filteredStore = store.filter(product => product.company === element.textContent);
            display(filteredStore,getElement('.products-container'));
        }
    });
};

export default setupCompanies;
