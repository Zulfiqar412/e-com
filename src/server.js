const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

const userRoute = require("./routes/user_routes.js");
app.use("/api/user", userRoute);
const categoryRoute = require("./routes/category_routes.js");
app.use("/api/category", categoryRoute);
const ProductRoutes = require("./routes/product_routes.js");
app.use("/api/product", ProductRoutes);
const CartRoutes = require("./routes/cart_routes.js");
app.use("/api/cart", CartRoutes);
const OrderRoutes = require("./routes/order_routes.js");
app.use("/api/cart", OrderRoutes);

const port = 5000;
mongoose.connect(
  "mongodb+srv://zulfiqarkhan:CI2GrBm3UJ5GOPb8@mycluster.vkagmfn.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=mycluster"
);

app.listen(port, (req, res) => console.log(`server started at port: ${port}`));
