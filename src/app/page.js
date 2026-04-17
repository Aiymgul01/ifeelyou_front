'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-10 pb-20 animate-fade-in">
      
      {/* Hero Секция */}
      <section className="flex flex-col lg:flex-row items-center justify-between mt-10 mb-24 gap-10">
        <div className="flex-1">
          <div className="inline-block bg-brand-yellow text-brand-dark font-bold text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            ⚙ Брайль жазу жүйесін қазақша үйрену енді оңай
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-purple leading-tight mb-6">
            Инклюзивті білімнің <br/>жаңа стандарты
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-lg leading-relaxed">
            Балаларға арналған Брайльді жазу жүйесін ерте оқыту платформасы: ойын арқылы тез және дұрыс жазуды үйретеді.
          </p>
          <div className="flex gap-4">
            <Link href="/login">
              <button className="bg-brand-yellow text-brand-dark font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition shadow-sm">
                Тіркелу
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-[#eef0f8] text-brand-purple font-bold px-8 py-3 rounded-full hover:bg-indigo-100 transition">
                Көбірек білу
              </button>
            </Link>
          </div>
        </div>

        {/* Графика справа */}
        <div className="flex-1 relative w-full h-[400px] flex justify-center items-center">
           <div className="w-[350px] h-[350px] bg-gradient-to-br from-indigo-100 to-yellow-50 rounded-[40px] shadow-lg relative">
             <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-yellow rounded-2xl flex items-center justify-center text-4xl font-bold text-brand-dark shadow-md rotate-[-10deg]">А</div>
             <div className="absolute top-1/2 -left-10 w-16 h-16 bg-red-300 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-md rotate-[15deg]">Б</div>
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-yellow rounded-2xl flex items-center justify-center text-5xl font-bold text-brand-dark shadow-md rotate-[5deg]">О</div>
             <div className="absolute bottom-10 left-10 w-16 h-16 bg-brand-purple rounded-2xl flex items-center justify-center text-white shadow-md rotate-[-5deg]">⚡</div>
           </div>
        </div>
      </section>

      {/* 3 Карточки преимуществ */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-50 hover:shadow-md transition">
          <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-xl mb-6">🎮</div>
          <h3 className="text-xl font-bold text-brand-purple mb-3">Ойын түрінде оқыту</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Брайльді меңгеруді қызықты ойындар мен шытырман оқиғалар арқылы үйреніңіз.</p>
        </div>
        <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-50 hover:shadow-md transition">
          <div className="w-12 h-12 bg-[#818cf8] rounded-full flex items-center justify-center text-xl mb-6 text-white">🛡️</div>
          <h3 className="text-xl font-bold text-brand-purple mb-3">100% Қауіпсіз</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Балаларға арналған 100% қауіпсіз құрылғы.</p>
        </div>
        <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-50 hover:shadow-md transition">
          <div className="w-12 h-12 bg-[#f87171] rounded-full flex items-center justify-center text-xl mb-6 text-white">📊</div>
          <h3 className="text-xl font-bold text-brand-purple mb-3">Прогресті бақылау</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Ата-аналарға арналған толық статистика және жетістіктер есебі.</p>
        </div>
      </section>


      {/* НОВЫЙ БЛОК: Интерактивный пример (Мақалды толықтыр) */}
      <section className="text-center mb-32 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-12 leading-tight">
          Брайль жазу жүйесін қазақ <br/> тілінде үйренуді бастаңыз
        </h2>
        
        <div className="bg-white border-4 border-indigo-50 rounded-[40px] p-10 md:p-16 max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          <h4 className="text-brand-purple font-semibold mb-8 tracking-wide">Мақалды толықтыр</h4>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-12 tracking-wide leading-tight">
            Қазақстанның <br/>болашағы - білімді жастар.
          </h3>

          {/* Выбранные буквы */}
          <div className="flex justify-center gap-4 mb-16">
            {['Қ', 'а', 'з'].map((letter, i) => (
              <div key={i} className="w-16 h-16 bg-[#5c6bc0] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-md transform hover:scale-110 transition cursor-default">
                {letter}
              </div>
            ))}
            <div className="w-16 h-16 bg-[#eef0f8] text-gray-400 rounded-full flex items-center justify-center text-3xl font-bold shadow-inner">
              ...
            </div>
          </div>

          {/* Клавиатура Брайля (Цветные кнопки) */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {[
              {l:'Қ', c:'bg-[#f87171]'}, {l:'Ш', c:'bg-[#f87171]'}, {l:'Ғ', c:'bg-[#f87171]'}, 
              {l:'Ұ', c:'bg-brand-yellow'}, {l:'Ұ', c:'bg-brand-yellow'}, {l:'І', c:'bg-brand-yellow'}, 
              {l:'Ә', c:'bg-brand-yellow'}, {l:'Ө', c:'bg-brand-yellow'}, 
              {l:'Ң', c:'bg-[#f87171]'}, {l:'Һ', c:'bg-[#f87171]'}
            ].map((item, i) => (
              <div key={i} className={`w-14 h-14 ${item.c} text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-sm hover:scale-110 hover:-translate-y-1 transition-all cursor-pointer`}>
                {item.l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="text-center bg-[#f8f9fa] py-10 rounded-[40px]">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-12">Біз туралы мамандардың <br/>ой-пікірі</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <div className="bg-white p-8 rounded-[30px] text-left shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-brand-yellow rounded-full mb-4"></div>
            <h4 className="font-bold text-brand-purple mb-4">Айгүл Сәдуақасова,<br/>логопед-педагог</h4>
            <p className="text-sm text-gray-500 leading-relaxed">«Бұл платформа балаларға Брайльді үйренуді қызықты әрі нәтижелі етеді. Интерактивті ойындар арқылы жазуды меңгеру тиімді әрі жылдам.»</p>
          </div>
          <div className="bg-white p-8 rounded-[30px] text-left shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-[#818cf8] rounded-full mb-4"></div>
            <h4 className="font-bold text-brand-purple mb-4">Нұрлан Юсупов,<br/>нейропедагог</h4>
            <p className="text-sm text-gray-500 leading-relaxed">«Ата-аналар үшін прогресті бақылау мүмкіндігі - басты артықшылығы. Балалар өз деңгейінде оқып, нәтижесін көре алады.»</p>
          </div>
          <div className="bg-white p-8 rounded-[30px] text-left shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-[#f87171] rounded-full mb-4"></div>
            <h4 className="font-bold text-brand-purple mb-4">Ләззат Әбілова,<br/>психологиялық кеңесші</h4>
            <p className="text-sm text-gray-500 leading-relaxed">«Цифрлық орта жарнамасыз және қауіпсіз, бұл балаларға толық көңіл бөлуге мүмкіндік береді.»</p>
          </div>
        </div>
      </section>

    </div>
  );
}