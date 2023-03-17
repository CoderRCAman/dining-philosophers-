const mongoose = require("mongoose")

const fetch = require("node-fetch");
// category model
const Category = require("../models/category");

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

const seedCategory = async () => {

    
    try {

        const result = await fetch("https://dummyjson.com/products");
        const products = await result.json().products

        const categories = products.map(product => {
            retur 
        })

        const categories = await Category.insertMany(categoriesJson)
        console.log(categories)
    } catch(errors) {
        console.log(errors)
    }
  

}

seedCategory();


