import React, { useState, useEffect } from 'react';
import type { RankingUser } from '../../ranking/types';
import { getRanking } from '../../ranking/services';

const RankingSection: React.FC = () => {
  const [rankingData, setRankingData] = useState<RankingUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRanking = async () => {
      try {
        setIsLoading(true);
        const response = await getRanking(5); // Top 5
        setRankingData(response.users);
      } catch (error) {
        console.error('Error loading ranking:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRanking();
  }, []);

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full">
            <span className="text-white font-bold text-sm">🥇</span>
          </div>
        );
      case 2:
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full">
            <span className="text-white font-bold text-sm">🥈</span>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full">
            <span className="text-white font-bold text-sm">🥉</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
            <span className="text-gray-600 font-bold text-sm">#{position}</span>
          </div>
        );
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            DEVFEST ICA 2025
          </h1>
        </div>

        {/* Sección de ranking */}
        <div className="bg-gray-200 rounded-lg p-8 shadow-lg">
          {/* Título del ranking */}
          <h2 className="text-2xl font-extrabold text-black mb-8">
            Ranking puntos
          </h2>

          {/* Lista de participantes */}
          <div className="space-y-4">
            {isLoading ? (
              // Skeleton loading
              [...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 animate-pulse">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="h-6 bg-gray-300 rounded w-16 mb-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-12"></div>
                  </div>
                </div>
              ))
            ) : (
              rankingData.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 hover:shadow-md ${
                    user.position <= 3
                      ? 'bg-white border-2 border-gdg-blue'
                      : 'bg-gray-50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Posición con medalla/número */}
                    {getRankIcon(user.position)}
                    
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-r from-gdg-blue to-gdg-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    
                    {/* Nombre */}
                    <div>
                      <h3 className="text-xl font-extrabold text-black">
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Posición #{user.position}
                      </p>
                    </div>
                  </div>

                  {/* Puntos */}
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-black">
                      {user.points} DC
                    </div>
                    <p className="text-sm text-gray-600">
                      puntos
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Botón ver más */}
          <div className="text-center mt-8">
            <button className="bg-gdg-blue hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
              Ver ranking completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
