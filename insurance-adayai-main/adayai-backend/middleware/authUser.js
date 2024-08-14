const jwt = require('jsonwebtoken');
// const User = require('../models/userModel')

const auth = async (req, res, next) => {
    let token ;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({ msg: "Not Authorized , No token" });
            }
            const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

            req.user = decode;

            // req.user = await User.findById(decode.id).select('-password');
            next();
        }
        catch (err) {
            return res.status(400).json({ err: "Wrong token" })
        }
        
    }
    if (!token) {
        return res.status(401).json({ msg: "Not Authorized , No token" });
    }
}

module.exports = { auth }