import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Section } from '../types/dashboard';

interface AddShortcutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, url: string, sectionId: string) => void;
  sections: Section[];
}

export const AddShortcutModal: React.FC<AddShortcutModalProps> = ({ 
  isOpen, 
  onClose, 
  onAdd,
  sections 
}) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [sectionId, setSectionId] = useState(sections[0]?.id || '');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && url && sectionId) {
      onAdd(title, url, sectionId);
      setTitle('');
      setUrl('');
      setSectionId(sections[0]?.id || '');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-100">Add New Shortcut</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded text-gray-400">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="e.g., GitHub"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="https://..."
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Section
            </label>
            <select
              value={sectionId}
              onChange={(e) => setSectionId(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Shortcut
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};