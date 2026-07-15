const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");


const router = express.Router();



router.post("/login", async(req,res)=>{


const {
username,
password
}=req.body;



const admin =
await Admin.findOne({
username
});


if(!admin){

return res.status(404).json({
message:"Admin tidak ditemukan"
});

}



const match =
await bcrypt.compare(
password,
admin.password
);



if(!match){

return res.status(401).json({
message:"Password salah"
});

}



const token =
jwt.sign(
{
id:admin._id
},
process.env.JWT_SECRET,
{
expiresIn:"1d"
}
);



res.json({

success:true,

token

});


});


module.exports=router;
