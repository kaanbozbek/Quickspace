export interface Widget {
  id: string;
  title: string;
  type: 'shortcut' | 'weather' | 'clock' | 'search' | 'bookmarks';
  icon?: string;
  link?: string;
  color?: string;
}

export interface Section {
  id: string;
  title: string;
  widgets: Widget[];
}

export interface DashboardConfig {
  title: string;
  sections: Section[];
}