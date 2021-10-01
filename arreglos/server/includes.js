//ESte metodo nos devuelve si elemento que estamos buscando esta dentro del array.
     
const pets = ['cat', 'dog','bat']
let includeArray = false
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog')
    {
        includeArray= true
        break
    }
}
console.log('For', includeArray)
// con includes 
const mascota = pets.includes('dog')
console.log('Includes', mascota)