// Some 
// Si alguno de esos elementos cumple con la condicion solo devuelve true o false.

// Sin some 
const numbers = [1,2,3,4]
let rta = false 
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element %2 === 0)
    {
        rta = true
        break
    }
}
console.log(rta)
// Con some
const rta1 = numbers.some(item => item % 2 === 0)
console.log(rta1)
//Otro ejemplo
const order = [
    {
        customName:'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customName:'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customName:'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customName:'Valentina',
        total: 240,
        delivered: true,
    },
]
const rta2 = order.some(item => item.delivered)
console.log('Hay ordenes entregadas', rta2)
