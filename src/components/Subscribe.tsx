import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

const SUBSCRIBE_URL = "https://functions.poehali.dev/80164817-a843-4747-8d41-bc901438781c";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");
  const { ref, isInView } = useReveal();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else if (res.status === 409) setStatus("duplicate");
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="subscribe" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="uppercase tracking-widest text-xs text-neutral-500 mb-4"
        >
          Рассылка
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.07 }}
          className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight"
        >
          Раз в неделю — одна книга.<br />Без занудства.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.14 }}
          className="text-neutral-600 mb-10 text-lg"
        >
          Короткая рецензия на почту. Иногда смешно, иногда до слёз. Всегда честно.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              className="text-neutral-900 text-xl font-medium py-4"
            >
              Отлично! Ждите письмо 📬
            </motion.div>
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
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="bg-neutral-900 text-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-neutral-700 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? "..." : "Подписаться"}
              </motion.button>
            </form>
          )}
          {status === "duplicate" && <p className="mt-3 text-neutral-500 text-sm">Этот email уже подписан — вы молодец!</p>}
          {status === "error" && <p className="mt-3 text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>}
        </motion.div>
      </div>
    </section>
  );
}
