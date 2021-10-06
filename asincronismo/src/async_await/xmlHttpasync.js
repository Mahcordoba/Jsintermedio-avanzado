const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => 
{
    try
    {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    }catch(error)
    {
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')

//Ver proyectos en esta clase https://platzi.com/clases/1789-asincronismo-js/25001-callbacks-vs-promesas-vs-asyncawait/  y hacer uno para practicar y cualquier cosa es la se asincronismo clase 11 y la clase 12 tambien hay proyectos.