const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "product",
        },
        count: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("cart", CartSchema);
