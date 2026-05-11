'use client';

import React from 'react';
import { Scientist } from '@/app/types/scientist';

interface CardBackProps {
  scientist: Scientist;
}

export default function CardBack({ scientist }: CardBackProps) {
  return (
    <div
      className="w-full h-full bg-surface-bright rounded-2xl border border-outline-variant shadow-elevation flex flex-col overflow-y-auto box-border"
      style={{ padding: '1.5rem' }}
    >
      <h3 className="text-headline-sm text-on-surface font-sans mb-3">Scientific Biography</h3>

      <div className="space-y-3">
        <div>
          <p className="text-body-md text-on-surface-variant font-grotesk font-bold uppercase mb-1">
            Famous For
          </p>
          <p className="text-body-md text-on-surface font-sans">{scientist.famousFor}</p>
        </div>

        <div>
          <p className="text-body-md text-on-surface-variant font-grotesk font-bold uppercase mb-1">
            Major Contribution
          </p>
          <p className="text-body-md text-on-surface font-sans">{scientist.majorContribution}</p>
        </div>

        <div>
          <p className="text-body-md text-on-surface-variant font-grotesk font-bold uppercase mb-1">
            Biography
          </p>
          <p className="text-body-md text-on-surface font-sans">{scientist.biography}</p>
        </div>

        <div>
          <p className="text-body-md text-on-surface-variant font-grotesk font-bold uppercase mb-1">
            First Publication
          </p>
          <p className="text-body-md text-on-surface font-sans">{scientist.firstPublication}</p>
        </div>

        <div>
          <p className="text-body-md text-on-surface-variant font-grotesk font-bold uppercase mb-1">
            Famous Publication
          </p>
          <p className="text-body-md text-on-surface font-sans">{scientist.famousPublish}</p>
        </div>
      </div>
    </div>
  );
}
