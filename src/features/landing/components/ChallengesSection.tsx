import React from 'react';

const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      id: 1,
      title: 'API REST con Node.js',
      description: 'Construye una API RESTful completa usando Node.js, Express y MongoDB',
      difficulty: 'Intermedio',
      points: 75,
      category: 'Backend',
      participants: 156,
      timeEstimate: '2-3 horas',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      color: 'gdg-green'
    },
    {
      id: 2,
      title: 'App React con TypeScript',
      description: 'Desarrolla una aplicación React moderna usando TypeScript y hooks',
      difficulty: 'Avanzado',
      points: 100,
      category: 'Frontend',
      participants: 203,
      timeEstimate: '3-4 horas',
      technologies: ['React', 'TypeScript', 'Hooks'],
      color: 'gdg-blue'
    },
    {
      id: 3,
      title: 'PWA con Service Workers',
      description: 'Crea una Progressive Web App con capacidades offline usando Service Workers',
      difficulty: 'Intermedio',
      points: 85,
      category: 'Web',
      participants: 89,
      timeEstimate: '2-3 horas',
      technologies: ['PWA', 'Service Workers', 'IndexedDB'],
      color: 'gdg-yellow'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="retos" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Retos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pon a prueba tus habilidades con nuestros retos técnicos diseñados para 
            desarrolladores de todos los niveles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge) => (
            <div 
              key={challenge.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-2"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-${challenge.color} to-blue-600 p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    {challenge.category}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{challenge.points}</div>
                    <div className="text-sm opacity-90">puntos</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {challenge.title}
                </h3>
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{challenge.participants}</div>
                    <div className="text-gray-500 text-sm">Participantes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{challenge.timeEstimate}</div>
                    <div className="text-gray-500 text-sm">Estimado</div>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-center mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Tecnologías:</div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full bg-${challenge.color} hover:opacity-90 text-white font-medium py-3 rounded-lg transition-all duration-200 group-hover:shadow-lg`}>
                  Comenzar Reto
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Challenges CTA */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="mr-6">
              <div className="w-16 h-16 bg-gradient-to-r from-gdg-blue to-gdg-green rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                +50 Retos Disponibles
              </h3>
              <p className="text-gray-600 mb-4">
                Desde principiante hasta experto, encuentra el reto perfecto para tu nivel
              </p>
              <button className="btn-primary">
                Ver Todos los Retos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
