//Ojo para tener en cuenta 
// Esta funcion es reciente antes de usarla en un proyecto real verificar si los navegadores ya la tienen implementada recuerda este proceso puede tardar años
//Es para manipular arrays que tienen en su interior mas arrays y asi convertirlos en una sola linea 
const matriz = [
    [1,2,3],
    [4,5,6,[1,2,3,[4,5,6]]],
    [7,8,9]
]
const nuevaMatriz = []
for(let i =0; i<matriz.length; i++)
{
    const array = matriz[i];
    for (let index = 0; index < array.length; index++) {
        const element = matriz[i][index];
        nuevaMatriz.push(element)
    }
}
console.log('for ', nuevaMatriz)
//Pero este contiene un problema si dentro del array hay mas arrays en diferentes niveles este solo lo hara en el primer nivel para solucionar esto hay que hacer una funcion de recursividad 
// Con flat 
const rta = matriz.flat();
console.log(rta)
// Si hacemos esto con flat hara lo mismo que el for y solo nos dara los arrays del primer nivel si queremos mas niveles hay que pasarselos como atributos
const rta1 = matriz.flat(3)
console.log(rta1)
// Pero aquí tambien hay un problema si no conoces la cantidad de niveles que tiene un array todo sera el azar
