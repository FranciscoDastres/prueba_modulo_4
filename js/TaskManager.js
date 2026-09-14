import { Task } from "./Task.js";

/**
 * Clase gestora que administra el estado global de las tareas en memoria,
 * la sincronización con LocalStorage y la manipulación del DOM asociado.
 */
export class TaskManager {
  /**
   * @param {HTMLElement} containerElement - Elemento HTML donde se renderizan las tareas.
   * @param {HTMLElement} notificationElement - Elemento HTML para notificaciones emergentes.
   */
  constructor(containerElement, notificationElement) {
    this.tasks = [];
    this.containerElement = containerElement;
    this.notificationElement = notificationElement;
    this.countdownInterval = null;
    this.loadFromLocalStorage();
  }

  /**
   * Guarda el estado actual de las tareas en el LocalStorage del navegador.
   */
  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  /**
   * Recupera e instancía las tareas previamente guardadas en LocalStorage.
   */
  loadFromLocalStorage() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Re-instanciar objetos Task para recuperar sus métodos
      this.tasks = parsed.map(
        (t) =>
          new Task(t.id, t.title, t.descripcion, t.completed, t.fechaCreacion),
      );
    }
  }

  /**
   * Muestra una notificación con un retardo diferido de 2 segundos.
   * @param {string} message - Mensaje a mostrar.
   */
  showNotification(message) {
    setTimeout(() => {
      if (this.notificationElement) {
        this.notificationElement.textContent = message;
        this.notificationElement.style.display = "block";

        // Oculta la notificación automáticamente después de 3 segundos
        setTimeout(() => {
          this.notificationElement.style.display = "none";
        }, 3000);
      }
    }, 2000);
  }

  /**
   * Agrega una nueva tarea simulando un proceso asíncrono con retardo.
   * @param {string} title
   * @param {string} descripcion
   * @param {number|string} id
   * @param {boolean} completed
   * @returns {Promise<Task>} Instancia de la tarea creada.
   */
  addTaskAsync(title, descripcion = "", id = Date.now(), completed = false) {
    return new Promise((resolve) => {
      // Simulación de retardo asíncrono al guardar
      setTimeout(() => {
        const task = new Task(id, title, descripcion, completed);
        this.tasks.push(task);
        this.saveToLocalStorage();
        this.render();
        this.showNotification(`Tarea "${title}" agregada exitosamente.`);
        resolve(task);
      }, 1000);
    });
  }

  /**
   * Elimina una tarea por su ID.
   * @param {number|string} id
   */
  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveToLocalStorage();
    this.render();
  }

  /**
   * Alterna el estado de finalización de una tarea dada.
   * @param {number|string} id
   */
  toggleTaskStatus(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.toggleStatus();
      this.saveToLocalStorage();
      this.render();
    }
  }

  /**
   * Edita el título de una tarea existente.
   * @param {number|string} id
   * @param {string} newTitle
   */
  editTask(id, newTitle) {
    const task = this.tasks.find((task) => task.id === id);
    if (task && newTitle.trim() !== "") {
      task.updateTitle(newTitle);
      this.saveToLocalStorage();
      this.render();
    }
  }

  /**
   * Inicia un temporizador regresivo mediante setInterval para tareas con límite de tiempo.
   * @param {number} seconds - Duración del temporizador en segundos.
   * @param {HTMLElement} displayElement - Elemento HTML donde se proyecta la cuenta regresiva.
   */
  startCountdown(seconds, displayElement) {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    let timeRemaining = seconds;

    this.countdownInterval = setInterval(() => {
      if (timeRemaining <= 0) {
        clearInterval(this.countdownInterval);
        displayElement.textContent =
          "¡Tiempo finalizado para la tarea con fecha límite!";
      } else {
        displayElement.textContent = `Tiempo restante para la meta: ${timeRemaining}s`;
        timeRemaining--;
      }
    }, 1000);
  }

  /**
   * Renderiza el estado actual de las tareas de manera dinámica en el DOM.
   */
  render() {
    this.containerElement.innerHTML = "";

    this.tasks.forEach((task) => {
      const li = document.createElement("li");
      if (task.completed) {
        li.classList.add("completed");
      }

      const infoDiv = document.createElement("div");
      infoDiv.className = "task-info";

      const titleSpan = document.createElement("strong");
      titleSpan.textContent = task.title;

      const statusSpan = document.createElement("small");
      statusSpan.textContent = ` [${task.getEstado()}]`;

      const descP = document.createElement("p");
      descP.textContent = task.descripcion || "Sin descripción";

      infoDiv.append(titleSpan, statusSpan, descP);

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
      li.append(infoDiv, actionsDiv);
      this.containerElement.appendChild(li);
    });
  }
}
