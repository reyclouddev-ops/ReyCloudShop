const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema({

customerName:{
    type:String,
    required:true
},


whatsapp:{
    type:String
},


product:{
    type:String,
    required:true
},


category:{
    type:String
},


robloxUsername:{
    type:String
},


price:{
    type:Number
},


paymentStatus:{
    type:String,
    default:"pending"
},


orderStatus:{
    type:String,
    default:"waiting"
}, 
    
paymentProof:{
    type:String,
    default:null
},

whatsappAdmin:{
    type:String,
    default:"6281260512743"
}, 

    invoiceId:{
    type:String,
    unique:true
},

invoiceStatus:{
    type:String,
    default:"unpaid"
}

},{
timestamps:true
});


module.exports =
mongoose.model(
"Order",
OrderSchema
);
