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
const API="/api/products";



async function addProduct(){


let data={

name:name.value,

category:category.value,

price:Number(price.value)

};



await fetch(API,{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:
JSON.stringify(data)

});


alert(
"Produk ditambahkan"
);


loadProduct();


}




async function loadProduct(){


let res =
await fetch(API);


let data =
await res.json();



list.innerHTML="";



data.forEach(p=>{


list.innerHTML += `

<tr>

<td>
${p.name}
</td>

<td>
${p.category}
</td>

<td>
Rp${p.price}
</td>


<td>

<button>
Edit
</button>


<button>
Hapus
</button>


</td>


</tr>

`;


});


}



loadProduct();
async function loadStats(){


let res =
await fetch("/api/stats");


let data =
await res.json();



product.innerHTML =
data.products;


order.innerHTML =
data.orders;


paid.innerHTML =
data.paid;


}


loadStats();
