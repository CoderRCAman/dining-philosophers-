// mongoose models
const Product = require("../models/product");
const { IncomingForm } = require("formidable");
// zod validators
const {
  Product: ProductZ,
  Product_Id,
  Product_Brand,
} = require("../utils/schema-validators/product.validators");
const path = require("path");
const _ = require("lodash");
const cypto = require("crypto");
const Category = require("../models/category");

const ObjectId = require("mongoose").Types.ObjectId


// Get controller to fetch a single product
const Get_Product = async (req, res) => {
  // zod to validate

  try {
    const productId = req.params.id;

    const result = Product_Id.safeParse(productId);

    console.log(result);

    if (!result.success) {
      return res.json(403, {
        success: result.success,
        message: "Something went wrong",
      });
    }

    // add logic for database query
    const product = await Product.findById({ _id: new ObjectId(productId) });

    if (!product) {
      return json(403, {
        success: false,
        message: "Product not found.",
      });
    }

    return res.json({ success: result.success, product });
  } catch (error) {
    console.log(error);
  }
};

// Get controller to fetch a single product
const Get_Products_By_Brand = async (req, res) => {
  // zod to validate

  try {
    const product_brand = req.params.brand;

    const result = Product_Brand.safeParse(product_brand);

    console.log(result);

    if (!result.success) {
      return res.json(403, {
        success: result.success,
        message: "Something went wrong",
      });
    }

    // add logic for database query
    const product = await Product.find({ brand:product_brand });

    if (!product) {
      return json(403, {
        success: false,
        message: "Product not found.",
      });
    }

    return res.json({ success: result.success, product });
  } catch (error) {
    console.log(error);
  }
};


const Add_Catgeory = async (req, res) => {
  try {
    const { name } = req.body;
    const cat = await Category.findOne({ name: name });

    if (cat) {
      return res.status(200).json({ msg: "create" });
    }

    const newCat = new Category({
      name: name,
    });

    await newCat.save();
    return res.status(200).json({ msg: "create" });
  } catch (error) {
    console.log(error);
  }
};

// Get controller to fetch a faetured products
const Get_Featured_Product = async (req, res) => {
  // zod to validate
  try {
    // logic for defining what it means by featured

    if (!result.success) {
      return res.json(403, {
        success: result.success,
        message: "Something went wrong",
      });
    }

    // add logic for database query
    // database query will be based on ffeatured logic
    // const product = await product.findById({_id: productId});

    // if(!product) {
    //     return json(403, {
    //         success: false,
    //         message: "Product not found."
    //     })
    // }

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

// Get controller to fetch all products
const Get_Products = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

// Post controller to create new Product
const Post_Create_Product = async (req, res) => {
  // use zod to validate
  const options = {
    uploadDir: path.join(__dirname, "..", "storage"),
    maxFileSize: 2 * 1024 * 1024,
    allowEmptyFiles: false,
    multiples: true,
    filename: (name, ext, part, form) => {
      return cypto.randomUUID() + part.originalFilename;
    },
  };
  try {
    const form = new IncomingForm(options);
    const fileArray = [];
    form.parse(req, async (err, fields, files) => {
      const result = ProductZ.safeParse(fields);
      console.log(result.error);
      if (!result.success) {
        return res.status(403).json({
          success: result.success,
          message: "Something went wrong",
        });
      }
      console.log(fields);

      if (Array.isArray(files.file)) {
        files.file.forEach((f) => {
          fileArray.push({
            download_url: `http://localhost:4269/${f.newFilename}`,
            file_name: files.file.newFilename,
          });
        });
      } else {
        fileArray.push({
          download_url: `http://localhost:4269/${files.file.newFilename}`,
          file_name: files.file.newFilename,
        });
      }
      const newProduct = new Product({
        name: fields.name,
        description: fields.description,
        brand: fields.brand,
        images: fileArray,
        price: fields.price,
        category: fields.category,
        quantity: fields.quantity,
        size: fields.size,
      });
      await newProduct.save();
      return res.status(200).json(newProduct);
    });

    // mongoose logic here

    // return res.json({ success: result.success });
  } catch (error) {
    console.log(error);
  }
};

const getCategory = async (req, res) => {
  try {
    console.log('dfjhj')
    const allCat = await Category.find({}); 
    console.log(allCat)
    return res.status(200).json(allCat);
  } catch (error) {
    console.log("yahaka",error);
  }
};
module.exports = {
  Post_Create_Product,
  Get_Product,
  Get_Featured_Product,
  Get_Products,
  Add_Catgeory,
  getCategory,
  Get_Products_By_Brand
};
