//El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

const elements = ['fire','air','water']

let rtaFinal = ''
const separador = '--'
for (let index = 0; index < elements.length; index++) {
    const elemento = elements[index];
    if(index === (elements.length-1))
    {
        rtaFinal += elemento
    }else
    {
        rtaFinal += elemento + separador
    }
}
console.log(rtaFinal)
// con join
const rta = elements.join('--')
console.log('Join', rta)
//Other example
const title = 'Curso de manipulación de arrays'
const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal)