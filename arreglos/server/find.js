// Find
//Es similar al objecto filter pero con una exepcion el solo retornara el primer elemento que coincida con la condicion 
const numeros = [1,2,30,48,29,10,13]
// sin Find
let rta = undefined
for (let index = 0; index  < numeros.length; index++) {
    const element = numeros[index]   ;
    if(element === 30)
    {
        rta = element
        break
    }
}
// Con find
const rta2 = numeros.find(item => item === 30)
console.log('For', rta)
console.log('Find', rta2)
//Otro ejemplo
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3);
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4);
// Find index nos devuelve la posición del elemento si no lo encuentra el valor por defecto es -1