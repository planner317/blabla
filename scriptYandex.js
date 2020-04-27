// ПОЛУЧИАЮ МЕНЮ ИЗ GIT И ВСТАВЛЯЮ В BODY
document.body.innerHTML=""
fetch("https://planner317.github.io/blabla/menuYandex.html")
// fetch("https://blabla/data/menuYandex.html")
    .then(res => res.text())
    .then(html => {
        document.body.innerHTML = html + document.body.innerHTML
        setTimeout(init, 1000)
    })

let yesSound = `data:audio/mpeg;base64,//NAwAAAAAJYAUAAABKCgIEw4BAiDBGJQB1B+BncSAC/AuNO+E48JHfDY4Q/ygPCALP/IHgMFg3/9tgeCw8BgkHgM//34OGBYAwWIQYz//t/tEg8HBpMHBA8SB0SwCAcf///f/CQeB7/80LAWxpLGsZXhzggECgPAkDY4JAOxLPHxueAAagYbjbcb/NNNzQHQpF+ab/+c+f/9l/s2+mpmqq//pI4lv0qqJHHJTlVRI4kllJEiRIKAQCIzMf1Ws9WxyVb6r01bL5tMlVHAqKW1LH/80DATRX5+uu3yjAD/8FQgoKbFTe77BSNwJKJwoJzGMgIIgQSpn63lxcbxYkNi3Fi65cs+XUT0kIEXGd/9adTVvcRy444IRzihP84gEwcJxQ4je+srbIclmqowDYrWYev3F/9KHVxVf/zQsBQDzAyy/wIRgbJSzM2WUI/eVFdDGsdxXarI/1YqlYGzIWDDABIh0r1wVln1sUoGlu/YVOsADP5YOoGu/9EAlyRwNtyyAlCPaCDYpgESFGAa7tLR1RLVYvP+qpJ+ZFSOkzyfpogo//zQMBvEjFW0/4YxJJCIShM8JnC4cDocWOWHDO5v0yx0awt8sHiJYUao9+DomBp/9n6AGk1I5Hq7kAEIwhITohCNCCUQV0maGqM3Qo2KCwvmCioqGK+4wa7/OJJZfNbJHeVFDf//87r//NCwIES0Qqr/hlGcB/Xe3uFF////+FiDFaH4uO8qieDRfyxIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAg//NAwJETAJKaVghGTwAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAA=`
let noSound = `data:audio/wav;base64,UklGRqwEAABXQVZFZm10IBAAAAABAAEAIlYAACJWAAABAAgAZGF0YYgEAACAfnx5dnRyb21ramhoZ2doaWttb3N2en+DiY+UmqKosLe9w8jN0dXY297g4uPk5OTj4uHf3drX08/KxcC6tK6ooZqTi4N8dG1lXldQSUI9NzItKSUhHhwbGRkZGRscHiElKS0yOD5FS1JZYWlweYCIkJifpq2zub/Fyc7S1djb3N7e397d29nX08/LxsC7tK2mn5ePh352bmVdVk5HQDkzLiklIh8cGhkZGhsdICMnKzA2PENKUllhanF6goqSm6KpsLa8wsfLz9LU1tfX19bU0c7KxcC6s6ylnZSLgnlwZ15VTUU9NzErJyMgHRwcHB4gIicsMTc+Rk5XYGlye4WOl5+osLe+xMnO0tXY2dra2dfU0MzGwbmyqqGYjoR6cGZdU0tDOzUvKiYjISAgIiQoLDI5QEhSW2VveoSOmaKrtLzDytDU2Nvc3d3b2dXRy8S9tKuhl4yBdmtgVk1EPDUvKiYkIiMkJiovNTxFTVdibXiDjpmjrba+xczR1dfZ2djV0czFvrWroJSIfHBjV0xCOTEqJSIfHh8hJSsyOkROWWVxfoqWoay1vsbN0tbY2djW0czFvbOonI+CdWhbT0Q7MywnJCIiJSkvN0FLWGRyf42aprK8xs7U2Nvc3NnVzsa8saSXiXpsX1JGPDQtKCUlJiowOEFMWWZ1g5Gfq7fBydDV19jW0svDuKydjn5uX1BDNy4nIiAgIygwOkdVY3ODkqGuusTN09fY19PNw7irnIt7alpLPjQrJiMjJy03Q1FhcoOUpbPAy9Ta3d3a1Mu/saCPfWtZSj0yKiYkJis0P01dboCSorG+ydDV1tPNw7amlYFtWkk7LyYiISQsN0ZWaX2QorPBzNTY2NTMwbKgi3djUEAzKiUlKDE+T2N4jaG0xNHa3t7Z0MKwm4RtV0U1KiMiJS07S191ip+xwMzS1NHJu6mUfWVQPS8nIyYuPE9lfJSqvMrU2NfPw7GagmpUQDMqJyw1RVpyiqK2xtHW1My8p45zWUMxJSEkL0BWcIqjuMnT19PJt5+EaE46KyUmMEFZdZGsw9Pc3tfHsJN1WEAuJCMrO1JuiqW8y9PTybacfV9EMSUlLUFaeZizyNXY0sKoimpNNysoMEJcfJu1ydPTx7CRb041JiIsQF6AoLvO19PDqIdkRTAnKjxYe5+90tvWxKV+WTonISpBY4iqxdTVyKyHYEAqJC5Ha5O30d3axqR6UzQlJjdXfqPB0tLBoHZOMSQqQ2mUudHYyK6HYEU1OUloiqe6vbSaelxHQklfepaqsq+dhWxYUVRkepGip6OTfWhaV15vg5Sfn5iHdWZgY25/j5mblId2aWRncYCMlJSOgXRsaW96ho+TkId7cWxvdoGJjYyFfHNwcnqDioyKg3p0cnZ8hIiJhH53dHZ8goeIhX55dnd8goWGg315d3l+g4WEgHx5eXyBhISBfXp5fICDg4F9e3t9gIKDgH17e36BgoJ/fHt9f4GCgH18fH6BgYF+fHx+gIGAfnx9foCBgH59fX+AgX99fX5/gIB/fn1+gIB/gA==`
let audioArr = [];
let flag = 0, interval;

function init() {
    initWebSocket()
    token.value = "c20c494fa580e4a7f9eb70b4bbddc12d7377564d:1587723672"
    audio.volume = 0.7
    speed.onmousemove = sp; sp()
    prov.onclick = () => {
        audioArr = []
        speak("работает", true)
    }
    audio.onerror = err => log.innerHTML = err
}
function sp() { speedView.innerText = speed.value }

///////////////////////////////////// YANDEX RUS
function speak(mess, proverka) {
    ///-------------------BODY-----------
    let bodyYandex = {
        message: mess,
        language: "ru-RU",
        speed: speed.value,
        voice: voice.selectedOptions[0].innerText,
        emotion: lang.selectedOptions[0].innerText,
        format: "oggopus"
    }

    return new Promise((res, rej) => {

        fetch("https://cloud.yandex.ru/api/speechkit/tts", {
            method: "POST",
            body: JSON.stringify(bodyYandex),
            headers: {
                "content-Type": "application/json",
                "x-csrf-token": token.value
            }
        })
            .then(respons => {
                if (respons.ok) return respons.arrayBuffer()
                else return respons.text()
            })
            .then(data => {
                //////----------- НЕУДАЧА ------------
                if (data.constructor === String) {
                    log.innerHTML = `<p style="color:#f55">${data}</p>`
                    speakError = 1
                    rej(data)
                }
                ///////---------- НОРМ ------------
                else {
                    let blob = new Blob([data], { type: "audio/ogg" })
                    let url = URL.createObjectURL(blob)
                    if (proverka) {
                        audio.src=url; audio.play()
                        log.innerHTML = `<p style="color:green">работает</p>`
                        return;
                    }
                    let a = new Audio(url)
                    a.controls=1
                    playlist.append(a)
                    let span = document.createElement("span")
                    span.innerText = mess + "\n"
                    playlist.append(span)
                    audioArr.push(a)
                    log.innerHTML = `<p style="color:green">ok</p>`
                    res()
                }
            }).catch(e => { console.log(e) })
    }).catch(e => { console.log("rej google", e) })
}

///////////////////////////// webSocket /////////////////////
let ws
function initWebSocket() {
    ws = new WebSocket("ws://localhost:2020")

    ws.onmessage = messag

    ws.onopen = e => {
        let json = JSON.stringify({ init: self.location.host })
        ws.send(json)     // при соединение говорю от куда я
        log.innerHTML = `<p style="color:green">WebSocket 2020 подключен</p>`
    }
    ws.onclose = e => {
        log.innerHTML = `<p style="color:red">WebSocket 2020 не подключен</p>`
        initWebSocket()
    }
}
let nSound = 0, speakError
let SoundError = new Audio(`https://planner317.github.io/blabla/error.wav`)

async function messag(mess) {
    //  приходит массив из строк на русском
    let data = JSON.parse(mess.data)

    if (data.type == "write sound") {
        nSound = 0; audioArr = [];    //очищаю готовый результаты звуков
        clearInterval(interval);
        menu.querySelectorAll('audio').forEach(e => {
            e.pause();
        })
        speakError = 0;

        let a1 = new Audio()
        if (data.status) a1.src = yesSound;
        else a1.src = noSound
        a1.play()

        for (let i = 0; i < data.arrStr.length; i++) {
            await speak(data.arrStr[i])
            if (speakError) break
        }

        if (speakError) SoundError.play()
        if (data.arrStr.length) ws.send(`{"type":"ready"}`)   // отрпавляю готово если данные были.
    }

    if (speakError) {
        ws.send(JSON.stringify({ type: "end" }))
        return
    }

    if (data.type == "speak") {
        if (nSound >= audioArr.length) {
            nSound = 0; audioArr = [];                        //очищаю готовый результаты звуков
            return
        }
        audioArr[nSound].play()
        flag = 1;

        interval = setInterval((a,nSound) => {
            if (a.currentTime > a.duration - 0.2 && flag) {

                ws.send(JSON.stringify({ type: "end" }))
                console.log("конец ", nSound);
                flag = 0;
                clearInterval(interval)
            }
        }, 50, audioArr[nSound], nSound)

        nSound++
    }
}
