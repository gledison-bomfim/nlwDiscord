const Database = require('./db.js')
const createProffy = require('./createProffy')


    Database.then((db) =>{

                proffyValue = {
                name: "Glédison Bomfim",
                avatar:"https://avatars0.githubusercontent.com/u/57096162?s=460&u=6ae016d8b279736268075ed832e22a9598d22b1a&v=4",
                whatsapp: "49991215416",
                bio:"Entusiasta das melhores tecnologias no mundo da programação. Apaixonado por desenvolver aplicações que impacta a qualidade de vida das pessoas, tentando tornar um mundo melhor para se viver.",
            }
            
            classValue = {
                subject: "Programação",
                cost:"80"
            }

            classScheduleValue = [
                {
                    weekday:1,
                    time_from:720,
                    time_to:1220
                },
                {
                    weekday:0,
                    time_from:520,
                    time_to:1220
                }
            ]

            createProffy(db, {proffyValue, classValue, classScheduleValue})



    })