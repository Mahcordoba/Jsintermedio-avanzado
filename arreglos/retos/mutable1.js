const products = [
    {title: 'Pizza', price: 121, id: '🍕'},
    {title: 'Burger', price: 121, id: '🍔'},
    {title: 'Hot cakes', price: 121, id: '🥞'},
]
const newProducts = products.filter(product => product.id != '🍔')

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const updaProducts = products.map(item => { 
    if(item.id===update.id)
    {
        return {
            ...item,
            ...update.changes,
        }
    }else return item
    
})
console.log(updaProducts)
