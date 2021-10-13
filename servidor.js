const express = require('express')
let app = express()

function inicio(peticion,resultado)
{
    resultado.sendFile(__dirname+'/asincronismoexamples/ajax/example1/index.html')
}
// Use lo puedes usar para que los archivos como estilos y js sean ejecutados 
// Cualquier cosa volver a ver este foro
// https://es.stackoverflow.com/questions/59562/no-carga-css-en-servidor-nodejs
app.use(express.static(__dirname+'/asincronismoexamples/ajax/example1'))
app.get('/', inicio)

app.listen(8080)