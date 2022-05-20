const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.json({
        productName:"Camisa roxa comum"
    });
})

router.get("/products", (req,res)=>{
    
})

module.exports = router;