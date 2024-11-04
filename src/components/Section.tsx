import React from 'react';
import { Trash2 } from 'lucide-react';
import { Section as SectionType } from '../types/dashboard';
import { Widget } from './Widget';

interface SectionProps {
  section: SectionType;
  onDeleteWidget: (widgetId: string) => void;
  onDeleteSection: (sectionId: string) => void;
}

export const Section: React.FC<SectionProps> = ({ 
  section, 
  onDeleteWidget,
  onDeleteSection 
}) => {
  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-100">{section.title}</h2>
        <button
          onClick={() => onDeleteSection(section.id)}
          className="p-1.5 rounded-full bg-red-900/50 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-900/75"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {section.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} onDelete={onDeleteWidget} />
        ))}
      </div>
    </div>
  );
};