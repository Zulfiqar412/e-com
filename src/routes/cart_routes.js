const CartRoutes = require("express").Router();
const CartController = require("./../controllers/cart_controller.js");

CartRoutes.get("/:user", CartController.getCartForUser);
CartRoutes.post("/", CartController.addToCart);
CartRoutes.delete("/", CartController.removeFromCart);
module.exports = CartRoutes;
