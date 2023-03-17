const Cart = require("../models/cart");
const Product = require("../models/Product");

const {CartAdd} = require("../utils/schema-validators/cart.validators")

const POST_Add_To_Cart = async (req, res) => {
    try {
        // id will be provided in req.body;
        const data = req.body;
        const result = CartAdd(data);

        if(!result.success) {
            return res.status(403).json({
                success: false,
                message: "Invalid Values"
            })
        }

        const product = await Product.findById(data.product_id);

        if(!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found."
            })
        }

        const cart = await Cart.findById(data.cart_id)

        if(!cart) {
            return res.status(403).json({
                success: false,
                message: "Invernal Server Error"
            })
        }

        const updateCart = await Cart.updateOne({id: cart._id}, {
            products: {
                ...data.product
            }
        })

        return res.status(200).json({
            success: false,
            message: "Cart Updated"
        })

    } catch(error) {
        console.log(error)
    }
}

const POST_Remove_From_Cart = async (req, res) => {
    try {
        // id will be provided in req.body;
        const data = req.body;
        const result = CartAdd(data);

        if(!result.success) {
            return res.status(403).json({
                success: false,
                message: "Invalid Values"
            })
        }
        
        const cart = await Cart.findById(data.client_id)

        if(!cart) {
            return res.status(403).json({
                success: false,
                message: "Invernal Server Error"
            })
        }

        const updateCart = await Cart.deleteOn({id: cart._id}, {

        })

        return res.status(200).json({
            success: false,
            message: "Cart Updated"
        })

    } catch(error) {
        console.log(error)
    }
}

module.exports = {  
    POST_Add_To_Cart, Post_Remome_From_Card
}