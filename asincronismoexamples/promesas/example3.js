
let usuarios = [{
    id: 1,
    nombre: 'Marcos'
},
{
    id: 2,
    nombre: 'Lena'
}]

let telefonos = [{
    id:1,
    telefono: 12345678
},
{
    id:2,
    telefono: 87654321
}]

const obtenerUsuario = id => 
{
    return new Promise((resolve, reject) => {
        if(usuarios.find(user => user.id === id))
        {
            console.log('El usuario existe!')
            resolve(obtenerTelefono(id))    
        }else
        {
            reject('El usuario no existe')
        }
    })
}
const obtenerTelefono = id => 
{
    return new Promise((resolve,reject)=>{
        if(telefonos.find(phone => phone.id === id))
        {
            resolve('El telefono existe!')
        }else
        {
            reject('El telefono no existe')
        }
    })
}

obtenerUsuario(2)
 .then(res => 
 {
     return res;
 })
 .then(mensaje => 
 {
    console.log(mensaje)   
 })
 .catch(error => 
 {
     console.log(error)
 })