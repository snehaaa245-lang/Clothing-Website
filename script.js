let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(product + " added to cart!");
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = savedCart;
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  document.getElementById("cart-total").textContent = total;
}

function checkout() {
  alert("Thank you for your purchase! Your order is being processed.");
  localStorage.removeItem("cart");
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("cart-total").textContent = "0";
}

window.onload = function() {
  if (document.getElementById("cart-items")) {
    loadCart();
  }
};