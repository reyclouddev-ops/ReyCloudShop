const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

category:{
type:String,
required:true
},

description:String,

price:Number,

image:{
type:String
}


// khusus Roblox
robloxUsername:String,

robloxLink:String,


status:{
type:String,
default:"active"
}


},{
timestamps:true
});


module.exports =
mongoose.model("Product",ProductSchema);
