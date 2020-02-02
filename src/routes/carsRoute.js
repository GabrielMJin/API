const express = require('express');
const router = express.Router();
const controller = require('../controllers/carsController')
router.post('/', controller.saveCars);
router.delete('/:id',controller.saveDelete)
//router.get("/dale" , controller.get);
router.get("/", controller.getCars);
module.exports = router;

