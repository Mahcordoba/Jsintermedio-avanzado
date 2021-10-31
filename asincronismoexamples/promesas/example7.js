const desarrollo = new Promise((resolve, reject)=>
{
    setTimeout(()=>{
        let aleatorio = Math.random()
        if(aleatorio < 0.5)
        {
            resolve('Entraga a tiempo')
        }else
        {
            reject('No se entrego a tiempo')
        }
    }, 200)
})

desarrollo 
    .then((proyecto) => console.log(proyecto))
    .catch((error) => console.log(error))
    .finally(()=> console.log('Susess'))