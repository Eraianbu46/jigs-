const axios = require('axios');
const Policy = require('../models/policyModel');
const PoliciesApplied = require('../models/PoliciesApplied')


async function fetchPolicyData(req, res) {
    try {
        const policyType = req.query.type;
        const availablePolicy = await Policy.find({ policyType: policyType });
        if(!availablePolicy){
            return res.status(404).json({message:'No Policy Found', status:404  });
        }
        res.status(200).json({message:availablePolicy, status:200});
    } catch (error) {
        res.status(500).json({message:error.message,status:500});
    }
}

async function createPolicy(req, res) {

    try {

        const policyData = req.body;
        const availablePolicy = await Policy.find({ policyName: policyData.policyName , policyType: policyData.policyType});

        if (availablePolicy.length) {
            return res.status(409).json({ message: 'Policy already exists', status: 409 });
        }

        const policy = new Policy(policyData);
        await policy.save();
        res.status(200).json({message:'Policy created successfully!',status:200});
    } 

    catch (error) {
        res.status(500).send({message:'Error creating policy',status:500});
    }

}

async function getCustomerPolicy(req, res) {

    try {
        const email = req.user.email;
        console.log(email)
        const customerPolicy = await PoliciesApplied.find({email});

        if (customerPolicy.length === 0) {
            return res.status(404).json({ message: 'No Policy Found for this customer', status: 404 });
        }

        res.status(200).json({ message: customerPolicy, status: 200 });
    } 
    catch (error) {

        res.status(500).json({ message: error.message, status: 500 });

    }
}


async function createCustomerPolicy(req,res){
    try{
        const {email, policyId , coverAmount , policyName}= req.body;

        const availablePolicy = await PoliciesApplied.find({ email,policyId });

        if (availablePolicy.length) {
            return res.status(409).json({ message: 'Customer already claimed the policy', status: 409 });
        }
        
        const policyApplied = new PoliciesApplied({
            email,
            policyId,
            coverAmount,
            policyName,
        });

        await policyApplied.save();

        res.status(200).json({message:'Policy created successfully!',status:200});
    }catch(err){    
        return res.status(409).json({message:err.message,status:409})
    }
}


module.exports = {
    fetchPolicyData,
    createPolicy,
    getCustomerPolicy,
    createCustomerPolicy
}