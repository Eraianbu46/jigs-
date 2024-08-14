const {validEmail} = require('../utils/helper.service')

module.exports = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;
    if (req.path === '/signup') {
        if (![username, email, password, confirmPassword].every(Boolean)) {
            return res
                .status(400)
                .json({ status: 400, message: 'One or More Credential is Missing' });
        } else if (!validEmail(email)) {
            return res.status(400).json({ status: 400, message: 'Invalid Email' });
        } else if (password !== confirmPassword) {
            return res
                .status(400)
                .json({ status: 400, message: 'Password Does Not Match' });
        } else if (password.length < 6) {
            return res
                .status(400)
                .json({ status: 400, message: 'Password is Less Than 6 Characters' });
        }
    } else if (req.path === '/login') {
        if (![email, password].every(Boolean)) {
            return res
                .status(401)
                .json({ status: 401, message: 'Missing Credentials' });
        } else if (!validEmail(email)) {
            return res.status(401).json({ status: 401, message: 'Invalid Email' });
        }
    }

    next();
};