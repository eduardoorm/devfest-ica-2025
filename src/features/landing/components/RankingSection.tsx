/**
 * @component RankingSection
 * @description Sección de ranking (leaderboard) para DevFest Ica
 */

import React, { useState, useEffect } from 'react';
import { getRankingUsers, getAvailableFilters } from '../../ranking/services';
import type { RankingUser, RankingFilters, RankingCategory } from '../../ranking/types';

const RankingSection: React.FC = () => {
  const [users, setUsers] = useState<RankingUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<RankingFilters>({});
  const [availableFilters, setAvailableFilters] = useState({
    categories: [] as RankingCategory[],
    levels: [] as string[],
    universities: [] as string[]
  });

  useEffect(() => {
    const loadRanking = async () => {
      setLoading(true);
      try {
        const response = await getRankingUsers(filters);
        setUsers(response.users);
      } catch (error) {
        console.error('Error loading ranking:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRanking();
  }, [filters]);

  useEffect(() => {
    setAvailableFilters(getAvailableFilters());
  }, []);

  const handleFilterChange = (filterType: keyof RankingFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value === 'all' ? undefined : value
    }));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Experto':
        return 'bg-gdg-red text-white';
      case 'Avanzado':
        return 'bg-gdg-yellow text-gray-900';
      case 'Intermedio':
        return 'bg-gdg-blue text-white';
      case 'Principiante':
        return 'bg-gdg-green text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRankingMedal = (position: number) => {
    switch (position) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return `#${position}`;
    }
  };

  return (
    <section id="ranking" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🏆 Ranking de Desarrolladores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre quiénes están liderando la competencia. Completa retos, gana puntos 
            y escala posiciones en el leaderboard oficial de DevFest Ica 2025.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-blue-100">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-gray-700 font-medium">Filtrar por:</span>
            
            {/* Category Filter */}
            <select
              value={filters.category || 'all'}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdg-blue focus:border-gdg-blue"
            >
              <option value="all">Todas las categorías</option>
              {availableFilters.categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={filters.level || 'all'}
              onChange={(e) => handleFilterChange('level', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdg-blue focus:border-gdg-blue"
            >
              <option value="all">Todos los niveles</option>
              {availableFilters.levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            {/* University Filter */}
            <select
              value={filters.university || 'all'}
              onChange={(e) => handleFilterChange('university', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdg-blue focus:border-gdg-blue"
            >
              <option value="all">Todas las universidades</option>
              {availableFilters.universities.map(university => (
                <option key={university} value={university}>{university}</option>
              ))}
            </select>

            {/* Clear Filters */}
            {(filters.category || filters.level || filters.university) && (
              <button
                onClick={() => setFilters({})}
                className="px-4 py-2 text-gdg-red hover:bg-red-50 rounded-lg transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gdg-blue/10 rounded-full mb-4">
              <div className="w-8 h-8 border-4 border-gdg-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600">Cargando ranking...</p>
          </div>
        )}

        {/* Ranking List */}
        {!loading && (
          <div className="space-y-4">
            {/* Top 3 Podium */}
            {users.length >= 3 && (
              <div className="bg-gradient-to-r from-gdg-blue to-gdg-green rounded-2xl p-8 mb-8 text-white">
                <h3 className="text-2xl font-bold text-center mb-8">🏆 Podio de Campeones</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {users.slice(0, 3).map((user, index) => (
                    <div key={user.id} className={`text-center ${index === 0 ? 'md:order-2' : index === 1 ? 'md:order-1' : 'md:order-3'}`}>
                      <div className={`relative ${index === 0 ? 'transform md:scale-110' : ''}`}>
                        <div className="w-20 h-20 mx-auto mb-4 text-4xl bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          {user.avatar}
                        </div>
                        <div className="text-3xl mb-2">{getRankingMedal(user.position)}</div>
                        <h4 className="font-bold text-lg mb-1">{user.name}</h4>
                        <p className="text-blue-100 text-sm mb-2">{user.university}</p>
                        <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                          <div className="text-2xl font-bold">{user.points}</div>
                          <div className="text-sm opacity-90">puntos</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Ranking Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Posición
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Desarrollador
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Puntos
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nivel
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Retos
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Racha
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Insignias
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                      <tr key={user.id} className={`hover:bg-gray-50 transition-colors ${index < 3 ? 'bg-yellow-50/30' : ''}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-2xl mr-2">{getRankingMedal(user.position)}</span>
                            <span className="text-lg font-bold text-gray-900">#{user.position}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-12 h-12 text-2xl bg-gray-100 rounded-full flex items-center justify-center mr-4">
                              {user.avatar}
                            </div>
                            <div>
                              <div className="text-lg font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.favoriteCategory}</div>
                              {user.university && (
                                <div className="text-xs text-gray-400 truncate max-w-xs">{user.university}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-2xl font-bold text-gdg-blue">{user.points}</div>
                          <div className="text-sm text-gray-500">puntos</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(user.level)}`}>
                            {user.level}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-semibold text-gray-900">{user.completedChallenges}</div>
                          <div className="text-sm text-gray-500">completados</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-lg mr-1">🔥</span>
                            <span className="text-lg font-semibold text-orange-600">{user.streak}</span>
                            <span className="text-sm text-gray-500 ml-1">días</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-1">
                            {user.badges.map((badge, badgeIndex) => (
                              <span key={badgeIndex} className="text-lg" title="Insignia obtenida">
                                {badge}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Empty State */}
            {users.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-blue-100">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No hay desarrolladores</h3>
                <p className="text-gray-600">No se encontraron desarrolladores con los filtros aplicados.</p>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gdg-red to-gdg-yellow rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para Competir?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete al ranking, completa retos y demuestra tus habilidades como desarrollador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-gdg-red hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                Comenzar Retos
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-gdg-red transition-all duration-200">
                Ver Mi Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
