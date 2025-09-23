import React, { useState, useEffect } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface NewsletterFormData {
  email: string;
}

const Footer: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [newsletterForm, setNewsletterForm] = useState<NewsletterFormData>({
    email: ''
  });
  const [contactErrors, setContactErrors] = useState<Partial<ContactFormData>>({});
  const [newsletterError, setNewsletterError] = useState<string>('');
  const [contactSuccess, setContactSuccess] = useState<boolean>(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<ContactFormData> = {};

    if (!contactForm.name.trim()) errors.name = 'El nombre es requerido';
    if (!contactForm.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!validateEmail(contactForm.email)) {
      errors.email = 'Formato de email inválido';
    }
    if (!contactForm.message.trim()) errors.message = 'El mensaje es requerido';

    setContactErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Simulate form submission
      console.log('Contact form submitted:', contactForm);
      setContactSuccess(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setContactSuccess(false), 5000);
    }
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let error = '';

    if (!newsletterForm.email.trim()) {
      error = 'El email es requerido';
    } else if (!validateEmail(newsletterForm.email)) {
      error = 'Formato de email inválido';
    }

    setNewsletterError(error);

    if (!error) {
      // Simulate newsletter subscription
      console.log('Newsletter subscription:', newsletterForm.email);
      setNewsletterSuccess(true);
      setNewsletterForm({ email: '' });
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Gradient overlay for visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-r from-gdg-blue/5 via-transparent to-gdg-green/5 pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-5">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gdg-blue via-gdg-green to-gdg-yellow rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">G</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">DevFest Ica</h3>
                    <p className="text-gdg-yellow text-sm font-medium">GDG Ica 2025</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                  La comunidad de desarrolladores más grande de Ica. Conectamos, educamos 
                  e inspiramos a los tecnólogos del futuro.
                </p>

                {/* Enhanced Social Links with Animations */}
                <div className="flex space-x-4">
                  <a 
                    href="https://twitter.com/gdgica" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-gdg-blue/20 to-gdg-blue/10 hover:from-gdg-blue hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Síguenos en Twitter"
                  >
                    <svg className="w-6 h-6 text-gdg-blue group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/gdgica" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-gdg-blue/20 to-gdg-blue/10 hover:from-gdg-blue hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Síguenos en LinkedIn"
                  >
                    <svg className="w-6 h-6 text-gdg-blue group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/gdgica" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-gdg-green/20 to-gdg-green/10 hover:from-gdg-green hover:to-green-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Visita nuestro GitHub"
                  >
                    <svg className="w-6 h-6 text-gdg-green group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://discord.gg/gdgica" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-gdg-red/20 to-gdg-red/10 hover:from-gdg-red hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Únete a nuestro Discord"
                  >
                    <svg className="w-6 h-6 text-gdg-red group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-gdg-blue to-gdg-green rounded-full mr-3"></span>
                  Navegación
                </h4>
                <nav aria-label="Enlaces de navegación del footer">
                  <ul className="space-y-4">
                    <li>
                      <a href="#inicio" className="text-gray-300 hover:text-gdg-blue transition-all duration-300 hover:translate-x-1 inline-block">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#retos" className="text-gray-300 hover:text-gdg-green transition-all duration-300 hover:translate-x-1 inline-block">
                        Retos
                      </a>
                    </li>
                    <li>
                      <a href="#premios" className="text-gray-300 hover:text-gdg-yellow transition-all duration-300 hover:translate-x-1 inline-block">
                        Premios
                      </a>
                    </li>
                    <li>
                      <a href="#agenda" className="text-gray-300 hover:text-gdg-red transition-all duration-300 hover:translate-x-1 inline-block">
                        Agenda
                      </a>
                    </li>
                    <li>
                      <a href="#contacto" className="text-gray-300 hover:text-gdg-blue transition-all duration-300 hover:translate-x-1 inline-block">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Resources */}
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-gdg-green to-gdg-yellow rounded-full mr-3"></span>
                  Recursos
                </h4>
                <nav aria-label="Enlaces de recursos">
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-gdg-green transition-all duration-300 hover:translate-x-1 inline-block">
                        Documentación
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-gdg-blue transition-all duration-300 hover:translate-x-1 inline-block">
                        Tutoriales
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-gdg-yellow transition-all duration-300 hover:translate-x-1 inline-block">
                        API Reference
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/eduardoorm/devfest-ica-2025" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gdg-red transition-all duration-300 hover:translate-x-1 inline-block">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-gdg-green transition-all duration-300 hover:translate-x-1 inline-block">
                        Support
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-gdg-yellow to-gdg-red rounded-full mr-3"></span>
                  Contacto Rápido
                </h4>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        contactErrors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:ring-gdg-blue focus:border-transparent'
                      }`}
                      placeholder="Tu nombre"
                      aria-describedby={contactErrors.name ? "name-error" : undefined}
                    />
                    {contactErrors.name && (
                      <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                        {contactErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        contactErrors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:ring-gdg-blue focus:border-transparent'
                      }`}
                      placeholder="tu-email@ejemplo.com"
                      aria-describedby={contactErrors.email ? "email-error" : undefined}
                    />
                    {contactErrors.email && (
                      <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                        {contactErrors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="contact-message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={3}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${
                        contactErrors.message 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:ring-gdg-blue focus:border-transparent'
                      }`}
                      placeholder="¿En qué te podemos ayudar?"
                      aria-describedby={contactErrors.message ? "message-error" : undefined}
                    />
                    {contactErrors.message && (
                      <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
                        {contactErrors.message}
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gdg-blue to-gdg-green hover:from-blue-600 hover:to-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Enviar mensaje de contacto"
                  >
                    Enviar Mensaje
                  </button>
                  
                  {contactSuccess && (
                    <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg" role="alert">
                      <p className="text-green-400 text-sm">¡Mensaje enviado correctamente! Te contactaremos pronto.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Enhanced Newsletter Section */}
          <div className="py-8 border-t border-gray-700/50 bg-gradient-to-r from-gdg-blue/5 to-gdg-green/5 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">📬</span>
                  Mantente actualizado
                </h4>
                <p className="text-gray-300 text-lg">
                  Recibe las últimas noticias sobre retos, eventos y premios directamente en tu inbox.
                </p>
              </div>
              <div>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">Email para newsletter</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={newsletterForm.email}
                      onChange={(e) => setNewsletterForm({email: e.target.value})}
                      placeholder="tu-email@ejemplo.com"
                      className={`w-full px-4 py-4 bg-gray-800/70 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        newsletterError 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-600 focus:ring-gdg-yellow focus:border-transparent'
                      }`}
                      aria-describedby={newsletterError ? "newsletter-error" : undefined}
                    />
                    {newsletterError && (
                      <p id="newsletter-error" className="text-red-400 text-sm mt-1" role="alert">
                        {newsletterError}
                      </p>
                    )}
                  </div>
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-gdg-yellow to-gdg-red hover:from-yellow-500 hover:to-red-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 whitespace-nowrap transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gdg-yellow focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Suscribirse al newsletter"
                  >
                    Suscribirse
                  </button>
                </form>
                
                {newsletterSuccess && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg" role="alert">
                    <p className="text-green-400 text-sm">¡Suscripción exitosa! Revisa tu email para confirmar.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="py-8 border-t border-gray-700/50">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-sm text-center lg:text-left">
                © 2025 GDG Ica. Todos los derechos reservados. | Made with ❤️ for developers
              </div>
              <nav aria-label="Enlaces legales">
                <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-gdg-yellow transition-colors duration-300">
                    Términos de Servicio
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gdg-yellow transition-colors duration-300">
                    Política de Privacidad
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gdg-yellow transition-colors duration-300">
                    Código de Conducta
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-gdg-blue to-gdg-green hover:from-blue-600 hover:to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:ring-offset-2 focus:ring-offset-gray-100 z-50"
          aria-label="Volver al inicio de la página"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
