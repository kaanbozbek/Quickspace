import { DashboardConfig } from '../types/dashboard';

export const defaultConfig: DashboardConfig = {
  title: "Launchpad",
  sections: [
    {
      id: "quick-access",
      title: "Quick Access",
      widgets: [
        {
          id: "github",
          title: "GitHub",
          type: "shortcut",
          icon: "Github",
          link: "https://github.com",
          color: "text-gray-900"
        },
        {
          id: "gmail",
          title: "Gmail",
          type: "shortcut",
          icon: "Mail",
          link: "https://gmail.com",
          color: "text-red-600"
        }
      ]
    },
    {
      id: "development",
      title: "Development",
      widgets: [
        {
          id: "stackoverflow",
          title: "Stack Overflow",
          type: "shortcut",
          icon: "Code2",
          link: "https://stackoverflow.com",
          color: "text-orange-500"
        },
        {
          id: "vscode",
          title: "VS Code Web",
          type: "shortcut",
          icon: "Code",
          link: "https://vscode.dev",
          color: "text-blue-500"
        }
      ]
    },
    {
      id: "productivity",
      title: "Productivity",
      widgets: [
        {
          id: "notion",
          title: "Notion",
          type: "shortcut",
          icon: "FileText",
          link: "https://notion.so",
          color: "text-gray-900"
        },
        {
          id: "calendar",
          title: "Google Calendar",
          type: "shortcut",
          icon: "Calendar",
          link: "https://calendar.google.com",
          color: "text-blue-600"
        }
      ]
    }
  ]
};