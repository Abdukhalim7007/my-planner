import { Activity } from "@shared/types";

export const mockActivities: Activity[] = [
  {
    id: "1",
    text: "Morning Exercise",
    completed: true,
    time: "07:00",
    date: "2024-01-15",
    planId: "1",
  },
  {
    id: "2",
    text: "Read for 30 minutes",
    completed: true,
    time: "08:00",
    date: "2024-01-15",
    planId: "2",
  },
  {
    id: "3",
    text: "Meditation",
    completed: true,
    time: "09:00",
    date: "2024-01-15",
    planId: "1",
  },
  {
    id: "4",
    text: "Write in journal",
    completed: false,
    time: "20:00",
    date: "2024-01-15",
    planId: "2",
  },
  {
    id: "5",
    text: "Evening walk",
    completed: false,
    time: "19:00",
    date: "2024-01-15",
    planId: "1",
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

// Timeline events for Activities screen
export interface TimelineEvent {
  time: string; // e.g., "08am"
  title: string; // Empty string for simple text entries
  range: string; // e.g., "08:00 AM - 09:00 AM", empty for simple entries
  items: string[]; // For cards: bullet items; for simple: single text
  status: "done" | "pending";
  icon?: string; // Optional icon emoji for cards
  isCard: boolean; // true for card events, false for simple text entries
}

export const mockTimelineEvents: TimelineEvent[] = [
  {
    time: "08am",
    title: "Healthy Breakfast",
    range: "08:00 AM - 09:00 AM",
    items: ["Oatmeal with fruits", "Green tea"],
    status: "done",
    icon: "🍳",
    isCard: true,
  },
  {
    time: "09am",
    title: "",
    range: "",
    items: ["Nam et ex a nisi sollicitudin tempus"],
    status: "done",
    isCard: false,
  },
  {
    time: "10am",
    title: "Home Page Design",
    range: "10:00 AM - 11:00 AM",
    items: ["Wireframe", "Color scheme"],
    status: "pending",
    icon: "✏️",
    isCard: true,
  },
  {
    time: "11am",
    title: "",
    range: "",
    items: ["Maecenas accumsan risus nibh porttitor"],
    status: "pending",
    isCard: false,
  },
  {
    time: "12am",
    title: "Credit Card Page Design",
    range: "12:00 AM - 02:00 PM",
    items: ["UI components", "User flow"],
    status: "pending",
    icon: "💻",
    isCard: true,
  },
  {
    time: "01pm",
    title: "",
    range: "",
    items: ["Maecenas accumsan risus nibh porttitor"],
    status: "pending",
    isCard: false,
  },
  {
    time: "01pm",
    title: "",
    range: "",
    items: ["Nunc sodales pretium dolor"],
    status: "pending",
    isCard: false,
  },
  {
    time: "02pm",
    title: "",
    range: "",
    items: ["Nulla orci neque lacinia"],
    status: "pending",
    isCard: false,
  },
  {
    time: "03pm",
    title: "Family Dinner",
    range: "03:00 PM - 05:00 PM",
    items: ["Prepare meal", "Set table"],
    status: "pending",
    icon: "🍴",
    isCard: true,
  },
  {
    time: "04pm",
    title: "",
    range: "",
    items: ["Phasellus fringilla nisl dolor vestibulum"],
    status: "pending",
    isCard: false,
  },
  {
    time: "04pm",
    title: "",
    range: "",
    items: ["Donec nunc nulla, aliquam sed vehicula"],
    status: "pending",
    isCard: false,
  },
  {
    time: "05pm",
    title: "",
    range: "",
    items: ["Nulla sollicit efficitur convallis"],
    status: "pending",
    isCard: false,
  },
];
