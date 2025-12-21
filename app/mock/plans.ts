import { Plan } from '@shared/types';

export const mockPlans: Plan[] = [
  {
    id: '1',
    title: 'Morning Routine',
    category: 'Health',
    progressPercent: 75,
    remainingCount: 5,
    totalCount: 20,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Learning Goals',
    category: 'Education',
    progressPercent: 45,
    remainingCount: 11,
    totalCount: 20,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10',
  },
  {
    id: '3',
    title: 'Work Projects',
    category: 'Work',
    progressPercent: 90,
    remainingCount: 2,
    totalCount: 20,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-18',
  },
];

export const getPlanById = (id: string): Plan | undefined => {
  return mockPlans.find((plan) => plan.id === id);
};

