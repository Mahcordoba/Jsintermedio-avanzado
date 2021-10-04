const lista = []
let numero = 20
for(let i=0; i<numero;i++)
{
    const numeroAleatorio = Math.floor(Math.random() * 200)
    lista.push(numeroAleatorio)
}
console.table(lista)
//Other ejercicio
const lista2 = []
let numero2 = prompt('Ingrese un numero')
for(let i=0; i<numero2;i++)
{
    const numeroAleatorio = Math.floor(Math.random() * 200)
    lista.push(numeroAleatorio)
}
// Other exercices 
const lista3 = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
const ffind = 'black'
const respuesta = lista3.includes(ffind)
console.log(respuesta)