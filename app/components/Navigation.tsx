'use client';

import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'lab', label: 'Lab', icon: '📦' },
  { id: 'vault', label: 'Collection', icon: '🗂️' },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <header className="bg-surface-bright border-b border-outline-variant">
      <div className="max-w-container mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <div className="flex items-center gap-3 justify-self-start">
          <span className="text-2xl">🧬</span>
          <h1 className="text-headline-md text-on-surface font-sans text-nowrap mt-1">SciBox Explorer</h1>
        </div>

        <nav className="flex gap-4 justify-self-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-8 py-3 rounded-full transition-colors flex items-center gap-3 text-body-lg ${
                activeTab === tab.id
                  ? 'bg-primary text-on-primary font-bold'
                  : 'bg-surface-container text-on-surface hover:bg-surface-dim'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold justify-self-end mt-1">
          🔬
        </div>
      </div>
    </header>
  );
}
