const { z } = require("zod");


const CartAdd = z.object({
    cart_id: z.string(),
    product_id: z.string(),
    user_id: z.string(),
})
const Cart_Id = z.string();
const Product_Id = z.string();

module.exports = {
    Cart_Id, Product_Id, CartAdd
}
