const OrderModel = require("./../models/order_model.js");

const OrderController = {
  createOrder: async function (req, res) {
    try {
      const { user, items } = req.body;

      const newOrder = new OrderModel({
        user: user,
        items: items,
      });
      await newOrder.save();

      return res.json({
        success: true,
        data: newOrder,
        message: "Order created!",
      });
    } catch (ex) {
      return res.json({ success: false, message: ex });
    }
  },
  fetchOrdersForUser: async function(req, res) {
    try {
        const userId = req.params.userId;
        const foundOrders = await OrderModel.find({
            "user._id": userId
        }).sort({ createdOn: -1 });
        return res.json({ success: true, data: foundOrders });
    }
    catch(ex) {
        return res.json({ success: false, message: ex });
    }
},
};
module.exports = OrderController;
