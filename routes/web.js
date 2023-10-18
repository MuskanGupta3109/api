const express=require('express')
const BlogController = require('../controller/BlogController')
const CategoryController = require('../controller/Categorycontroller')
const UserController = require('../controller/UserController')
const router=express.Router()

//blog controller
router.post('/create',BlogController.create)
router.get('/display',BlogController.display)
router.get('/view/:id',BlogController.view)
// router.post('/update/:id',BlogController.update)
router.post('/change-password', UserController.changePassword);
router.post('/delete/:id',BlogController.delete)


//user controller
router.post('/register',UserController.userregister)
router.post('/verify_login',UserController.verify_login)
router.post('/logout',UserController.logout)
router.get('/displayuser',UserController.displayuser)
router.post('/authwithcontact',UserController.createUserByContactNo)
// router.put('/update_user/:id',UserController.update)

//category controller
router.post('/categorycreate',CategoryController.create)
router.get('/categorydisplay',CategoryController.display)
router.get('/categoryview/:id',CategoryController.view)
router.post('/categoryupdate/:id',CategoryController.update)
router.post('/categorydelete/:id',CategoryController.delete)

module.exports=router
