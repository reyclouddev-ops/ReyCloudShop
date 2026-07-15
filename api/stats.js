const express = require("express");
const Product = require("../models/Product");
const Order = require("../models/Order");


const router = express.Router();



router.get("/",async(req,res)=>{


const products =
await Product.countDocuments();


const orders =
await Order.countDocuments();


const paid =
await Order.countDocuments({

paymentStatus:"paid"

});



res.json({

products,
orders,
paid

});


});


module.exports=router;
