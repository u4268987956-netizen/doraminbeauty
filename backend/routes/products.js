// backend/routes/products.js

const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/*
  این مسیر قراره لیست محصولات رو بده
  مثل: /products
*/

router.get("/", (req, res) => {
  res.json([
    { title: "محصول تست ۱", price: 100000 },
    { title: "محصول تست ۲", price: 200000 }
  ]);
});

module.exports = router;
