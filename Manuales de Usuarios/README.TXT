
MANUAL DE USUARIO TECNICO - SISTEMA FINANCES
=====================================
 
Este manual explica como descargar, instalar y dejar funcionando el sistema 
Finances en tu computador "local host", y también como usarlo una vez este corriendo.
 
 
1. REQUISITOS PREVIOS
----------------------
Antes de empezar asegúrate de tener instalado:
 
- Node.js (incluye npm)
- Git
- XAMPP (para la base de datos MySQL)
- Un navegador (Chrome, Edge, Firefox, etc)
 
 
2. DESCARGAR EL PROYECTO
-------------------------
1. Abre una terminal (cmd, powershell o git bash)
2. Ubícate en la carpeta donde quieres guardar el proyecto
3. Ejecuta:
 
   git clone https://github.com/RAMOS747/Software-1.git
 
4. Entra a la carpeta que se creo:
 
   cd Software-1
 
 
3. INSTALAR DEPENDENCIAS
-------------------------
Dentro de la carpeta del proyecto ejecuta:
 
   npm install
 
Esto descarga todas las librerias que necesita el proyecto para funcionar. 
Puede tardar unos minutos dependiendo de la conexion a internet.
 

 
 
4. CONFIGURAR LA BASE DE DATOS (XAMPP - MYSQL)
-----------------------------------------------
El sistema guarda la informacion en una base de datos MySQL, asi que hay 
que dejarla lista antes de correr el proyecto.
 
1. Abre el panel de control de XAMPP
2. Inicia los modulos de Apache y MySQL (los dos deben quedar en verde / 
   "Running")
3. Abre el navegador y entra a:
 
   http://localhost/phpmyadmin
 
4. Pocicionado en phpmyadmin, ingresamos a la opcion importar bd,selecionamos la 
base de datos que esta alojada dentro de la carpeta de backend del proyecto al final.
 
Con eso quedan creadas todas las tablas que necesita el sistema (usuarios, 
categorias, transacciones, etc).
 

 
 
5. CORRER EL PROYECTO
----------------------
Con las dependencias instaladas y la base de datos importada, ya se puede 
levantar el proyecto.
 
1. Verifica que XAMPP siga corriendo (Apache y MySQL en verde)
2. En una terminal, dentro de la carpeta del frontend, ejecuta:
 
   npm run dev
 
3. Si el frontend esta en otra carpeta, abre otra terminal, entra a esa 
   carpeta y ejecuta tambien:
 
   npm run dev
 
4. Espera a que la terminal muestre la direccion donde quedo corriendo 
   algo como http://localhost:5173, 
5. Abre esa direccion en el navegador
 
Si las dependencias quedaron bien instaladas, la base de datos esta 
importada y los datos de conexion son correctos, el sistema deberia cargar 
sin problema y ya puedes registrarte y usarlo.
 
 
6. USO DEL SISTEMA
-------------------
 
6.1 Crear cuenta
- En la pantalla de inicio da clic en "Registrarse"
- Completa nombre, correo y contraseña (minimo 8 caracteres, combinando 
  letras y numeros)
- Da clic en "Crear cuenta"
- Si el correo ya esta registrado el sistema te avisa
 
6.2 Iniciar sesion
- Ingresa tu correo y contraseña
- Da clic en "Iniciar sesion"
- Si los datos son correctos entras al menu principal
 
6.3 Cerrar sesion
- Da clic en "Cerrar sesion", ubicado en la parte superior derecha
- Esto te regresa al login de inmediato
 
6.4 Categorias
- Antes de registrar gastos o ingresos primero hay que crear categorias
- Ve al menu lateral (icono de tres rayas) y entra a "Categorias"
- Escribe un nombre (maximo 15 caracteres), elige un color y selecciona el 
  tipo: Gasto o Ingreso
- Da clic en "Agregar categoria"
- No se pueden repetir nombres de categoria
- El limite es de 8 categorias de gasto y 8 de ingreso
- Desde la misma seccion se pueden editar o eliminar categorias (icono de 
  tres rayas en la parte superior derecha de la pantalla de Categorias)
- Si eliminas una categoria que tiene movimientos asociados, esos 
  movimientos tambien se eliminan
 
6.5 Registrar un gasto
- Menu lateral > "+ Registrar gasto"
- Elige la categoria de tipo Gasto
- Ingresa el valor (debe ser un numero mayor a cero)
- Selecciona la fecha
- Comentario es opcional
- Da clic en Guardar
 
6.6 Registrar un ingreso
- Menu lateral > "+ Registrar ingreso"
- Elige la categoria de tipo Ingreso
- Ingresa el valor (mayor a cero)
- Selecciona la fecha
- Comentario es opcional
- Da clic en Guardar
 
6.7 Dashboard
- Menu lateral > Dashboard
- Muestra el total de ingresos y el total de gastos de la ultima semana
- El saldo se calcula automatico: ingresos menos gastos
- Los movimientos registrados no se pueden editar, son de solo lectura
 
 
7. MENSAJES Y ERRORES COMUNES
------------------------------
- "Este correo ya esta registrado" -> usa otro correo o inicia sesion con 
  ese
- "El correo no tiene un formato valido" -> revisa que el correo este bien 
  escrito (ejemplo: usuario@correo.com)
- "Correo o contraseña incorrectos" -> revisa los datos de acceso
- "Ya tienes una categoria con ese nombre" -> cambia el nombre de la 
  categoria
- "El valor debe ser mayor a cero" -> revisa el monto que escribiste en 
  gasto o ingreso
- "Crea al menos una categoria antes de registrar una transaccion" -> 
  primero crea una categoria del tipo correspondiente
- "No se pudo conectar al servidor" -> revisa que XAMPP este corriendo 
  (Apache y MySQL) y que el backend este levantado con npm run dev
 
 
8. PREGUNTAS FRECUENTES
------------------------
- Puedo editar un gasto o ingreso ya guardado? 
  No, en esta version los movimientos son de solo lectura.
 
- Que pasa si elimino una categoria que tiene movimientos? 
  Los movimientos asociados se eliminan junto con la categoria.
 
- En que navegador funciona mejor? 
  Chrome o Edge. Tambien deberia funcionar en Firefox, Brave y Opera.
 
- El sistema funciona en celular? 
  Se puede usar pero esta pensado principalmente para computador.
 
- Olvide mi contraseña, que hago? 
  Por ahora hay que contactar al administrador del sistema para que la 
  restablezca.
 
- Cuantas categorias puedo crear? 
  Hasta 8 de gasto y 8 de ingreso.
 
 
9. SOPORTE
-----------
Para reportar errores, pedir ayuda o sugerir mejoras, abre un issue en el 
repositorio del proyecto:
 
https://github.com/RAMOS747/Software-1.git