const express = require("express");
const Order = require("../models/Order");


const router = express.Router();


// buat order

router.post("/",async(req,res)=>{


try{


const order =
await Order.create(req.body);


res.json({

success:true,

message:"Order dibuat",

data:order

});


}catch(err){

res.status(500).json({

error:err.message

});

}


});



// ambil semua order admin

router.get("/",async(req,res)=>{


const orders =
await Order.find()
.sort({
createdAt:-1
});


res.json(orders);


});




// update status

router.put("/:id",async(req,res)=>{


const update =
await Order.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);


res.json(update);


});


module.exports=router;
