const express = require('express');
const router = express.Router();
const controller = require('../controllers/motoController')
router.post('/', controller.saveMoto);
router.delete('/:id',controller.saveDelete)
//router.get("/dale" , controller.get);
router.get("/", controller.getMoto);
module.exports = router;

