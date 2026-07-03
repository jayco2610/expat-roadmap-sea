const BOT_URL = "https://t.me/expat_roadmap_bot";

const examples = [
  {
    q: "How much does the Thailand DTV visa cost and how long can I stay?",
    a: "The DTV costs 10,000 THB one-time, gives 180 days per entry, and stays valid for 5 years. You'll need proof of remote income…",
  },
  {
    q: "Сколько стоит жизнь в Дананге?",
    a: "Комфортный месяц в Дананге — примерно $700–1,300: аренда 1BR у пляжа $400–600, еда на рынке $1.5–3 за блюдо…",
  },
  {
    q: "Can a foreigner open a bank account in Thailand?",
    a: "Yes, but it depends on your visa and the branch. With a DTV, Bangkok Bank and Kasikorn are the most realistic options…",
  },
];

export function AskBotSection() {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="label-upper text-[#7d8c63]">AI assistant</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              Ask anything about life in SEA
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
              The assistant answers in Telegram, in English or Russian, using our
              own 2026 guides — not the open internet. Visas, money, housing,
              daily life.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center"
              >
                Try the bot free
              </a>
              <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
                5 free questions a day · Pro in Telegram
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {examples.map((ex) => (
              <div key={ex.q}>
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[#7d8c63] px-4 py-2.5 text-sm leading-relaxed text-white">
                  {ex.q}
                </div>
                <div className="mt-2 w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-[#f5f5f7] px-4 py-2.5 text-sm leading-relaxed text-[#3d3d3f] dark:bg-[#2c2c2e] dark:text-[#c7c7cc]">
                  {ex.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
