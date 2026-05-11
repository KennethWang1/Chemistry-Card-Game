'use client';

import React from 'react';
import { Scientist } from '@/app/types/scientist';

interface CollectedCardProps {
  scientist: Scientist;
  isCollected: boolean;
  count: number;
  onClick?: () => void;
}

const disciplineColors: Record<string, string> = {
  'Physics': '#006293',
  'Chemistry': '#7f5300',
  'Biology': '#006e1c',
  'Mathematics': '#4b0082',
  'Computer Science': '#8b0000',
  'Astronomy': '#2f4f4f'
};

export default function CollectedCard({ scientist, isCollected, count, onClick }: CollectedCardProps) {
  if (!isCollected) {
    return (
      <div className="bg-surface-dim border border-outline-variant rounded-lg overflow-hidden opacity-50 h-full flex flex-col">
        <div className="aspect-[7/10] bg-surface-container flex items-center justify-center">
          <span className="text-4xl font-bold text-on-surface-variant">?</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-surface-bright border border-outline-variant rounded-lg overflow-hidden shadow-subtle hover:shadow-elevation transition-shadow cursor-pointer h-full flex flex-col relative"
      onClick={onClick}
    >
      {count > 1 && (
        <div className="absolute top-2 right-2 bg-secondary text-on-secondary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold z-10">
          {count}
        </div>
      )}
      <div className="aspect-[7/10] bg-surface-container overflow-hidden relative border-b border-outline-variant">
        {scientist.imageUrl ? (
          <img
            src={scientist.imageUrl}
            alt={scientist.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
            No image
          </div>
        )}
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <h3 className="text-label-sm font-bold text-on-surface truncate mb-1" title={scientist.name}>{scientist.name}</h3>
        
        <div className="mt-auto">
          <span
            className="inline-block px-2 py-0.5 rounded text-white text-xs font-medium"
            style={{ backgroundColor: disciplineColors[scientist.discipline] || '#333' }}
          >
            {scientist.discipline}
          </span>
        </div>
      </div>
    </div>
  );
}
