export class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

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
}
