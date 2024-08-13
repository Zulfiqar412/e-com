const CategoryModel = require("./../models/category_model.js");

const CategorController = {
  createCategory: async (req, res) => {
    try {
      const categoryData = req.body;
      const newCategoryData = new CategoryModel(categoryData);
      await newCategoryData.save();

      res.json({
        success: true,
        data: newCategoryData,
        message: "Catagory Craeted Successfully",
      });
    } catch (ex) {
      res.json({ success: false, message: ex });
    }
  },
  fetchAllCategories: async (req, res) => {
    try {
      const categories = await CategoryModel.find();

      return res.json({
        success: true,
        data: categories,
        message: "Catagory Craeted Successfully",
      });
    } catch (ex) {
      res.json({ success: false, message: ex });
    }
  },
  fetchAllCategoryById: async (req, res) => {
    try {
      const id = req.params.id;
      const foundCategory = await CategoryModel.findById(id);
      if (!foundCategory) {
        res.json({ status: false, message: "Category not Found" });
      }
      res.json({
        status: true,
        data: foundCategory,
        message: "Category Found",
      });
    } catch (ex) {
      res.json({ success: false, message: ex });
    }
  },
};
module.exports = CategorController;
