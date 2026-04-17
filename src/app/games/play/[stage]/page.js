'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import GameEngine from '@/components/game/GameEngine';

export default function PlayStage() {
  const { stage } = useParams();
  const [showIntro, setShowIntro] = useState(true);

  // Показываем "Ойын басталды!" ровно 2 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center animate-fade-in">
        <div className="bg-white px-20 py-12 rounded-[40px] shadow-xl border border-gray-50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-light text-brand-purple tracking-wide">
            Ойын басталды!
          </h1>
        </div>
      </div>
    );
  }

  // Запускаем движок, передавая ему номер уровня (преобразуем строку '1' в число 1)
  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4 w-full">
      <GameEngine stage={parseInt(stage)} />
    </div>
  );
}