//En este ejemplo se uso una funcion auto ejecutable
(()=>{
  const xhr = new XMLHttpRequest()
  // Las variables con el signo $ y luego el nombre es para demostrar que son variables del dom 
    $xhr = document.getElementById('xhr')
    $fragment = document.createDocumentFragment()
  xhr.addEventListener('readystatechange',(e) =>{
    if(xhr.readyState !==4) return
    if(xhr.status >= 200 && xhr.status < 300)
    {
      let json = JSON.parse(xhr.responseText)
      json.forEach(elemento => 
      {
        const $li = document.createElement('LI')
        $li.innerHTML = `${elemento.name}--${elemento.email}---${elemento.phone}`
        $fragment.appendChild($li)
      })
      $xhr.appendChild($fragment)
    }else
    {
      let message = xhr.statusText || 'Ocurio un error'
      $xhr.innerHTML = `Error ${xhr.status}:${message}`
    }
  })
  xhr.open('GET','https://jsonplaceholder.typicode.com/users')
  xhr.send()

})()