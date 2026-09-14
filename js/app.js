import { TaskManager } from "./TaskManager.js";
import { ApiService } from "./ApiService.js";

// Configuración de instancias
const taskListElement = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskTitleInput = document.getElementById("task-title");
const fetchApiBtn = document.getElementById("fetch-api-btn");

const taskManager = new TaskManager(taskListElement);
const apiService = new ApiService("https://jsonplaceholder.typicode.com");

// Eventos del usuario
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  if (title) {
    taskManager.addTask(title);
    taskTitleInput.value = "";
  }
});

fetchApiBtn.addEventListener("click", async () => {
  const remoteTasks = await apiService.fetchRemoteTasks(3);
  remoteTasks.forEach((item) => {
    taskManager.addTask(item.title, item.id, item.completed);
  });
});
