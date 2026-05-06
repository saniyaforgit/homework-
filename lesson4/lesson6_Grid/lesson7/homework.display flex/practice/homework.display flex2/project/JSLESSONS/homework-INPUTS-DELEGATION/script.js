// const input = document.getElementById("nameInput")
// const button = document.getElementById("submitBtn")
// const result = document.getElementById("result")
// const error = document.getElementById("error")

// button.addEventListener("click", function () {
//     const name = input.value.trim()

  
//     result.textContent = ""
//     error.textContent = ""

//     if (name === "") {
//         error.textContent = "Введите имя"
//         return;
//     }

//     if (name.length < 2) {
//         error.textContent = "Имя слишком короткое"
//         return
//     }

//     result.textContent = `Здравствуйте, ${name}!`

    
//     input.value = ""
// })


document.getElementById('submitBtn').addEventListener('click', function () {
    const commentInput = document.getElementById('comment');
    const comment = commentInput.value.trim();
    const errorBlock = document.getElementById('error');
    const resultBlock = document.getElementById('result');

    
    errorBlock.textContent = "";
    resultBlock.textContent = "";

    if (comment === "") {
        errorBlock.textContent = "Комментарий не может быть пустым";
        return;
    }

    if (comment.length < 5) {
        errorBlock.textContent = "Комментарий должен быть не короче 5 символов";
        return;
    }

    if (comment.length > 50) {
        errorBlock.textContent = "Комментарий не должен превышать 50 символов";
        return;
    }

  
    resultBlock.textContent = "Ваш комментарий: " + comment;

    
    commentInput.value = "";
});