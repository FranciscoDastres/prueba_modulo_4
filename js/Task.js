/**
 * Clase que representa una Tarea individual dentro del sistema.
 * Aplica principios de POO encapsulando las propiedades y métodos propios de una tarea.
 */
export class Task {
  /**
   * @param {number|string} id - Identificador único de la tarea.
   * @param {string} title - Título o nombre principal de la tarea.
   * @param {string} descripcion - Descripción detallada opcional.
   * @param {boolean} completed - Estado de finalización de la tarea.
   * @param {Date|string} fechaCreacion - Fecha e instante de creación.
   */
  constructor(
    id,
    title,
    descripcion = "",
    completed = false,
    fechaCreacion = new Date(),
  ) {
    this.id = id;
    this.title = title;
    this.descripcion = descripcion;
    this.completed = completed;
    this.fechaCreacion = new Date(fechaCreacion);
  }

  /**
   * Alterna el estado de la tarea entre completada y pendiente.
   */
  toggleStatus() {
    this.completed = !this.completed;
  }

  /**
   * Actualiza el título de la tarea.
   * @param {string} newTitle
   */
  updateTitle(newTitle) {
    this.title = newTitle;
  }

  /**
   * Actualiza la descripción de la tarea.
   * @param {string} newDescription
   */
  updateDescription(newDescription) {
    this.descripcion = newDescription;
  }

  /**
   * Retorna una representación legible del estado actual.
   * @returns {string} Estado en texto.
   */
  getEstado() {
    return this.completed ? "Completada" : "Pendiente";
  }
}
