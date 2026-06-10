// ── Configuración base ────────────────────────────────────────
const BASE = '/api';

async function request(method, path, body = null) {
  const opts = {
    method,
    credentials: 'include',               // Envía cookies de sesión
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);

  const res  = await fetch(BASE + path, opts);
  const json = await res.json();

  if (!json.ok) {
    throw new Error(json.error || 'Error desconocido');
  }
  return json.data;
}

// ── Auth ──────────────────────────────────────────────────────
export const auth = {
  login:    (usuario, contrasena) => request('POST', '/autenticacion/ingresar.php',    { usuario, contrasena }),
  register: (nombre, contrasena, correo) => request('POST', '/autenticacion/registrarse.php', { nombre, contrasena, correo }),
  logout:   ()               => request('GET',  '/autenticacion/salir.php'),
};

// ── Categorías ────────────────────────────────────────────────
export const categories = {
  getAll:  (tipo) => request('GET',    `/categorias/index.php?tipo=${tipo}`),
  create:  (data) => request('POST',   '/categorias/index.php', data),
  update:  (id, data) => request('PUT',    `/categorias/index.php?id=${id}`, data),
  remove:  (id) => request('DELETE',  `/categorias/index.php?id=${id}`),
};

// ── Transacciones ─────────────────────────────────────────────
export const transactions = {
  getAll: (tipo) => request('GET',    `/transacciones/index.php?tipo=${tipo}`),
  create: (data) => request('POST',   '/transacciones/index.php', data),
  remove: (id)   => request('DELETE', `/transacciones/index.php?id=${id}`),
};

// ── Home (resumen semanal) ────────────────────────────────────
export const home = {
  getSummary: () => request('GET', '/inicio/index.php'),
};

// ── Dashboard ─────────────────────────────────────────────────
export const dashboard = {
  getData: () => request('GET', '/panel/index.php'),
};
