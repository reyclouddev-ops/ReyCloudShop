async function loadOrder(){


let res =
await fetch("/api/orders");


let data =
await res.json();



orders.innerHTML="";



data.forEach(o=>{


orders.innerHTML += `

<tr>

<td>
${o.customerName}
</td>


<td>
${o.product}
</td>


<td>
${o.paymentStatus}
</td>


<td>

<button onclick="approve('${o._id}')">

Terima

</button>


<button onclick="reject('${o._id}')">

Tolak

</button>


</td>


</tr>


`;


});


}




async function approve(id){


await fetch("/api/orders/"+id,{

method:"PUT",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

paymentStatus:"paid",

orderStatus:"processing"

})


});


loadOrder();


}



async function reject(id){


await fetch("/api/orders/"+id,{

method:"PUT",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

paymentStatus:"rejected"

})


});


loadOrder();

}


loadOrder();
