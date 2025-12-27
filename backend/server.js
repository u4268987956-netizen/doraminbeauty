// backend/server.js

const express = require("express");

const app = express();

// تست ساده برای اینکه ببینیم سرور زنده است
app.get("/", (req, res) => {
  res.send("Digikala clone backend is alive 🚀");
});

// فعلاً سرور رو اجرا نمی‌کنیم، فقط اسکلت می‌سازیم
