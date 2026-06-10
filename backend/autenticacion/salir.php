<?php
require_once __DIR__ . '/../configuracion/ayudantes.php';
session_start();
session_destroy();
jsonOk(['mensaje' => 'Sesión cerrada']);
