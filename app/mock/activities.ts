import { Activity } from '@shared/types';

export const mockActivities: Activity[] = [
  {
    id: '1',
    text: 'Morning Exercise',
    completed: true,
    time: '07:00',
    date: '2024-01-15',
    planId: '1',
  },
  {
    id: '2',
    text: 'Read for 30 minutes',
    completed: true,
    time: '08:00',
    date: '2024-01-15',
    planId: '2',
  },
  {
    id: '3',
    text: 'Meditation',
    completed: true,
    time: '09:00',
    date: '2024-01-15',
    planId: '1',
  },
  {
    id: '4',
    text: 'Write in journal',
    completed: false,
    time: '20:00',
    date: '2024-01-15',
    planId: '2',
  },
  {
    id: '5',
    text: 'Evening walk',
    completed: false,
    time: '19:00',
    date: '2024-01-15',
    planId: '1',
  },
];

export const getActivitiesByPlanId = (planId: string): Activity[] => {
  return mockActivities.filter((activity) => activity.planId === planId);
};

export const getCompletedActivities = (): Activity[] => {
  return mockActivities.filter((activity) => activity.completed);
};

export const getPendingActivities = (): Activity[] => {
  return mockActivities.filter((activity) => !activity.completed);
};

