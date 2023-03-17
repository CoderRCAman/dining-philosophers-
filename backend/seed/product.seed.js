const mongoose = require("mongoose");
const fetch = require("node-fetch");

const Product = require("../models/product");

const mongo_url =
  "mongodb+srv://aman:1234@cluster0.teowjud.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongo_url)
  .then((ok) => {
    console.log("DB connected");
  })
  .catch((er) => {
    console.log(er);
  });


const seedProducts = async () => {
    const response = await fetch("https://dummyjson.com/products")

    const result = await response.json()
    const prod = result.products;

    
    for (const p of prod) {
        const newProduct = new Product({
            brand: p.brand,
            description: p.description,
            price: p.price,
            images: p.images,
            description: p.description,
            name: p.title,
            size: ["large"],
            quantity: 5,
            category: "64132e1b410df989c052d886"
        })

        await newProduct.save()
    }


    const products = await Product.find({});

    console.log(products)
}

seedProducts();