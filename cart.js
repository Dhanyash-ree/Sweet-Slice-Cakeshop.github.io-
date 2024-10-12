document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const itemCount = document.getElementById('item-count');
    const totalPrice = document.getElementById('total-price');
    const cartItems = document.getElementById('cart-items');
    const cartSection = document.querySelector('.cart');
    const cartIcon = document.getElementById('cart-count');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const productBox = this.closest('.box');
            const productId = parseInt(productBox.getAttribute('data-product-id'));
            const productName = productBox.getAttribute('data-product-name');
            const productPrice = parseInt(productBox.getAttribute('data-product-price'));
            const productImg = productBox.getAttribute('data-product-img');

            addToCart(productId, productName, productPrice, productImg);
        });
    });

    cartIcon.addEventListener('click', function() {
        cartSection.classList.toggle('visible');
    });

    function addToCart(id, name, price, img) {
        const product = { id, name, price, img };
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = ''; // Clear existing cart items
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        itemCount.textContent = cart.length;
        totalPrice.textContent = total;
    }
});



