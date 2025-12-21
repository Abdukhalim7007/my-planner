export interface Stats {
  completedCount: number;
  pendingCount: number;
  completedPercent: number;
  pendingPercent: number;
  period?: string; // e.g., "Apr 2022"
}

