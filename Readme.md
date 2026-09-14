# 📋 Informe Técnico: Aplicación TaskFlow

## 1. Resumen del Proyecto

**TaskFlow** es una aplicación web interactiva diseñada para la gestión eficiente de tareas diarias.

La aplicación fue desarrollada utilizando **JavaScript moderno (ES6+)**, aplicando conceptos de:

- Programación Orientada a Objetos (POO).
- Manipulación dinámica del DOM.
- Gestión de eventos.
- Programación asíncrona.
- Consumo de APIs externas.
- Persistencia de datos mediante `localStorage`.

---

## 2. Arquitectura y Estructura del Código

La aplicación utiliza una arquitectura modular, separando las responsabilidades en diferentes clases y componentes.

### 📌 `Task.js` — Modelo de Datos

Define la entidad individual de una tarea mediante la clase `Task`.

Modela las siguientes propiedades:

- `id`
- `title`
- `descripcion`
- `completed`
- `fechaCreacion`

Además, encapsula la lógica relacionada con el estado de cada tarea mediante métodos como:

- `toggleStatus()`
- `updateTitle()`
- `getEstado()`

---

### 📌 `TaskManager.js` — Gestión de Estado y Persistencia

La clase `TaskManager` administra la colección global de tareas y centraliza la gestión de su estado.

Sus principales funcionalidades son:

- Administración de tareas.
- Persistencia mediante `localStorage`.
- Carga de tareas almacenadas.
- Renderizado dinámico de la lista.
- Simulación de operaciones asíncronas.
- Sistema de notificaciones diferidas.
- Temporizador regresivo para tareas con fecha límite.

Métodos principales:

- `saveToLocalStorage()`
- `loadFromLocalStorage()`
- `addTaskAsync()`
- `render()`

Para la simulación de procesos asíncronos se utilizan:

- `setTimeout()` para operaciones y notificaciones diferidas.
- `setInterval()` para el funcionamiento del temporizador regresivo.

---

### 📌 `ApiService.js` — Consumo de API Externa

La clase `ApiService` se encarga de la comunicación con una API externa mediante `fetch()`.

La aplicación utiliza **JSONPlaceholder** para simular operaciones con datos remotos.

Principales funcionalidades:

- Obtener tareas externas mediante peticiones `GET`.
- Simular la creación de tareas mediante peticiones `POST`.
- Manejar errores en las solicitudes HTTP.

Métodos principales:

- `fetchRemoteTasks()`
- `saveRemoteTask()`

El código utiliza `async/await` para trabajar con operaciones asíncronas y bloques `try/catch` para controlar posibles errores durante las solicitudes.

---

### 📌 `app.js` — Controlador e Interacción

`app.js` corresponde al punto de entrada de la aplicación y se encarga de coordinar las diferentes funcionalidades.

Inicializa y utiliza las instancias de:

- `TaskManager`
- `ApiService`

También administra los eventos generados por el usuario.

#### Eventos implementados

| Evento      | Funcionalidad                                                       |
| ----------- | ------------------------------------------------------------------- |
| `submit`    | Procesamiento del formulario para crear tareas.                     |
| `click`     | Activación manual del temporizador e importación de datos externos. |
| `keyup`     | Conteo en tiempo real de caracteres ingresados.                     |
| `mouseover` | Retroalimentación visual al pasar sobre una tarea.                  |
| `mouseout`  | Restauración del estado visual al salir de una tarea.               |

---

## 3. Cumplimiento de Requerimientos

### 🧩 Orientación a Objetos

La aplicación implementa Programación Orientada a Objetos mediante clases especializadas:

- `Task`
- `TaskManager`
- `ApiService`

Cada clase mantiene responsabilidades específicas y métodos relacionados con su funcionalidad.

---

### ⚡ Características ES6+

El proyecto utiliza diferentes características modernas de JavaScript, entre ellas:

- `let` y `const`.
- Arrow functions.
- Template literals.
- Módulos ES mediante `import/export`.
- Promesas.
- `async/await`.
- Clases y métodos.

---

### 🌐 Manipulación del DOM y Eventos

La interfaz se genera y actualiza dinámicamente mediante JavaScript.

Se implementa:

- Creación y modificación de elementos HTML.
- Actualización dinámica de la lista de tareas.
- Manejo de eventos del usuario.
- Retroalimentación visual mediante eventos del mouse.
- Actualización de información en tiempo real.

---

### ⏱️ Asincronía y APIs

La aplicación incorpora diferentes mecanismos de programación asíncrona:

- `async/await`.
- `fetch()`.
- Promesas.
- `setTimeout()`.
- `setInterval()`.

También utiliza:

- `localStorage` para persistencia local.
- **JSONPlaceholder** para el consumo de una API externa.
- `try/catch` para el manejo de errores en operaciones asíncronas.

---

## 4. Conclusión

**TaskFlow** integra los principales conceptos de JavaScript moderno solicitados para el desarrollo de una aplicación web interactiva.

El proyecto combina **Programación Orientada a Objetos, módulos ES6+, manipulación del DOM, eventos, asincronía, persistencia local y consumo de APIs externas**, manteniendo una separación de responsabilidades entre sus principales componentes.

De esta forma, la aplicación permite gestionar tareas de manera dinámica y demuestra la aplicación práctica de diferentes características fundamentales de JavaScript moderno.
