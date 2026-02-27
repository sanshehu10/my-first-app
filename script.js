const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoItemTemplate = document.getElementById('todo-item-template');

function createTodoItem(taskText) {
  const todoItem = todoItemTemplate.content.firstElementChild.cloneNode(true);
  const checkbox = todoItem.querySelector('.complete-checkbox');
  const text = todoItem.querySelector('.todo-text');
  const deleteButton = todoItem.querySelector('.delete-btn');

  text.textContent = taskText;

  checkbox.addEventListener('change', () => {
    todoItem.classList.toggle('completed', checkbox.checked);
  });

  deleteButton.addEventListener('click', () => {
    todoItem.remove();
  });

  return todoItem;
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (!taskText) {
    return;
  }

  todoList.appendChild(createTodoItem(taskText));
  todoInput.value = '';
  todoInput.focus();
});
