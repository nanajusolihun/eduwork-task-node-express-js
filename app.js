// ! Express
const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./Routes");

// Gunakan EJS
app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
});
