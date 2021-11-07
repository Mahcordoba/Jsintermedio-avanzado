async function loadUser()
{
    const response = await fetch('./data/users.json')
    const user = await response.json()
    return user
}

document.addEventListener('DOMContentLoaded', async ()=>
{
    let users =[]
    try {
        users = await loadUser()
    } catch (error) {
        console.log('Error!')
        console.log(error)
    }
    console.log(users)
})