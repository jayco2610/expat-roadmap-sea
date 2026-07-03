// Per-guide SEO extras kept out of guides.ts: language alternates (hreflang)
// and FAQ blocks (rendered + FAQPage JSON-LD). Answers must restate what the
// guide body already says — never introduce facts that aren't in the guide.

export const guideAlternates: Record<string, string> = {
  // EN ↔ RU pair for the Thailand DTV guide
  "thailand-digital-nomad-visa-2026": "thailand-dtv-visa-dlya-frilanserov-2026",
  "thailand-dtv-visa-dlya-frilanserov-2026": "thailand-digital-nomad-visa-2026",
};

export type GuideFaq = { q: string; a: string };

export const guideFaqs: Record<string, GuideFaq[]> = {
  "thailand-digital-nomad-visa-2026": [
    {
      q: "How much does the Thailand DTV visa cost?",
      a: "The DTV costs 10,000 THB as a one-time fee. The visa is then valid for 5 years, with stays of up to 180 days per entry.",
    },
    {
      q: "How long can I stay in Thailand on the DTV?",
      a: "Each entry gives you 180 days. After that you can do a border run and re-enter for another 180 days, or extend once inside Thailand for 1,900 THB for up to 180 additional days.",
    },
    {
      q: "Can I apply for the DTV inside Thailand?",
      a: "No. You must apply at a Thai consulate or embassy outside the country. Popular application points for nomads are Penang, Kuala Lumpur, and Singapore.",
    },
    {
      q: "Do I become a Thai tax resident on the DTV?",
      a: "Staying in Thailand more than 180 days in a calendar year makes you a Thai tax resident. Since 2024, foreign-sourced income brought into Thailand may be taxed at 5–35% depending on income.",
    },
    {
      q: "What documents do I need for the DTV?",
      a: "Proof of remote work or freelance income and savings of roughly $14k, plus standard documents like a passport and photos. Some consulates ask for extra documents, so check your local Thai consulate's list before applying.",
    },
  ],
  "thailand-dtv-visa-dlya-frilanserov-2026": [
    {
      q: "Сколько стоит виза DTV в Таиланд?",
      a: "DTV стоит 10 000 бат единоразово. Виза действует 5 лет, каждый въезд даёт до 180 дней пребывания.",
    },
    {
      q: "Сколько можно находиться в Таиланде по DTV?",
      a: "180 дней за въезд. Дальше — виза-ран в соседнюю страну и новый въезд ещё на 180 дней, либо продление внутри страны за 1 900 бат ещё до 180 дней.",
    },
    {
      q: "Можно ли оформить DTV, находясь в Таиланде?",
      a: "Нет. Подаваться нужно в тайском консульстве за пределами страны. Популярные точки подачи: Пенанг, Куала-Лумпур, Сингапур.",
    },
    {
      q: "Стану ли я налоговым резидентом Таиланда?",
      a: "Пребывание в Таиланде больше 180 дней в календарном году делает вас налоговым резидентом. С 2024 года иностранный доход, ввезённый в Таиланд, может облагаться налогом 5–35%.",
    },
  ],
  "indonesia-bali-e33g-remote-worker-visa-2026": [
    {
      q: "What is the income requirement for the Bali E33G visa?",
      a: "The E33G Remote Worker Visa requires proof of $60,000 per year in income and a letter from your employer.",
    },
    {
      q: "How long is the E33G valid?",
      a: "The E33G gives you 6 months in Indonesia. For longer stays, the KITAS is the 1-year renewable option, usually arranged through an agent.",
    },
    {
      q: "Can I just use a visa on arrival in Bali?",
      a: "Yes — the visa on arrival costs about $35 and gives 30 days, extendable once for another 30. Most short-stay nomads cycle VOA + extension, which means leaving the country every 60 days.",
    },
  ],
  "malaysia-de-rantau-nomad-pass-2026": [
    {
      q: "What income do I need for the DE Rantau Nomad Pass?",
      a: "For digital and IT work the requirement is $24,000 USD per year — far lower than Indonesia's $60,000 for the E33G.",
    },
    {
      q: "How long can I stay in Malaysia on DE Rantau?",
      a: "12 months, renewable for another 12 — up to 24 months total.",
    },
    {
      q: "Do I need to visit a consulate to apply?",
      a: "No. The application is fully online at derantau.mdec.com.my, with processing in about 2 weeks. Approval does not require a consulate visit.",
    },
  ],
  "philippines-digital-nomad-guide-2026": [
    {
      q: "Does the Philippines have a digital nomad visa?",
      a: "Yes — Executive Order No. 86 (2025) created the framework for it: up to 12 months of stay, renewable for another 12. The program is still being rolled out, so confirm application details with the Department of Foreign Affairs or a Philippine embassy.",
    },
    {
      q: "What income do I need for the Philippines digital nomad visa?",
      a: "Around $24,000 per year (about $2,000/month) from remote work for clients or employers outside the Philippines, documented with bank statements and contracts.",
    },
    {
      q: "Can I stay in the Philippines long-term without the nomad visa?",
      a: "Yes. Most nationalities enter visa-free for 30 days and then chain extensions at Bureau of Immigration offices — one of the most extendable tourist regimes in Asia. Local employment is never allowed on tourist status.",
    },
    {
      q: "Is the internet good enough for remote work in the Philippines?",
      a: "In Manila and Cebu — yes, fiber handles video calls reliably. On islands like Siargao it is a mix of fiber, LTE, and Starlink, with occasional power cuts.",
    },
  ],
  "vietnam-remote-work-visa-2026": [
    {
      q: "Does Vietnam have a digital nomad visa?",
      a: "No. Vietnam has no dedicated nomad visa. Most remote workers use the 90-day e-visa ($25, online, approval in about 3 business days) and re-enter after each period.",
    },
    {
      q: "How do I stay in Vietnam longer than 90 days?",
      a: "You exit and re-enter on a new e-visa, or get a Temporary Residence Card (1–2 years) — which requires a sponsor such as an employer or a locally-registered company.",
    },
  ],
};
