let tasks = []; // stores all tasks

// Add new task
function addTask() {
  let taskText = taskInput.value;
  let taskDate = dueDate.value;

  tasks.push({
    text: taskText,
    date: taskDate,
    completed: false
  });

  displayTasks();
}

// Display tasks
function displayTasks() {
  taskList.innerHTML = "";

  // Sort tasks by due date
  tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${task.text} (${task.date})
      <button onclick="markDone(${index})">~</button>
      <button onclick="deleteTask(${index})">X</button>
    `;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    taskList.appendChild(li);
  });
}

// Mark task as completed
function markDone(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
