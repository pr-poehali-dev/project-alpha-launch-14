import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const PAGES = [
  "Не в том дело, что ты не дочитал. В том, что хотел.",
  "«Война и мир» — это 4 тома о том, что все устали.",
  "Достоевский писал про совесть. Совесть неудобная.",
  "Читать — значит жить чужой жизнью без последствий.",
  "Финал «Мастера» до сих пор обсуждают. Мы тоже.",
  "Книга брошена. Но ты её помнишь. Это и есть чтение.",
];

function BookAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative" style={{ width: 340, height: 240 }}>
        {PAGES.map((text, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-sm origin-left"
            style={{
              background: `rgba(${200 - i * 10}, ${170 - i * 8}, ${130 - i * 8}, ${0.18 - i * 0.018})`,
              boxShadow: "2px 4px 24px rgba(80,50,20,0.18)",
              zIndex: PAGES.length - i,
            }}
            animate={{
              rotateY: [0, -180, -180, 0],
              scaleX: [1, 0.96, 0.96, 1],
            }}
            transition={{
              duration: 3.2,
              delay: i * 1.1,
              repeat: Infinity,
              repeatDelay: PAGES.length * 1.1 - 3.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div className="w-full h-full flex items-center justify-center px-8">
              <p
                className="text-center leading-relaxed"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 13,
                  color: "rgba(90,60,30,0.55)",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </p>
            </div>
            <div
              className="absolute inset-y-0 left-0 w-4 rounded-l-sm"
              style={{ background: "rgba(120,80,40,0.12)" }}
            />
          </motion.div>
        ))}

        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background: "rgba(160,120,80,0.10)",
            border: "1px solid rgba(160,120,80,0.18)",
            zIndex: 0,
          }}
        />
      </div>
    </div>
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
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ background: "#f5ede0" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #e8d5b7 0%, #d4b896 40%, #b8956a 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 28px,
              rgba(160,120,70,0.06) 28px,
              rgba(160,120,70,0.06) 29px
            )
          `,
        }}
      />

      <BookAnimation />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,237,224,0.15) 0%, rgba(180,130,80,0.55) 100%)",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm uppercase tracking-widest mb-4"
          style={{ color: "#6b4423", fontFamily: "Georgia, serif" }}
        >
          честно о книгах
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-none"
          style={{ color: "#3d2008" }}
        >
          НЕ<br />ДОЧИТАЛ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl max-w-xl mx-auto font-light"
          style={{ color: "#5c3317", fontFamily: "Georgia, serif" }}
        >
          Без снобизма. С картинками. Иногда смешно. Иногда до слёз.
        </motion.p>
        <motion.a
          href="#reviews"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 inline-block px-8 py-3 uppercase text-sm tracking-widest transition-all duration-300"
          style={{
            border: "1px solid #6b4423",
            color: "#3d2008",
            background: "transparent",
          }}
          whileHover={{
            background: "#3d2008",
            color: "#f5ede0",
          } as never}
        >
          Читать
        </motion.a>
      </motion.div>
    </div>
  );
}
