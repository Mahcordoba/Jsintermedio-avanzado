//Una promesa es que algo va a suceder ahora o en el futuro o nunca
 //Example 1
const somethingWillHappen = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){//Se puede cambiar por false para que salte el error
      resolve('Hey!')
    }else
    {
      reject('Whooops!')
    }
  })
}
somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err))

const somethingWillHappen2 = ()=>{
  return new Promise((resolve,reject)=>{
    if(false){
      setTimeout(()=>{
        resolve('true')
      },2000)
    }else
    {
      const err = new Error('Oooops hubo un error')
      reject(err)
    }
  })
}
somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err))

//Para ejecutar varias promesas se puede usar esta funcion 
Promise.all([somethingWillHappen(),somethingWillHappen2()])
  .then(response => {
    console.log('Array of results',response)
  })
  .catch(err =>{
    console.error(err)
  })