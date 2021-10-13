//Un callback es una funcion que se ejecuta a traves de otra funcion
// los callbacks no son asincronos

const getUser = (id,cb) => {
    const user = {
        name: 'Dorian',
        id
    }
    if( id == 2) cb('User not exist')
    else cb(null, user)
}

getUser(1,(error,user)=>{
    if(error) return console.log(err)
    console.log(`User name is ${user.name}`)
})

// Otro ejemplo

const users = [
    {
        id: 1,
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 1,
        name: 'Carlos'
    }
]

const emails = [
    {
        id:1,
        email:'dorian@gmail.com'
    },
    {
        id:2,
        email:'laura@gmail.com'
    }
]

const getUser2 = (id, cb)=>{
    const user = users.find(user => user.id == id)
    if(!user) cb(`Not exist a user with id ${id}`)
    else cb(null,user)
}
const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if(!email) cb(`${user.name} hasn´t email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}
getUser2(1, (err,user)=>{
    if(err) return console.log(err)
    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res)
    })
})