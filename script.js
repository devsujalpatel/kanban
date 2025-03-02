const addTaskBtn = document.querySelector('.add-task-btn');
const boards = document.querySelectorAll('.board');
const todoContainer = document.querySelector('#todo-container')

addTaskBtn.addEventListener('click', function() {
    let value = prompt('Your Task')
    const task = document.createElement('p')
    task.setAttribute('draggable', true)
    task.classList.add('item');
    task.innerText = value;

    todoContainer.appendChild(task)
    console.log(task);

})




boards.forEach(board => {
    const allTask = document.querySelectorAll('.item')
    
    board.addEventListener('dragover', () => {
        
        // console.log(taskContainer);
        allTask.forEach(task => {
            // task.addEventListener('dragstart', () => {
            //     console.log(task);
            // })
            task.addEventListener('dragend', () => {
                board.appendChild(task)
            })
        })
    })
})

