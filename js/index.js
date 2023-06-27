let products = [
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "apple",
        type: "fruit",
        price: 10000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 74000
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "smetana",
        type: "milk",
        price: 10000
    },
    {
        name: "banana",
        type: "fruit",
        price: 28000
    },
    {
        name: "juice",
        type: "fruit",
        price: 15000
    },
    {
        name: "konyak",
        type: "alcohol",
        price: 100000
    }
]


let categories = [
    {
        type: "milk",
        count: 0,
        arr: []
    },
    {
        type: "fruit",
        count: 0,
        arr: []
    },
    {
        type: "alcohol",
        count: 0,
        arr: []
    }
]

categories.totaly = 0
let discount = prompt(0 - 100)


for( let product of products){
    for( let category of categories){
        if( product.type === category.type){
            category.count++
            category.arr.push(product.name)
      
            
            
        }console.log(`
        name: ${product.type},
        price: ${product.price},
        sale price: ${product.price - (product.price / 100 * discount)},
        total: ${category.totaly += product.price}
      
        ` );
    }
}
