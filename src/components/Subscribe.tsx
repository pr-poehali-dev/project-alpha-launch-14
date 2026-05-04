import { useState } from "react";

const SUBSCRIBE_URL = "https://functions.poehali.dev/80164817-a843-4747-8d41-bc901438781c";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="subscribe" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="uppercase tracking-widest text-xs text-neutral-500 mb-4">Рассылка</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Раз в неделю — одна книга.<br />Без занудства.
        </h2>
        <p className="text-neutral-600 mb-10 text-lg">
          Короткая рецензия на почту. Иногда смешно, иногда до слёз. Всегда честно.
        </p>

        {status === "success" ? (
          <div className="text-neutral-900 text-xl font-medium py-4">
            Отлично! Ждите письмо 📬
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ваш@email.ru"
              className="flex-1 border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-neutral-900 text-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-neutral-700 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {status === "loading" ? "..." : "Подписаться"}
            </button>
          </form>
        )}

        {status === "duplicate" && (
          <p className="mt-3 text-neutral-500 text-sm">Этот email уже подписан — вы молодец!</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
        )}
      </div>
    </section>
  );
}