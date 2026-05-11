'use client';

import React from 'react';
import { Scientist } from '@/app/types/scientist';
import ScientistCard from '@/app/components/Card/ScientistCard';

interface CardRevealProps {
  scientist: Scientist | null;
  onCollect: () => void;
  onDiscard: () => void;
}

export default function CardReveal({ scientist, onCollect, onDiscard }: CardRevealProps) {
  if (!scientist) return null;

  return (
    <div className="w-full flex flex-col items-center gap-4 animate-fadeIn h-full">
      <div className="text-center">
        <p className="text-label-caps text-secondary mb-2 uppercase tracking-wide">New Discovery Revealed</p>
      </div>

      <div className="w-full flex-1 flex flex-col justify-center items-center py-2 h-full min-h-0">
        <div className="relative w-full max-w-[300px] aspect-[7/10]">
          <ScientistCard scientist={scientist} />
        </div>
        <p className="text-body-sm text-on-surface-variant text-center opacity-80 mt-4 italic">
          Click the card to flip it
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onCollect}
          className="px-6 py-3 bg-secondary text-on-secondary rounded-lg font-sans font-bold text-body-lg hover:bg-secondary-container transition-colors"
        >
          Collect Scientist Card
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
