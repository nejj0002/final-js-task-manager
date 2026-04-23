document.getElementById('addBtn').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() !== "") {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('div');
        newTask.className = 'task-item';
        newTask.innerHTML = `
            <div class="checkbox"></div>
            <span class="task-text">${input.value}</span>
            <span class="tag comm">NEW</span>
        `;
        taskList.appendChild(newTask);
        input.value = "";
    }
});