const words = ['spray','limit','elite','exuberant']
// Sin usar fillter
const newArray = []
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6)
    {
        newArray.push(element)
    }
}
console.log('Nuevo array', newArray)
console.log('Original', words)
// Usando fillter
const rta = words.filter(item => item.length >= 6)// Esto hace lo mismo que el codigo anterior con el for
console.log('Nuevo array filter', rta)
console.log('Original', words)

//Otro ejemplo
const origin = [
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
const rt2 = origin.filter(item => item.delivered && item.total >= 100)
console.log('rt2', rt2)
// Otro ejemplo 
const search = (query) => {
    return origin.filter(item => {
        return item.customName.includes(query)
    })
}
console.log(search('Nico'))
console.table(search('a'))
