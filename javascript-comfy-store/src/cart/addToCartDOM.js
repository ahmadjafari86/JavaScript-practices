import { formatPrice, getElement } from '../utils.js';
const cartItemsDOM = getElement('.cart-items');
const addToCartDOM = ({id,name,price,image,amount}) => {
    const article = document.createElement('article');
    article.classList.add('cart-item');
    article.setAttribute('data-id',id);
    article.innerHTML=`
        <img src="${image}" class="cart-item-img" alt="${name}" />
        <div data-id="${id}">
          <h4 class="cart-item-name">${name}</h4>
          <p class="cart-item-price">${formatPrice(price)}</p>
          <button class="cart-item-remove-btn" data-id="${id}" >Remove</button>
        </div>
        <div data-id="${id}">
          <button class="cart-item-increase-btn fas fa-chevron-up" data-id="${id}" ></button>
          <p class="cart-item-amount" data-id="${id}" >${amount}</p>
          <button class="cart-item-decrease-btn fas fa-chevron-down" data-id="${id}" ></button>
        </div>
    `;
    cartItemsDOM.appendChild(article);
};

export default addToCartDOM;
