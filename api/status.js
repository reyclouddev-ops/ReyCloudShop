const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.get("/:code", async(req,res)=>{

    const order = await Order.findOne({
        trackingCode:req.params.code
    });

    if(!order){
        return res.status(404).json({
            success:false,
            message:"Order tidak ditemukan"
        });
    }

    res.json({
        success:true,
        order
    });

});

module.exports = router;
