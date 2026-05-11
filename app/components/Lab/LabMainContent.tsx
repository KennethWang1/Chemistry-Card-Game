'use client';

import React, { useState } from 'react';
import { Scientist } from '@/app/types/scientist';
import { scientists } from '@/app/data/scientists';
import { useCardCollection } from '@/app/context/CardCollectionContext';
import LootBox from './LootBox';
import CardReveal from './CardReveal';

export default function LabMainContent() {
  const [currentCard, setCurrentCard] = useState<Scientist | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const { addCard } = useCardCollection();

  const handleOpenBox = () => {
    setIsOpening(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * scientists.length);
      setCurrentCard(scientists[randomIndex]);
      setIsOpening(false);
    }, 600);
  };

  const handleCollect = () => {
    if (currentCard) {
      addCard(currentCard.id);
      setCurrentCard(null);
    }
  };

  const handleDiscard = () => {
    setCurrentCard(null);
  };

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      {!currentCard && (
        <div className="text-center mb-6 flex flex-col items-center gap-4 flex-shrink-0">
          <p className="text-label-caps text-secondary mb-2 uppercase tracking-wide font-bold ">The Discard Pile</p>
          <h2 className="text-headline-lg text-on-surface font-sans">Click to Reveal a New Scientist</h2>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center gap-4 mt-2 min-h-0">
        {!currentCard ? (
          <LootBox isOpening={isOpening} onClick={handleOpenBox} />
        ) : (
          <div className="w-full max-w-2xl h-full pb-2 min-h-0">
            <CardReveal
              scientist={currentCard}
              onCollect={handleCollect}
              onDiscard={handleDiscard}
            />
          </div>
        )}
      </div>
    </div>
  );
}
