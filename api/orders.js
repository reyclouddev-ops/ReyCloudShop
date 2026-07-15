const express = require("express");
const Order = require("../models/Order");
const sendTelegram =
require("../config/telegram");

const router = express.Router();


// buat order

router.post("/",async(req,res)=>{


try{


const order =
await Order.create(req.body);
  
await sendTelegram(`

🔔 <b>ORDER BARU</b>


👤 Nama:
${order.customerName}


📱 WhatsApp:
${order.whatsapp}


📦 Produk:
${order.product}


💰 Harga:
Rp${order.price}


🎮 Roblox:
${order.robloxUsername || "-"}


Status:
Pending

`);

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


const updated =
await Order.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);


if(
req.body.paymentStatus==="paid"
){

await sendTelegram(`

✅ <b>PEMBAYARAN DITERIMA</b>


📦 Produk:
${updated.product}


👤 Customer:
${updated.customerName}


Status:
Diproses

`);

}


res.json(updated);


});


module.exports=router;
