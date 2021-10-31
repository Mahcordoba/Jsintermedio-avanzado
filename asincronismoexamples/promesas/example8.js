const users = [
    {
        id: 1,
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Felipe'
    },
    {
        id: 3,
        name: 'Andrea'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'felipeq@gmail.com'
    }
]

const getUser = id => {
    const user = users.find(usuario => usuario.id === id)
    return new Promise((resolve, reject)=> {
        if(!user) reject ('No existe el usuario con el siguiente id ' + id)
        else resolve(user)
    })
}

const getEmail = user => 
{
    const email = emails.find(correo => correo.id === user.id)
    return new Promise((resolve,reject)=>{
        if(!email) reject(`${user.name} no tiene correo electronico`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

getUser(2)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))