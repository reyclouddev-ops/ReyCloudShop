const express = require("express");

const router = express.Router();


router.post("/", async(req,res)=>{


const {
orderId,
proof
}=req.body;


// sementara simpan URL bukti

res.json({

success:true,

message:
"Bukti pembayaran diterima",

orderId,
proof

});


});


module.exports = router;
