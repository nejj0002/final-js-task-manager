const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const progressFill = document.querySelector('.progress-fill');
const statsText = document.querySelector('.stats');

/**
 * Updates the Progress Bar and Text based on task status
 */
function updateProgress() {
    const allTasks = document.querySelectorAll('.task-item');
    const completedTasks = document.querySelectorAll('.task-item.completed');
    
    const total = allTasks.length;
    const completed = completedTasks.length;
    const percentage = total === 0 ? 0 : (completed / total) * 100;

    // Apply percentage to CSS width
    progressFill.style.width = percentage + '%';
    statsText.innerText = `${completed} of ${total} tasks completed`;
}

/**
 * Adds a new task to the list
 */
addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = document.createElement('div');
    newTask.className = 'task-item';
    newTask.innerHTML = `
        <div class="checkbox"></div>
        <span class="task-text">${text}</span>
        <span class="tag comm">NEW</span>
    `;

    taskList.appendChild(newTask);
    taskInput.value = ""; // Reset input
    updateProgress();
});

/**
 * Toggle Complete by clicking anywhere on the task card
 * Demonstrates Event Delegation
 */
taskList.addEventListener('click', (e) => {
    const item = e.target.closest('.task-item');
    if (item) {
        item.classList.toggle('completed');
        updateProgress();
    }
});

// Initial update to catch existing tasks
updateProgress();