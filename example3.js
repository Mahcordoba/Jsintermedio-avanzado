const express = require('express')

const app = express()

// database
const products = [{
    id: 1,
    name: 'Laptop'
},
{
    id: 2,
    name: 'microphone'
},
{
    id: 3,
    name: 'PC'
}]

// setting

app.set('port', process.env.PORT || 3000)

// routes

app.get('/products',(req,res)=>{
    res.json(products)
})

// static file 
app.use(express.static(__dirname + '/asincronismoexamples/ajax/example3'))

app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`)
})