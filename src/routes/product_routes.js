const ProductRoutes = require("express").Router();
const ProductController = require("./../controllers/product_controller.js");
const productController = require("./../controllers/product_controller.js");
ProductRoutes.post("/", productController.createProduct),
  ProductRoutes.get("/", ProductController.fetchAllProducts);
ProductRoutes.get("/category/:id", ProductController.fetchProductByCategory);

module.exports = ProductRoutes;
