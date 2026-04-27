'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

 
  const handleProtectedRoute = (path) => {
    if (user) {
      router.push(path);
    } else {
      router.push('/login');
    }
  };

  return (
    <nav className="w-full bg-[#f8f9fa] py-6 px-10 flex justify-between items-center max-w-7xl mx-auto">
      {/* Логотип (Используем твою картинку из папки public) */}
      <Link href="/">
        <img src="/logo.png" alt="I feel you" className="h-10 object-contain cursor-pointer" />
      </Link>

      {/* Ссылки (Меню) */}
      <div className="flex gap-8 text-sm font-semibold text-brand-purple">
        <Link href="/" className="hover:text-brand-dark transition">Басты бет</Link>
        <Link href="/about" className="hover:text-brand-dark transition">Біз туралы</Link>
        <button onClick={() => handleProtectedRoute('/games/select')} className="hover:text-brand-dark transition">Ойындар</button>
        <button onClick={() => handleProtectedRoute('/progress')} className="hover:text-brand-dark transition">Прогресс</button>
      </div>

      {/* Правый блок */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <img 
              src={user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=fallback'} 
              alt="Аватар" 
              className="w-10 h-10 rounded-full border-2 border-brand-purple cursor-pointer"
              onClick={handleLogout}
              title="Шығу"
            />
          </div>
        ) : (
          <Link href="/login">
            <button className="bg-brand-purple text-white px-8 py-2.5 rounded-full font-bold hover:bg-brand-dark transition shadow-md">
              Кіру
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
