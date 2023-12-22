const express = require("express");

const { saveProduct, getProduct } = require("../controllers/products.controller");



const router = express.Router();


router.get("/products", getProduct);

router.post("/products", saveProduct);

module.exports = router;