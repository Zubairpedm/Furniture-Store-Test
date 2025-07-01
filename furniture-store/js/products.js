import { initializeCommonElements, updateCartCountDisplay } from './utils.js';
import { products } from './data.js';

// Initialize common elements like footer year and cart count
initializeCommonElements();

document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = `
        <div class="container mx-auto p-6 font-inter">
            <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                ${products.map(product => `
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                        <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F0F0F0/333333?text=${encodeURIComponent(product.name)}';" />
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h3>
                            <p class="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">${product.description}</p>
                            <div class="flex justify-between items-center mt-auto">
                                <span class="text-2xl font-bold text-blue-600">$${product.price.toFixed(2)}</span>
                                <a href="product-detail.html?id=${product.id}" class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
});
