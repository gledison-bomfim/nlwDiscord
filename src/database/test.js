const Database = require('./db.js')
const createProffy = require('./createProffy')


    Database.then(async(db) =>{

                proffyValue = {
                name: "Glédison Bomfim",
                avatar:"https://avatars0.githubusercontent.com/u/57096162?s=460&u=6ae016d8b279736268075ed832e22a9598d22b1a&v=4",
                whatsapp: "49991215416",
                bio:"Entusiasta das melhores tecnologias no mundo da programação. Apaixonado por desenvolver aplicações que impacta a qualidade de vida das pessoas, tentando tornar um mundo melhor para se viver.",
            }
            
            classValue = {
                subject: 1,
                cost:"80"
            }

            classScheduleValues = [
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

            //await createProffy(db, {proffyValue, classValue, classScheduleValues})

            const selectedProffys = await db.all("SELECT * FROM proffys")
            //console.log(selectedProffys)

            const selectClassesAndProffys = await db.all(`
                SELECT classes.*, proffys.*
                FROM proffys
                JOIN classes ON (classes.proffy_id = proffys.id) 
                WHERE classes.proffy_id  = 0;
            `)
             //console.log(selectClassesAndProffys)

            const selectClassesSchedules = await db.all(`
                SELECT class_schedule.*
                FROM class_schedule
                WHERE class_schedule.class_id = "1"
                AND class_schedule.weekday = "0"
                AND class_schedule.time_from <= "1300"
                AND class_schedule.time_to > "1300"
            `)
            console.log(selectClassesSchedules)
    })