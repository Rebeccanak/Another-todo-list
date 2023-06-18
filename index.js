// Get the input element and the list element
const inputBox = document.getElementById('toDos');
const list = document.querySelector('.to-dos__list');

// Function to add a new to-do item
function addTodo() {
  // Get the value from the input box
  const todoText = inputBox.value.trim();

  // Create a new list item and buttons
  const listItem = document.createElement('li');
  listItem.className = 'to-dos__list-item';
  listItem.innerHTML = `${todoText} <button class="remove">X</button> <button class="tick">✔</button>`;

  // Append the new item to the list
  list.appendChild(listItem);

  // Clear the input box
  inputBox.value = '';
}

// Function to remove a to-do item
function removeTodo() {
  // Get the parent list item and remove it from the list
  const listItem = this.parentNode;
  list.removeChild(listItem);
}

// Function to mark a to-do item as completed
function completeTodo() {
  // Add a class to the parent list item to style it as completed
  const listItem = this.parentNode;
  listItem.classList.toggle('completed');
}

// Add event listeners to buttons and input box
document.querySelector('.to-dos__delete-btn').addEventListener('click', function () {
  // Remove all to-do items
  list.innerHTML = '';
});

document.querySelector('.to-dos__input-box').addEventListener('keydown', function (e) {
  // Add a to-do item when the Enter key is pressed
  if (e.key === 'Enter') {
    addTodo();
  }
});

document.querySelectorAll('.remove').forEach(btn => {
  // Add event listeners to remove buttons
  btn.addEventListener('click', removeTodo);
});

document.querySelectorAll('.tick').forEach(btn => {
  // Add event listeners to tick buttons
  btn.addEventListener('click', completeTodo);
});
