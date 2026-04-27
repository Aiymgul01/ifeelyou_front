"use client";

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { playSound } from "@/lib/soundPlayer";
import { auth } from "@/lib/firebase";

export default function GameEngine({ stage }) {
  const router = useRouter();
  const inputRef = useRef(null);

  
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [lives, setLives] = useState(3);
  
  const [status, setStatus] = useState("loading");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        let type = "letter";
        if (stage === 2) type = "syllable";
        if (stage === 3) type = "word";

        const res = await fetch(
          `https://ifeelyou-back.onrender.com/api/game-items?type=${type}`,
        );
        const data = await res.json();

        
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10); 
        setItems(shuffled);
        setStats({ correct: 0, total: shuffled.length });

        
        setStatus("intro");
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
      }
    };
    fetchItems();
  }, [stage]);

  
  useEffect(() => {
    if (status === "intro") {
      playSound(`/audio/system/intro_stage_${stage}.mp3`);

      
      setTimeout(() => {
        setStatus("countdown");
      }, 3000);
    }

    if (status === "countdown") {
      playSound("/audio/system/countdown.mp3");

      
      setTimeout(() => {
        setStatus("playing");
      }, 4000);
    }
  }, [status, stage]);

  const currentItem = items[currentIndex];

  
  
  useEffect(() => {
    if (status === "playing" && currentItem) {
      
      if (currentItem.audioPath) {
        playSound(currentItem.audioPath);
      }
      
      else if (currentItem.itemId) {
        let audioFileName = currentItem.itemId;

        if (stage === 2) {
          audioFileName = audioFileName.replace("syl_", ""); 
        } else if (stage === 3) {
          audioFileName = audioFileName.replace("word_", ""); 
        }

        playSound(`/audio/stage_${stage}/${audioFileName}.mp3`);
      }
    }

    
    if (status === "playing" && inputRef.current) {
      inputRef.current.focus();
    }
    life;
  }, [currentIndex, status, currentItem, stage]);

  
  useEffect(() => {
    if (status === "stage_completed") {
      const handleKeyDown = (e) => {
        if (e.code === "Enter") {
          e.preventDefault();
          window.location.reload();
        } else if (e.code === "Space") {
          e.preventDefault(); 
          router.push("/games/select"); 
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "success_mini") {
      const timer = setTimeout(() => {
        setStatus("stage_completed");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  
  const checkAnswer = (e) => {
    if (e) e.preventDefault();

    
    if (!userInput.trim() || isProcessing) return;

    setIsProcessing(true); 

    if (userInput.trim().toLowerCase() === currentItem.text.toLowerCase()) {
      // Играем звук похвалы
      playSound("/audio/system/success_mini.mp3");

      if (lives === 3) {
        setStats((prev) => ({ ...prev, correct: prev.correct + 1 }));
      }

      
      setTimeout(() => {
        goToNextItem();
        setIsProcessing(false);
      }, 3000);
    } else {
      const newLives = lives - 1;
      setLives(newLives);

      
      if (newLives === 2) {
        setStatus("error_1");
        playSound("/audio/system/error_1.mp3");
      } else if (newLives === 1) {
        setStatus("error_2");
        playSound("/audio/system/error_2.mp3");
      } else if (newLives === 0) {
        setStatus("error_3");
        playSound("/audio/system/error_3.mp3");
      }

      
      setTimeout(() => {
        if (newLives === 0) {

          goToNextItem();
        } else {
          
          setUserInput("");
          setStatus("playing");
        }
        setIsProcessing(false);
      }, 2500); 
    }
  };


  const goToNextItem = async () => {
    if (currentIndex + 1 >= items.length) {
  
      setStatus("success_mini");
      playSound(`/audio/system/complete_stage_${stage}.mp3`);

    
      if (auth.currentUser) {
        try {
      
          const finalCorrect = lives === 3 ? stats.correct + 1 : stats.correct;

          await fetch("https://ifeelyou-back.onrender.com/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              uid: auth.currentUser.uid,
              stage: stage,
              correct: finalCorrect,
              total: items.length,
            }),
          });
          console.log("Нәтиже сақталды!");
        } catch (error) {
          console.error("Қате (Ошибка сохранения):", error);
        }
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
      setUserInput("");
      setLives(3);
      setStatus("playing");
    }
  };

 

  if (status === "loading")
    return (
      <div className="text-2xl text-brand-purple animate-pulse">
        Жүктелуде... (Загрузка)
      </div>
    );

  if (status === "intro")
    return (
      <div className="bg-white w-full max-w-4xl p-20 rounded-[40px] shadow-xl border border-gray-50 flex flex-col items-center justify-center min-h-[400px] animate-fade-in text-center relative overflow-hidden">
        <div className="absolute top-16 left-32 w-8 h-8 bg-brand-yellow rounded-full opacity-80"></div>
        <div className="absolute bottom-24 right-32 w-12 h-12 border-[3px] border-indigo-200 rounded-xl rotate-12"></div>

        <h2 className="text-5xl md:text-6xl font-bold text-brand-purple mb-6 uppercase tracking-wide">
          {stage === 1 ? "Әріптер" : stage === 2 ? "Буындар" : "Сөздер"}
        </h2>
        <p className="text-2xl text-gray-400 animate-pulse font-light">
          Тыңдаңыз...
        </p>
      </div>
    );

 
  if (status === "countdown")
    return (
      <div className="bg-brand-yellow w-full max-w-4xl p-20 rounded-[40px] shadow-xl border border-brand-yellow flex flex-col items-center justify-center min-h-[400px] animate-pulse text-center">
        <h2 className="text-7xl md:text-8xl font-bold text-brand-dark mb-6 tracking-wider uppercase">
          Дайындал!
        </h2>
      </div>
    );


  if (status === "error_1")
    return (
      <div className="bg-white w-full max-w-4xl p-20 rounded-[40px] shadow-xl border border-gray-50 relative flex flex-col items-center justify-center min-h-[400px] animate-fade-in overflow-hidden">
        <div className="absolute top-16 left-32 w-8 h-8 bg-brand-yellow rounded-full opacity-80"></div>
        <div className="absolute bottom-24 right-32 w-12 h-12 border-[3px] border-indigo-200 rounded-xl rotate-12"></div>

        <h2 className="text-5xl md:text-6xl font-light text-brand-purple mb-2 tracking-wide">
          Дұрыс емес
        </h2>
        <h2 className="text-5xl md:text-6xl font-light text-brand-purple mb-12 tracking-wide">
          Қайта көріңіз
        </h2>
      </div>
    );


  if (status === "error_2")
    return (
      <div className="bg-white w-full max-w-4xl p-20 rounded-[40px] shadow-xl border border-gray-50 relative flex flex-col items-center justify-center min-h-[400px] animate-fade-in overflow-hidden">
        <div className="absolute top-16 left-32 w-8 h-8 bg-brand-yellow rounded-full opacity-80"></div>
        <div className="absolute bottom-24 right-32 w-12 h-12 border-[3px] border-indigo-200 rounded-xl rotate-12"></div>

        <h2 className="text-5xl md:text-6xl font-light text-brand-purple mb-2 tracking-wide">
          Қате
        </h2>
        <h2 className="text-5xl md:text-6xl font-light text-brand-purple mb-12 tracking-wide">
          Тағы бір рет қайталаңыз
        </h2>
      </div>
    );


  if (status === "error_3")
    return (
      <div className="bg-white w-full max-w-4xl p-20 rounded-[40px] shadow-xl border border-gray-50 relative flex flex-col items-center justify-center min-h-[400px] animate-fade-in overflow-hidden">
        <div className="absolute top-16 left-32 w-8 h-8 bg-brand-yellow rounded-full opacity-80"></div>
        <div className="absolute bottom-24 right-32 w-12 h-12 border-[3px] border-indigo-200 rounded-xl rotate-12"></div>

        <h2 className="text-5xl md:text-6xl font-light text-brand-purple mb-2 tracking-wide">
          Өкінішке орай,
        </h2>
        <h2 className="text-5xl md:text-6xl font-light text-brand-purple mb-12 tracking-wide">
          дұрыс емес
        </h2>
      </div>
    );


  if (status === "success_mini")
    return (
      <div className="bg-white w-full max-w-4xl p-20 rounded-[40px] shadow-xl border border-gray-50 relative flex flex-col items-center justify-center min-h-[400px] animate-fade-in overflow-hidden text-center">
        <div className="absolute top-16 left-32 w-8 h-8 bg-brand-yellow rounded-full opacity-80"></div>
        <div className="absolute bottom-24 right-32 w-12 h-12 border-[3px] border-indigo-200 rounded-xl rotate-12"></div>

        <h2 className="text-6xl md:text-7xl font-bold text-brand-purple mb-2 uppercase tracking-wide">
          Сен өте
        </h2>
        <h2 className="text-6xl md:text-7xl font-bold text-brand-purple mb-4 uppercase tracking-wide">
          Мықтысың!
        </h2>
      </div>
    );


  if (status === "stage_completed")
    return (
      <div className="bg-white p-16 rounded-[40px] shadow-xl text-center border border-gray-100 flex flex-col items-center animate-fade-in">
        <h2 className="text-4xl font-light text-brand-purple mb-6">
          {stage}-Кезең нәтиже
        </h2>
        <p className="text-3xl font-light text-brand-purple mb-12">
          {Math.round((stats.correct / stats.total) * 100)}% / 100% or{" "}
          {stats.correct} сұрақ / {stats.total} сұрақ
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => router.push("/games/select")}
            className="bg-brand-purple hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-full text-lg uppercase transition-all"
          >
            Аяқтайық (Space)
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-brand-purple hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-full text-lg uppercase transition-all"
          >
            Қайталау (Enter)
          </button>
        </div>
      </div>
    );


  return (
    <div className="bg-white w-full max-w-4xl p-10 rounded-[40px] shadow-xl border border-gray-50 relative flex flex-col items-center min-h-[400px] justify-center animate-fade-in">
      {/* Тег уровня (Левый верхний угол) */}
      <div className="absolute top-8 left-8 bg-brand-yellow text-brand-dark font-bold py-2 px-6 rounded-full uppercase text-sm">
        {stage} - Кезең
      </div>

      {/* Кнопка ВЫХОДА (Правый верхний угол) */}
      <button
        onClick={() => router.push("/games/select")}
        className="absolute top-8 right-8 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-6 rounded-full uppercase text-sm transition-colors border border-red-100"
      >
        Шығу
      </button>

      {/* Индикатор жизней (Правый нижний угол) */}
      <div className="absolute bottom-8 right-8 bg-white border-2 border-gray-100 text-gray-600 font-semibold py-2 px-6 rounded-full flex items-center gap-2 shadow-sm">
        <span className="text-xl font-bold">{lives}</span> Мүмкіндік қалды
      </div>

      {/* Центральный элемент (Буква/Слог/Слово) */}
      <div className="text-8xl md:text-9xl font-light text-brand-purple mb-10 tracking-widest">
        {/* Делаем первую букву яркой, остальные прозрачнее (как на макете) */}
        <span className="text-brand-purple">{currentItem?.text.charAt(0)}</span>
        <span className="text-brand-purple/30">
          {currentItem?.text.slice(1)}
        </span>
      </div>

      {/* Поле ввода */}
      <form onSubmit={checkAnswer} className="w-full max-w-md">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={isProcessing}
          placeholder={
            stage === 1
              ? "Әріпті жазыңыз!"
              : stage === 2
                ? "Буынды жазыңыз!"
                : "Сөзді жазыңыз!"
          }
          className="w-full bg-[#f3f4f6] text-center text-xl p-4 rounded-full outline-brand-purple border-none font-medium text-brand-purple"
          autoFocus
          autoComplete="off"
        />
        {/* Кнопка скрыта, отправка работает по нажатию Enter в инпуте */}
        <button type="submit" className="hidden">
          Тексеру
        </button>
      </form>
    </div>
  );
}
