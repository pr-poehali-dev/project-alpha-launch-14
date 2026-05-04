import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const formats = [
  { emoji: "⚡", title: "Книга в одном предложении", platforms: ["Twitter", "Telegram", "TikTok"], why: "Узнаёшь книгу за 3 секунды, смешно пересказываешь другу.", example: "«Анна Каренина»: женщина хотела жить по-своему — эпоха не одобрила." },
  { emoji: "📱", title: "Если бы писатели вели Telegram-каналы", platforms: ["Instagram", "VK"], why: "Достоевский — канал «Преступление и подписка». Чехов — «Жалобы на пациентов».", example: "Толстой: «Сегодня написал 80 страниц. Завтра вычеркну 79»." },
  { emoji: "🎬", title: "Школьная программа: пересдаём эмоциями", platforms: ["Reels", "TikTok"], why: "15 секунд на камеру — и вся боль от «Войны и мира» понятна без слов.", example: "«Война и мир»: 1200 страниц, чтобы понять — люди тупые всегда." },
  { emoji: "🤡", title: "Ожидание / Реальность", platforms: ["Pinterest", "Reddit", "VK"], why: "Ожидание: «буду читать умное». Реальность: уснул на 3 странице.", example: "Ожидание: Пруст изменит жизнь. Реальность: 3000 страниц про печенье." },
  { emoji: "💥", title: "Три книги, которые тебя сломали", platforms: ["Stories", "Опросы"], why: "«Над пропастью во ржи», «451°», «Цветы для Элджернона» — люди отвечают массово.", example: "Челлендж запускает волну — каждый вспоминает свою личную травму." },
];

const platformColors: Record<string, string> = {
  Twitter: "bg-neutral-100 text-neutral-600",
  Telegram: "bg-neutral-100 text-neutral-600",
  TikTok: "bg-neutral-900 text-white",
  Instagram: "bg-neutral-100 text-neutral-600",
  VK: "bg-neutral-100 text-neutral-600",
  Reels: "bg-neutral-900 text-white",
  Pinterest: "bg-neutral-100 text-neutral-600",
  Reddit: "bg-neutral-100 text-neutral-600",
  Stories: "bg-neutral-100 text-neutral-600",
  Опросы: "bg-neutral-100 text-neutral-600",
};

export default function Formats() {
  const { ref, isInView } = useReveal();

  return (
    <section id="formats" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="uppercase tracking-widest text-xs text-neutral-400 mb-4"
        >
          Контент-форматы
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-xl"
          >
            Виральные форматы.<br />Которые репостят.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-neutral-500 text-sm max-w-xs md:text-right leading-relaxed"
          >
            Пять форматов для соцсетей — каждый заточен под алгоритмы и человеческую природу.
          </motion.p>
        </div>

        <div className="flex flex-col gap-px bg-neutral-200">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
              className="bg-neutral-50 hover:bg-white transition-colors duration-200 group"
            >
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_1fr_1fr] gap-4 md:gap-8 items-start p-6 md:p-8">
                <motion.span
                  animate={isInView ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="text-2xl mt-1"
                >
                  {f.emoji}
                </motion.span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400 font-mono">0{i + 1}</span>
                    <h3 className="font-bold text-neutral-900 text-base leading-tight">{f.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {f.platforms.map((p) => (
                      <span key={p} className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${platformColors[p] ?? "bg-neutral-100 text-neutral-600"}`}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="hidden md:block text-neutral-600 text-sm leading-relaxed">{f.why}</p>
                <p className="hidden md:block text-neutral-400 text-sm italic leading-relaxed border-l border-neutral-200 pl-4">{f.example}</p>
                <p className="md:hidden col-span-1 text-neutral-500 text-sm leading-relaxed">{f.why}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
