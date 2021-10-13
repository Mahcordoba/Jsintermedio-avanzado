const tbody = document.getElementById('tbody')

const datosRecibidos = ()=>
{
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/products')
    xhr.addEventListener('load', data => {
        let dataSet = JSON.parse(data.target.response)
        tbody.innerHTML=''
        dataSet.forEach(product => {
            tbody.innerHTML+=`
                <tr>
                  <td class="id">${product.id}</td>
                  <td>
                    <input type="text" class="name" value="${product.name}"/>
                  </td>
                  <td>
                    <button class"update-button">Update</button>
                    <button class"delete-button">Deleted</button>
                  </td>
                </tr>
            `
        });
    })
    xhr.send()
}
const getProducts = document.getElementById('getProducts').addEventListener('click', datosRecibidos)

