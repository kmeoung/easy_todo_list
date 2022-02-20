const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const inputTodo = todoForm.querySelector(':first-child');

const TODO_LIST = 'TODO-LIST';

let browserTodos = [];

function removeTodos(event) {
	const li = event.target.parentElement.parentElement;
	browserTodos = browserTodos.filter(function (todo) {
		return todo.id !== parseInt(li.id);
	});
	li.remove();
	saveLocalTodos();
}

function setTodos(todoObj) {
	browserTodos.push(todoObj);
	const li = document.createElement('li');
	const span = document.createElement('span');
	const delBtn = document.createElement('button');

	delBtn.addEventListener('click', removeTodos);
	li.innerText = todoObj.text;
	delBtn.innerText = '❌';
	span.appendChild(delBtn);
	li.appendChild(span);
	li.id = todoObj.id;
	todoList.appendChild(li);

	saveLocalTodos();
}

function saveLocalTodos() {
	localStorage.setItem(TODO_LIST, JSON.stringify(browserTodos));
}

function getLocalTodos() {
	const todos = localStorage.getItem(TODO_LIST);
	if (todos !== null) {
		JSON.parse(todos).forEach(setTodos);
	}
}

function onSubmitTodo(event) {
	event.preventDefault();
	const todo = inputTodo.value;
	inputTodo.value = '';

	const now = Date.now();
	const todoObj = {
		id: now,
		text: todo,
	};

	setTodos(todoObj);
}
getLocalTodos();
todoForm.addEventListener('submit', onSubmitTodo);
