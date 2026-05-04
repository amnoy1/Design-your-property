import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function ComparisonSlider({ beforeImage, afterImage }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl cursor-col-resize group select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Bottom) */}
      <img 
        src={afterImage} 
        alt="Staged space" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Before Image (Top, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Original space" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-natural-accent text-natural-accent group-hover:scale-110 transition-transform duration-300">
          <MoveHorizontal size={24} />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md text-natural-muted px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm border border-natural-border/50">
        Before
      </div>
      <div className="absolute top-6 right-6 z-20 bg-natural-accent/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm border border-white/20">
        AI Staged
      </div>
    </div>
  );
}
