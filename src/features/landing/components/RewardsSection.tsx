import React from 'react';

const RewardsSection: React.FC = () => {
  const rewards = [
    {
      id: 1,
      title: 'Google Nest Mini',
      description: 'Asistente inteligente con Google Assistant',
      points: 500,
      image: '🎵',
      category: 'Tecnología',
      stock: 10,
      popular: true
    },
    {
      id: 2,
      title: 'Curso Udemy Premium',
      description: 'Acceso a cualquier curso premium de desarrollo',
      points: 300,
      image: '📚',
      category: 'Educación',
      stock: 25,
      popular: false
    },
    {
      id: 3,
      title: 'Camiseta GDG Ica',
      description: 'Camiseta oficial edición limitada DevFest 2025',
      points: 150,
      image: '👕',
      category: 'Merchandising',
      stock: 50,
      popular: true
    },
    {
      id: 4,
      title: 'Google Cloud Credits',
      description: '$100 USD en créditos para Google Cloud Platform',
      points: 750,
      image: '☁️',
      category: 'Cloud',
      stock: 15,
      popular: false
    },
    {
      id: 5,
      title: 'Stickers Pack GDG',
      description: 'Pack de stickers oficiales de Google Developers',
      points: 75,
      image: '🏷️',
      category: 'Merchandising',
      stock: 100,
      popular: false
    },
    {
      id: 6,
      title: 'Mentoría 1:1',
      description: 'Sesión de mentoría con un Google Developer Expert',
      points: 400,
      image: '🎯',
      category: 'Mentoría',
      stock: 5,
      popular: true
    }
  ];

  return (
    <section id="premios" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premios Increíbles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convierte tus puntos en premios exclusivos. Desde tecnología de última generación 
            hasta oportunidades de crecimiento profesional.
          </p>
        </div>

        {/* Points Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-blue-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gdg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gana Puntos</h3>
              <p className="text-gray-600">Completa retos y desafíos para acumular puntos</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gdg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Elige tu Premio</h3>
              <p className="text-gray-600">Navega por nuestro catálogo de premios exclusivos</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gdg-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Canjea y Disfruta</h3>
              <p className="text-gray-600">Usa tus puntos y recibe tu premio en casa</p>
            </div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward) => (
            <div 
              key={reward.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden group hover:-translate-y-2 ${
                reward.popular ? 'border-gdg-yellow ring-2 ring-gdg-yellow/20' : 'border-gray-100'
              }`}
            >
              {/* Popular Badge */}
              {reward.popular && (
                <div className="bg-gdg-yellow text-gray-900 text-center py-2 px-4 font-bold text-sm">
                  🔥 MÁS POPULAR
                </div>
              )}

              <div className="p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{reward.image}</div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {reward.category}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {reward.description}
                </p>

                {/* Points and Stock */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gdg-blue">{reward.points}</div>
                    <div className="text-gray-500 text-sm">puntos</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Stock disponible</div>
                    <div className={`font-medium ${reward.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>
                      {reward.stock} unidades
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full font-medium py-3 rounded-lg transition-all duration-200 ${
                    reward.stock > 0 
                      ? 'bg-gdg-blue hover:bg-blue-600 text-white group-hover:shadow-lg' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={reward.stock === 0}
                >
                  {reward.stock > 0 ? 'Canjear Premio' : 'Agotado'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gdg-red to-gdg-yellow rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas más puntos?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Participa en más retos, asiste a eventos y contribuye a la comunidad para ganar puntos extra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gdg-red font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Ver Más Retos
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium py-4 px-8 rounded-lg transition-all duration-200">
                Próximos Eventos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
