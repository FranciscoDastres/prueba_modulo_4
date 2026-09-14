import { TaskManager } from "./TaskManager.js";
import { ApiService } from "./ApiService.js";

// Captura de referencias a elementos del DOM
const taskListElement = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskTitleInput = document.getElementById("task-title");
const taskDescInput = document.getElementById("task-desc");
const fetchApiBtn = document.getElementById("fetch-api-btn");
const notificationElement = document.getElementById("notification");
const countdownElement = document.getElementById("countdown");
const startTimerBtn = document.getElementById("start-timer-btn");
const charCounter = document.getElementById("char-counter");

// Inicialización de instancias de lógica e infraestructura
const taskManager = new TaskManager(taskListElement, notificationElement);
const apiService = new ApiService("https://jsonplaceholder.typicode.com");

// Renderizado inicial de tareas recuperadas de LocalStorage
taskManager.render();

// Captura de evento submit para el formulario de agregar tareas
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  const desc = taskDescInput.value.trim();

  if (title) {
    // Agrega la tarea de forma asíncrona y la sincroniza con la API remota
    const newTask = await taskManager.addTaskAsync(title, desc);
    await apiService.saveRemoteTask(newTask);

    // Limpieza de inputs
    taskTitleInput.value = "";
    taskDescInput.value = "";
    if (charCounter) charCounter.textContent = "0 caracteres";
  }
});

// Captura del evento keyup para medir la longitud del título ingresado en tiempo real
taskTitleInput.addEventListener("keyup", (e) => {
  const length = e.target.value.length;
  if (charCounter) {
    charCounter.textContent = `${length} caracteres`;
  }
});

// Eventos de mouseover y mouseout para retroalimentación visual interactiva en la lista
taskListElement.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "#e9ecef";
  }
});

taskListElement.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "transparent";
  }
});

// Captura del evento click para sincronizar tareas externas
fetchApiBtn.addEventListener("click", async () => {
  const remoteTasks = await apiService.fetchRemoteTasks(3);
  for (const item of remoteTasks) {
    await taskManager.addTaskAsync(
      item.title,
      "Importada desde API",
      item.id,
      item.completed,
    );
  }
});

// Captura del evento click para activar el temporizador de fecha límite
startTimerBtn.addEventListener("click", () => {
  taskManager.startCountdown(10, countdownElement);
});
