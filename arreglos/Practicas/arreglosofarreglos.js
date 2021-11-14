// Ejercicio 1
var arr = [[1,2,3],[4,5,6],[7,8,9]]

const aplanar = (lista) => 
{
    const devolver = []
    lista.forEach(element => {
        element.forEach(interior => devolver.push(interior)
        )
    });
    return devolver
}

// Ejercicio 2
var arr2 = aplanar(arr)

const dividir = lista =>
{
    const mitad = Math.floor(arr2.length/2)
    const grupoa = lista.splice(0,mitad)
    return [lista, grupoa]
}
var listas = dividir(arr2)
console.log(listas)
