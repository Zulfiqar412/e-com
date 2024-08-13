const UserModel = require("../models/user.model.js");
const bcrypyt = require("bcrypt");

const UserController = {
  createAccount: async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await UserModel(userData);

      newUser.save();

      res.json({
        success: true,
        data: newUser,
        message: "User Craeted Successfully",
      });
    } catch (ex) {
      res.json({ success: false, message: ex });
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await UserModel.findOne({ email: email });

      if (!foundUser) {
        return res.json({
          status: false,
          message: "User  with this email does not exist",
        });
      }
      const passwordMatch = bcrypyt.compareSync(password, foundUser.password);
      if (!passwordMatch) {
        return res.json({ status: false, message: "Incorrect password" });
      }
      return res.json({ status: true, data: foundUser });
    } catch (ex) {
      res.json({ success: false, message: ex });
    }
  },
};
module.exports = UserController;
