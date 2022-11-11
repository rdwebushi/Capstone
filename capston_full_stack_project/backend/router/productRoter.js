let express = require("express");
let router = express.Router();  // router reference. 
let productController = require("../controller/ProductController");
let auth = require("../middleware/auth");


// admin IsUser
router.get("/admin/getAllProduct",productController.retrieveProductInfo);
router.post("/admin/storeProduct",productController.storeProductInfo);
router.put("/admin/updateProduct",auth.verifyJsonToken,auth.isAdmin,productController.updateProdut);
router.delete("/admin/deleteProdut/:pid",productController.deleteProductById);
router.get("/admin/findProductById/:pid",productController.findProductById);

// normal user 
router.get("/user/getAllProduct",productController.retrieveProductInfo);
router.get("/user/findProductById/:pid",productController.findProductById);
module.exports= router;
