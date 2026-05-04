import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const reviews = [
  {
    id: 1,
    tag: "Классика",
    title: "Преступление и наказание",
    author: "Достоевский",
    text: "Родион Раскольников убивает старушку, а потом 600 страниц страдает. Спойлер: совесть — штука неудобная. Но читать надо.",
    emoji: "🪓",
    dochital: false,
  },
  {
    id: 2,
    tag: "Современная проза",
    title: "Маленькая жизнь",
    author: "Ханья Янагихара",
    text: "Книга, после которой ты три дня смотришь в потолок. Предупреждаем: не читайте в метро. Заплачете.",
    emoji: "💔",
    dochital: true,
  },
  {
    id: 3,
    tag: "Нон-фикшн",
    title: "Sapiens",
    author: "Юваль Ной Харари",
    text: "Как мы захватили планету, уничтожили всех мамонтов и придумали деньги. Читается как детектив, только про всё человечество.",
    emoji: "🦴",
    dochital: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Reviews() {
  const { ref, isInView } = useReveal();

  return (
    <section id="reviews" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="uppercase tracking-widest text-xs text-neutral-500 mb-4"
        >
          Последние рецензии
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-neutral-900 mb-14 leading-tight max-w-xl"
        >
          Что мы читали.<br />И что бросили.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="border border-neutral-200 p-8 flex flex-col gap-4 hover:border-neutral-900 transition-colors duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400">{r.tag}</span>
                <motion.span
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: "easeInOut" }}
                  className="text-2xl"
                >
                  {r.emoji}
                </motion.span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">{r.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{r.author}</p>
              </div>

              <p className="text-neutral-700 text-sm leading-relaxed flex-1">{r.text}</p>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <span className={`text-xs uppercase tracking-widest font-medium ${r.dochital ? "text-neutral-900" : "text-neutral-400"}`}>
                  {r.dochital ? "✓ Дочитал" : "✗ Не дочитал"}
                </span>
                <span className="text-xs text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  Читать →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
