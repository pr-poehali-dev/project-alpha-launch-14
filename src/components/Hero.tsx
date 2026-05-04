import { useScroll, useTransform, motion, animate, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const WORDS = [
  "Преступление", "Анна", "Сапиенс", "Гарри", "Мастер",
  "Каренина", "Воланд", "Война", "Мир", "Элджернон",
  "Раскольников", "Пруст", "Толстой", "Чехов", "Булгаков",
  "451°", "Маргарита", "Обломов", "Печорин", "Базаров",
  "страница", "цитата", "финал", "эпилог", "пролог",
  "не дочитал", "бросил", "перечитаю", "плакал", "смеялся",
];

function FloatingWord({ word, index }: { word: string; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const initialX = (index * 137.5) % 100;
  const initialY = (index * 83.7) % 100;
  const duration = 18 + (index % 7) * 4;
  const delay = -(index * 1.3);
  const size = index % 3 === 0 ? "text-xs" : index % 3 === 1 ? "text-sm" : "text-[10px]";
  const opacity = 0.06 + (index % 5) * 0.04;

  useEffect(() => {
    const driftX = (Math.random() - 0.5) * 30;
    const driftY = (Math.random() - 0.5) * 30;

    const ctrlX = animate(x, [0, driftX, -driftX * 0.5, 0], {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    });
    const ctrlY = animate(y, [0, driftY, -driftY * 0.7, 0], {
      duration: duration * 1.2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return () => { ctrlX.stop(); ctrlY.stop(); };
  }, []);

  return (
    <motion.span
      style={{ x, y, left: `${initialX}%`, top: `${initialY}%`, opacity }}
      className={`absolute font-bold uppercase tracking-widest text-white select-none pointer-events-none whitespace-nowrap ${size}`}
    >
      {word}
    </motion.span>
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        {WORDS.map((word, i) => (
          <FloatingWord key={i} word={word} index={i} />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)]" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm uppercase tracking-widest mb-4"
        >
          честно о книгах
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none"
        >
          НЕ<br />ДОЧИТАЛ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl max-w-xl mx-auto font-light"
        >
          Без снобизма. С картинками. Иногда смешно. Иногда до слёз.
        </motion.p>
        <motion.a
          href="#reviews"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 inline-block border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Читать
        </motion.a>
      </motion.div>
    </div>
  );
}
