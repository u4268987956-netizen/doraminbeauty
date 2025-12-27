// backend/server.js

const express = require("express");
const productsRoute = require("./routes/products");

const app = express();

// این خط می‌گه وقتی آدرس /products اومد، برو routes/products.js
app.use("/products", productsRoute);

// تست زنده بودن سرور
app.get("/", (req, res) => {
  res.send("Digikala clone backend is alive 🚀");
});

// هنوز اجرا نمی‌کنیم؛ فقط ساختار
