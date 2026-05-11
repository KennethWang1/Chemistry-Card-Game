'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CollectedCard } from '@/app/types/scientist';
import { scientists } from '@/app/data/scientists';

interface CardContextType {
  collectedCards: CollectedCard[];
  addCard: (scientistId: string) => void;
  selectedDiscipline: string;
  setSelectedDiscipline: (discipline: string) => void;
  isLoading: boolean;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [collectedCards, setCollectedCards] = useState<CollectedCard[]>([]);
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('scibox-collection');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const restored = parsed.map((card: any) => ({
          ...card,
          unlockedAt: new Date(card.unlockedAt),
        }));
        setCollectedCards(restored);
      } catch (e) {
        console.error('Failed to restore collection from localStorage');
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('scibox-collection', JSON.stringify(collectedCards));
    }
  }, [collectedCards, isLoading]);

  const addCard = (scientistId: string) => {
    setCollectedCards((prev) => {
      const existing = prev.find((card) => card.scientistId === scientistId);
      if (existing) {
        return prev.map((card) =>
          card.scientistId === scientistId
            ? { ...card, count: card.count + 1 }
            : card
        );
      }
      return [
        ...prev,
        {
          scientistId,
          count: 1,
          unlockedAt: new Date(),
        },
      ];
    });
  };

  return (
    <CardContext.Provider
      value={{
        collectedCards,
        addCard,
        selectedDiscipline,
        setSelectedDiscipline,
        isLoading,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCardCollection() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardCollection must be used within CardProvider');
  }
  return context;
}
