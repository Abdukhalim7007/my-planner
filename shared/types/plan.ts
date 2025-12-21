export interface Plan {
  id: string;
  title: string;
  category: string;
  progressPercent: number;
  remainingCount: number;
  totalCount: number;
  createdAt?: string;
  updatedAt?: string;
}

