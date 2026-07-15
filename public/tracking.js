async function cekStatus(){

    const code = document.getElementById("code").value;

    const res = await fetch("/api/status/" + code);
    const json = await res.json();

    if(!json.success){
        hasil.innerHTML = "❌ Order tidak ditemukan";
        return;
    }

    const o = json.order;

    hasil.innerHTML = `
        <h2>${o.product}</h2>

        <p>Status Pembayaran :
        ${o.paymentStatus}</p>

        <p>Status Order :
        ${o.orderStatus}</p>

        <p>Catatan Admin :
        ${o.note}</p>
    `;
}
