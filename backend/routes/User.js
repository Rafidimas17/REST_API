const express=require('express')
const {
  runValidation,
  validationDaftar,
  validationLogin
} = require("../validator/validator.js");
const middleware=require("../middleware/middleware.js")
const router=express.Router()
const {
  DaftarUser,
  LoginUser,
  getSingleUser,
  verifyEMail,
 forgotPassword,
  resetPassword,
} = require("../controller/UserController.js");
router.post("/daftar", validationDaftar,runValidation, DaftarUser);
router.post("/login", LoginUser, validationLogin, runValidation);
router.get("/user", middleware, getSingleUser);
router.put("/forgotPassword",forgotPassword)
router.put("/resetpassword",resetPassword)
router.get("/verify-email/:tokenAktif/", verifyEMail);

module.exports=router