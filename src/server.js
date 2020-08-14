const proffys = [
    {
        name: "Glédison Bomfim",
        avatar:"https://avatars0.githubusercontent.com/u/57096162?s=460&u=6ae016d8b279736268075ed832e22a9598d22b1a&v=4",
        whatsapp: "49991215416",
        bio:"Entusiasta das melhores tecnologias no mundo da programação. Apaixonado por desenvolver aplicações que impacta a qualidade de vida das pessoas, tentando tornar um mundo melhor para se viver.",
        subject: "Programação",
        cost:"80",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    }, 
    {
        name: "Glédison Bomfim",
        avatar:"https://avatars0.githubusercontent.com/u/57096162?s=460&u=6ae016d8b279736268075ed832e22a9598d22b1a&v=4",
        whatsapp: "49991215416",
        bio:"Entusiasta das melhores tecnologias no mundo da programação. Apaixonado por desenvolver aplicações que impacta a qualidade de vida das pessoas, tentando tornar um mundo melhor para se viver.",
        subject: "Programação",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Eduacação Física",
    "Física",
    "Geografia",
    "História",
    "Matemátic",
    "Português",
    "Química"
]

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects})
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}


const express = require('express')
const server = express()

//configurar nonjucks
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)