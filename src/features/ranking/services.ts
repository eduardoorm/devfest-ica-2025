/**
 * @file services.ts
 * @description Servicios para el sistema de ranking de DevFest Ica
 */

import type { RankingUser, RankingResponse, RankingFilters, RankingCategory } from './types';

// Mock data para el desarrollo - será reemplazado por API real
const mockRankingUsers: RankingUser[] = [
  {
    id: '1',
    name: 'Ana García',
    avatar: '👩‍💻',
    points: 1450,
    level: 'Experto',
    position: 1,
    completedChallenges: 12,
    favoriteCategory: 'Frontend',
    streak: 15,
    badges: ['🥇', '🔥', '⚡', '🚀'],
    university: 'Universidad Nacional San Luis Gonzaga',
    github: 'anagarcia'
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    avatar: '👨‍💻',
    points: 1320,
    level: 'Experto',
    position: 2,
    completedChallenges: 11,
    favoriteCategory: 'Backend',
    streak: 12,
    badges: ['🥈', '🔥', '⚡'],
    university: 'Universidad Alas Peruanas',
    github: 'carlosmendoza'
  },
  {
    id: '3',
    name: 'María Quispe',
    avatar: '👩‍🔬',
    points: 1180,
    level: 'Avanzado',
    position: 3,
    completedChallenges: 9,
    favoriteCategory: 'AI/ML',
    streak: 8,
    badges: ['🥉', '🤖', '⚡'],
    university: 'Universidad Nacional San Luis Gonzaga'
  },
  {
    id: '4',
    name: 'Luis Torres',
    avatar: '👨‍🎨',
    points: 980,
    level: 'Avanzado',
    position: 4,
    completedChallenges: 7,
    favoriteCategory: 'UI/UX',
    streak: 6,
    badges: ['🎨', '⚡'],
    university: 'Universidad Privada San Juan Bautista'
  },
  {
    id: '5',
    name: 'Sofía Ramos',
    avatar: '👩‍💼',
    points: 850,
    level: 'Intermedio',
    position: 5,
    completedChallenges: 6,
    favoriteCategory: 'Mobile',
    streak: 4,
    badges: ['📱', '⚡'],
    university: 'Universidad Nacional San Luis Gonzaga'
  },
  {
    id: '6',
    name: 'Diego Huamán',
    avatar: '👨‍🔧',
    points: 720,
    level: 'Intermedio',
    position: 6,
    completedChallenges: 5,
    favoriteCategory: 'DevOps',
    streak: 5,
    badges: ['⚙️', '☁️'],
    university: 'Universidad Alas Peruanas'
  },
  {
    id: '7',
    name: 'Patricia Silva',
    avatar: '👩‍🔬',
    points: 650,
    level: 'Intermedio',
    position: 7,
    completedChallenges: 4,
    favoriteCategory: 'Cloud',
    streak: 3,
    badges: ['☁️'],
    university: 'Universidad Privada San Juan Bautista'
  },
  {
    id: '8',
    name: 'Roberto Paz',
    avatar: '👨‍💻',
    points: 580,
    level: 'Principiante',
    position: 8,
    completedChallenges: 4,
    favoriteCategory: 'Frontend',
    streak: 2,
    badges: ['🌟'],
    university: 'Universidad Nacional San Luis Gonzaga'
  },
  {
    id: '9',
    name: 'Carmen López',
    avatar: '👩‍💻',
    points: 520,
    level: 'Principiante',
    position: 9,
    completedChallenges: 3,
    favoriteCategory: 'Backend',
    streak: 3,
    badges: ['🌟'],
    university: 'Universidad Alas Peruanas'
  },
  {
    id: '10',
    name: 'Javier Castro',
    avatar: '👨‍🎨',
    points: 450,
    level: 'Principiante',
    position: 10,
    completedChallenges: 3,
    favoriteCategory: 'UI/UX',
    streak: 1,
    badges: ['🎨'],
    university: 'Universidad Privada San Juan Bautista'
  }
];

/**
 * @function getRankingUsers
 * @description Obtiene los usuarios del ranking con filtros opcionales
 * 
 * @param {RankingFilters} filters - Filtros para aplicar al ranking
 * @returns {Promise<RankingResponse>} Datos del ranking filtrados
 */
export const getRankingUsers = async (filters: RankingFilters = {}): Promise<RankingResponse> => {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredUsers = [...mockRankingUsers];

  // Aplicar filtros
  if (filters.category && filters.category !== 'General') {
    filteredUsers = filteredUsers.filter(user => user.favoriteCategory === filters.category);
  }

  if (filters.level) {
    filteredUsers = filteredUsers.filter(user => user.level === filters.level);
  }

  if (filters.university) {
    filteredUsers = filteredUsers.filter(user => user.university === filters.university);
  }

  // Recalcular posiciones después del filtrado
  filteredUsers = filteredUsers
    .sort((a, b) => b.points - a.points)
    .map((user, index) => ({ ...user, position: index + 1 }));

  return {
    users: filteredUsers,
    totalUsers: filteredUsers.length,
    currentPage: 1,
    totalPages: 1,
    filters: ['category', 'level', 'university']
  };
};

/**
 * @function getAvailableFilters
 * @description Obtiene los valores disponibles para los filtros
 * 
 * @returns {Object} Valores únicos para cada filtro
 */
export const getAvailableFilters = () => {
  const categories: RankingCategory[] = ['General', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'AI/ML', 'Cloud', 'UI/UX'];
  const levels = [...new Set(mockRankingUsers.map(user => user.level))];
  const universities = [...new Set(mockRankingUsers.map(user => user.university).filter((u): u is string => Boolean(u)))];

  return {
    categories,
    levels,
    universities
  };
};

/**
 * @function getUserPosition
 * @description Obtiene la posición de un usuario específico
 * 
 * @param {string} userId - ID del usuario
 * @returns {RankingUser | null} Datos del usuario o null si no se encuentra
 */
export const getUserPosition = (userId: string): RankingUser | null => {
  return mockRankingUsers.find(user => user.id === userId) || null;
};

/**
 * @function getTopUsers
 * @description Obtiene los primeros N usuarios del ranking
 * 
 * @param {number} limit - Número de usuarios a obtener (default: 3)
 * @returns {RankingUser[]} Array de usuarios top
 */
export const getTopUsers = (limit: number = 3): RankingUser[] => {
  return mockRankingUsers
    .sort((a, b) => b.points - a.points)
    .slice(0, limit);
};
