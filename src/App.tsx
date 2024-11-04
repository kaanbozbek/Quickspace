import React from 'react';
import { Rocket, Plus, Layout } from 'lucide-react';
import { Section } from './components/Section';
import { AddShortcutModal } from './components/AddShortcutModal';
import { AddSectionModal } from './components/AddSectionModal';
import { defaultConfig } from './data/defaultConfig';
import { DashboardConfig } from './types/dashboard';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [config, setConfig] = useLocalStorage<DashboardConfig>('dashboard-config', defaultConfig);
  const [isAddShortcutOpen, setIsAddShortcutOpen] = React.useState(false);
  const [isAddSectionOpen, setIsAddSectionOpen] = React.useState(false);

  const handleAddShortcut = (title: string, url: string, sectionId: string) => {
    const newWidget = {
      id: `shortcut-${Date.now()}`,
      title,
      type: 'shortcut' as const,
      icon: 'Link',
      link: url,
      color: 'text-blue-500'
    };

    setConfig(prev => ({
      ...prev,
      sections: prev.sections.map(section => 
        section.id === sectionId
          ? { ...section, widgets: [...section.widgets, newWidget] }
          : section
      )
    }));
  };

  const handleAddSection = (title: string) => {
    const newSection = {
      id: `section-${Date.now()}`,
      title,
      widgets: []
    };

    setConfig(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const handleDeleteWidget = (widgetId: string) => {
    setConfig(prev => ({
      ...prev,
      sections: prev.sections.map(section => ({
        ...section,
        widgets: section.widgets.filter(widget => widget.id !== widgetId)
      }))
    }));
  };

  const handleDeleteSection = (sectionId: string) => {
    setConfig(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <Rocket className="w-8 h-8 text-purple-500" />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Quickspace
              </h1>
              <p className="text-gray-400 mt-1">Launch your productivity</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAddSectionOpen(true)}
              className="px-4 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 border border-gray-700"
            >
              <Layout className="w-5 h-5" />
              <span>New Section</span>
            </button>
            <button
              onClick={() => setIsAddShortcutOpen(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Shortcut</span>
            </button>
          </div>
        </header>

        <main className="space-y-8">
          {config.sections.map((section) => (
            <Section 
              key={section.id}
              section={section} 
              onDeleteWidget={handleDeleteWidget}
              onDeleteSection={handleDeleteSection}
            />
          ))}
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Quickspace - Your Shortcut Command Center</p>
        </footer>
      </div>

      <AddShortcutModal
        isOpen={isAddShortcutOpen}
        onClose={() => setIsAddShortcutOpen(false)}
        onAdd={handleAddShortcut}
        sections={config.sections}
      />

      <AddSectionModal
        isOpen={isAddSectionOpen}
        onClose={() => setIsAddSectionOpen(false)}
        onAdd={handleAddSection}
        existingSections={config.sections.map(s => s.title)}
      />
    </div>
  );
}

export default App;