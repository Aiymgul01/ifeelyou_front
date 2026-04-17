'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { playSound } from '@/lib/soundPlayer';

export default function GameSelect() {
  const [selectedStage, setSelectedStage] = useState(null);
  const router = useRouter();

  // Список уровней и их системные звуки из папки public/audio/system/
  const stages = [
    { id: 1, title: '1-Кезең: Дыбыстар', audio: '/audio/system/stage_1.mp3' },
    { id: 2, title: '2-Кезең: Буындар', audio: '/audio/system/stage_2.mp3' },
    { id: 3, title: '3-Кезең: Сөздер', audio: '/audio/system/stage_3.mp3' },
  ];

  const handleSelect = (stage) => {
    setSelectedStage(stage.id);
    playSound(stage.audio); // Озвучиваем выбор
  };

  const handleStart = () => {
    if (!selectedStage) return;
    playSound('/audio/system/game_start.mp3'); // Звук старта игры
    // Перекидываем на динамический роут игры
    router.push(`/games/play/${selectedStage}`);
  };

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute top-10 left-20 w-12 h-12 bg-brand-yellow rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-indigo-200 rounded-2xl rotate-12"></div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-brand-yellow mb-16 drop-shadow-sm">Кезеңді таңдайық!</h1>
      
      <div className="flex flex-col gap-6 mb-16">
        {stages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => handleSelect(stage)}
            className={`text-4xl md:text-5xl transition-all duration-300 ${
              selectedStage === stage.id 
                ? 'text-brand-purple scale-110 font-bold' 
                : 'text-brand-purple/50 hover:text-brand-purple/80 font-medium'
            }`}
          >
            {stage.title}
          </button>
        ))}
      </div>

      <button 
        onClick={handleStart}
        disabled={!selectedStage}
        className={`font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-all flex items-center gap-3 ${
          selectedStage 
            ? 'bg-brand-purple hover:bg-brand-dark text-white hover:scale-105 cursor-pointer' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-70'
        }`}
      >
        Ойын бастау <span className="text-2xl">🚀</span>
      </button>
    </div>
  );
}