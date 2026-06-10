import { useState } from 'react';
import IniciarSesion           from './componentes/IniciarSesion';
import Registro        from './componentes/Registro';
import Inicio            from './componentes/Inicio';
import MenuLateral        from './componentes/MenuLateral';
import Categorias      from './componentes/Categorias';
import FormularioTransaccion from './componentes/FormularioTransaccion';
import ListaTransacciones from './componentes/ListaTransacciones';
import Panel       from './componentes/Panel';
import Logotipo            from './componentes/Logotipo';
import { auth }        from './api/peticiones';
import './estilos/globals.css';

/*
  Páginas posibles:
  'login' | 'register' | 'home' |
  'categorias-gastos' | 'categorias-ingresos' |
  'registro-gastos'   | 'registro-ingresos'   |
  'lista-gastos'      | 'lista-ingresos'       |
  'dashboard'
*/

export default function App() {
  const [user,         setUser]         = useState(null);
  const [page,         setPage]         = useState('login');
  const [menuOpen,     setMenuOpen]     = useState(false);

  // ── Auth ──────────────────────────────────────────────────────
  function handleLogin(userData) {
    setUser(userData);
    setPage('home');
  }

  async function handleLogout() {
    try { await auth.logout(); } catch (_) {}
    setUser(null);
    setPage('login');
  }

  // ── Pantallas de autenticación ────────────────────────────────
  if (!user) {
    if (page === 'register') {
      return <Registro onBack={() => setPage('login')} />;
    }
    return (
      <IniciarSesion
        onLogin={handleLogin}
        onGoRegister={() => setPage('register')}
      />
    );
  }

  // ── Aplicación principal ──────────────────────────────────────
  // Determina qué componente renderizar según la página actual
  function renderPage() {
    switch (page) {
      case 'home':
        return <Inicio onNavigate={setPage} />;

      case 'categorias-gastos':
        return <Categorias tipo="gasto"   onBack={() => setPage('home')} />;

      case 'categorias-ingresos':
        return <Categorias tipo="ingreso" onBack={() => setPage('home')} />;

      case 'registro-gastos':
        return <FormularioTransaccion tipo="gasto"   onBack={() => setPage('home')} />;

      case 'registro-ingresos':
        return <FormularioTransaccion tipo="ingreso" onBack={() => setPage('home')} />;

      case 'lista-gastos':
        return <ListaTransacciones tipo="gasto"   onBack={() => setPage('home')} />;

      case 'lista-ingresos':
        return <ListaTransacciones tipo="ingreso" onBack={() => setPage('home')} />;

      case 'dashboard':
        return <Panel onBack={() => setPage('home')} />;

      default:
        return <Inicio onNavigate={setPage} />;
    }
  }

  return (
    <div className="app-shell">
      {/* Barra lateral (decorativa) */}
      <div className="sidebar" />

      {/* Contenido */}
      <div className="main-content">
        {/* Botón hamburguesa */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <div className="hamburger-lines">
            <span /><span /><span />
          </div>
          <span className="hamburger-label">Menú</span>
        </button>

        {/* Menú desplegable */}
        <MenuLateral
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={setPage}
        />

        {/* Logo pequeño en home */}
        {page === 'home' && (
          <div style={{
            position:'absolute', bottom:12, left:14,
            display:'flex', flexDirection:'column', alignItems:'center',
            opacity:0.6, zIndex:10,
          }}>
            <Logotipo size={28} />
          </div>
        )}

        {/* Botón cerrar sesión (visible en home) */}
        {page === 'home' && (
          <button
            onClick={handleLogout}
            style={{
              position:'absolute', top:14, right:14,
              background:'rgba(255,255,255,0.1)', border:'none',
              borderRadius:8, color:'#fff', padding:'5px 10px',
              fontSize:'0.75rem', fontWeight:600, cursor:'pointer',
              zIndex:10,
            }}
          >
            Salir
          </button>
        )}

        {/* Página actual */}
        {renderPage()}
      </div>
    </div>
  );
}
