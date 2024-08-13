const { model, Schema, default: mongoose } = require("mongoose");
const orderItemSchema = new Schema({
  product: { type: Map, required: true },
  quantity: {
    type: Number,
    default: 1,
  },
});
const orserSchema = new Schema({
  user: {
    type: Map,
    required: true,
  },
  items: { type: [orderItemSchema], default: [] },
  status: { type: String, default: "order-placed" },
  updatedOn: { type: Date },
  createdOn: { type: Date },
});
orserSchema.pre("save", async (next) => {
  this.updatedOn = new Date();
  this.createdOn = new Date();

  next();
});
orserSchema.pre(["update", "findOneAndUpadate", "updateOne"], (next) => {
  const update = this.getUpdate();
  delete update._id;
  delete update.id;
  this.updatedOn = new Date();
  next();
});

const OrderModel = model("Order", orserSchema);
module.exports = OrderModel;
