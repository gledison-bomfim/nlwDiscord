const proffys = [
    {
        name: "Glédison Bomfim",
        avatar:"https://avatars0.githubusercontent.com/u/57096162?s=460&u=6ae016d8b279736268075ed832e22a9598d22b1a&v=4",
        whatsapp: "49991215416",
        bio:"Entusiasta das melhores tecnologias no mundo da programação.Apaixonado por desenvolver aplicações que impacta a qualidade de vida das pessoas, tentando tornar um mundo melhor para se viver",
        subject: "Programação",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:
    }
]

function pageLanding(req, res){
    return res.sendFile(__dirname+ "/views/index.html")
}

function pageStudy(req, res){
    return res.sendFile(__dirname+ "/views/study.html")
}

function pageGiveClasses(req, res){
    return res.sendFile(__dirname+ "/views/give-classes.html")
}


const express = require('express')
const server = express()

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)