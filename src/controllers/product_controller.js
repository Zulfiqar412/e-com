const ProductModel = require("./../models/product_models.js");
const ProductController = {
  createProduct: async (req, res) => {
    try {
      const productData = req.body;
      const newProductData = await ProductModel(productData);
      await newProductData.save();
      res.json({
        status: true,
        data: newProductData,
        message: "Product Created Successfully",
      });
    } catch (ex) {
      res.json({ staus: false, message: ex });
    }
  },
  fetchAllProducts: async (req, res) => {
    try {
      const products = await ProductModel.find();

      res.json({
        status: true,
        data: products,
      });
    
    } catch (ex) {
      res.json({ staus: false, message: ex });
    }
  },
  fetchProductByCategory: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const products = await ProductModel.find({ category: categoryId });
      res.json({
        status: true,
        data: products,
        message: "Product Cannot Find",
      });
    } catch (ex) {
      res.json({ staus: false, message: ex });
    }
  },
};
module.exports = ProductController;
