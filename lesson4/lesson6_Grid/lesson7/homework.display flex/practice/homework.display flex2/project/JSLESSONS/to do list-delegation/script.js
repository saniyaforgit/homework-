const input = document.getElementById('textInput')
const addBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const clearDoneBtn = document.getElementById('clearDoneBtn')



addBtn.addEventListener('click', () => {
    const text = input.value.trim()

   
    if (text === '') return

    
    const li = document.createElement('li')
    li.classList.add('task_item')

    li.innerHTML = `
        ${text}
        <button class="important-btn">Важное</button>
        <button class="delete-btn">Удалить</button>
    `

    taskList.appendChild(li)

    input.value = ''
})



input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click()
    }
});



taskList.addEventListener('click', (event) => {
    const target = event.target

   
    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove()
        return
    }

    
    if (target.classList.contains('important-btn')) {
        target.parentElement.classList.toggle('important')
        return
    }

    
    if (target.classList.contains('task_item')) {
        target.classList.toggle('done')
    }
});



clearDoneBtn.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task_item')

    tasks.forEach(task => {
        if (task.classList.contains('done')) {
            task.remove()
        }
    })
})