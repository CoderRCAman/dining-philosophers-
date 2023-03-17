const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("category", CategorySchema);
