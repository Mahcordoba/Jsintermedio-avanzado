const totales = [1,2,3,4]

let sum = 0
for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    sum = sum + element
}
console.log(sum)
// Ahora lo vamos a ver como se hace esto mismo con reduce
// el primer parametro que recive es una funcion pero esta debe recibir dos parametros el primero el contador y el segundo el elemento, en el segundo parametro en que numero va iniciar el contador 
const rta = totales.reduce((suma, elemento)=> suma + elemento, 0)
console.log('rta ', rta)
