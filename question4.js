let todos = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
             <span>${todo}</span>
             <button onclick="editTodo(${index})">Edit</button>
             <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if(newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

function editTodo(index) {
    event.preventDefault();
    const updatedTodo = prompt('Edit your todo: ', todos[index]);
    if(updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}


function deleteTodo(index) {
    if(confirm('Are you sure you want to delete this todo? ')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

todoForm.addEventListener('submit', addTodo);

renderTodos();


