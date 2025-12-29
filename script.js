// ---------- Cart Core ----------
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ---------- Header Count ----------
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

// ---------- Add ----------
function addToCart(btn) {
  const product = btn.closest(".product");
  const name = product.dataset.name;
  const price = Number(product.dataset.price);

  let cart = getCart();
  let item = cart.find(p => p.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart(cart);
}

// ---------- Remove ----------
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

// ---------- Render Cart ----------
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-row">
        <div>
          <strong>${item.name}</strong>
          <span class="qty">× ${item.qty}</span>
        </div>
        <div>
          <span>${(item.price * item.qty).toLocaleString()} تومان</span>
          <button class="remove-btn" onclick="removeItem(${index})">حذف</button>
        </div>
      </div>
    `;
  });

  totalEl.innerText = "جمع کل: " + total.toLocaleString() + " تومان";
}

// ---------- Init ----------
updateCartCount();
renderCart();
