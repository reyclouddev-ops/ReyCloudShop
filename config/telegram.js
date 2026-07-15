const axios = require("axios");


const TOKEN =
process.env.TELEGRAM_BOT_TOKEN;


const CHAT_ID =
process.env.TELEGRAM_CHAT_ID;



async function sendTelegram(message){


try{


await axios.post(

`https://api.telegram.org/bot${TOKEN}/sendMessage`,

{

chat_id:CHAT_ID,

text:message,

parse_mode:"HTML"

}


);


}catch(err){

console.log(
"Telegram Error",
err.message
);

}


}

const TelegramBot =
require("node-telegram-bot-api");


const bot =
new TelegramBot(
process.env.TELEGRAM_BOT_TOKEN,
{
polling:true
}
);



function orderNotify(data){


bot.sendMessage(

process.env.TELEGRAM_CHAT_ID,

`
🔔 ORDER BARU

📦 ${data.product}

👤 ${data.customerName}

💰 Rp${data.price}

Status:
Pending
`,

{

reply_markup:{

inline_keyboard:[

[
{
text:"✅ Terima",
callback_data:
"accept_"+data._id
},

{
text:"❌ Tolak",
callback_data:
"reject_"+data._id
}

]

]

}

}

);


}



module.exports={
bot,
orderNotify
};

module.exports =
sendTelegram;
