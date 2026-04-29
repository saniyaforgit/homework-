// Переменные регистрация
const registerScreen = document.querySelector("#registerScreen")
const registerForm = document.querySelector("#registerForm")
const registerName = document.querySelector("#registerName")
const registerEmail = document.querySelector("#registerEmail")
const registerPassword = document.querySelector("#registerPassword")
const registerError = document.querySelector("#registerError")
const goToLoginBtn = document.querySelector("#goToLoginBtn")

// Переменные логина
const loginScreen = document.querySelector("#loginScreen")
const loginForm = document.querySelector("#loginForm")
const loginEmail = document.querySelector("#loginEmail")
const loginPassword = document.querySelector("#loginPassword")
const loginError = document.querySelector("#loginError")
const goToRegisterBtn = document.querySelector("#goToRegisterBtn")

// Переменные магазина
const shopScreen = document.querySelector("#shopScreen")
const userInfo = document.querySelector("#userInfo")
const logoutBtn = document.querySelector("#logoutBtn")
const productList = document.querySelector("#productList")
const cartList = document.querySelector("#cartList")
const cartTotal = document.querySelector("#cartTotal")

// Переключение экранов
function showRegisterScreen() {
    registerScreen.hidden = false
    loginScreen.hidden = true
    shopScreen.hidden = true
}

function showLoginScreen() {
    registerScreen.hidden = true
    loginScreen.hidden = false
    shopScreen.hidden = true
}

function showShopScreen() {
    registerScreen.hidden = true
    loginScreen.hidden = true
    shopScreen.hidden = false
}

// Кнопки
goToLoginBtn.addEventListener("click", showLoginScreen)
goToRegisterBtn.addEventListener("click", showRegisterScreen)

// LocalStorage user
function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}

function getUser() {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
}

// Регистрация
registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = registerName.value.trim()
    const email = registerEmail.value.trim()
    const password = registerPassword.value.trim()

    registerError.textContent = ""

    if (name.length < 2) {
        registerError.textContent = "Имя минимум 2 символа"
        return
    }

    if (!email.includes("@")) {
        registerError.textContent = "Email должен содержать @"
        return
    }

    if (password.length < 6) {
        registerError.textContent = "Пароль минимум 6 символов"
        return
    }

    saveUser({ name, email, password })
    registerForm.reset()
    showLoginScreen()
})

// Логин
loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const email = loginEmail.value.trim()
    const password = loginPassword.value.trim()

    loginError.textContent = ""

    const savedUser = getUser()

    if (!savedUser) {
        loginError.textContent = "Сначала зарегистрируйтесь"
        return
    }

    if (email !== savedUser.email) {
        loginError.textContent = "Неверный логин"
        return
    }

    if (password !== savedUser.password) {
        loginError.textContent = "Неверный пароль"
        return
    }

    localStorage.setItem("isAuth", "true")
    loginForm.reset()

    startShop()
})

// Товары
const products = [
    { id: 1, title: "Ноутбук", price: 350000 },
    { id: 2, title: "Смартфон", price: 210000 },
    { id: 3, title: "Клавиатура", price: 25000 }
]

// Корзина
let cart = []

function fakeFetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000)
    })
}

async function loadProducts() {
    productList.textContent = "Загрузка..."
    const loaded = await fakeFetchProducts()
    renderProducts(loaded)
}

function renderProducts(arr) {
    productList.innerHTML = ""

    arr.forEach((p) => {
        productList.innerHTML += `
        <div>
            <h4>${p.title}</h4>
            <p>${p.price} тг</p>
            <button class="addToCartBtn" data-id="${p.id}">Добавить</button>
        </div>
        <hr>`
    })
}

// Запуск магазина
function startShop() {
    const user = getUser()

    if (user) {
        userInfo.textContent = `Пользователь: ${user.name}`
    }

    showShopScreen()
    loadCartFromStorage()
    renderCart()
    loadProducts()
}

// LocalStorage корзина
function saveCartToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart))
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem("cart")

    cart = savedCart ? JSON.parse(savedCart) : []
}

// Добавление в корзину
productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("addToCartBtn")) {
        const id = Number(e.target.dataset.id)

        const found = products.find(p => p.id === id)
        if (found) cart.push(found)

        saveCartToStorage()
        renderCart()
    }
})

// Рендер корзины
function renderCart() {
    cartList.innerHTML = ""

    if (cart.length === 0) {
        cartList.textContent = "Корзина пустая"
        cartTotal.textContent = "Итого: 0 тг"
        return
    }

    cart.forEach((p, i) => {
        cartList.innerHTML += `
        <div>
            <span>${p.title} - ${p.price} тг</span>
            <button class="removeFromCartBtn" data-index="${i}">Удалить</button>
        </div>`
    })

    const total = cart.reduce((sum, p) => sum + p.price, 0)
    cartTotal.textContent = `Итого: ${total} тг`
}

// Удаление
cartList.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeFromCartBtn")) {
        const index = Number(e.target.dataset.index)
        cart.splice(index, 1)
        saveCartToStorage()
        renderCart()
    }
})

// Выход
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isAuth")
    showLoginScreen()
})

// Проверка авторизации
function checkAuth() {
    const isAuth = localStorage.getItem("isAuth")
    isAuth === "true" ? startShop() : showLoginScreen()
}

checkAuth()