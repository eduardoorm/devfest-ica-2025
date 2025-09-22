export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginProps {
  /**
   * Función que se ejecuta cuando el usuario envía el formulario de login
   */
  onLogin: (data: LoginFormData) => void | Promise<void>;
  
  /**
   * Función que se ejecuta cuando el usuario hace clic en "Olvidé mi contraseña"
   */
  onForgotPassword?: () => void;
  
  /**
   * Función que se ejecuta cuando el usuario hace clic en "Registrarse"
   */
  onSignUp?: () => void;
  
  /**
   * Función que se ejecuta cuando el usuario hace clic en "Volver"
   */
  onBack?: () => void;
  
  /**
   * Estado de carga del formulario
   */
  isLoading?: boolean;
  
  /**
   * Mensaje de error a mostrar
   */
  error?: string;
  
  /**
   * Título personalizado para el componente
   */
  title?: string;
  
  /**
   * Subtítulo o descripción
   */
  subtitle?: string;
  
  /**
   * Permite login con redes sociales
   */
  enableSocialLogin?: boolean;
  
  /**
   * Clase CSS adicional para personalización
   */
  className?: string;
}
