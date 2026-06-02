# 💰 Finances App

App web de gestión de finanzas personales — gastos e ingresos por categorías, con dashboard visual.

**Stack:** React + Vite (frontend) · PHP + MySQL (backend)

---

## Estructura del proyecto

```
finances-app/
├── backend/
│   ├── database.sql          ← Esquema de base de datos
│   ├── config/
│   │   ├── database.php      ← Conexión PDO
│   │   └── helpers.php       ← Respuestas JSON, sesión, CORS
│   ├── auth/
│   │   ├── login.php
│   │   ├── register.php
│   │   └── logout.php
│   ├── categories/
│   │   └── index.php         ← CRUD de categorías (GET/POST/PUT/DELETE)
│   ├── transactions/
│   │   └── index.php         ← CRUD de transacciones
│   ├── home/
│   │   └── index.php         ← Resumen semanal
│   └── dashboard/
│       └── index.php         ← Datos del dashboard
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── api/api.js
        ├── styles/globals.css
        └── components/
            ├── Logo.jsx
            ├── Toast.jsx
            ├── Login.jsx
            ├── Register.jsx
            ├── Home.jsx
            ├── SideMenu.jsx
            ├── Categories.jsx
            ├── TransactionForm.jsx
            ├── TransactionList.jsx
            └── Dashboard.jsx
```

---

## ⚙️ Configuración

### 1 · Requisitos

| Herramienta  | Versión mínima |
|---|---|
| Node.js      | 18+ |
| PHP          | 8.1+ |
| MySQL        | 8.0+ |
| XAMPP / WAMP | Cualquier versión reciente |

### 2 · Base de datos

```sql
-- Importa el esquema desde phpMyAdmin o consola:
mysql -u root -p < backend/database.sql
```

### 3 · Configurar el backend

Edita `backend/config/database.php` con tus credenciales:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'tu_contraseña');
define('DB_NAME', 'finances_db');
```

Coloca la carpeta `finances-app/` en tu servidor local:
- XAMPP: `C:/xampp/htdocs/finances-app/`
- WAMP:  `C:/wamp64/www/finances-app/`

### 4 · Instalar y ejecutar el frontend

```bash
cd frontend
npm install
npm run dev
```

La app estará disponible en **http://localhost:5173**

El proxy de Vite redirige automáticamente `/api/*` → `http://localhost/finances-app/backend/*`

---

## 🚀 Funcionalidades

- **Autenticación** — Registro, inicio y cierre de sesión con contraseñas encriptadas (bcrypt)
- **Categorías** — Hasta 8 categorías de gastos y 8 de ingresos, con nombre (máx 10 letras) y color personalizable
- **Transacciones** — Registro con valor, fecha (calendario nativo), categoría y comentarios opcionales
- **Dashboard** — Gráfico de dona con distribución por categoría y totales generales
- **Dinero disponible** — Cálculo automático: ingresos − gastos de la semana

---

## 📝 Notas

- Las sesiones PHP requieren que el frontend y backend compartan el mismo dominio (o usando el proxy de Vite en desarrollo).
- Para producción, construye el frontend con `npm run build` y sirve la carpeta `dist/` desde Apache/Nginx junto al backend PHP.
