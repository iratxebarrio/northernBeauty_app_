const express = require('express');
const {connectDB} = require("./src/database/db")
let register = require("./src/routes/auth")
let cors = require('cors')

//inicialización

const app = express()

//settings

app.set('port', process.env.PORT || 8000)

//Middlewares (cada vez que se manda una petición al servidor)

connectDB();
app.use(express.json())
app.use(cors())

//ROUTES

app.use('/user', register)

app.use('/', (req, res)=> {
    //   res.render('index', { title: 'Express' });
    res.send('hola mundo')
    });


app.listen(8000),()=> {
    console.log("Servidor iniciado ")
}