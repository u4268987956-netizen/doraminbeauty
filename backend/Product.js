// backend/models/Product.js

const mongoose = require("mongoose");

/*
  این فایل می‌گه «محصول» چه شکلیه
  مثل شناسنامه‌ی هر کالا
*/

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  countInStock: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Product", productSchema);
