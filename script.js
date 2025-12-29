let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(btn) {
  let product = btn.parentElement;
  let name = product.dataset.name;
  let price = Number(product.dataset.price);

  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("به سبد اضافه شد");
}

function loadCart() {
  let container = document.getElementById("cart-items");
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>${item.price.toLocaleString()} تومان</span>
      </div>
    `;
  });

  document.getElementById("total").innerText =
    "جمع کل: " + total.toLocaleString() + " تومان";
}

if (document.getElementById("cart-items")) {
  loadCart();
}
