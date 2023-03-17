const mongoose = require("mongoose");
const addressSchema = mongoose.Schema(
  {
    addressline1: {
      type: String,
      trim: true,
      required: true,
    },
    addressline2: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: String,
      trim: true,
      required: true,
    },
    pincode: {
      type: String,
      trim: true,
      required: true,
    },
    landmark: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("address", addressSchema);
