'use client';

import React from 'react';

interface LootBoxProps {
  isOpening: boolean;
  onClick: () => void;
}

export default function LootBox({ isOpening, onClick }: LootBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div
        onClick={onClick}
        className={`cursor-pointer transition-transform ${
          isOpening ? 'animate-pulse' : 'hover:scale-110'
        }`}
        style={{
          perspective: '1000px',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #006293 0%, #2a7bb0 100%)',
            borderRadius: '12px',
            position: 'relative',
            boxShadow: isOpening
              ? '0 0 40px rgba(0, 98, 147, 0.8), inset 0 0 40px rgba(145, 205, 255, 0.3)'
              : '0px 4px 20px rgba(0, 0, 0, 0.1)',
            animation: isOpening ? 'boxOpen 0.6s ease-out forwards' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            📦
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes boxOpen {
          0% {
            transform: scale(1) rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.1) rotateX(20deg);
          }
          100% {
            transform: scale(0.3) rotateX(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
