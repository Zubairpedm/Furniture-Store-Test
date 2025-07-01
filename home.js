import { initializeCommonElements, updateCartCountDisplay } from './utils.js';
import { products } from './data.js';

// Initialize common elements like footer year and cart count
initializeCommonElements();

document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    const featuredProducts = products.slice(0, 3); // Select a few products to feature

    appContent.innerHTML = `
        <div class="container mx-auto p-6 font-inter">
            <section class="text-center my-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-xl shadow-lg">
                <h2 class="text-5xl font-extrabold mb-4 animate-fade-in">
                    Welcome to FurnitureCo.
                </h2>
                <p class="text-xl mb-8 opacity-90 animate-slide-up">
                    Your destination for modern and elegant furniture.
                </p>
                <a href="products.html" class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform">
                    Explore Our Products
                </a>
            </section>

            <section class="my-12">
                <h3 class="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${featuredProducts.map(product => `
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F0F0F0/333333?text=${encodeURIComponent(product.name)}';" />
                            <div class="p-6">
                                <h4 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h4>
                                <p class="text-gray-600 mb-4 truncate">${product.description}</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-2xl font-bold text-blue-600">$${product.price.toFixed(2)}</span>
                                    <a href="product-detail.html?id=${product.id}" class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="my-12 text-center bg-gray-100 p-10 rounded-xl shadow-lg">
                <h3 class="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-blue-600 mx-auto mb-4">
                            <path d="m7.5 4.27 9 5.15" /><path d="M2.52 9.81 12 15l9.48-5.19" /><path d="m7.5 19.73 9-5.15" /><path d="M12 22.5 2.52 17.19l9.48-5.19 9.48 5.19L12 22.5Z" />
                        </svg>
                        <h4 class="text-xl font-semibold mb-2">Quality Products</h4>
                        <p class="text-gray-600">Hand-picked furniture crafted with the finest materials.</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-green-600 mx-auto mb-4">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <h4 class="text-xl font-semibold mb-2">Customer Satisfaction</h4>
                        <p class="text-gray-600">We prioritize your happiness with every purchase.</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-purple-600 mx-auto mb-4">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <h4 class="text-xl font-semibold mb-2">Easy Shopping</h4>
                        <p class="text-gray-600">A seamless online experience from browsing to checkout.</p>
                    </div>
                </div>
            </section>
        </div>
    `;
});
