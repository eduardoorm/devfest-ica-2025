import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigateToLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para agregar sombra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menu al hacer click en enlace (mobile)
  const closeMenu = () => setIsMenuOpen(false);

  // Manejar navegación por teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg border-b border-gray-100' : 'shadow-sm border-b border-gray-50'
      }`}
      onKeyDown={handleKeyDown}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-gdg-blue via-gdg-green to-gdg-blue rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg lg:text-xl">G</span>
                </div>
                {/* Animated dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gdg-yellow rounded-full animate-pulse"></div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                  DevFest Ica
                </h1>
                <p className="text-xs lg:text-sm text-gdg-blue font-medium">
                  GDG Ica 2025
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12" role="navigation" aria-label="Navegación principal">
            <a 
              href="#home" 
              className="nav-link text-gray-700 hover:text-gdg-blue font-medium transition-all duration-200 relative group"
              aria-label="Ir a Inicio"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gdg-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#challenges" 
              className="nav-link text-gray-700 hover:text-gdg-green font-medium transition-all duration-200 relative group"
              aria-label="Ir a Retos"
            >
              Retos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gdg-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#rewards" 
              className="nav-link text-gray-700 hover:text-gdg-yellow font-medium transition-all duration-200 relative group"
              aria-label="Ir a Premios"
            >
              Premios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gdg-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#profile" 
              className="nav-link text-gray-700 hover:text-gdg-red font-medium transition-all duration-200 relative group"
              aria-label="Ir a Perfil"
            >
              Perfil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gdg-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <button 
              className="btn-secondary hover:bg-gdg-blue hover:text-white transform hover:scale-105 transition-all duration-200"
              onClick={onNavigateToLogin}
              aria-label="Iniciar sesión en DevFest Ica"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Iniciar Sesión
            </button>
            <button 
              className="btn-primary bg-gradient-to-r from-gdg-blue to-gdg-green hover:from-gdg-green hover:to-gdg-blue transform hover:scale-105 transition-all duration-200"
              aria-label="Registrarse en DevFest Ica"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gdg-blue hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:ring-offset-2"
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              {/* Hamburger Icon */}
              <span 
                className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span 
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Menú de navegación móvil"
        >
          <div className="py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1">
              {/* Mobile Navigation Links */}
              <a 
                href="#home" 
                onClick={closeMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-gdg-blue hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                aria-label="Ir a Inicio"
              >
                <svg className="w-5 h-5 mr-3 text-gdg-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Inicio</span>
              </a>
              
              <a 
                href="#challenges" 
                onClick={closeMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-gdg-green hover:bg-green-50 rounded-lg transition-all duration-200 group"
                aria-label="Ir a Retos"
              >
                <svg className="w-5 h-5 mr-3 text-gdg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">Retos</span>
              </a>
              
              <a 
                href="#rewards" 
                onClick={closeMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-gdg-yellow hover:bg-yellow-50 rounded-lg transition-all duration-200 group"
                aria-label="Ir a Premios"
              >
                <svg className="w-5 h-5 mr-3 text-gdg-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="font-medium">Premios</span>
              </a>
              
              <a 
                href="#profile" 
                onClick={closeMenu}
                className="flex items-center px-4 py-3 text-gray-700 hover:text-gdg-red hover:bg-red-50 rounded-lg transition-all duration-200 group"
                aria-label="Ir a Perfil"
              >
                <svg className="w-5 h-5 mr-3 text-gdg-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Perfil</span>
              </a>
            </nav>
            
            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-3 mt-6 px-4">
              <button 
                className="btn-secondary text-sm justify-center flex items-center hover:bg-gdg-blue hover:text-white transition-all duration-200"
                onClick={() => {
                  closeMenu();
                  onNavigateToLogin?.();
                }}
                aria-label="Iniciar sesión en DevFest Ica"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Iniciar Sesión
              </button>
              <button 
                className="btn-primary text-sm justify-center flex items-center bg-gradient-to-r from-gdg-blue to-gdg-green transition-all duration-200"
                onClick={closeMenu}
                aria-label="Registrarse en DevFest Ica"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
