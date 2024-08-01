


let cart = [];

function orderItem(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert('You have added: ' + itemName + ' to your cart.');
    updateCartLink();
}

function updateCartLink() {
    const cartLink = document.querySelector('.cart-link');
    cartLink.textContent = `Cart (${cart.length})`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('order-items')) {
        displayOrderSummary();
    }
});

function displayOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    if (orderItemsContainer) {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            itemDiv.innerHTML = `
                <span>${item.name}</span>
                <span class="price">${item.price}</span>
            `;
            orderItemsContainer.appendChild(itemDiv);
        });
    }
}

// This function is used to store the cart in local storage before navigating to the checkout page
function goToCheckout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

// This function is used to retrieve the cart from local storage in the checkout page
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}
