let task = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task'); 
const taskList = document.getElementById('taskList');

function renderTask() {
    taskList.innerHTML = '';
    task.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task}</span>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
    taskList.appendChild(li);
    });
}

function addTask(event) {
    event.preventDefault();
    const newTask = taskInput.value.trim();
    if (newTask) {
    task.push(newTask);
    renderTask();
    taskInput.value = '';
    }
}

function editTask(index) {
    const updatedTask = prompt('Edit Task', task[index]);
    if (updatedTask) {
    task[index] = updatedTask;
    renderTask();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
    task.splice(index, 1);
    renderTask();
    }
}

taskForm.addEventListener('submit', addTask);

renderTask();