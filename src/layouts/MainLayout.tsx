import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MainLayout() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="app-container">
      <header>
        <nav>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard/purchases">Mis Compras</Link>
              <Link to="/dashboard/payment-methods">Medios de Pago</Link>
              <Link to="/dashboard/shop">Tienda</Link>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </nav>
      </header>

      <main>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
    </div>
  );
}