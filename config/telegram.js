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



module.exports =
sendTelegram;
