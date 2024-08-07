const express= require("express");
const router= express.Router();
const rootcontroller= require('../controllers/rootcontroller')

router.get("/",rootcontroller);

module.exports = router;