const express = require("express");

const router = express.Router();


function generateInvoice(){

return "RC-" +
Date.now();

}



router.post("/",async(req,res)=>{


let invoice =
generateInvoice();


res.json({

success:true,

invoice

});


});


module.exports = router;
