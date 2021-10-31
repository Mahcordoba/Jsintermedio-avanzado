const{ taskOne, taskTwo } = require('./task')

async function main()
{
    try {
        console.time('Measuring time')
        // Para ejecutar de manera paralela podemos usar esto 
        //const results = await Promise.all([taskTwo(),taskOne()])
        // Esto para ejecutarlo de manera asincrona
        const valueOne = await taskOne()
        const valueTwo = await taskTwo()
        console.timeEnd('Measuring time')
        console.log('Task One returned', valueOne)
        console.log('Task Two returned', valueTwo)
    } catch (error) {
        console.log(error)
    }
}
main()