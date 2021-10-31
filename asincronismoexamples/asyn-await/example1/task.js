const util = require('util') // esta libreria se usa para convertir una funcion de callbacks  para que se pueda usar en promesas 
const sleep = util.promisify(setTimeout)

module.exports = {
    async taskOne()
    {
        try {
            throw new Error('SOME PROBLEM')
            await sleep(4000)
            return 'ONE VALUE'
        } catch (error) {
            console.log(error)
        }
    },

    async taskTwo()
    {
        try {
            await sleep(2000)
            return 'TWO VALUE'
        } catch (error) {
            console.log(error)
        }
    }
}