export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  points: number;
  category: string;
  participants: number;
  timeEstimate: string;
  technologies: string[];
}

export interface Reward {
  id: number;
  title: string;
  description: string;
  points: number;
  category: string;
  stock: number;
  popular: boolean;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: string;
  completedChallenges: number[];
  redeemedRewards: number[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}
