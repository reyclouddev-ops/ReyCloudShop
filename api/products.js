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

// edit produk

router.put("/:id", async(req,res)=>{

const product =
await Product.findByIdAndUpdate(
req.params.id,
req.body,
{
new:true
}
);


res.json({
success:true,
product
});


});



// hapus produk

router.delete("/:id", async(req,res)=>{


await Product.findByIdAndDelete(
req.params.id
);


res.json({

success:true,

message:"Produk dihapus"

});


});
  
}catch(e){

res.status(500).json({
error:e.message
});

}


});


module.exports = router;
