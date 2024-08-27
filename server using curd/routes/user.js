const express= require('express');
const router= express.Router();
const userController= require('../controllers/user');


router.post('/',userController.createUser)
router.get('/',userController.getAllUser)
// router.patch('/',userController.updateUser)
// router.delete('/:id',userController.deleteRecord)



// sign up
router.post('/signup',userController.signupdata)
// login 
router.post('/login',userController.login)

router.post('/forgotpas,userC')

module.exports=router;