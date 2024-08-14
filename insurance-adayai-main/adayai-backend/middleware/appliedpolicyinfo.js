const AppliedpolicyInfo = (req, res, next) => {
    try {
        const { policyName, email, policyId, coverAmount } = req.body;
       if (coverAmount < 0) {
            return res
                .status(400)
                .json({ status: 400, message: 'Cover Amount Cannot be Negative' });
        }
        next();
    } catch (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }
}

module.exports = AppliedpolicyInfo;