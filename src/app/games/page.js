'use client';

import Link from 'next/link';

export default function GamesWelcome() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Декоративные элементы на фоне */}
      <div className="absolute top-20 left-40 w-12 h-12 bg-brand-yellow rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-40 w-16 h-16 border-4 border-indigo-200 rounded-2xl rotate-12"></div>

      {/* Место для фото/аватарки */}
      <div className="w-64 h-64 bg-gray-200 rounded-[40px] mb-8 shadow-inner overflow-hidden border-4 border-white">
        {/* Сюда можно будет прокинуть реальное фото юзера из контекста */}
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=balaqay" alt="Balaqay" className="w-full h-full object-cover opacity-50" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-brand-yellow mb-2">Сәлем, балақай!</h1>
      <h2 className="text-5xl md:text-6xl font-bold text-brand-purple mb-12 leading-tight">
        Ойынды бірге<br/>бастайық!
      </h2>
      
      <Link href="/games/select">
        <button className="bg-brand-purple hover:bg-brand-dark text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-all hover:scale-105 flex items-center gap-3">
          Кезеңді таңдау <span className="text-2xl">🚀</span>
        </button>
      </Link>
    </div>
  );
}