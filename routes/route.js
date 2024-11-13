const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// test routes
const { createTest, updateTest, deleteTest, getTest, getAllTest } = require('../controllers/test');
// 
router.post("/test/create", checkAuthorizationHeaders,authorizeUser("createtest") ,createTest);
router.put("/test/update/:id", checkAuthorizationHeaders,authorizeUser("updatetest"), updateTest);
router.delete("/test/delete/:id", checkAuthorizationHeaders, authorizeUser("deletetest"), deleteTest);
router.get("/test/get/:id", checkAuthorizationHeaders, authorizeUser("readtest"), getTest);
router.get("/test/getAll", checkAuthorizationHeaders, authorizeUser("readtest"), getAllTest);

  
module.exports = router;
