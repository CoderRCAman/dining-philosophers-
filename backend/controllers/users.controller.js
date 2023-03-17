//validators
const { User_Id } = require("../utils/schema-validators/user.validators");

// User model
const User = require("../models/user");
const Cart = require("../models/cart");
const Address = require('../models/address')
const { OAuth2Client } = require("google-auth-library");
const { default: mongoose } = require("mongoose");
const CLIENT_ID =
  "928690520998-9s94krn410brcuhpa44h760bdndba5lk.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

const login = async (req, res) => {
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
      products: []
    });

    const savedCart = await newCart.save();

    const newUser = new User({
      email: payload.email,
      name: payload.name,
      avatar: payload.picture,
      cart: savedCart._id
    });
    const savedUser = await newUser.save();

  
    console.log("savedCart:", savedCart)
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

// Get route to fetch user details
const GET_User_Details = async (req, res) => {
  try {
    // zod validation if id is provided
    const id = req.params.id;

    const result = User_Id.safeParse(id);
    if (!result.success) {
      return res.json(403, {
        success: result.success,
        message: "Id not provided",
      });
    }

    // database query for user profile
    const user = await User.findById(id)
      .populate("address")
      .populate({
        path: "cart",
        populate: {
          path: "products",
          model: "product",
        },
      });

    if (!user) {
      return json(404, {
        success: false,
        message: "User not found",
      });
    }

    return res.json(200, {
      success: true,
      message: "User found.",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, GET_User_Details };
