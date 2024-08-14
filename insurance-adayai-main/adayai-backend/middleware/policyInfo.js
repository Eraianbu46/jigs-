const policyInfo = (req,res,next) =>{
    try{
        const { policyName, policyType, coverAmount, companyName, recommendAds } = req.body;
        if (![policyName, policyType ,coverAmount, companyName, recommendAds].every(Boolean)) {
            return res
                .status(400)
                .json({ status: 400, message: 'One or More Credential is Missing' });
        } else if (coverAmount < 0) {
            return res
                .status(400)
                .json({ status: 400, message: 'Cover Amount Cannot be Negative' });
        }
        next();
    }catch(err){

    }
}

module.exports = policyInfo;