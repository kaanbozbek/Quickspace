import React from 'react';
import * as Icons from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Widget as WidgetType } from '../types/dashboard';

interface WidgetProps {
  widget: WidgetType;
  onDelete?: (id: string) => void;
}

export const Widget: React.FC<WidgetProps> = ({ widget, onDelete }) => {
  const IconComponent = Icons[widget.icon as keyof typeof Icons];

  return (
    <div className="group relative bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
      <a
        href={widget.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4"
      >
        <div className="flex items-center space-x-3">
          {IconComponent && (
            <IconComponent className={`w-6 h-6 ${widget.color}`} />
          )}
          <span className="text-gray-200 font-medium">{widget.title}</span>
        </div>
      </a>
      {onDelete && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete(widget.id);
          }}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-red-900/50 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-900/75"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};