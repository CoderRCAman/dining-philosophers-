const Vendor = require("../models/vender");
const { IncomingForm } = require("formidable");
const path = require("path");
const { unlink, access } = require("fs/promises");
const _ = require("lodash");
const cypto = require("crypto");
const { User_Id } = require("../utils/schema-validators/user.validators");

// User model
const User = require("../models/user");
const Cart = require("../models/cart");
const Address = require("../models/address");
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID =
  "928690520998-9s94krn410brcuhpa44h760bdndba5lk.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

//validator
const { Vendor_Id } = require("../utils/schema-validators/vendor.validators");

// get single vendor details
const GET_Vendor_Details = async (req, res) => {
  try {
    // zod validation if id is provided
    const id = req.params.id;

    const result = Vendor_Id.safeParse(id);

    if (!result.success) {
      return res.json(403, {
        success: result.success,
        message: "Id not provided",
      });
    }

    // database query for vendor profile
    const vendor = await Vendor.findById(id);

    if (!vendor) {
      return res.json(404, {
        success: false,
        message: "Vendor not found.",
      });
    }

    return res.json(200, {
      success: true,
      message: "Vendor found.",
      vendor,
    });
  } catch (error) {
    console.log(error);
  }
};

const submitForm = async (req, res) => {
  const options = {
    uploadDir: path.join(__dirname, "..", "storage"),
    maxFileSize: 2 * 1024 * 1024,
    allowEmptyFiles: false,
    multiples: false,
    filename: (name, ext, part, form) => {
      return cypto.randomUUID() + part.originalFilename;
    },
  };
  const form = new IncomingForm(options);
  form.keepExtensions = true;
  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.log(err);
        if (err.code === 1009)
          return res.status(500).json({ msg: "Maximum supported file is 2mb" });
        else return res.status(500).json({ msg: "Somethings went wrong!" });
      }
      try {
        const { brand, links } = fields;
        const newForm = new Vendor({
          brand: brand,
          links: links,
          documents: {
            download_url: `http://localhost:4269/${files.file.newFilename}`,
            file_name: files.file.newFilename,
          },
        });
        await newForm.save();
        return res.status(200).json({
          msg: "Form was submitted",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error.message });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

const vendorLogin = async (req, res) => {
  const token = req.body.auth_id;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token.credential,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userexist = await User.findOne({ email: payload.email });
    if (userexist) {
      res.cookie("auth", true, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });
      res.cookie("role", userexist.role, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
      });
      res.cookie("id", userexist._id, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
      });
      return res.status(200).json({
        auth: true,
        id: userexist._id,
        role: userexist.role,
      });
    }
    const newCart = new Cart({
      products: [],
    });

    const savedCart = await newCart.save();

    const newUser = new User({
      email: payload.email,
      name: payload.name,
      avatar: payload.picture,
      cart: savedCart._id,
      role: "vendor",
    });
    const savedUser = await newUser.save();

    console.log("savedCart:", savedCart);
    res.cookie("auth", true, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });
    res.cookie("role", newUser.role, {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    res.cookie("id", savedUser._id, {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      role: newUser.role,
    });
    return res.status(200).json({
      auth: true,
      id: newUser._id,
      role: newUser.role,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  submitForm,
  vendorLogin,
};
