const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 4269;
const mongo_url =
  "mongodb+srv://aman:1234@cluster0.teowjud.mongodb.net/?retryWrites=true&w=majority";

// routers
const userRoutes = require("./routes/users.router");
const productRoutes = require("./routes/product.router");
const vendorRoutes = require("./routes/vendor.router")
//**middlewares */
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('storage'))
//**routes */

// user routes
app.use("/api/user", userRoutes);
app.use("/api/vendor",vendorRoutes)

// product routes
app.use("/api/product", productRoutes);

//**Server setup */
app.listen(PORT, () => {
  console.log(`>>>>>> PORT is listening on: ${PORT} <<<<<<`);
});

//**DB connection */
mongoose
  .connect(mongo_url)
  .then((ok) => {
    console.log("DB connected");
  })
  .catch((er) => {
    console.log(er);
  });
