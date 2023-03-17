const mongoose = require("mongoose");
const vendorForm = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    documents: {
      download_url: {
        type: String,
        required: true,
      },
      file_name: {
        type: String,
        required: true,
      },
    },
    links: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("vendor", vendorForm);
