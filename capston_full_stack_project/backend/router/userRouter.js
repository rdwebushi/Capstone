let express=require("express");
let router=express.Router();
let userController=require("../controller/userController");

router.post("/register",userController.register);
router.post("/signIn",userController.signIn);
router.get("/users", userController.retrieveUserInfo);
router.delete("/delete/:id",userController.deleteUser);

module.exports=router;