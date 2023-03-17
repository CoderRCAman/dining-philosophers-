const {Product}  = require("./utils/schema-validators/product.validators")


const result = Product.safeParse({
sad: ""
});

console.log({...result})