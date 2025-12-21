import { Stats } from '@shared/types';
import { mockActivities } from './activities';

const completedCount = mockActivities.filter((a) => a.completed).length;
const pendingCount = mockActivities.filter((a) => !a.completed).length;
const totalCount = mockActivities.length;

export const mockStats: Stats = {
  completedCount,
  pendingCount,
  completedPercent: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0,
  pendingPercent: totalCount > 0 ? Math.round((pendingCount / totalCount) * 100) : 0,
  period: 'Apr 2022',
};

