'use client';

import React from 'react';
import { Scientist } from '@/app/types/scientist';

interface CardFrontProps {
  scientist: Scientist;
}

const disciplineColors: Record<string, string> = {
  'Physics': '#006293',
  'Chemistry': '#7f5300',
  'Biology': '#006e1c',
};

export default function CardFront({ scientist }: CardFrontProps) {
  return (
    <div
      className="w-full h-full bg-surface-bright rounded-2xl border border-outline-variant shadow-elevation flex flex-col gap-4 box-border bg-white"
      style={{ padding: '1rem' }}
    >
      <div className="w-full flex-shrink-0">
        <h2 className="text-headline-md text-on-surface text-center font-sans tracking-tight leading-tight">{scientist.name}</h2>
      </div>

      <div className="flex flex-col flex-1 w-full min-h-0">
        <div className="w-full h-min-70 h-40 bg-surface-container rounded-md overflow-hidden flex items-center justify-center">
          {scientist.imageUrl ? (
            <img
              src={scientist.imageUrl}
              alt={scientist.name}
              className="w-fill h-full object-cover"
            />
          ) : (
            <div className="text-on-surface-variant">Image unavailable</div>
          )}
        </div>

        <div className="text-center mt-4">
          <p className="text-body-md text-on-surface font-sans">
            {scientist.birthYear} – {scientist.deathYear}
          </p>
        </div>

        <div className='flex-1 min-h-0 w-full mt-4 overflow-y-auto pr-2'>
          <h2 className="text-xl font-bold mb-2">Biographical Information</h2>
          <p>{scientist.biography}</p>
        </div>

        <div className="mt-auto pt-4 flex-shrink-0">
          <span
            className="inline-block rounded-full text-white text-label-caps px-4 py-1.5"
            style={{ backgroundColor: disciplineColors[scientist.discipline] }}
          >
            {scientist.discipline}
          </span>
        </div>
      </div>
    </div>
  );
}
