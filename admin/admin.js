async function addProduct(){


let data={

name:
document.getElementById("name").value,


category:
document.getElementById("category").value,


price:
document.getElementById("price").value


};



let res =
await fetch("/api/products",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:
JSON.stringify(data)

});


let json =
await res.json();


alert(
"Produk berhasil ditambah"
);


}
async function login(){


let data={

username:
username.value,

password:
password.value

};



let res =
await fetch("/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:
JSON.stringify(data)

});


let json =
await res.json();



if(json.token){


localStorage.setItem(
"adminToken",
json.token
);


location.href="dashboard.html";


}else{


alert(json.message);


}


}
