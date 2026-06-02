<?php
require_once __DIR__ . '/../config/helpers.php';
require_once __DIR__ . '/../config/database.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonError('Método no permitido', 405);
}

$body = body();
$usuario  = trim($body['usuario']  ?? '');
$password = trim($body['contrasena'] ?? '');

if (!$usuario || !$password) {
    jsonError('Usuario y contraseña son requeridos');
}

$pdo  = getDB();
$stmt = $pdo->prepare('SELECT id, nombre, correo, contrasena FROM usuarios WHERE nombre = ? OR correo = ?');
$stmt->execute([$usuario, $usuario]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['contrasena'])) {
    jsonError('Credenciales incorrectas, intenta de nuevo.', 401);
}

$_SESSION['user_id'] = $user['id'];
$_SESSION['nombre']  = $user['nombre'];

jsonOk(['id' => $user['id'], 'nombre' => $user['nombre'], 'correo' => $user['correo']]);
