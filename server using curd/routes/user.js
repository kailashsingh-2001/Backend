const express= require('express');
const router= express.Router();
const userController= require('../controllers/user');



const verifyAuth= require('../middleware/verifyAuth')


router.post('/',userController.createUser)
router.get('/',verifyAuth,userController.getAllUser)
// router.patch('/',userController.updateUser)
// router.delete('/:id',userController.deleteRecord)



// sign up
router.post('/signup',userController.signupdata)
// login 
router.post('/login',userController.login)
// forgot 
// router.forgot('/forgot',userController.forgotpassword)


module.exports=router;