// 'use client';

// import { useState } from 'react';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, googleProvider } from '@/lib/firebase';
// import { useRouter } from 'next/navigation';

// export default function AuthPage() {
//   const [isActive, setIsActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleGoogleAuth = async () => {
//     try {
//       setLoading(true);
//       const result = await signInWithPopup(auth, googleProvider);
//       const googleUser = result.user;

//       // Стучимся на наш готовый бэкенд
//       const response = await fetch('http://localhost:5001/api/users', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           uid: googleUser.uid,
//           displayName: googleUser.displayName,
//           email: googleUser.email,
//           photoURL: googleUser.photoURL,
//         }),
//       });

//       if (response.ok) {
//         // Успешный вход -> переходим на Басты бет
//         router.push('/');
//       }
//     } catch (error) {
//       console.error('Ошибка входа:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className={`auth-container ${isActive ? 'active' : ''}`}>
        
//         {/* Панель: Тіркелу */}
//         <div className="form-container sign-up flex flex-col items-center justify-center px-10 bg-white">
//           <h1 className="text-4xl font-bold text-gray-800 mb-6">Тіркелу</h1>
//           <button 
//             onClick={handleGoogleAuth} disabled={loading}
//             className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-6 py-3 mb-4 hover:border-brand-purple hover:bg-gray-50 transition w-full shadow-sm"
//           >
//             <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5"/>
//             <span className="font-medium text-gray-700">Google арқылы тіркелу</span>
//           </button>
//           <span className="text-gray-400 text-sm mb-4">немесе электронды пошта</span>
//           <input type="text" placeholder="Аты" className="bg-gray-100 border-none my-2 p-3 text-sm rounded-xl w-full outline-brand-purple" />
//           <input type="email" placeholder="Email" className="bg-gray-100 border-none my-2 p-3 text-sm rounded-xl w-full outline-brand-purple" />
//           <input type="password" placeholder="Құпиясөз" className="bg-gray-100 border-none my-2 p-3 text-sm rounded-xl w-full outline-brand-purple" />
//           <button className="bg-brand-purple text-white font-bold py-3 px-12 rounded-xl mt-6 hover:bg-brand-dark transition uppercase text-sm shadow-md">
//             Тіркелу
//           </button>
//         </div>

//         {/* Панель: Кіру */}
//         <div className="form-container sign-in flex flex-col items-center justify-center px-10 bg-white">
//           <h1 className="text-4xl font-bold text-gray-800 mb-6">Кіру</h1>
//           <button 
//             onClick={handleGoogleAuth} disabled={loading}
//             className="flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-6 py-3 mb-4 hover:border-brand-purple hover:bg-gray-50 transition w-full shadow-sm"
//           >
//             <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5"/>
//             <span className="font-medium text-gray-700">Google арқылы кіру</span>
//           </button>
//           <span className="text-gray-400 text-sm mb-4">немесе поштаңызды қолданыңыз</span>
//           <input type="email" placeholder="Email" className="bg-gray-100 border-none my-2 p-3 text-sm rounded-xl w-full outline-brand-purple" />
//           <input type="password" placeholder="Құпиясөз" className="bg-gray-100 border-none my-2 p-3 text-sm rounded-xl w-full outline-brand-purple" />
//           <a href="#" className="text-gray-500 text-sm mt-3 hover:text-brand-purple transition">Құпиясөзді ұмытып қалдыңыз ба?</a>
//           <button className="bg-brand-purple text-white font-bold py-3 px-12 rounded-xl mt-6 hover:bg-brand-dark transition uppercase text-sm shadow-md">
//             {loading ? 'Күте тұрыңыз...' : 'Кіру'}
//           </button>
//         </div>

//         {/* Фиолетовый Слайдер с текстом */}
//         <div className="toggle-container">
//           <div className="toggle">
//             <div className="toggle-panel toggle-left">
//               <h1 className="text-4xl font-bold mb-4">Қош көрдік!</h1>
//               <p className="mb-8 text-sm leading-relaxed px-4 text-indigo-100">Өзіңіздің жеке ақпараттарыңызды енгізіп, барлық мүмкіндіктерге ие болыңыз</p>
//               <button 
//                 onClick={() => setIsActive(false)}
//                 className="bg-transparent border-2 border-white text-white font-bold py-2.5 px-12 rounded-xl uppercase text-sm hover:bg-white hover:text-brand-purple transition"
//               >
//                 Кіру
//               </button>
//             </div>
//             <div className="toggle-panel toggle-right">
//               <h1 className="text-4xl font-bold mb-4">Қош келдіңіз!</h1>
//               <p className="mb-8 text-sm leading-relaxed px-4 text-indigo-100">Өзіңіздің жеке ақпараттарыңызды тіркеп, барлық мүмкіндіктерді ашыңыз</p>
//               <button 
//                 onClick={() => setIsActive(true)}
//                 className="bg-transparent border-2 border-white text-white font-bold py-2.5 px-12 rounded-xl uppercase text-sm hover:bg-white hover:text-brand-purple transition"
//               >
//                 Тіркелу
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      // Стучимся на наш готовый бэкенд
      const response = await fetch('http://localhost:5001/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: googleUser.uid,
          displayName: googleUser.displayName,
          email: googleUser.email,
          photoURL: googleUser.photoURL,
        }),
      });

      if (response.ok) {
        // Успешный вход -> переходим в меню выбора игр
        router.push('/games/select'); 
      }
    } catch (error) {
      console.error('Ошибка входа:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Центрируем всё по экрану с приятным серым фоном
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
      
      {/* Главная белая карточка */}
      <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl w-full max-w-md text-center border border-gray-50 relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Анимация: Плавающие декоративные круги на фоне */}
        <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-brand-yellow rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-brand-purple rounded-full opacity-10 animate-bounce" style={{ animationDuration: '4s' }}></div>

        {/* Заголовок и текст */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
          Қош келдіңіз!
        </h1>
        <p className="text-gray-500 mb-10 relative z-10 text-sm md:text-base px-2">
          Оқуды бастау немесе жалғастыру үшін жүйеге кіріңіз
        </p>

        {/* Единственная кнопка Google */}
        <button 
          onClick={handleGoogleAuth} 
          disabled={loading}
          className="relative z-10 flex items-center justify-center gap-4 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 w-full hover:border-brand-purple hover:bg-indigo-50 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-95"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-7 h-7"/>
          <span className="font-bold text-gray-700 text-lg tracking-wide">
            {loading ? 'Күте тұрыңыз...' : 'Google арқылы кіру'}
          </span>
        </button>

      </div>
    </div>
  );
}