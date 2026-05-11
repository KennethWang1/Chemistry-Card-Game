'use client';

import React, { useState } from 'react';
import { Scientist } from '@/app/types/scientist';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface ScientistCardProps {
  scientist: Scientist;
  interactive?: boolean;
}

export default function ScientistCard({ scientist, interactive = true }: ScientistCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-full cursor-pointer perspective mx-auto ${
        interactive ? 'hover:shadow-elevation' : ''
      }`}
      onClick={() => interactive && setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 600ms',
        }}
      >
        {/* Front side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <CardFront scientist={scientist} />
        </div>
        
        {/* Back side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <CardBack scientist={scientist} />
        </div>
      </div>
    </div>
  );
}
