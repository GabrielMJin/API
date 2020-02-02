const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.post('/', function (req, res, next) {
    try {
        res.status(200).send({
        
            tittle: "post sendo feito pelo mysql"
    
    
        })


    } catch (error) {
        res.status(500).send(error)
    }
    



})

module.exports = router;
