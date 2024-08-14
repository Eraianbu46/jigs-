const {hashPassword , genJWT} = require('../utils/helper.service')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')


const signup = async (req,res) =>{
    try {
        let { username, email, password } = req.body;
        const check = await User.findOne({$or:[{ email: email},{username:username}]});
        console.log(check)
        if(check){
            return res.status(400).json({ message: 'User Already Exists', status: 400 });
        }
        const token = genJWT( email, username );
        const bcryptPassword =await hashPassword(password);
        const user = new User({
            username,
            email,
            password: bcryptPassword,
        });
        await user.save();
        res
            .status(201)
            .json({token, message: 'User Created Successfully', status: 201 });
    } catch (err) {
        return res.status(409).json({status:409,message:err.message});
    } 
}

const login = async (req,res) =>{
    const { email, password } = req.body;
    
  
    try{
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid User Details" });
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ msg: "Invalid password" });
         
        }
       
        return res.status(200).json({
            _id: user._id,
            name: user.username,
            email: user.email,
            token: genJWT(user.email, user.username),
            status: "Successfully logged in"
        });  
    }catch(err){
         return res.status(500).json({message:err.message,status:500})
    }
    
}
module.exports = {
    signup , login
}