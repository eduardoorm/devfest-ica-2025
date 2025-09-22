import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-gdg-blue via-blue-600 to-gdg-green min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gdg-yellow/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gdg-red/20 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gdg-green/20 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gdg-yellow/20 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <span className="w-2 h-2 bg-gdg-green rounded-full mr-2 animate-pulse"></span>
                DevFest Ica 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Conecta, Aprende y 
                <span className="block text-gdg-yellow">Construye el Futuro</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-lg">
                Únete a la comunidad de desarrolladores más grande de Ica. 
                Completa retos, gana puntos y obtén increíbles premios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gdg-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Comenzar Ahora
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium py-4 px-8 rounded-lg transition-all duration-200">
                Ver Retos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gdg-yellow">500+</div>
                <div className="text-blue-200 text-sm">Desarrolladores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gdg-yellow">50+</div>
                <div className="text-blue-200 text-sm">Retos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gdg-yellow">100+</div>
                <div className="text-blue-200 text-sm">Premios</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gdg-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Reto Completado</h3>
                    <p className="text-blue-200 text-sm">API REST con Node.js</p>
                  </div>
                  <div className="ml-auto text-gdg-yellow font-bold">+50 pts</div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gdg-red rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Nuevo Reto</h3>
                    <p className="text-blue-200 text-sm">App React con TypeScript</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-gdg-yellow rounded-full flex items-center justify-center">
                      <span className="text-gray-900 text-sm font-bold">!</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200 text-sm">Progreso Total</span>
                    <span className="text-white text-sm font-semibold">750 pts</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-gdg-yellow to-gdg-green h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gdg-yellow/20 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-bounce">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gdg-red/20 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-bounce delay-75">
              <span className="text-xl">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
