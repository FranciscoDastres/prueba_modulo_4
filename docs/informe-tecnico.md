# 📋 Informe Técnico — Aplicación TaskFlow

**Módulo #4 — Programación Avanzada en JavaScript**
**Unidad solicitante:** Departamento de Desarrollo Web

| Campo                | Valor                                                 |
| -------------------- | ----------------------------------------------------- |
| **Autor**            | _[Tu nombre completo]_                                |
| **Fecha de entrega** | _[DD/MM/AAAA]_                                        |
| **Repositorio**      | _[URL de tu repositorio GitHub]_                      |
| **Demo en vivo**     | _[URL de GitHub Pages, Netlify o Vercel — opcional]_  |
| **Tecnologías**      | JavaScript ES6+, HTML5, CSS3, Fetch API, LocalStorage |

---

## 📑 Índice

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Arquitectura del Proyecto](#2-arquitectura-del-proyecto)
3. [Cumplimiento de Requerimientos](#3-cumplimiento-de-requerimientos)
4. [Diseño e Interfaz](#4-diseño-e-interfaz)
5. [Demostración Funcional](#5-demostración-funcional)
6. [Conclusión](#6-conclusión)
7. [Referencias](#7-referencias)
8. [Anexos](#8-anexos)

---

## 1. Resumen Ejecutivo

**TaskFlow** es una aplicación web interactiva para la gestión de tareas diarias, desarrollada íntegramente con **JavaScript moderno (ES6+)**. El proyecto demuestra la aplicación práctica de los siguientes conceptos:

- **Programación Orientada a Objetos (POO)** mediante tres clases especializadas: `Task`, `TaskManager` y `ApiService`.
- **Manipulación dinámica del DOM** con renderizado programático y actualización en tiempo real.
- **Gestión de eventos de usuario**: `submit`, `click`, `keyup`, `mouseover` y `mouseout`.
- **Programación asíncrona**: `setTimeout`, `setInterval`, `async/await` y promesas.
- **Consumo de APIs externas** mediante `fetch()` contra **JSONPlaceholder**.
- **Persistencia local** con `localStorage`.

La aplicación permite crear, editar, completar y eliminar tareas, además de importar tareas desde una API remota y mostrar **contadores regresivos individuales** para tareas con fecha límite.

---

## 2. Arquitectura del Proyecto

La aplicación sigue una **arquitectura modular** basada en módulos ES (`import`/`export`), separando responsabilidades en tres clases y un controlador principal.

### 2.1 Estructura de archivos

```text
/
├── index.html              → Estructura semántica de la interfaz
├── README.md               → Documentación general del proyecto
├── informe-tecnico.md      → Este informe
├── css/
│   └── styles.css          → Diseño profesional temática bancaria
└── js/
    ├── Task.js             → Modelo de datos
    ├── TaskManager.js      → Gestión de estado, persistencia y DOM
    ├── ApiService.js       → Cliente HTTP (fetch + try/catch)
    └── app.js              → Controlador y punto de entrada
```
