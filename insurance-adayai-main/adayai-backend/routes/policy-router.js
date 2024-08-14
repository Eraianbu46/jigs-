const express = require('express')
const router = express.Router();
const {auth} = require('../middleware/authUser')
const policyInfo = require('../middleware/policyInfo')
const AppliedpolicyInfo = require('../middleware/appliedpolicyinfo')


const { fetchPolicyData,
         createPolicy,
          getCustomerPolicy,
           createCustomerPolicy } = require('../controllers/policy-controller')

router.route('/').get(fetchPolicyData).post(policyInfo,createPolicy)
router.route('/user').get(auth, getCustomerPolicy).post(AppliedpolicyInfo,createCustomerPolicy)

module.exports =  router;