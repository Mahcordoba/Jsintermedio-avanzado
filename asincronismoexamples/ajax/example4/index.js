console.log('activo')

document.getElementById('boton').addEventListener('click', ()=>
{
    console.log('Función activada')
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'ejemplo.txt')

    xhr.onreadystatechange = ()=>
    {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            document.getElementById('respuesta').innerHTML = xhr.responseText
        }
    }
    xhr.send()
})