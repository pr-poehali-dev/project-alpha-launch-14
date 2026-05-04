import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/f5489fd9-1696-4d08-956c-9a70545cdb60/files/b6c52b38-18db-4b2f-8055-23eb2a200a76.jpg"
          alt="Книги и уют"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-70">честно о книгах</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          НЕ<br />ДОЧИТАЛ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 font-light">
          Без снобизма. С картинками. Иногда смешно. Иногда до слёз.
        </p>
        <button className="mt-10 border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
          Читать
        </button>
      </div>
    </div>
  );
}