const lista1 = ['a','b',3,'c',5]
const lista2 = [1,2,7,8,9,3,'a','b']

const lista3 = lista1.filter( inten => {
    for(let i=0; i<lista2.length; i++)
    {
        if(inten === lista2[i]) return inten
    }
})

const lista4= [...lista1,...lista2]
const lista5= lista1.concat(lista2)
console.log(lista3)
console.log(lista4)
console.log(lista5)

// Conjunto de numeros 

const conjuntoNumerosTexto = '1,2,3'
const conjuntoNumerosTexto2 = '1,10,5,8'

const sonIguales = (textoNumerico, textoNumerico2) => 
{
    const lista1 = textoNumerico.split(',')
    const lista2 = textoNumerico2.split(',')
    if(lista1.length === lista2.length) return true
    else return false
}
const suma = (texto1,texto2) =>
{
    const lista1 = texto1.split(',')
    const lista2 = texto2.split(',')
    const pr = lista1.map((item, index) =>  Number(item) + Number(lista2[index]))
    return pr
}
const igual = sonIguales(conjuntoNumerosTexto, conjuntoNumerosTexto2)
if(igual) console.log(suma(conjuntoNumerosTexto, conjuntoNumerosTexto2))
else console.log('Las cadenas de numeros ingresada no tienen el mismo tamaño')


