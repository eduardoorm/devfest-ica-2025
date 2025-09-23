import { useState } from 'react'
import LandingPage from './features/landing/LandingPage'
import Login from './features/auth/components/Login'
import type { LoginFormData } from './features/auth/types'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login'>('landing')

  const showLoginPage = () => setCurrentPage('login')

  // Handlers para el Login
  const handleLogin = async (_formData: LoginFormData) => {
    // TODO: Implementar lógica de autenticación
  }

  const handleForgotPassword = () => {
    // TODO: Implementar lógica de recuperación de contraseña
  }

  const handleSignUp = () => {
    // TODO: Implementar navegación a registro
  }

  return (
    <div className="App">
      {currentPage === 'landing' && (
        <LandingPage onNavigateToLogin={showLoginPage} />
      )}
      
      {currentPage === 'login' && (
        <Login
          onLogin={handleLogin}
          onBack={() => setCurrentPage('landing')}
          onForgotPassword={handleForgotPassword}
          onSignUp={handleSignUp}
          isLoading={false}
        />
      )}
    </div>
  )
}

export default App
