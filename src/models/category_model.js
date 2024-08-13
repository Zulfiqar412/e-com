const { model, Schema, default: mongoose } = require("mongoose");
const categorySchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    default: "",
  },
  updatedOn: { type: Date },
  createdOn: { type: Date },
});
categorySchema.pre("save", async (next) => {
  this.updatedOn = new Date();
  this.createdOn = new Date();

  next();
});
categorySchema.pre(["update", "findOneAndUpadate", "updateOne"], (next) => {
  const update = this.getUpdate();
  delete update._id;
  delete update.id;
  this.updatedOn = new Date();
  next();
});

const CategoryModel = model("Category", categorySchema);
module.exports = CategoryModel;
