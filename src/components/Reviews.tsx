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

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-neutral-500 mb-4">Последние рецензии</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-14 leading-tight max-w-xl">
          Что мы читали.<br />И что бросили.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="border border-neutral-200 p-8 flex flex-col gap-4 hover:border-neutral-900 transition-colors duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400">{r.tag}</span>
                <span className="text-2xl">{r.emoji}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 leading-tight">{r.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{r.author}</p>
              </div>

              <p className="text-neutral-700 text-sm leading-relaxed flex-1">{r.text}</p>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <span
                  className={`text-xs uppercase tracking-widest font-medium ${
                    r.dochital ? "text-neutral-900" : "text-neutral-400"
                  }`}
                >
                  {r.dochital ? "✓ Дочитал" : "✗ Не дочитал"}
                </span>
                <span className="text-xs text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  Читать →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
