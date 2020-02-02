const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
router.post('/', controller.saveUser);
router.delete('/:id',controller.saveDelete)
//router.get("/dale" , controller.get);
router.get("/", controller.getUsers);
module.exports = router;

