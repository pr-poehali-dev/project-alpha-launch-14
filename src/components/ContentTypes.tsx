import { useState } from "react";

const types = [
  {
    genre: "Личное эссе",
    emoji: "✍️",
    example: '«Как "Мастер и Маргарита" спасла меня от выгорания»',
    length: "1200–1800 слов",
    tag: "глубоко",
  },
  {
    genre: "Список",
    emoji: "📋",
    example: "«10 книг, которые можно проглотить за выходные»",
    length: "800–1000 слов",
    tag: "быстро",
  },
  {
    genre: "Кейс по автору",
    emoji: "🔍",
    example: '«Почему Толстой ненавидел "Анну Каренину"»',
    length: "1500 слов",
    tag: "интересно",
  },
  {
    genre: "Анализ сцены",
    emoji: "🎭",
    example: '«Эпилог "Гарри Поттера": почему все плакали»',
    length: "600–800 слов",
    tag: "точно",
  },
  {
    genre: "Интервью",
    emoji: "🎤",
    example: "«Как библиотекарь из Перми стала блогером с 100к»",
    length: "2000 слов",
    tag: "живо",
  },
  {
    genre: "Тест / игра",
    emoji: "🎲",
    example: "«Угадай писателя по трём странным фактам»",
    length: "интерактив",
    tag: "вирально",
  },
  {
    genre: "Сатира",
    emoji: "😈",
    example: "«Если бы книжные герои заполняли анкету на Госуслугах»",
    length: "500 слов",
    tag: "смешно",
  },
];

export default function ContentTypes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="genres" className="bg-white py-20 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-neutral-400 mb-4">Редполитика</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-xl">
            Семь жанров.<br />Ни одного скучного.
          </h2>
          <p className="text-neutral-500 text-sm max-w-xs md:text-right leading-relaxed">
            От личного эссе до чистой сатиры — каждый формат заточен под свою эмоцию и аудиторию.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {types.map((t, i) => (
            <div
              key={t.genre}
              onClick={() => setActive(active === i ? null : i)}
              className={`border p-6 flex flex-col gap-3 cursor-pointer transition-all duration-300 select-none ${
                active === i
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 hover:border-neutral-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{t.emoji}</span>
                <span
                  className={`text-[10px] uppercase tracking-widest px-2 py-0.5 ${
                    active === i ? "bg-white text-neutral-900" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {t.tag}
                </span>
              </div>
              <h3
                className={`font-bold text-base leading-tight ${
                  active === i ? "text-white" : "text-neutral-900"
                }`}
              >
                {t.genre}
              </h3>
              <p
                className={`text-sm leading-relaxed flex-1 transition-all duration-300 ${
                  active === i ? "text-neutral-300" : "text-neutral-500"
                }`}
              >
                {t.example}
              </p>
              <div
                className={`text-xs uppercase tracking-widest pt-3 border-t ${
                  active === i ? "border-neutral-700 text-neutral-400" : "border-neutral-100 text-neutral-400"
                }`}
              >
                {t.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}