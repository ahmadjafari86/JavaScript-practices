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

export const addToCart = (id) => {
  let isItem = cart.find(item => item.id === id);
  if (!isItem){
    let product = findProduct(id);
    product = {...product,amount:1};
    cart = [...cart,product];
    addToCartDOM(product);
  }else {
  const amount = increaseAmount(id);
  const itemsAmount = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
  const changedItemAmount = itemsAmount.find((value => value.dataset.id === id));
    if (changedItemAmount)changedItemAmount.textContent = amount;
  }
  displayCartItemCount();
  displayCartTotal();
  setStorageItem('cart',cart);
  openCart();
};


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
function increaseAmount(id) {
  let updatedAmount;
  cart = cart.map((cartItem)=>{
    if (cartItem.id === id){
      updatedAmount = cartItem.amount +1;
      cartItem = {...cartItem,amount: updatedAmount };
    }
    return cartItem;
  });
  return updatedAmount;
}
function displayCartItemsDOM() {
  cart.forEach((cartItem)=>{
    addToCartDOM(cartItem);
  });
}

function removeItem(id) {
  cart = cart.filter(cartItem => cartItem.id !== id);
}

function setupCartFunctionality() {
   cartItemsDOM.addEventListener('click',function (e){
     const element = e.target;
     const parent = e.target.parentElement;
     const id = e.target.dataset.id;
     const parentId = e.target.parentElement.dataset.id;
     // remove
     if (element.classList.contains('cart-item-remove-btn')){
       removeItem(id);
       parent.parentElement.remove();
     }
     // increase
     // decrease

     displayCartItemCount();
     displayCartTotal();
     setStorageItem('cart',cart);
   });
}
const init = ()=> {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};
init();