const items = [1,2,3,3,4,4,4,1,10]

const rta = items.reduce((objectoFinal, item) =>{
    if(!objectoFinal[item])
    {
        objectoFinal[item]=1;
    }else
    {
        objectoFinal[item]= objectoFinal[item] + 1;
    }
    return objectoFinal
},{})
console.log(rta)
// Otro ejemplo pero usando tambien map
const data = [
    {
        name: 'Pedro',
        level: 'low',
    },
    {
        name: 'Santaigo',
        level: 'hight',
    },
    {
        name: 'Valentina',
        level: 'low',
    },
    {
        name: 'Zulema',
        level: 'medium',
    },
    {
        name: 'Erick',
        level: 'hight',
    },
    {
        name: 'Erica',
        level: 'medium',
    },
    {
        name: 'Federico',
        level: 'hight',
    },
]
const rta1 = data
.map(item => item.level)
.reduce((objectoFinal, item) =>{
    if(!objectoFinal[item])
    {
        objectoFinal[item]=1;
    }else
    {
        objectoFinal[item]= objectoFinal[item] + 1;
    }
    return objectoFinal
},{})
console.table(rta1)