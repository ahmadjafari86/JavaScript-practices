import { getElement } from '../utils.js'

const toggleCartBtn = getElement('.toggle-cart')
const cartOverlay = getElement('.cart-overlay')
const CloseCartBtn = getElement('.cart-close')

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show')
})

CloseCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show')
})

export const openCart = () => {cartOverlay.classList.add('show')};
