// const API_URL = "https://dummyjson.com"

// const loginScreen = document.getElementById("loginScreen")
// const profileScreen = document.getElementById("profileScreen")
// // добавить еще скрины для продуктов и одного продукта

// // Login переменные
// const loginForm = document.getElementById("loginForm")
// const usernameInput = document.getElementById("usernameInput")
// const passwordInput = document.getElementById("passwordInput")
// const loginMessage = document.getElementById("loginMessage")


// // Profile переменные
// const profileBlock = document.getElementById("profileBlock")
// const logoutBtn = document.getElementById("logoutBtn")

// function showScreen(screenName){
//     loginScreen.classList.add("hidden")
//     profileScreen.classList.add("hidden")

//     if(screenName === "login"){
//         loginScreen.classList.remove("hidden")
//         logoutBtn.classList.add("hidden")
//     }
//     if(screenName === "profile"){
//         profileScreen.classList.remove("hidden")
//         logoutBtn.classList.remove("hidden")
//     }
// }

// loginForm.addEventListener("submit", async function (event){
//     event.preventDefault()

//     const username = usernameInput.value.trim()
//     const password = passwordInput.value.trim()

//     if(username === "" || password === ""){
//         loginMessage.textContent = "Введите username и password"
//         return
//     }

//     await loginUser(username, password)
// })

// async function loginUser(username,password){
//     try{
//         loginMessage.textContent = "Выполняется вход..."

//         const response = await fetch(`${API_URL}/auth/login`, {
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//                 expiresMins: 30
//             })
//         })
//         if(!response.ok){
//             throw new Error("Неверный логин или пароль")
//         }
//         const data = await response.json()

//         localStorage.setItem("accessToken", data.accessToken)
//         loginMessage.textContent = ""

//       await loadProfile()
//     }catch(error){
//         loginMessage.textContent = error.message
//     }
// }

// async function loadProfile(){
//     try{
//         profileBlock.innerHTML = "<p>Загрузка профиля...</p>"

//         const token = localStorage.getItem("accessToken")

//         if(!token){
//             showScreen("login")
//             return
//         }

//         const response = await fetch(`${API_URL}/auth/me`, {
//             method: "GET",
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             }
//         })
//         if(!response.ok){
//             throw new Error("Не удалось получить профиль")
//         }
//         const user = await response.json()

//         renderProfile(user)
//         showScreen("profile")
//     }catch(error){
//         localStorage.removeItem("accessToken")
//         loginMessage.textContent = "Сессия истекла. Войдите снова."
//         showScreen("login")
//     }
// }

// function renderProfile(user){
//     profileBlock.innerHTML = `
//     <img src = "${user.image}" alt = "${user.firstName}">

//     <div>
//         <h3>${user.firstName}</h3>
//         <p><strong>Username:</strong> ${user.username}</p>
//         <p>Email: ${user.email}</p>
//         <p>Phone: ${user.phone}</p>
//         <p>Birthday: ${user.birthDate}</p>
//         <p>Gender: ${user.gender}</p>
//     </div>
//     `
// }

// window.addEventListener("DOMContentLoaded", function(){
//     const token = localStorage.getItem("accessToken")

//     if(token){
//         loadProfile()
//     }
//     else{
//         showScreen("login")
//     }
// })


// logoutBtn.addEventListener("click", function(){
//     localStorage.removeItem("accessToken")

//     usernameInput.value = ""
//     passwordInput.value = ""
//     profileBlock.innerHTML = ""

//     showScreen("login")
// })


const API_URL = "https://dummyjson.com"


const loginScreen = document.getElementById("loginScreen")
const profileScreen = document.getElementById("profileScreen")
const productsScreen = document.getElementById("productsScreen")
const detailScreen = document.getElementById("detailScreen")


const loginForm = document.getElementById("loginForm")
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
const loginMessage = document.getElementById("loginMessage")


const profileBlock = document.getElementById("profileBlock")
const logoutBtn = document.getElementById("logoutBtn")
const goToProductsBtn = document.getElementById("goToProductsBtn")


const productsBlock = document.getElementById("productsBlock")
const productDetailBlock = document.getElementById("productDetailBlock")

const backtoProfileBtn = document.getElementById("backtoProfileBtn")
const backToProductsBtn = document.getElementById("backToProductsBtn")


function showScreen(screenName){
    loginScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    productsScreen.classList.add("hidden")
    detailScreen.classList.add("hidden")

    if(screenName === "login"){
        loginScreen.classList.remove("hidden")
    }

    if(screenName === "profile"){
        profileScreen.classList.remove("hidden")
    }

    if(screenName === "products"){
        productsScreen.classList.remove("hidden")
    }

    if(screenName === "detail"){
        detailScreen.classList.remove("hidden")
    }
}


loginForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if(!username || !password){
        loginMessage.textContent = "Введите username и password"
        return
    }

    try{
        loginMessage.textContent = "Вход..."

        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })

        if(!res.ok){
            throw new Error("Неверный логин или пароль")
        }

        const data = await res.json()

        localStorage.setItem("accessToken", data.accessToken)

        await loadProfile()

    }catch(err){
        loginMessage.textContent = err.message
    }
})


async function loadProfile(){
    try{
        const token = localStorage.getItem("accessToken")

        if(!token){
            showScreen("login")
            return
        }

        profileBlock.innerHTML = "Загрузка..."

        const res = await fetch(`${API_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(!res.ok){
            throw new Error()
        }

        const user = await res.json()

        profileBlock.innerHTML = `
            <h3>${user.firstName}</h3>
            <p>${user.email}</p>
            <img src="${user.image}" width="100">
        `

        showScreen("profile")

    }catch(e){
        localStorage.removeItem("accessToken")
        showScreen("login")
    }
}


goToProductsBtn.addEventListener("click", () => {
    const token = localStorage.getItem("accessToken")

    if(!token){
        showScreen("login")
        return
    }

    showScreen("products")
    loadProducts()
})

backtoProfileBtn.addEventListener("click", () => {
    showScreen("profile")
})

backToProductsBtn.addEventListener("click", () => {
    showScreen("products")
})

async function loadProducts(){
    try{
        productsBlock.innerHTML = "Загрузка товаров..."

        const res = await fetch(`${API_URL}/products`)

        if(!res.ok){
            throw new Error()
        }

        const data = await res.json()

        renderProducts(data.products)

    }catch(e){
        productsBlock.innerHTML = "Не удалось загрузить товары"
    }
}

function renderProducts(products){
    productsBlock.innerHTML = ""

    products.forEach(p => {
        const div = document.createElement("div")

        div.innerHTML = `
            <img src="${p.thumbnail}" width="150">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <p>Цена: $${p.price}</p>
            <p>Рейтинг: ${p.rating}</p>
            <button onclick="openProduct(${p.id})">Подробнее</button>
        `

        productsBlock.appendChild(div)
    })
}


async function openProduct(id){
    try{
        showScreen("detail")
        productDetailBlock.innerHTML = "Загрузка..."

        const res = await fetch(`${API_URL}/products/${id}`)

        if(!res.ok){
            throw new Error()
        }

        const p = await res.json()

        productDetailBlock.innerHTML = `
            <img src="${p.thumbnail}" width="200">
            <h2>${p.title}</h2>
            <p>${p.description}</p>
            <p>Категория: ${p.category}</p>
            <p>Бренд: ${p.brand}</p>
            <p>Цена: $${p.price}</p>
            <p>Скидка: ${p.discountPercentage}%</p>
            <p>Рейтинг: ${p.rating}</p>
            <p>Stock: ${p.stock}</p>
        `

    }catch(e){
        productDetailBlock.innerHTML = "Не удалось загрузить товар"
    }
}


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("accessToken")

    usernameInput.value = ""
    passwordInput.value = ""
    profileBlock.innerHTML = ""

    showScreen("login")
})


window.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("accessToken")

    if(token){
        loadProfile()
    }else{
        showScreen("login")
    }
})