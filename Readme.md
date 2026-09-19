# 📋 TaskFlow — Aplicación de Gestión de Tareas

Aplicación web interactiva desarrollada con **JavaScript moderno (ES6+)** para la gestión eficiente de tareas diarias. Proyecto de evaluación del **Módulo #4: Programación Avanzada en JavaScript**.

---

## 🎯 Cumplimiento de requerimientos

### 1. Orientación a Objetos ✅

- **`Task`**: modelo con `id`, `title`, `descripcion`, `completed`, `fechaCreacion`, `fechaLimite`. Métodos: `toggleStatus()`, `updateTitle()`, `updateDescription()`, `delete()`, `getEstado()`, `getTiempoRestante()`, `toJSON()`.
- **`TaskManager`**: administra la colección, persistencia y render. Métodos: `saveToLocalStorage()`, `loadFromLocalStorage()`, `addTaskAsync()`, `deleteTask()`, `toggleTaskStatus()`, `editTask()`, `render()`.
- **`ApiService`**: encapsula `fetch()`, GET y POST, manejo de errores con `try/catch`.

### 2. Características ES6+ ✅

- `let` / `const` en todo el código.
- **Template literals** (`${}`) en logs y notificaciones.
- **Arrow functions** en callbacks, `map`, `filter`, `find` y listeners.
- **Destructuring** de objetos y parámetros:
  - `const [title, descripcion = "", id = Date.now(), ...] = args;`
  - `taskTitleInput.addEventListener("keyup", ({ target }) => {...})`
  - `for (const { title, id, completed } of remoteTasks)`
- **Spread / Rest operators**:
  - `this.tasks = [...this.tasks, task];` (inmutable)
  - `addTaskAsync(...args)` (rest)
  - `addTasksFromApi(...tasks)` (rest)
  - `JSON.stringify({ ...payload })` (spread)

### 3. Eventos y Manipulación del DOM ✅

| Evento      | Elemento           | Función                               |
| ----------- | ------------------ | ------------------------------------- |
| `submit`    | `#task-form`       | Crea tarea con retardo asíncrono      |
| `click`     | `#fetch-api-btn`   | Importa tareas de la API              |
| `click`     | `#start-timer-btn` | Inicia contador global de 10s         |
| `click`     | botones de tarea   | Completar / Editar / Eliminar         |
| `keyup`     | `#task-title`      | Contador de caracteres en tiempo real |
| `mouseover` | `#task-list`       | Aplica clase `.is-hovered`            |
| `mouseout`  | `#task-list`       | Remueve la clase `.is-hovered`        |

### 4. JavaScript Asíncrono ✅

- `setTimeout(1000)` → simula retardo al agregar tarea.
- `setTimeout(2000)` → notificación diferida (requisito literal del PDF).
- `setInterval(1000)` → **contador regresivo POR TAREA** (activo cuando la tarea tiene `fechaLimite`).
- `setInterval(1000)` → contador global de demo (botón "Iniciar").
- `async/await` + `try/catch` en `ApiService`.

### 5. Consumo de APIs + localStorage ✅

- `fetch()` a **JSONPlaceholder** (`https://jsonplaceholder.typicode.com`).
- `GET /todos?_limit=5` → obtiene tareas remotas.
- `POST /todos` → simula guardar tarea remota.
- `localStorage.setItem / getItem` → persistencia local.
- Manejo de errores HTTP con `try/catch` y verificación de `response.ok`.

---

## 🎨 Diseño e Interfaz

Temática **bancaria profesional** inspirada en banca digital moderna (BBVA, Santander, N26).

- **Paleta**: azul corporativo `#0a2540`, acento cian `#00b8d4`, dorado `#c9a227`.
- **Tipografía**: [Inter](https://fonts.google.com/specimen/Inter) (estándar en fintech).
- **Componentes**: sistema de cards, badges, botones jerárquicos (`btn-primary`, `btn-secondary`, `btn-delete`).
- **Variables CSS**: paleta, sombras y radios centralizados en `:root`.
- **Responsive**: layout adaptativo con breakpoint en `640px`.
- **Contador visual**: badge por tarea que cambia a rojo al expirar.

---

## 📁 Estructura del proyecto

/
├── index.html
├── css/
│ └── styles.css
└── js/
├── app.js # Punto de entrada y controladores de eventos
├── Task.js # Modelo (clase Task)
├── TaskManager.js # Gestor de estado, persistencia y DOM
└── ApiService.js # Cliente HTTP (fetch + try/catch)

---

## 🚀 Uso

1. Clonar el repositorio.
2. Abrir `index.html` en un navegador moderno (o servir con `Live Server`).
3. Opcional: crear tarea con fecha límite → verás un contador individual en la tarea.

---

## ✅ Entregables

- ✅ Código fuente documentado (JSDoc en clases y métodos).
- ✅ Demostración funcional (formulario, API, contador, eventos).
- ✅ Informe técnico (este README + documento aparte).

---

## 🧰 Tecnologías

- JavaScript ES6+ (módulos, clases, async/await, destructuring, spread/rest)
- Fetch API
- LocalStorage
- HTML5 semántico
- CSS3 (variables, grid, responsive)
