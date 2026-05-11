'use client';

import React, { useMemo, useState } from 'react';
import { useCardCollection } from '@/app/context/CardCollectionContext';
import { scientists } from '@/app/data/scientists';
import { Scientist } from '@/app/types/scientist';
import CollectedCard from './CollectedCard';
import ScientistCard from '@/app/components/Card/ScientistCard';

export default function CardGrid() {
  const { collectedCards } = useCardCollection();
  const [selectedScientist, setSelectedScientist] = useState<Scientist | null>(null);

  const allScientistsWithStatus = useMemo(() => {
    return scientists.map((scientist) => {
      const collected = collectedCards.find((card) => card.scientistId === scientist.id);
      return {
        scientist,
        isCollected: !!collected,
        count: collected?.count || 0,
      };
    });
  }, [collectedCards]);

  const totalCollected = collectedCards.length;
  const totalAvailable = scientists.length;
  const completionPercentage = Math.round((totalCollected / totalAvailable) * 100);

  return (
    <div className="space-y-6 relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {allScientistsWithStatus.map((item) => (
          <CollectedCard
            key={item.scientist.id}
            scientist={item.scientist}
            isCollected={item.isCollected}
            count={item.count}
            onClick={() => {
              if (item.isCollected) {
                setSelectedScientist(item.scientist);
              }
            }}
          />
        ))}
      </div>

      <div className="bg-transparent space-y-4 pt-8 mt-8 border-t border-outline-variant">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-label-caps text-on-surface-variant uppercase tracking-wide font-bold">Vault Completion Progress</span>
            <span className="text-headline-sm text-primary font-bold">
              {completionPercentage}% ({totalCollected} / {totalAvailable})
            </span>
          </div>
          <div className="w-full bg-surface-container rounded-full h-2">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Modal Overlay */}
      {selectedScientist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedScientist(null)}>
          <div 
            className="relative w-full max-w-[300px] aspect-[7/10] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 z-[110] bg-white text-black hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-transform focus:outline-none font-bold text-xl leading-none"
              onClick={() => setSelectedScientist(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <ScientistCard scientist={selectedScientist} />
            <p className="text-body-sm text-white text-center opacity-80 mt-4 italic drop-shadow-md">
              Click the card to flip it
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
}
