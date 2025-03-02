const boardContainer = document.querySelectorAll(".board");
const addTaskBtn = document.querySelector('.add-task-btn');
const todoBoard = document.getElementById('todo-container')

// add task fn
function addTask(){
    const value = prompt('Your Task');
    const task = document.createElement('p')
    task.textContent = value;
    task.classList.add('item')
    task.setAttribute('draggable', 'true')
    appendTask(task)
}

// append task fn
function appendTask(task) {
    todoBoard.appendChild(task)
}
// event listner
addTaskBtn.addEventListener('click', addTask)

// dragend 
boardContainer.forEach((board)=>{
    board.addEventListener('dragover', function(){
        const taskItems = document.querySelectorAll(".item");

        taskItems.forEach((task)=>{
            task.addEventListener("dragend", function(){
                board.appendChild(task);
            })
        })
    })
})