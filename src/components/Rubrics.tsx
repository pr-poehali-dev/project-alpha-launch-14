import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const rubrics = [
  { emoji: "📖", title: "Бросил, но не жалею", desc: "Честные рецензии на книги, которые не дочитали. Каждый пост заканчивается вопросом: «А ты дочитал? Да / Нет / Перечитаю»." },
  { emoji: "💬", title: "Одна цитата — и всё понятно", desc: "Пост — одна цитата + три объяснения: о чём книга, кому зайдёт, сколько страдать." },
  { emoji: "🔚", title: "Финал спойлерну", desc: "Для тех, кому лень читать, но интересно знать, чем кончилось. Раскрываем финалы без стыда." },
  { emoji: "🏫", title: "Книга из школы — сейчас бы зашла", desc: "Пересмотр школьной программы глазами взрослого. С мемами и живыми примерами." },
  { emoji: "🪞", title: "Ты как книга", desc: "Тесты, подборки по настроению. «Какую книгу читать, если у тебя разбито сердце» — и подобное." },
  { emoji: "🖊️", title: "Автор недели", desc: "Портрет одной фигуры: где жил, кого ненавидел, что пил — и за что его любят (или нет)." },
];

export default function Rubrics() {
  const { ref, isInView } = useReveal();

  return (
    <section id="rubrics" className="bg-neutral-900 py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="uppercase tracking-widest text-xs text-neutral-500 mb-4"
        >
          Рубрики
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.06 }}
          className="text-3xl md:text-5xl font-bold text-white mb-14 leading-tight max-w-xl"
        >
          Шесть способов<br />говорить о книгах.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-700">
          {rubrics.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
              className="bg-neutral-900 p-8 flex flex-col gap-4 hover:bg-neutral-800 transition-colors duration-200 cursor-pointer group"
            >
              <motion.span
                animate={isInView ? { y: [0, -6, 0] } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                className="text-3xl"
              >
                {r.emoji}
              </motion.span>
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-neutral-300 transition-colors">
                {r.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{r.desc}</p>
              <span className="text-neutral-600 text-xs uppercase tracking-widest group-hover:text-neutral-400 transition-colors mt-auto">
                Читать →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
