const express = require('express');
const {connectDB} = require("./src/database/db")
let prueba = require("./src/routes/routes")
let register = require("./src/routes/register")
let cors = require('cors')

//inicialización

const app = express()

//settings

app.set('port', process.env.PORT || 8000)

//Middlewares (cada vez que se manda una petición al servidor)

connectDB();
app.use(express.json())
app.use(cors())

app.use('/prueba',prueba)
app.use('/register', register)

app.use('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola mundo')
    });


app.listen(8000),()=> {
    console.log("Servidor iniciado ")
}