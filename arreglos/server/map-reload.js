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

const rpta = origin.map(item => item.total)
console.log('original', origin)
console.log('rta', rpta)
/*
const rta2 = origin.map(item => {
    item.tax = .19
    return item
})
console.log('rta2',rta2)
console.log('original ',origin)
*/
//Pero esto que acabamos de hacer modifica el array original ya que map copia el espacio en memoria de los objectos y al decire que agregue el atributo tax este lo hace tanto en el original como en la copia
//Para solucionar esto lo hacemos así 
const rta2 = origin.map(item => {
    return {
        ...item,
        tax: .19,
    }
})
console.log('rta2',rta2)
console.log('original ',origin)
//Con esto conseguimos hacer una copia con un nuevo espacio en memoria y asi evitamos que el array original se modifique

