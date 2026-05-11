'use client';

import React from 'react';
import CardGrid from './CardGrid';

export default function VaultTab() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-surface-bright border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-headline-lg text-on-surface font-sans mb-2">Scientist Collection</h2>
          <p className="text-body-md text-on-surface-variant">
            Access and review the archived knowledge of history's greatest innovators.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl px-6 py-8">
        <CardGrid />
      </div>
    </div>
  );
}
