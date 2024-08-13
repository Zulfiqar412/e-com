const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: { type: Array, default: [] },
  title: { type: String, required: true },
  dscription: { type: String, default: "" },
  updatedOn: { type: Date },
  createdOn: { type: Date },
});
ProductSchema.pre("save", (next) => {
  this.updatedOn = new Date();
  this.createdOn = new Date();
  next();
});
ProductSchema.pre(["update", "findOneAndUpadate", "updateOne"], (next) => {
  const update = this.getUpdate();
  delete update._id;
  this.updateOne = new Date();
  next();
});

const ProductModel = model("Product", ProductSchema);
module.exports = ProductModel;
