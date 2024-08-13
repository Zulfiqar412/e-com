const UserRoutes = require("express").Router();
const UserController = require("./../controllers/user.controller");
UserRoutes.post("/createAccount", UserController.createAccount);
UserRoutes.post("/signin", UserController.signIn);

module.exports = UserRoutes;
