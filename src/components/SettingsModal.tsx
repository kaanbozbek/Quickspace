import React from 'react';
import { X } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddShortcut: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onAddShortcut }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Dashboard Settings</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => {
              onClose();
              onAddShortcut();
            }}
            className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between"
          >
            <span>Add New Shortcut</span>
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};