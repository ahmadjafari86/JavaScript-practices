// import
import { getStorageItem, setStorageItem, formatPrice, getElement } from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

function displayCartItemCount() {
  const amount = cart.reduce((total,cartItem)=>{
   return total += cartItem.amount;
  },0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  const total = cart.reduce((total,cartItem)=>{
    return total += cartItem.price * cartItem.amount;
  },0);
  cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

export const addToCart = (id) => {
  let isItem = cart.find(item => item.id === id);
  if (!isItem){
    let product = findProduct(id);
    product = {...product,amount:1};
    cart = [...cart,product];
    addToCartDOM(product);
  }else {

  }
  displayCartItemCount();
  displayCartTotal();
  setStorageItem('cart',cart);
  openCart();
};

function displayCartItemsDOM() {
  cart.forEach((cartItem)=>{
    addToCartDOM(cartItem);
  });
}

function setupCartFunctionality() {

}

const init = ()=> {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};
init();