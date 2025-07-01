import { products } from './data.js';

// --- Cart Management with localStorage ---
const CART_STORAGE_KEY = 'furnitureCoCart';

/**
 * Loads cart items from localStorage.
 * @returns {Array} The cart items array.
 */
export function loadCartItems() {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (e) {
        console.error("Error loading cart from localStorage:", e);
        return [];
    }
}

/**
 * Saves cart items to localStorage.
 * @param {Array} items - The cart items array to save.
 */
function saveCartItems(items) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
        console.error("Error saving cart to localStorage:", e);
    }
}

// Global cart state (initialized from localStorage)
export let cartItems = loadCartItems();

/**
 * Displays a custom modal message.
 * @param {string} message - The message to display.
 */
export function showCustomMessage(message) {
    const modalOverlay = document.getElementById('custom-message-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseButton = document.getElementById('modal-close-button');

    if (modalOverlay && modalMessage && modalCloseButton) {
        modalMessage.textContent = message;
        modalOverlay.classList.remove('hidden');

        const closeHandler = () => {
            modalOverlay.classList.add('hidden');
            modalCloseButton.removeEventListener('click', closeHandler);
        };
        modalCloseButton.addEventListener('click', closeHandler);
    } else {
        // Fallback if modal elements are not found (e.g., on a page without the modal)
        console.warn("Custom message modal elements not found. Displaying via console:", message);
    }
}

/**
 * Updates the cart item count displayed in the header.
 */
export function updateCartCountDisplay() {
    const cartItemCountSpan = document.getElementById('cart-item-count');
    if (cartItemCountSpan) {
        const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
        cartItemCountSpan.textContent = totalCount;
        if (totalCount > 0) {
            cartItemCountSpan.classList.remove('hidden');
        } else {
            cartItemCountSpan.classList.add('hidden');
        }
    }
}

/**
 * Calculates the total price of items in the cart.
 * @returns {number} The total price.
 */
export function getCartTotal() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

// --- Cart Management Functions ---

/**
 * Adds a product to the cart or updates its quantity if already present.
 * @param {object} product - The product object to add.
 * @param {number} quantity - The quantity to add (default 1).
 */
export function addToCart(product, quantity = 1) {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push({ ...product, quantity });
    }
    saveCartItems(cartItems);
    updateCartCountDisplay();
    showCustomMessage(`${product.name} added to cart!`);
}

/**
 * Removes a product from the cart.
 * @param {string} productId - The ID of the product to remove.
 */
export function removeFromCart(productId) {
    cartItems = cartItems.filter((item) => item.id !== productId);
    saveCartItems(cartItems);
    updateCartCountDisplay();
}

/**
 * Updates the quantity of a product in the cart.
 * @param {string} productId - The ID of the product to update.
 * @param {number} newQuantity - The new quantity.
 */
export function updateQuantity(productId, newQuantity) {
    cartItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    saveCartItems(cartItems);
    updateCartCountDisplay();
}

/**
 * Clears all items from the cart.
 */
export function clearCart() {
    cartItems = [];
    saveCartItems(cartItems);
    updateCartCountDisplay();
}

// Helper to get product by ID (used by productDetail page)
export function getProductById(productId) {
    return products.find(p => p.id === productId);
}

/**
 * Initializes common header/footer elements and cart display on page load.
 */
export function initializeCommonElements() {
    document.addEventListener('DOMContentLoaded', () => {
        // Set current year in footer
        const currentYearSpan = document.getElementById('current-year');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
        updateCartCountDisplay();
    });
}
