const { z } = require("zod");

const Product = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  quantity: z.string(),
  brand: z.string(),
  size: z.string().array(),
});

const Product_Id = z.string();

const Product_Brand = z.string();

module.exports = {
  Product,
  Product_Id,
  Product_Brand
};
