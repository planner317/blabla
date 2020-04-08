const wsClient = require('websocket').client
let client = new wsClient()
client.connect("ws://localhost:2020")

let c = require("chalk")


let arr = { rus:[], eng:[], one: 0 }
///////////////////////   события подключение
client.on("connect", client => {
    client.send(JSON.stringify({ init: "buffer" }))
    client.send(JSON.stringify(arr))
    console.log(c.yellow(`STOP STOP STOP`));
    client.close();
})
