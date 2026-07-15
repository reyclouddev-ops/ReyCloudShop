const jwt = require("jsonwebtoken");


module.exports=(req,res,next)=>{


const token =
req.headers.authorization;


if(!token){

return res.status(401).json({
message:"Akses ditolak"
});

}



try{

const data =
jwt.verify(
token,
process.env.JWT_SECRET
);


req.admin=data;


next();


}catch{

res.status(403).json({
message:"Token invalid"
});


}


}
