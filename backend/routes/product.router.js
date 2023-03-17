// controllers
const {
  Post_Create_Product,
  Get_Product,
  Get_Featured_Product,
  Get_Products,
  Add_Catgeory,
  getCategory,
  Get_Products_By_Brand,
} = require("../controllers/product.controller");

// middlewares
const {
  filterProductReqBody,
} = require("../middlewares/product/product.middlewares");

const router = require("express").Router();

// get route to get featured products
// GET: /api/product/featured
router.get("/featured", Get_Featured_Product);

// get rooute for fetching all products
router.get("/all", Get_Products);

router.get("/category", getCategory);
router.post("/category", Add_Catgeory);

router.post(
  "/create",
  // filterProductReqBody(["name", "description", "price", "quantity", "images"]),
  Post_Create_Product
);

// get route for fetchin single product
// GET: /api/product/:id
router.get("/all/:brand", Get_Products_By_Brand);
router.get("/:id", Get_Product);




// post route for creation of product
// POST: /api/product/create


module.exports = router;
