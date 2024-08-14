const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {signup, login} = require('../controllers/sign-login-controller');
const { auth } = require('../middleware/authUser');
const validInfo  = require('../middleware/validInfo');    

router.post('/signup',validInfo,signup);

router.post('/login', login);

router.get('/check',auth,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"User is authorized",
        user:req.user,
        status:200
    })
})

module.exports = router;