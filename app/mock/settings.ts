export interface SettingItem {
  id: string;
  label: string;
  icon: string; // emoji or text placeholder
  hasChevron?: boolean; // default true
  isDanger?: boolean; // for logout, etc.
}

export const mockSettingsItems: SettingItem[] = [
  {
    id: 'notifications',
    label: 'Notifications',
    icon: '🔔',
    hasChevron: true,
  },
  {
    id: 'language',
    label: 'Language',
    icon: '🌐',
    hasChevron: true,
  },
  {
    id: 'theme',
    label: 'Theme',
    icon: '🎨',
    hasChevron: true,
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: '❓',
    hasChevron: true,
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: '🚪',
    hasChevron: false,
    isDanger: true,
  },
];

