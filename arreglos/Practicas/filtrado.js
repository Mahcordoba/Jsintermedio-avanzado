const lista = [1,2,3,4]

function sonPares(numeros)
{
    const lista = numeros.filter(value => 
        {
            if(value%2 === 0 )
            {
                return value
            }
        })
    return lista
}

const listaPares = sonPares(lista)
console.log(listaPares)

const palabras= ['ana','pedrio','gato','perro','anastacia','oscar','elefante','iglesia','un','Alverto']

function startVowels(lista)
{
    const works = lista.filter(valor =>
        {
            switch (valor.charAt(0)) {
                case 'a' || 'A':
                    return valor
                case 'e' || 'E':
                    return valor
                case 'i' || 'I':
                    return valor
                case 'o' || 'O':
                    return valor
                case 'u' || 'U':
                    return valor
                default:
                    break;
            }
        })
    return works
}

const vowels = startVowels(palabras)
console.log(vowels)