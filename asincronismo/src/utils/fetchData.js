let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) => {
    return new Promise((resolve,reject) =>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('Get',url_api,true)
        xhttp.onreadystatechange = (()=>{
            if(xhttp.readyState === 4){
                // El siguiente codigo es de un if terciario
              (xhttp.status === 200)  
                ? resolve(JSON.parse(xhttp.responseText))
                : reject (new Error('Esto es un error critico', url_api))
                // fin del if terciario
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData