import { Task } from "./Task.js";

export class TaskManager {
  constructor(containerElement) {
    this.tasks = [];
    this.containerElement = containerElement;
  }

  addTask(title, id = Date.now(), completed = false) {
    const task = new Task(id, title, completed);
    this.tasks.push(task);
    this.render();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.render();
  }

  toggleTaskStatus(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.toggleStatus();
      this.render();
    }
  }

  editTask(id, newTitle) {
    const task = this.tasks.find((task) => task.id === id);
    if (task && newTitle.trim() !== "") {
      task.updateTitle(newTitle);
      this.render();
    }
  }

  render() {
    this.containerElement.innerHTML = "";

    this.tasks.forEach((task) => {
      const li = document.createElement("li");
      if (task.completed) {
        li.classList.add("completed");
      }

      const titleSpan = document.createElement("span");
      titleSpan.textContent = task.title;

      const actionsDiv = document.createElement("div");
      actionsDiv.className = "task-actions";

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = task.completed ? "Desmarcar" : "Completar";
      toggleBtn.addEventListener("click", () => this.toggleTaskStatus(task.id));

      const editBtn = document.createElement("button");
      editBtn.textContent = "Editar";
      editBtn.addEventListener("click", () => {
        const newTitle = prompt("Nuevo título:", task.title);
        if (newTitle) this.editTask(task.id, newTitle);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Eliminar";
      deleteBtn.className = "btn-delete";
      deleteBtn.addEventListener("click", () => this.deleteTask(task.id));

      actionsDiv.append(toggleBtn, editBtn, deleteBtn);
      li.append(titleSpan, actionsDiv);
      this.containerElement.appendChild(li);
    });
  }
}
