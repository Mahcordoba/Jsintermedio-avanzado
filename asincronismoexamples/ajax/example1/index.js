const button = document.getElementById('button')

button.addEventListener('click', ()=>{
    let xhr
    //Lo siguiente es para asegurar que funcione en navegadores muy viejos del 2005 para atras
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject('Microsoft.XMLHTTP')
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
    
    xhr.addEventListener('load', (data) =>{
        const dataJson = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        for(const userInfo of dataJson)
        {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })
    //Importante este send o si no no sirve el codigo
    xhr.send()
})