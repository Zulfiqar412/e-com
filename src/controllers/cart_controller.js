const CartModel = require("./../models/cart_model.js");

const CartController = {
  addToCart: async (req, res) => {
    try {
      const { user, product, quantity } = req.body;
      const foundCart = await CartModel.findOne({ user: user });
      //if cart not exist
      if (!foundCart) {
        const newCart = new CartModel({ user: user });
        newCart.items.push({
          product: product,
          quantity: quantity,
        });
        await newCart.save();

        return res.json({
          status: true,
          data: newCart,
          message: "product added to cart",
        });
      }
      //if cart already exist
      const updatedCart = await CartModel.findOneAndUpdate(
        { user: user },
        { $push: { items: { product: product, quantity: quantity } } },
        { new: true }
      );
      return res.json({
        status: true,
        data: updatedCart,
        message: "product added to cart",
      });
    } catch (ex) {
      res.json({ status: false, message: ex });
    }
  },
  removeFromCart: async (req, res) => {
    try {
      const { user, product } = req.body;
      const updatedCart = await CartModel.findOneAndUpdate(
        { user: user },
        { $pull: { items: { product: product, quantity: quantity } } },
        { new: true }
      );
      return res.json({
        status: true,
        data: updatedCart,
        message: "product remove from cart",
      });
    } catch (ex) {
      res.json({ status: false, message: ex });
    }
  },
  getCartForUser: async (req, res) => {
    try {
      const user = req.params.user;
      const foundCart = await CartModel.findOne({ user: user });
      if (!foundCart) {
        return res.json({ success: true, data: [] });
      }
      return res.json({ success: true, data: foundCart.items });
    } catch (ex) {
      res.json({ status: false, message: ex });
    }
  },
};
module.exports = CartController;
