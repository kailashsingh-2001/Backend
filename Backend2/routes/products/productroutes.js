const express= require("express");
const router= express.Router();
const getproductcontrollers = require('../../controllers/productcontroller/getproductcontroller')

router.get('/', getproductcontrollers);


module.exports = router ;


