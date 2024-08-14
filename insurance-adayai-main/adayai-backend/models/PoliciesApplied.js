const mongoose = require('mongoose');

const policyAppliedSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    policyId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    coverAmount:{
        type:String,
        required:true
    },
    policyName:{
        type:String,
        required:true
    },
    approved:{
        type: String, 
        enum: ['pending', 'approved', 'rejected'], 
        default: 'pending'
    }

})

const PoliciesApplied = mongoose.model('PoliciesApplied', policyAppliedSchema);

module.exports = PoliciesApplied;