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
  {
    id: '4',
    title: 'Personal Development',
    category: 'Personal',
    progressPercent: 60,
    remainingCount: 8,
    totalCount: 20,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-12',
  },
  {
    id: '5',
    title: 'Work Tasks',
    category: 'Work',
    progressPercent: 40,
    remainingCount: 3,
    totalCount: 5,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10',
  },
];

export const getPlanById = (id: string): Plan | undefined => {
  return mockPlans.find((plan) => plan.id === id);
};

// Category-based helpers for Plans screen
export const getPlansByCategory = (category: string): Plan[] => {
  return mockPlans.filter((plan) => plan.category === category);
};

export const getCategoryStats = () => {
  const workPlans = getPlansByCategory('Work');
  const personalPlans = getPlansByCategory('Personal');
  
  return {
    work: {
      name: 'Work Plan',
      remainingCount: workPlans.reduce((sum, plan) => sum + plan.remainingCount, 0),
    },
    personal: {
      name: 'Personal Plan',
      remainingCount: personalPlans.reduce((sum, plan) => sum + plan.remainingCount, 0),
    },
  };
};

// Get ongoing plans (plans with progress > 0 and < 100)
export const getOngoingPlans = (): Plan[] => {
  return mockPlans.filter((plan) => plan.progressPercent > 0 && plan.progressPercent < 100);
};

