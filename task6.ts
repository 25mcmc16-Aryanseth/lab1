enum TaskStatus {
    Pending = "Pending",
    Completed = "Completed"
}

class Task {
    constructor(
        public id: number,
        public title: string,
        public dueDate: string,
        public status: TaskStatus = TaskStatus.Pending
    ) {}

    complete() {
        this.status = TaskStatus.Completed;
    }
}

let tasks: Task[] = [];

const inputBox = document.getElementById("taskInput") as HTMLInputElement;
const dateBox = document.getElementById("taskDate") as HTMLInputElement;
const listBox = document.getElementById("taskList") as HTMLUListElement;


// make function global for HTML button
(window as any).handleAddTask = function () {

    const text = inputBox.value.trim();
    const date = dateBox.value;

    if (!text) {
        alert("Enter a task");
        return;
    }

    const task = new Task(tasks.length + 1, text, date);
    tasks.push(task);

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text + (date ? " (Due: " + date + ")" : "");

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.onclick = () => {
        task.complete();
        span.style.textDecoration = "line-through";
    };

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => li.remove();

    li.append(span, doneBtn, delBtn);
    listBox.appendChild(li);

    inputBox.value = "";
    dateBox.value = "";
};
