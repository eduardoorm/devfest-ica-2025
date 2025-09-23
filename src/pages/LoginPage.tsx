import React, { useState } from 'react';
import { Login } from '../features/auth';
import type { LoginFormData } from '../features/auth';

/**
 * Página de ejemplo que demuestra el uso del componente Login
 */
const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  /**
   * Simula el proceso de login
   */
  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(undefined);

    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular error aleatorio para demostración
      if (Math.random() > 0.7) {
        throw new Error('Credenciales incorrectas');
      }

      alert(`¡Bienvenido! Email: ${data.email}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Maneja el enlace de "Olvidé mi contraseña"
   */
  const handleForgotPassword = () => {
    alert('Función de recuperar contraseña - Aquí iría la lógica correspondiente');
  };

  /**
   * Maneja el enlace de "Registrarse"
   */
  const handleSignUp = () => {
    alert('Función de registro - Aquí iría la navegación al formulario de registro');
  };

  return (
    <Login
      onLogin={handleLogin}
      onForgotPassword={handleForgotPassword}
      onSignUp={handleSignUp}
      isLoading={isLoading}
      error={error}
      title="Bienvenido a DevFest Ica"
      subtitle="Inicia sesión para acceder a los retos y premios"
      enableSocialLogin={true}
    />
  );
};

export default LoginPage;
