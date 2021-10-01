// Nos devuelve un nuevo array fucionando dos arrays 
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];
const newArray = [...elements];

for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}


const rta = elements.concat(othersElements);
// Otra forma de convinar arrays
const rta2 = [...elements, ...othersElements];
//Ojo si se manda un string este lo separa en un array si lo enviamos así
const rta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
// Otra forma de unir arrais es con el push y el ... 
elements.push(...othersElements);
console.log('elements', elements);