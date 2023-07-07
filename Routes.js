const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/coffee", (req, res) => {
  res.render("coffee");
});

router.get("/food", (req, res) => {
  res.render("food");
});

router.get("/merchandise", (req, res) => {
  res.render("merchandise");
});

router.get("/:category/:tag", (req, res) => {
  const { category, tag } = req.params;
  res.json({ category, tag });
});

router.use("/", (req, res) => {
  res.status(404);
  res.send({
    status: "Failed",
    message: "Halaman tidak ditemukan",
  });
});

module.exports = router;
