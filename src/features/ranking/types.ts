/**
 * @file types.ts
 * @description Tipos de datos para el sistema de ranking de DevFest Ica
 */

export interface RankingUser {
  id: string;
  name: string;
  avatar: string;
  points: number;
  level: string;
  position: number;
  completedChallenges: number;
  favoriteCategory: string;
  streak: number; // días consecutivos participando
  badges: string[]; // insignias obtenidas
  university?: string; // universidad opcional
  github?: string; // perfil de GitHub opcional
}

export interface RankingFilters {
  category?: string;
  level?: string;
  university?: string;
}

export interface RankingResponse {
  users: RankingUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
  filters: string[];
}

export interface CategoryStats {
  category: string;
  userCount: number;
  avgPoints: number;
  topUser: string;
}

export type RankingCategory = 
  | "General"
  | "Frontend" 
  | "Backend"
  | "Mobile"
  | "DevOps"
  | "AI/ML"
  | "Cloud"
  | "UI/UX";

export type UserLevel = 
  | "Principiante"
  | "Intermedio" 
  | "Avanzado"
  | "Experto";
