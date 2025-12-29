let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.qty, 0);
  let el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function addToCart(btn) {
  let product = btn.parentElement;
  let name = product.dataset.name;
  let price = Number(product.dataset.price);

  let existing = cart.find(p => p.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function loadCart() {
  let container = document.getElementById("cart-items");
  let total = 0;
  container.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name} × ${item.qty}</span>
        <span>${(item.price * item.qty).toLocaleString()} تومان</span>
        <button onclick="removeItem(${index})">✖</button>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "جمع کل: " + total.toLocaleString() + " تومان";
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

updateCartCount();
if (document.getElementById("cart-items")) loadCart();
