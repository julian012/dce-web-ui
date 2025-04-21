import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Asume un contexto de autenticación

export function PrivateRoute() {
  const { isAuthenticated } = useAuth(); // Hook personalizado

  return isAuthenticated ? (
    <Outlet /> // Renderiza las rutas hijas
  ) : (
    <Navigate to="/login" replace />
  );
}