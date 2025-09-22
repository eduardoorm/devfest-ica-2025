import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Retos Técnicos',
      description: 'Desafíos diseñados por expertos para mejorar tus habilidades en desarrollo',
      color: 'gdg-blue'
    },
    {
      icon: '🏆',
      title: 'Sistema de Puntos',
      description: 'Gana puntos por cada reto completado y escala en el ranking de desarrolladores',
      color: 'gdg-green'
    },
    {
      icon: '🎁',
      title: 'Premios Increíbles',
      description: 'Canjea tus puntos por premios exclusivos de Google y nuestros sponsors',
      color: 'gdg-yellow'
    },
    {
      icon: '👥',
      title: 'Comunidad Activa',
      description: 'Conecta con desarrolladores de toda la región y comparte experiencias',
      color: 'gdg-red'
    },
    {
      icon: '📚',
      title: 'Aprendizaje Continuo',
      description: 'Accede a recursos educativos y talleres exclusivos de tecnologías Google',
      color: 'gdg-blue'
    },
    {
      icon: '🚀',
      title: 'Proyectos Reales',
      description: 'Trabaja en proyectos que impactan a la comunidad local de Ica',
      color: 'gdg-green'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué DevFest Ica?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma completa para que los desarrolladores de Ica puedan crecer, 
            aprender y contribuir al ecosistema tecnológico de la región.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6">
                <button className={`text-${feature.color} font-medium hover:underline flex items-center group-hover:translate-x-2 transition-transform duration-300`}>
                  Saber más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gdg-blue to-gdg-green rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para comenzar tu aventura?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Únete a cientos de desarrolladores que ya están construyendo el futuro tecnológico de Ica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gdg-yellow hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Registrarse Gratis
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium py-4 px-8 rounded-lg transition-all duration-200">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
