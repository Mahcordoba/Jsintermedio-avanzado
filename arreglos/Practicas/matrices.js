const ejemplo = [[1,15],[10,2]]
const sumarWithMe = [[3,1],[3,2]]
//Ejercicio 1
ejemplo.forEach(element => 
{
    console.log(element)
})
// Ejercicio 2
const mismoTamano = (lista, lista2)=>
{
    const igual  =lista.length
    if(igual === lista2.length)
    {
        for(let i =0; i<igual; i++)
        {
            if(lista2[i].length != lista[i].length) return false
        }
        return true
    }
}

const sumar = (lista, lista2)=> 
{
    if(mismoTamano(lista,lista2))
    {
        let tamano = 0
        let count = 0
        const newList=[]
        while(tamano < lista.length)
        {            
            const elem = []
            lista[tamano].forEach(element => 
            {
                elem.push(element+lista2[tamano][count])
                count++
            })
            tamano++
            count= 0
            newList.push(elem)            
        }
        return newList
    }
    return 'La suma no se puede realizar las matrices son de diferentes tamaños'
}
// console.log(sumar(ejemplo,sumarWithMe))

// ejercicio 3

function howElements(lista)
{
    let devolver = lista.flat()
    return devolver.length
}

// ejercicio 4

function multiplicar(lista, multiplicador)
{
    const otherList = []
    for(let i=0; i<lista.length; i++)
    {
        otherList.push(lista[i].map(item => item * multiplicador))
    }
    return otherList
}

console.log(multiplicar(ejemplo, 2))

// ejercicio 5

function numeroMayor(lista)
{
    let mayor = 0

    for(let i=0; i<lista.length; i++)
    {
        lista[i].forEach(item => {
            if(mayor < item)
            {
                mayor = item
            }
        })
    }
    return mayor
}

console.log(numeroMayor(ejemplo))

// Ejercicio 6 

function estaNumber(lista, encontrar)
{
    let esta = false
    lista.forEach(item => {
        if(esta) return
        esta = item.includes(encontrar)
    })
    return esta
}

console.log(estaNumber(ejemplo,100))

// Ejercicio 7

function sumaDiagonal(lista)
{
    const other = []
    let count = 0
    lista.forEach((value, index) => 
    {
        if(index === count)
        {
            other.push(value[index])
            count++
        }
    })
    return other.reduce((a,b) => a+b)
}

console.log(sumaDiagonal(ejemplo))

// ejercicio 8