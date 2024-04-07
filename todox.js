// Selectors
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Function to add a new task
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <span class="edit-btn">✎</span><span class="delete-btn">x</span>`;
    taskList.appendChild(li);

    // Event listener for deleting a task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    // Event listener for editing a task
    li.querySelector('.edit-btn').addEventListener('click', () => {
        const newTaskText = prompt('Edit the task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            li.innerHTML = `${newTaskText} <span class="edit-btn">✎</span><span class="delete-btn">x</span>`;
            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });
            li.querySelector('.edit-btn').addEventListener('click', () => {
                editTask(li, newTaskText);
            });
        }
    });
}

// Function to edit a task
function editTask(li, newTaskText) {
    const editedTaskText = prompt('Edit the task:', newTaskText);
    if (editedTaskText !== null && editedTaskText.trim() !== '') {
        li.innerHTML = `${editedTaskText} <span class="edit-btn">✎</span><span class="delete-btn">x</span>`;
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
        li.querySelector('.edit-btn').addEventListener('click', () => {
            editTask(li, editedTaskText);
        });
    }
}
