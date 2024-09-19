/*// Function to change product image when a thumbnail is clicked
function changeImage(imageSrc) {
    const mainImage = document.getElementById("main-product-image");
    mainImage.src = imageSrc;
}

// Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Shopping Cart Logic
let cart = [];
let totalPrice = 0;

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    totalPrice += price;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = ""; // Clear cart list before updating
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function for checkout
function checkout() {
    alert(`Your total is $${totalPrice.toFixed(2)}. Thank you for your purchase!`);
    cart = []; // Reset cart after checkout
    totalPrice = 0;
    updateCart();
}
    */
