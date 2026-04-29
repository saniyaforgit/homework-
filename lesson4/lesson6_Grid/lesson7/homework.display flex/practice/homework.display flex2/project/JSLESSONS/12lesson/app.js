const loadBtn= document.getElementById("loadBtn")
const productB = document.getElementById("products")
const searchInput=document.getElementById("searchInput")
const searchBtn=document.getElementById("searchBtn")


searchBtn.addEventListener("click", searchProducts)

async function searchProducts(){
    const query = searchInput.value.trim()

    if(query===""){
        productsBlock.innerHTML="<p> Введите название товара</p>"
        return
    }
    try{
        productsBlock.inner="<p>Поиск...</p>"

        const response=await fetch(`https://dummyjson.com/products/search?q={query}`)

        if(!response.ok){
            throw new Error("Ошибка поиска")
        }
        const data =await response.json()
        if

    }
}

loadBtn.addEventListener("click", loadProducts)

async function loadProducts(){
    try{
    productBlock.innerHTML="<p>Загрузка товаров...</p>"

    const response=await fetch("https://dummyjson.com/products?limit=10$skip=10")

    if(!response.ok){
        throw new Error("Не удалось загрущить товары")
    }
    
    // console.log(response)

    const data =await response.json()
    // data.products.forEach((product)=>{
    //     console.log(product.title)
    //     console.log(product.price)
        renderProducts(data.products)
    
    // })
    // console.log(data.ptoducts)
    // console.log(data.products)
    
}

function renderProducts(products){
    productB.innerHTML = ""

    products.forEach((product) =>{
        productB.innerHTML += `
        <div>
            <h3>${product.title}</h3>
            <img src ="${product.thumbnail}" width="150">
            <p>${product.description}</p>
            <p>Цена: ${product.price}</p>
        </div>
        `
    })
}



