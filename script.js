function drop(e) {
  e.preventDefault();
  let taskId = e.dataTransfer.getData("text");
  let taskElement = document.getElementById(taskId);

  if (!taskElement) return;

  let dropTarget = e.target.closest(".column");
  if (!dropTarget) return;

  dropTarget.appendChild(taskElement);
  updateQuentities();
}


function allowDrop(e) {
  e.preventDefault();
}
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function updateQuentities() {
  const todoColumn = document.getElementById("todo");
  const inProgressColumn = document.getElementById("in-progress");
  const inQaColumn = document.getElementById("in-qa");
  const doneColumn = document.getElementById("done");

  const todoHeader = document.getElementById("todo-header");
  const inProgressHeader = document.getElementById("in-progress-header");
  const inQaHeader = document.getElementById("in-qa-header");
  const doneHeader = document.getElementById("done-header");

  updateHeader(todoHeader, todoColumn);
  updateHeader(inProgressHeader, inProgressColumn);
  updateHeader(inQaHeader, inQaColumn);
  updateHeader(doneHeader, doneColumn);
}

function updateHeader(header, column) {
  header.innerText = `${header.innerText.split(" ")[0]} (${
    column.children.length
  })`;
}

updateQuentities();

function addTask() {
  const input = document.querySelector("#taskInput")
  const value = input.value;
  if (!value) return;

  const task = document.createElement("p");
  task.innerHTML = `${value} <div><i class="ri-edit-line edit-btn"></i><i class="ri-delete-bin-line delete-btn"></i></div>`;
  task.classList.add("task");
  task.setAttribute("draggable", "true");

  const taskId = `task-${Date.now()}`;
  task.setAttribute("id", taskId);

  task.addEventListener("dragstart", drop);

  const todoColumn = document.getElementById("todo");
  todoColumn.appendChild(task);
  input.value = ''
  edit();
  deleteTask();
  drop()
  drag()
}

const tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
  task.addEventListener("dragstart", drag);
});

function edit() {
  const editBtn = document.querySelectorAll(".edit-btn");
  editBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let taskElement = e.target.parentElement.parentElement;
      taskElement.setAttribute("contenteditable", "true");
      taskElement.focus();

      taskElement.addEventListener("blur", () => {
        if (taskElement.innerText.trim() === "") {
          alert("Task cannot be empty!");
          taskElement.remove();
        } else {
          taskElement.setAttribute("contenteditable", "false");
        }
      });
    });
  });
}
edit();

function deleteTask() {
  const editBtn = document.querySelectorAll(".delete-btn");
  editBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
}
deleteTask();


function addTaskBtnShow(){
  document.querySelector('.add-task-container').style.display = 'flex';
}

function closeTaskBtn(){
  document.querySelector('.add-task-container').style.display = 'none';
}