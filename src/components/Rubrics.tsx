const rubrics = [
  {
    emoji: "📖",
    title: "Бросил, но не жалею",
    desc: "Честные рецензии на книги, которые не дочитали. Каждый пост заканчивается вопросом: «А ты дочитал? Да / Нет / Перечитаю».",
  },
  {
    emoji: "💬",
    title: "Одна цитата — и всё понятно",
    desc: "Пост — одна цитата + три объяснения: о чём книга, кому зайдёт, сколько страдать.",
  },
  {
    emoji: "🔚",
    title: "Финал спойлерну",
    desc: "Для тех, кому лень читать, но интересно знать, чем кончилось. Раскрываем финалы без стыда.",
  },
  {
    emoji: "🏫",
    title: "Книга из школы — сейчас бы зашла",
    desc: "Пересмотр школьной программы глазами взрослого. С мемами и живыми примерами.",
  },
  {
    emoji: "🪞",
    title: "Ты как книга",
    desc: "Тесты, подборки по настроению. «Какую книгу читать, если у тебя разбито сердце» — и подобное.",
  },
  {
    emoji: "🖊️",
    title: "Автор недели",
    desc: "Портрет одной фигуры: где жил, кого ненавидел, что пил — и за что его любят (или нет).",
  },
];

export default function Rubrics() {
  return (
    <section id="rubrics" className="bg-neutral-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-neutral-500 mb-4">Рубрики</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-14 leading-tight max-w-xl">
          Шесть способов<br />говорить о книгах.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-700">
          {rubrics.map((r) => (
            <div
              key={r.title}
              className="bg-neutral-900 p-8 flex flex-col gap-4 hover:bg-neutral-800 transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-3xl">{r.emoji}</span>
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-neutral-300 transition-colors">
                {r.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{r.desc}</p>
              <span className="text-neutral-600 text-xs uppercase tracking-widest group-hover:text-neutral-400 transition-colors mt-auto">
                Читать →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}