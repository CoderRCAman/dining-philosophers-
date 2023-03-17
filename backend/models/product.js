const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    images: [
      {
        download_url: {
          type: String,
        },
        file_name: {
          type: String,
        },
      },
    ],
    size: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("product", ProductSchema);
