const wsClient = require('websocket').client
let client = new wsClient()
client.connect("ws://localhost:2020")
/////////////   ОБРАБОТКА БУФЕРА ОБМЕНА РАЗДЕЛЯЮ АНГ И РУС СИМВОЛЫ
let buffer = require("copy-paste")
let c= require("chalk")
let paste = buffer.paste()

////////// стераю все лишнии символы
let result = paste.replace(/[^а-яё)(+=.,0-9a-z]/gi, " ")

///////// убираю точку между букв
result = result.replace(/([^\s\d])\.([^\s\d])/gi, "$1 $2")

///////// поиск всех русских букв и цифр + - =
let rus = result.match(/[+=\dа-яё].*?((?=[a-z])|$)/gi) || []

//////// поиск любых англ букв
let eng = result.match(/[a-z].*?((?=[+=\dа-яё])|$)/gi) || []

/////// определяю кто первый
let one =0;
let oneR = result.indexOf(rus[0])
let oneE = result.indexOf(eng[0])

if (oneR == -1) oneR = 987654321
if (oneE == -1) oneE = 987654321

if (oneR == oneE) one = 0
else if (oneR < oneE) one = "rus"
else one = "eng"

console.log(paste);
console.log(c.inverse(oneR));
console.log(c.bgGrey(oneE));
console.log(c.bgRedBright(one));
console.log(result);
rus.forEach(e=>{ console.log(c.yellow(e));})
eng.forEach(e=>{ console.log(c.cyan(e));})

let arr = {eng, rus, one}
///////////////////////   события подключение
client.on("connect", client => {
    client.send(JSON.stringify({ init: "buffer" }))
    client.send(JSON.stringify(arr))
    console.log(`-----------------send--------------`);
    client.close();
})
