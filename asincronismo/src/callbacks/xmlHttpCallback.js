let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'
function fetchData(url_api, callback)
{
     let xhttp = new XMLHttpRequest()
     xhttp.open('GET', url_api, true)//No es nesesario el true ya que por defecto es true
     xhttp.onreadystatechange = function (event){
         if(xhttp.readyState === 4){//Aqui le estamos preguntando si el estado es ya terminado
            if(xhttp.status === 200)//Aqui verificamos que el estado sea ok
            {
                callback(null,JSON.parse(xhttp.responseText))
                //Los callbacks que se usan para recibir info de apis se les suele colocar un parametro de error y uno de ok 
            }else 
            {
                const error = new Error('Error ', url_api)//Por buenas practicas así se declara un error
                return callback(error,null)
            }
         }
     }
     xhttp.send()
}

fetchData(API, function(error1,data1){
    if(error1) return console.log.error(error1)
    fetchData(API + data1.results[2].id, function(error2,data2){
        if(error2) return console.log.error(error2)
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.log.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
    //Para saber como navegar en la api se uso el postman
})
//Cosas a tener en cuenta lo maximo de llamados que debes hacer con callbacks es de 3 si se tiene que hacer mas hay que mirar como hacer una solución mas entendible ya que se podria caer en el hell callback