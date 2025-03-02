const taskContainer = document.querySelector('.task-container');
const addTaskBtn = document.querySelector('.add-task-btn');
const boards = document.querySelectorAll('.board');

addTaskBtn.addEventListener('click', function() {
    let value = prompt('Your Task')
    const task = document.createElement('p')
    task.setAttribute('draggable', true)
    task.classList.add('task');
    task.innerText = value;

    taskContainer.appendChild(task)

})




taskContainer.forEach(board => {
    const allTask = document.querySelectorAll('.task')
    
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

