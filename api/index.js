const express = require('express');
const {db} = require("./database/db")
const {prueba} = require("./routes/routes")

//inicialización

const app = express()

//settings

app.set('port', process.env.PORT || 8000)

//Middlewares (cada vez que se manda una petición al servidor)

db.authenticate();

app.use(express.json())



app.use('/prueba',prueba)

app.use('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola mundo')
    });


app.listen(8000),()=> {
    console.log("Servidor iniciado ")
}