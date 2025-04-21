import { FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login("user@example.com", "password"); // Función simulada
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
      <Link to="/register">Crear cuenta</Link>
    </form>
  );
}