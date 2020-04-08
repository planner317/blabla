const ws = require('ws');
const color = require("chalk")

let server = new ws.Server({ port: 2020 })
///////////////////////   события подключение
let ready = 0, one;
server.on("connection", client => {
    client.param = {}
    //////////////////    событие сообщение от пользователя
    client.onmessage = (mess) => {
        try {
            let data = JSON.parse(mess.data);

            /////////// Клиент представляется и функция закрывается
            if (data.init) {
                if (data.init == "cloud.google.com") client.param = "eng"
                if (data.init == "cloud.yandex.ru") client.param = "rus"
                if (data.init == "buffer") client.param = "buffer"
                console.log(color.yellowBright(`CONNECTED ${data.init}`), server.clients.size);
                return
            }
            /////////// клиент буфер прислал массивы и кто первый
            if (client.param == "buffer") {
                let s= ( data.eng.length || data.rus.length)
                server.clients.forEach(c => {
                    if (c.param == "eng") c.send(JSON.stringify({ type: "write sound", arrStr: data.eng, status: s }))
                    if (c.param == "rus") c.send(JSON.stringify({ type: "write sound", arrStr: data.rus, status: s }))
                });
                one = data.one
                console.log(color.greenBright(data.rus));
                console.log(color.magentaBright(data.eng));
                console.log(color.bgGray(data.one));
                ready = 0;
                if (!data.eng.length || !data.rus.length) ready++ // rus или eng отсутствует готовность за него.
            }
            ///////////////// ГОТОВНОСТЬ КЛИЕНТОВ 
            if (data.type == "ready") {
                ready++;
                console.log(color.bgMagenta(`${client.param} ready ${ready}`));
            }
            ///////////////// Кто первый?
            if (ready == 2) {
                ready = 0;
                server.clients.forEach(c => {
                    if (c.param == one) c.send(`{"type":"speak"}`)
                });
            }
            /////////// клиент прислал END значит следующий должен проигрывать
            if (data.type == "end") {
                console.log(`FINISH`, " ", client.param, Date().slice(15,25));

                let select = (client.param == "eng") ? "rus" : "eng"
                server.clients.forEach(c => {
                    if (c.param == select) c.send(`{"type":"speak"}`)
                });
            }
        }
        catch (e) { console.log(e); }
    }

    client.onclose = (code) => {
        console.log(color.redBright("вышел клиент " + client.param + " код " + code.code))
    }
})

console.log(color.yellow(`║ ║ ╔═ ╦═╗ ╔═╗ ╔═╗ ╔═╣ ║╔═ ╔═ ═╦═`))
console.log(color.yellow(`║║║ ╠═ ╠═╣ ╚═╗ ║ ║ ║   ╠╣  ╠═  ║`))
console.log(color.yellow(`╚╩╝ ╚═ ╩═╝ ╚═╝ ╚═╝ ╚═╣ ║╚═ ╚═  ║`))
