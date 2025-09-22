export interface RankingUser {
  id: number;
  name: string;
  points: number;
  position: number;
  avatar?: string;
  badges?: string[];
}

export interface RankingStats {
  totalParticipants: number;
  topScore: number;
  averageScore: number;
  lastUpdated: string;
}

export interface RankingResponse {
  users: RankingUser[];
  stats: RankingStats;
  hasMore: boolean;
}
