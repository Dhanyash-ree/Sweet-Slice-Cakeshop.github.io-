let basePrice = 30; // Base price of the cake
let quantity = 1;   // Default quantity
let totalPrice = basePrice; // Default total price

// Function to increment quantity
function incrementQuantity() {
    quantity++;
    updatePrice();
}

// Function to decrement quantity (minimum of 1)
function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        updatePrice();
    }
}

// Function to update the total price based on quantity
function updatePrice() {
    const cakeQuantity = document.getElementById('cake-quantity');
    const totalPriceElement = document.getElementById('total-price');

    cakeQuantity.value = quantity;
    totalPrice = basePrice * quantity;
    totalPriceElement.textContent = totalPrice;
}

// Function to add cake to cart
function addToCart(cakeName) {
    alert(`${quantity} ${cakeName}(s) have been added to your cart! Total: $${totalPrice}`);
}

// Array to hold reviews
const reviews = [
    { name: "John Doe", text: "This chocolate cake is absolutely delicious! The perfect balance of sweetness and richness." },
    { name: "Jane Smith", text: "Loved the texture and the frosting. Highly recommended for chocolate lovers!" },
    { name: "Emily Johnson", text: "The best chocolate cake I’ve ever had. Moist, rich, and beautifully decorated." }
];

// Function to add review to the list
function addReview(name, text) {
    reviews.push({ name, text });
    displayReviews();
}

// Function to display reviews dynamically
function displayReviews() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';  // Clear previous reviews

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const reviewName = document.createElement('p');
        reviewName.classList.add('review-name');
        reviewName.textContent = review.name;

        const reviewText = document.createElement('p');
        reviewText.textContent = review.text;

        reviewDiv.appendChild(reviewName);
        reviewDiv.appendChild(reviewText);

        reviewList.appendChild(reviewDiv);
    });
}

// Add event listener to review form
const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('review-text').value;

    if (name && text) {
        addReview(name, text);  // Add the review
        reviewForm.reset();     // Reset the form
    }
});

// Display sample reviews on page load
document.addEventListener('DOMContentLoaded', function() {
    displayReviews(); // Show the pre-populated reviews when the page loads
});
