// Initialize isDarkMode at the top of the file
let isDarkMode = false;

document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const todoList = document.getElementById('todoList');
  const themeBtn = document.getElementById('themeBtn');

  // Autofocus input
  todoInput.focus();

  // Load saved tasks and theme
  loadTasks();
  loadTheme();

  // Function to create a task element
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.classList.add('fade-in');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '✖️';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      li.classList.add('fade-out'); // Add fade-out animation
      setTimeout(() => {
        todoList.removeChild(li);
        saveTasks();
      }, 300);
    });

    li.appendChild(deleteBtn);
    return li;
  }

  function addTask(taskText) {
    const li = createTaskElement(taskText);
    todoList.appendChild(li);
    setTimeout(() => li.classList.remove('fade-in'), 500); // Remove fade-in class after animation
  }

  addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
      addTask(taskText);
      saveTasks();
      todoInput.value = '';
      todoInput.focus(); // Keep focus
    }
  });

  todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addBtn.click();
    }
  });

  themeBtn.addEventListener('click', () => {
    const body = document.body;
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
    body.classList.toggle('light-mode', !isDarkMode);
    themeBtn.textContent = isDarkMode ? '🌙' : '☀️'; // Update button text
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });

  function saveTasks() {
    const tasks = Array.from(todoList.querySelectorAll('li')).map(li => li.firstChild.textContent.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTask);
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    isDarkMode = savedTheme === 'dark'; // Initialize isDarkMode based on saved theme
    body.classList.toggle('dark-mode', isDarkMode);
    body.classList.toggle('light-mode', !isDarkMode);
    themeBtn.textContent = isDarkMode ? '🌙' : '☀️'; // Set initial button text
  }
});