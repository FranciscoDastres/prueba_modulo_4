/**
 * Servicio encargado de gestionar el consumo de APIs externas usando Fetch API.
 * Encapsula la lógica de comunicación HTTP y el manejo de errores con try/catch.
 */
export class ApiService {
  /**
   * @param {string} baseUrl - URL base del servicio/API remota.
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Obtiene una lista de tareas remotas desde la API externa.
   * @param {number} limit - Límite de tareas a recuperar.
   * @returns {Promise<Array>} Arreglo de tareas recuperadas.
   */
  async fetchRemoteTasks(limit = 5) {
    try {
      const response = await fetch(`${this.baseUrl}/todos?_limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
      return [];
    }
  }

  /**
   * Simula la persistencia enviando una tarea nueva mediante una petición POST.
   * @param {Object} task - Objeto tarea a guardar.
   * @returns {Promise<Object|null>} Respuesta de la API o null en caso de error.
   */
  async saveRemoteTask(task) {
    try {
      const response = await fetch(`${this.baseUrl}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: task.title,
          completed: task.completed,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error al guardar en la API: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error al enviar datos a la API:", error);
      return null;
    }
  }
}
