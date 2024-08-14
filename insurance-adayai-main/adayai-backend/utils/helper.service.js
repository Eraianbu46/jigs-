const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const validEmail = (email) => {
    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
};



const hashPassword =async  (password) =>{
    const saltRound = parseInt(process.env.SALT);
    const salt = await bcrypt.genSalt(saltRound);
    return await bcrypt.hash(password, salt);
}

const genJWT =  (email,username) =>{
    return jwt.sign({email , username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '7d'});
}

module.exports = { validEmail , hashPassword , genJWT };