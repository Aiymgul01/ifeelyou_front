import { Howl } from 'howler';

export const playSound = (audioPath) => {
  if (!audioPath) return;
  const sound = new Howl({
    src: [audioPath],
    html5: true, // Помогает избежать проблем с автовоспроизведением в браузере
  });
  sound.play();
};