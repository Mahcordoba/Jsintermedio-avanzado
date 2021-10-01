// flat Map funciona como el flat y el map al mismo tiempo 
const users = [
    {userId:1, userName: 'Tom', atributes:['Nice','Cute']},
    {userId:1, userName: 'Tom', atributes:['Lovely']},
    {userId:1, userName: 'Tom', atributes:['Nice','Cool']},
]
//Como antes se hacia 
const rta = users.map(user => user.atributes).flat();
console.log('rta', rta)
//Con flatMAp
const rta1 = users.flatMap(user => user.atributes)