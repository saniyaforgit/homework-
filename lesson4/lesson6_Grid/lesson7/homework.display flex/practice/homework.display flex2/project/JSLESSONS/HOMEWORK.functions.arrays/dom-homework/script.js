// const title = document.getElementById("title")
// const texts = document.getElementsByClassName("text")
// const paragraphs = document.getElementsByTagName("p")
// const firstButton = document.querySelector("button")
// const allParagraphsQS = document.querySelectorAll("p")

// console.log("Заголовок:", title)
// console.log("Элементы с классом text:", texts)
// console.log("Абзацы по тегу:", paragraphs)
// console.log("Первая кнопка:", firstButton)
// console.log("NodeList:", allParagraphsQS)

// Задание 2

// const title = document.getElementById("title")
// const button = document.getElementById("changeBtn")
// const box = document.getElementById("box")

// button.addEventListener("click", function () {

    
//     title.textContent = "DOM работает!"

    
//     box.innerHTML = "<b>Это жирный текст</b>"

// })

//  Задание 3


// let image = document.getElementById("image")
// let link = document.getElementById("link")
// let button = document.getElementById("btn")


// button.addEventListener("click", function () {

 
//   image.src = "https://avatars.mds.yandex.net/i?id=bbcff13a915384590ab604353995e93462286a8a-5219011-images-thumbs&n=13&w=420&h=320"
//   image.alt = "новая картинка"

  
//   link.href = "https://google.com"
//   link.textContent = "Перейти в Google"

// })

// Задание 4


// const title = document.getElementById("title")


// const textElements = document.getElementsByClassName("text")


// const paragraphsByTag = document.getElementsByTagName("p")


// const firstButton = document.querySelector("button")


// const paragraphsQuery = document.querySelectorAll("p")

// console.log("Заголовок:", title)
// console.log("По классу text:", textElements)
// console.log("По тегу p:", paragraphsByTag)
// console.log("Первая кнопка:", firstButton)
// console.log("querySelectorAll:", paragraphsQuery)

// Задание 5

// const message = document.getElementById("message");
// const button = document.getElementById("btn");

// // Основное задание: toggle
// button.addEventListener("click", function () {
//     message.classList.toggle("dark");
// });


// const countEl = document.getElementById("count")
// const plusBtn = document.getElementById("plus")
// const minusBtn = document.getElementById("minus")


// let count = 0


// plusBtn.addEventListener("click", function () {
//     count++;
//     countEl.textContent = count
// })


// minusBtn.addEventListener("click", function () {
//     count
//     countEl.textContent = count
// })

// const input = document.getElementById("passwordInput")
// const button = document.getElementById("toggleBtn")

// button.addEventListener("click", function () {

    
//     if (input.type === "password") {
//         input.type = "text"
//         button.textContent = "Скрыть"
//     } 
    
//     else {
//         input.type = "password"
//         button.textContent = "Показать"
//     }

// })

// const box = document.getElementById("box")
// const btn = document.getElementById("btn")


// box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = "lightblue"
// })


// box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "white"
// })


// btn.addEventListener("click", function () {
//     alert("Кнопка нажата")
// })

// const input = document.getElementById("textInput")
// const output = document.getElementById("output")


// input.addEventListener("input", function () {
//     output.textContent = "Вы ввели: " + input.value
// })

// const input = document.getElementById("nameInput")
// const button = document.getElementById("sendBtn")
// const result = document.getElementById("result")

// button.addEventListener("click", function () {

//     const name = input.value.trim()

//     if (name === "") {
//         result.textContent = "Введите имя"
//     } else {
//         result.textContent = "Привет, " + name + "!"
//     }

// })