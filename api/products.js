const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


// tampil produk

router.get("/",async(req,res)=>{

const data = await Product.find({
status:"active"
});


res.json(data);

});



// tambah produk admin

router.post("/",async(req,res)=>{

try{


const product =
await Product.create(req.body);


res.json({
success:true,
product
});


}catch(e){

res.status(500).json({
error:e.message
});

}


});


module.exports = router;
