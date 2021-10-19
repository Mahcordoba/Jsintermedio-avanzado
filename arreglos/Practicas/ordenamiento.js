const lista = [1,2,3]

const swap = (lista, a, b)=>
{
    const A = lista[a]
    const B = lista[b]
    lista.splice(a,1,B)
    lista.splice(b,1,A)
}

console.log(lista)
swap(lista,0,2)
console.log(lista)