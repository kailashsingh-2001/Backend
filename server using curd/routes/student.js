const express= require('express');
const router= express.Router();
const studentController= require('../controllers/student');


router.post('/',studentController.createStudent);

module.exports=router;