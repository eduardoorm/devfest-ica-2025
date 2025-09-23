/**
 * @component NewFooter
 * @description Footer mejorado para DevFest Ica siguiendo las guías de diseño GDG
 * 
 * @features
 * - Diseño responsive (desktop, tablet, mobile)
 * - Branding GDG Ica con colores oficiales
 * - Secciones organizadas: navegación, recursos, newsletter, redes sociales
 * - Accesibilidad (ARIA labels, navegación por teclado)
 * - Tipografía Google Sans
 * 
 * @example
 * ```tsx
 * <NewFooter />
 * ```
 */

import { useState } from 'react';

interface NewsletterFormData {
  email: string;
}

const NewFooter = () => {
  const [newsletterData, setNewsletterData] = useState<NewsletterFormData>({ email: '' });
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterData.email) return;
    
    setIsSubscribing(true);
    // Simular llamada a API
    setTimeout(() => {
      setIsSubscribing(false);
      setNewsletterData({ email: '' });
      // TODO: Mostrar mensaje de éxito
    }, 1000);
  };

  const navigationLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#retos', label: 'Retos' },
    { href: '#premios', label: 'Premios' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const resourceLinks = [
    { href: '#documentacion', label: 'Documentación' },
    { href: '#tutoriales', label: 'Tutoriales' },
    { href: '#api', label: 'API Reference' },
    { href: 'https://github.com/eduardoorm/devfest-ica-2025', label: 'GitHub', external: true },
    { href: '#soporte', label: 'Soporte' },
  ];

  const legalLinks = [
    { href: '#terminos', label: 'Términos de Servicio' },
    { href: '#privacidad', label: 'Política de Privacidad' },
    { href: '#codigo-conducta', label: 'Código de Conducta' },
  ];

  const socialLinks = [
    {
      href: 'https://twitter.com/gdgica',
      label: 'Twitter',
      icon: (
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      ),
    },
    {
      href: 'https://linkedin.com/company/gdg-ica',
      label: 'LinkedIn',
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      ),
    },
    {
      href: 'https://github.com/eduardoorm/devfest-ica-2025',
      label: 'GitHub',
      icon: (
        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      ),
    },
    {
      href: 'https://instagram.com/gdgica',
      label: 'Instagram',
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white font-google" role="contentinfo">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 bg-gradient-to-r from-gdg-blue to-gdg-green rounded-lg flex items-center justify-center shadow-lg"
                  role="img"
                  aria-label="Logo de GDG Ica"
                >
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">DevFest Ica</h3>
                  <p className="text-gray-400 text-sm">Google Developer Group Ica</p>
                </div>
              </div>
              
              <p className="text-gray-300 max-w-md leading-relaxed text-base">
                La comunidad de desarrolladores más grande de Ica. Conectamos, educamos 
                e inspiramos a los tecnólogos del futuro a través de eventos, talleres y retos técnicos.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gdg-blue/10 hover:bg-gdg-blue/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={`Síguenos en ${social.label}`}
                  >
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Navegación</h4>
              <nav aria-label="Enlaces de navegación principal">
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-gdg-blue transition-colors duration-200 text-sm focus:outline-none focus:text-gdg-blue"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Recursos</h4>
              <nav aria-label="Enlaces de recursos">
                <ul className="space-y-3">
                  {resourceLinks.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href}
                        {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                        className="text-gray-300 hover:text-gdg-green transition-colors duration-200 text-sm focus:outline-none focus:text-gdg-green"
                      >
                        {link.label}
                        {link.external && (
                          <span className="ml-1 inline-block">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-white">
                Mantente actualizado
              </h4>
              <p className="text-gray-300 text-sm">
                Recibe las últimas noticias sobre retos, eventos y premios directamente en tu inbox.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Dirección de correo electrónico
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={newsletterData.email}
                  onChange={(e) => setNewsletterData({ email: e.target.value })}
                  placeholder="tu-email@ejemplo.com"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:border-transparent transition-colors text-sm"
                  aria-describedby="newsletter-description"
                />
                <button 
                  type="submit"
                  disabled={isSubscribing || !newsletterData.email}
                  className="bg-gdg-blue hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 whitespace-nowrap text-sm focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Suscribirse al newsletter"
                >
                  {isSubscribing ? 'Suscribiendo...' : 'Suscribirse'}
                </button>
              </div>
              <p id="newsletter-description" className="text-xs text-gray-400 md:hidden">
                Al suscribirte, aceptas recibir emails de GDG Ica.
              </p>
            </form>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 GDG Ica. Todos los derechos reservados.
            </div>
            
            <nav aria-label="Enlaces legales">
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                {legalLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;