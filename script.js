function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function addToCart(btn) {
  const product = btn.closest(".product");
  const name = product.dataset.name;
  const price = Number(product.dataset.price);

  let cart = getCart();
  let item = cart.find(p => p.name === name);

  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });

  saveCart(cart);
}

function changeQty(index, delta) {
  let cart = getCart();
  cart[index].qty += delta;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

function renderCart() {
  const box = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!box) return;

  let cart = getCart();
  box.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price * item.qty;
    box.innerHTML += `
      <div class="cart-row">
        <div>
          <strong>${item.name}</strong>
        </div>
        <div class="qty-controls">
          <button onclick="changeQty(${i},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${i},1)">+</button>
        </div>
        <div>
          ${(item.price * item.qty).toLocaleString()} تومان
        </div>
      </div>
    `;
  });

  totalEl.innerText = "جمع کل: " + total.toLocaleString() + " تومان";
}

updateCartCount();
renderCart();
