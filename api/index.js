const express = require('express');

//inicialización

const app = express()

//settings

app.set('port', process.env.PORT || 3000)

//Middlewares (cada vez que se manda una petición al servidor)

