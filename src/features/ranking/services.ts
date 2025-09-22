import type { RankingUser, RankingResponse, RankingStats } from './types';

// Mock data que simula la respuesta de una API
export const mockRankingData: RankingUser[] = [
  {
    id: 1,
    name: "Eduardo Ormeño",
    points: 50,
    position: 1,
    avatar: "/api/placeholder/40/40",
    badges: ["early-bird", "challenge-master"]
  },
  {
    id: 2,
    name: "Pablo Ramos", 
    points: 30,
    position: 2,
    avatar: "/api/placeholder/40/40",
    badges: ["team-player"]
  },
  {
    id: 3,
    name: "Ana García",
    points: 25,
    position: 3,
    avatar: "/api/placeholder/40/40",
    badges: ["consistent"]
  },
  {
    id: 4,
    name: "Carlos López",
    points: 20,
    position: 4,
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 5,
    name: "María Silva",
    points: 15,
    position: 5,
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 6,
    name: "Luis Mendoza",
    points: 12,
    position: 6,
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 7,
    name: "Sofia Vargas",
    points: 10,
    position: 7,
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 8,
    name: "Diego Torres",
    points: 8,
    position: 8,
    avatar: "/api/placeholder/40/40"
  }
];

export const mockRankingStats: RankingStats = {
  totalParticipants: 156,
  topScore: 50,
  averageScore: 18.5,
  lastUpdated: new Date().toISOString()
};

// Simula una llamada a API
export const getRanking = async (limit: number = 10): Promise<RankingResponse> => {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const users = mockRankingData.slice(0, limit);
  
  return {
    users,
    stats: mockRankingStats,
    hasMore: mockRankingData.length > limit
  };
};

// Simula obtener la posición de un usuario específico
export const getUserRanking = async (userId: number): Promise<RankingUser | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return mockRankingData.find(user => user.id === userId) || null;
};
