export interface ScheduleEvent {
  id: string;
  title: string;
  timeLabel: string; // e.g., "09:30 AM" or "22 Oct 2022"
  x: number; // x position relative to timeline section
  y: number; // y position relative to timeline section
  width: number; // card width
  height: number; // card height
  colorVariant: 'purple' | 'teal' | 'lightBlue' | 'gray';
  isOnProgress?: boolean; // for main purple card
}

export const mockScheduleEvents: ScheduleEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    timeLabel: '09:30 AM',
    x: 14,
    y: 0.5,
    width: 140,
    height: 264,
    colorVariant: 'purple',
    isOnProgress: true,
  },
  {
    id: '2',
    title: 'UI/UX Design',
    timeLabel: '10:20 AM',
    x: 168,
    y: 30.5,
    width: 140,
    height: 150,
    colorVariant: 'teal',
  },
  {
    id: '3',
    title: 'Research',
    timeLabel: '01:15 PM',
    x: 322,
    y: 60.5,
    width: 140,
    height: 132,
    colorVariant: 'lightBlue',
  },
  {
    id: '4',
    title: 'Exercise',
    timeLabel: '22 Oct 2022',
    x: 168,
    y: 194.5,
    width: 140,
    height: 160,
    colorVariant: 'gray',
  },
  {
    id: '5',
    title: 'Team Meeting',
    timeLabel: '22 Oct 2022',
    x: 322,
    y: 206.5,
    width: 140,
    height: 116,
    colorVariant: 'gray',
  },
  {
    id: '6',
    title: 'Family Dinner',
    timeLabel: '16 Oct 2022',
    x: 322,
    y: 336.5,
    width: 140,
    height: 116,
    colorVariant: 'gray',
  },
  {
    id: '7',
    title: 'Breakfast',
    timeLabel: '16 Oct 2022',
    x: 168,
    y: 368.5,
    width: 140,
    height: 161,
    colorVariant: 'gray',
  },
];

