# Proyecto II: Prototipo Funcional — Residencial Los Robles

> ** Visión del Proyecto:** Este prototipo trasciende los requerimientos básicos al integrar una arquitectura **End-to-End completamente funcional**, desarrollada bajo una estricta metodología ágil (Scrum). Destaca por su enfoque en la experiencia de usuario (UI/UX responsiva), la gestión estructurada de bases de datos relacionales y la implementación de seguridad en la autenticación.

## Miembros del Equipo (Equipo 3)

* **ITZEL ARACELI LARIOS TADILLO** 
* **JOAB ELIHU GALINDO LÓPEZ** 
* **FRANCISCO GERARDO IBARRA PÉREZ** 
---

## Sprint Ejecutado y Logros Alcanzados

Prototipo mínimo de 3 historias de usuario del sprint actual integradas con éxito:
*  **HU-05 · Base de datos y entorno** — La base SQLite se genera a partir de `schema_los_robles.sql` y se sirve eficientemente mediante Prisma + Express.
*  **HU-01 · Registro de residente** — Formulario conectado y validado que crea un usuario con rol `residente` ligado estrictamente a una vivienda del padrón.
*  **HU-02 · Login seguro** — Sistema de autenticación real con verificación de contraseña encriptada usando `bcrypt`.

---

## Stack Tecnológico
* **Backend:** Node.js + Express + Prisma + SQLite (`server/`)
* **Frontend:** React + Vite + react-router (`client/`)
* **CSS:** Mínimo, un solo archivo centralizado (`client/src/index.css`), sin dependencias de frameworks externos para mayor control.

---

## Estructura del Proyecto

```text
schema_los_robles.sql     ← script SQL original (fuente de verdad del esquema)
server/
  prisma/schema.prisma    ← modelos generados por introspección del .sql
  prisma/dev.db           ← base SQLite (se genera, no se versiona)
  index.js                ← API Express (3 endpoints)
client/
  src/App.jsx             ← Login, Register, Dashboard
