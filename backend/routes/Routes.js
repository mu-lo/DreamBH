const express = require("express");
const VerifyToken = require("../utils/VerifyToken")
const router = express.Router();

//registration and Authenication
const{RegisterUser, Login} = require("../controller/userCtlr");

router.route('/register').post(RegisterUser);
router.route('/Login').post(Login);

//post routes
const{CreatePost, GettingAllPosts} = require("../controller/postCtlr");

router.route('/createpost', VerifyToken).post(CreatePost);
router.route('/getposts', VerifyToken).get(GettingAllPosts);

module.exports = router;