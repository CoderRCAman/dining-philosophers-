const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
    },
    avatar: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    address: [
      {
        type: mongoose.Types.ObjectId,
        ref: "address",
      },
    ],
    cart: {
      type: mongoose.Types.ObjectId,
      ref: "cart",
    },

    vendor: {
      type: mongoose.Types.ObjectId,
      ref: "vendor",
    },
    verifiedVender: {
      type: Boolean,
      defaul: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
