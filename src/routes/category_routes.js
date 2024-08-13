const CategoryRoutes = require("express").Router();
const CategoryController = require("./../controllers/category_controller.js");

CategoryRoutes.post("/", CategoryController.createCategory);

CategoryRoutes.get("/", CategoryController.fetchAllCategories);
CategoryRoutes.get("/:id", CategoryController.fetchAllCategoryById);

module.exports = CategoryRoutes;
