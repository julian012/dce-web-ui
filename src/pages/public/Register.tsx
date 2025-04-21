import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth(); // Función de registro del contexto
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!email || !password) {
      return setError('Todos los campos son obligatorios');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password); // Registro en el contexto
      navigate('/dashboard'); // Redirige al área privada
    } catch (err) {
      setError('Error al crear la cuenta');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Crear cuenta</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="submit-button"
        >
          {loading ? 'Creando cuenta...' : 'Registrarse'}
        </button>
      </form>

      <div className="login-link">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </div>
    </div>
  );
}