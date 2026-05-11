'use client';

import React from 'react';
import LabMainContent from './LabMainContent';

export default function LabTab() {
  return (
    <div className="w-full flex-1 flex flex-col items-center py-6 px-6 min-h-0">
      <div className="w-full max-w-5xl h-full min-h-0">
        <LabMainContent />
      </div>
    </div>
  );
}
