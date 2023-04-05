const todoForm = document.querySelector('#form');
const todoList = document.querySelector('.list');
const totalTasks = document.querySelector('#total-tasks');
const completedTasks = document.querySelector('#completed-tasks');
const remaininTasks = document.querySelector('#remaining-tasks');
const mainInput = document.querySelector('#todo-form input');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
todoForm.addEventListener('submit', (p) => {
    p.preventDefault()

    const inputValue = mainInput.value
    if (inputValue = "") {
        return
    }

    const task ={
        id: new Date().getTime(),
        name: inputValue,
        isCompleted: false
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createTask(task)

    todoForm.reset()
    mainInput.focus()
})

function createTask(task){
    const taskEL = document.create
}