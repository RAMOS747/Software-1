
   FINANCES - GUÍA DE USO


Este programa te permite registrar y ver tus gastos e ingresos
de una forma sencilla, con gráficos y resúmenes semanales.


¿QUÉ NECESITAS TENER INSTALADO?


Antes de correr el programa, asegúrate de tener esto en tu computador:

1. Node.js versión 18 o superior
   Descárgalo gratis en: https://nodejs.org
   (Elige la versión que dice "LTS")

2. MySQL
   Descárgalo gratis en: https://dev.mysql.com/downloads/installer/
   Durante la instalación te pedirá crear una contraseña, no la olvides.

3. Git (opcional, solo si vas a clonar el proyecto)
   Descárgalo en: https://git-scm.com


PASO 1 - DESCARGAR EL PROYECTO


Si tienes Git instalado, abre una terminal y escribe:

   git clone https://github.com/RAMOS747/Software-1.git

O si lo descargaste como archivo .zip, descomprímelo en una carpeta
de tu preferencia.


PASO 2 - CONFIGURAR LA BASE DE DATOS


1. Abre MySQL y crea una base de datos con el nombre: finances
   Puedes hacerlo con este comando en MySQL:

      CREATE DATABASE finances;

2. Dentro de la carpeta del proyecto busca un archivo llamado
   .env o config.js en la carpeta del backend y edítalo con
   tus datos de MySQL:

      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=tu_contraseña
      DB_NAME=finances

------------------------------
PASO 3 - INSTALAR LAS DEPENDENCIAS
------------------------------

El proyecto tiene dos partes: el backend y el frontend.
Hay que instalar las dependencias en cada una por separado.

Abre una terminal en la carpeta del proyecto y escribe:

   -- Para el backend --
   cd backend
   npm install

   -- Para el frontend --
   cd ../frontend
   npm install

(Si las carpetas tienen nombres diferentes como "server" o "client",
usa esos nombres en lugar de backend/frontend)

------------------------------
PASO 4 - CORRER EL PROGRAMA
------------------------------

Necesitas abrir DOS terminales al mismo tiempo:

   TERMINAL 1 - Backend:
   cd backend
   npm start

   TERMINAL 2 - Frontend:
   cd frontend
   npm run dev

Luego abre tu navegador y ve a:

   http://localhost:5173

¡Y listo! Ya puedes usar el programa.

------------------------------
¿QUÉ PUEDO HACER EN EL PROGRAMA?
------------------------------

- Registrar gastos e ingresos por categoría
- Ver un resumen semanal de tus finanzas
- Ver gráficos de barras, lineal, pastel y anillo
  con tus movimientos de la semana

------------------------------
PROBLEMAS COMUNES
------------------------------

"No conecta con la base de datos"
→ Verifica que MySQL esté corriendo y que los datos del .env
  sean correctos (usuario, contraseña y nombre de la base de datos).

"Puerto en uso"
→ Cierra otras aplicaciones que puedan estar usando el puerto
  o reinicia la terminal.

"npm no se reconoce"
→ Node.js no está instalado correctamente. Vuelve al Paso 1.

------------------------------
CONTACTO
------------------------------

Proyecto desarrollado por RAMOS747
GitHub: https://github.com/RAMOS747/Software-1

==============================