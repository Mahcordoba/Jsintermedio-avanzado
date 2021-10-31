const p1 = Promise.resolve(1)

console.log(p1)

p1
    .then(x => x+5)
    .then(x => Promise.resolve(x+5))
    .then(x => Promise.reject('Error Ohhhhh no algo malo ocurio'))
    .then(x => console.log('Sigue intentado no voy a ha parecer en pantalla'))
    .catch(e => console.log(e))


//Otro ejemplo 

const delayed = x => new Promise((resolve, reject) => setTimeout(()=> resolve(x), 500) )

delayed(7)
    .then(x => {
        console.log(x)
        return delayed(x+7)
    })
    .then(x => console.log(x))
    .then(x => Promise.reject('Puse un problema'))
    .catch(error => console.log(error))