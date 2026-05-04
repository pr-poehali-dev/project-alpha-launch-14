const items = [
  {
    emoji: "🤝",
    title: "Нативная интеграция",
    subtitle: "с издательствами",
    desc: "Обзор новинки с пометкой «партнёрский материал». Честно — потому что иначе мы не умеем.",
    income: "10–30 тыс. ₽ за пост",
  },
  {
    emoji: "🔗",
    title: "Партнёрка",
    subtitle: "Bookmate / ЛитРес / Читай-город",
    desc: "Аффилированные ссылки «купить эту книгу» прямо из рецензии.",
    income: "5–15% с продажи",
  },
  {
    emoji: "📓",
    title: "Подписка",
    subtitle: "«Свой читательский дневник»",
    desc: "Личный кабинет: сохраняй цитаты, ставь статусы, веди список «прочитано / брошено».",
    income: "149 ₽/мес",
  },
  {
    emoji: "📰",
    title: "Печатный журнал",
    subtitle: "раз в квартал",
    desc: "Сборник лучших текстов + иллюстрации. Ограниченный тираж — только для своих.",
    income: "600 ₽ за номер",
  },
  {
    emoji: "🎙️",
    title: "Книжный клуб",
    subtitle: "с приглашёнными авторами",
    desc: "Онлайн-встреча с записью. 50 участников × 300 ₽ = вечер, который окупается.",
    income: "до 15 000 ₽ за встречу",
  },
  {
    emoji: "🛍️",
    title: "Мерч",
    subtitle: "«Я бросил и не жалею»",
    desc: "Кружки, футболки, наклейки. Потому что бросить книгу — это тоже личность.",
    income: "маржа 50–70%",
  },
];

export default function Monetization() {
  return (
    <section className="bg-white py-20 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-xs text-neutral-400 mb-4">Как это работает</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight max-w-xl">
            Зарабатывать<br />на честности.
          </h2>
          <p className="text-neutral-500 text-sm max-w-xs md:text-right leading-relaxed">
            Шесть источников дохода — от партнёрок до мерча. Всё органично вписано в голос проекта.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group border border-neutral-100 p-8 flex flex-col gap-3 hover:border-neutral-900 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div>
                <h3 className="text-neutral-900 font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-neutral-400 text-xs uppercase tracking-wide mt-0.5">{item.subtitle}</p>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-2 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-400">Доход</span>
                <span className="text-sm font-bold text-neutral-900">{item.income}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
