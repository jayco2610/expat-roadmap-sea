export type GuideSection = {
  heading: string;
  body: string;
};

export type Guide = {
  slug: string;
  lang: "en" | "ru";
  country: string;
  title: string;
  description: string;
  updatedAt: string;
  readingTime: number;
  tags: string[];
  sections: GuideSection[];
  cta: {
    text: string;
    href: string;
    label: string;
  };
};

export const guides: Guide[] = [
  {
    slug: "thailand-digital-nomad-visa-2026",
    lang: "en",
    country: "Thailand",
    title: "Thailand Digital Nomad Visa 2026: Complete Guide",
    description:
      "Everything you need to know about Thailand's Destination Thailand Visa (DTV) — cost, documents, validity, and how to apply step by step.",
    updatedAt: "2026-06-20",
    readingTime: 8,
    tags: ["Thailand", "visa", "digital nomad", "DTV", "2026"],
    sections: [
      {
        heading: "What is the DTV?",
        body: `The Destination Thailand Visa (DTV) is Thailand's official long-stay visa for remote workers, freelancers, and digital nomads. It was launched in 2024 and replaced the informal "visa run" cycle that nomads had relied on for years.

The DTV lets you live in Thailand for up to 180 days per entry, with a total validity of 5 years. You can re-enter multiple times within that window.`,
      },
      {
        heading: "Who qualifies?",
        body: `You qualify if you meet at least one of these:

- You work remotely for a company outside Thailand
- You are a freelancer with clients outside Thailand
- You are a digital content creator with an online income
- You are enrolled in a course at a Thai institution (soft qualification)

Thailand does not require you to earn above a specific income threshold for the DTV, unlike some other digital nomad visas. A bank statement showing financial stability is sufficient.`,
      },
      {
        heading: "Cost and fees",
        body: `DTV application fee: 10,000 THB (approximately $275 USD) per application.

This covers:
- Initial 180-day stay
- Multiple re-entries over 5 years
- One extension of 180 days possible inside Thailand at your local immigration office (fee: 1,900 THB)

There are no annual renewal fees. The 5-year validity is the full window.`,
      },
      {
        heading: "Required documents",
        body: `Standard document checklist:

1. Valid passport (minimum 18 months remaining validity)
2. Completed DTV application form (available at Thai consulates)
3. Passport-sized photo (4×6 cm, white background)
4. Proof of remote work or freelance income — any of:
   - Employment letter from your company confirming remote work
   - Freelance contracts with clients
   - Bank statements (last 3–6 months)
   - Screenshots of your online income platform (Upwork, Toptal, etc.)
5. Proof of accommodation in Thailand — booking or rental agreement
6. Travel insurance with minimum $50,000 coverage valid for Thailand
7. Round-trip or onward flight ticket (or a letter explaining you travel flexibly)

Some consulates ask for additional documents. Always check the specific requirements of the Thai consulate in your country before applying.`,
      },
      {
        heading: "Where to apply",
        body: `Apply at a Thai consulate or embassy in your home country before traveling.

You cannot apply for the DTV on arrival or convert a tourist visa to a DTV inside Thailand. You must apply from outside the country.

Popular application points for digital nomads:
- Penang, Malaysia — fast processing, popular among nomads in SEA already
- Kuala Lumpur, Malaysia — straightforward, results in 3–5 days
- Singapore — efficient but slightly more documentation required
- European consulates — 5–10 business days typical

Processing time: 3 to 10 business days depending on location.`,
      },
      {
        heading: "How long can you stay?",
        body: `Each entry: 180 days.

After 180 days you must exit Thailand (a quick border run to Malaysia, Cambodia, or Laos works). You can then re-enter and receive another 180-day stay. This resets with each entry.

You can also extend your stay without leaving: go to your local Immigration Office inside Thailand and pay 1,900 THB for an extension of up to 180 additional days.

The total DTV is valid for 5 years from the date of issue. After 5 years, you apply again.`,
      },
      {
        heading: "Tax situation",
        body: `Important: staying in Thailand for more than 180 days in a calendar year makes you a Thai tax resident.

As of 2024, Thailand updated its tax rules. Foreign-sourced income brought into Thailand may be subject to Thai income tax if you are a tax resident. The rate is 5–35% depending on income.

This applies to income transferred into Thai bank accounts or used to purchase goods and services in Thailand.

If you earn and spend outside Thailand, the rules are less clear. Consult a tax professional if you plan to spend more than 180 days per year and bring income into the country.`,
      },
      {
        heading: "Practical tips from the community",
        body: `— Penang is the most popular DTV run for nomads already in SEA. The Thai consulate there is experienced with DTV applications and processes them quickly.

— Bring physical copies of all documents. Some consulates do not accept digital copies.

— Travel insurance must show Thailand explicitly in the coverage area. Generic "worldwide" policies have been rejected at some consulates.

— Get more bank statement months than required. If you show 6 months when 3 are asked, you reduce the chance of requests for additional documents.

— Book a real hotel for your initial stay. Short-term Airbnb bookings have worked, but a hotel confirmation letter is cleaner.`,
      },
    ],
    cta: {
      text: "Questions about the DTV or living in Thailand? Join the community and ask someone who's already done it.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "thailand-dtv-visa-dlya-frilanserov-2026",
    lang: "ru",
    country: "Таиланд",
    title: "Виза в Таиланд для фрилансеров 2026: полный разбор DTV",
    description:
      "Как получить Destination Thailand Visa для удалённой работы — документы, стоимость, сроки, налоги и практика от тех, кто уже оформил.",
    updatedAt: "2026-06-20",
    readingTime: 9,
    tags: ["Таиланд", "виза", "фриланс", "DTV", "цифровой кочевник", "2026"],
    sections: [
      {
        heading: "Что такое DTV",
        body: `Destination Thailand Visa (DTV) — официальная виза Таиланда для удалённых сотрудников, фрилансеров и цифровых кочевников. Запущена в 2024 году.

DTV даёт право находиться в Таиланде до 180 дней за один въезд в течение 5 лет. Въезжать можно сколько угодно раз в пределах этого срока.

Это замена устаревшей схеме "визаранов", когда раз в 30–60 дней нужно было выезжать в Малайзию или Камбоджу за новым штампом.`,
      },
      {
        heading: "Кому подходит",
        body: `Вы подходите под условия DTV, если:

- Работаете удалённо на иностранную компанию
- Работаете фрилансером с клиентами за пределами Таиланда
- Создаёте контент с онлайн-доходом (YouTube, Patreon, Substack и т.д.)
- Учитесь в тайском учебном заведении

Минимального порога дохода нет — достаточно выписки из банка, которая показывает финансовую стабильность.`,
      },
      {
        heading: "Стоимость и сборы",
        body: `Сбор за DTV: 10 000 THB (примерно 275 USD / 25 000 RUB по курсу 2026 года).

Что входит:
- Первый въезд на 180 дней
- Многократные въезды в течение 5 лет
- Возможность продления на 180 дней внутри Таиланда (сбор 1 900 THB в иммиграционном офисе)

Ежегодных взносов нет. Срок действия — 5 лет от даты выдачи.`,
      },
      {
        heading: "Необходимые документы",
        body: `Стандартный список документов:

1. Загранпаспорт (срок действия — не менее 18 месяцев)
2. Заполненная анкета DTV (выдаётся в тайском консульстве)
3. Фото 4×6 см на белом фоне
4. Подтверждение удалённой работы или фриланса — на выбор:
   - Письмо от работодателя с подтверждением удалённого формата
   - Договоры с клиентами-фрилансерами
   - Выписки из банка за 3–6 месяцев
   - Скриншоты дохода с платформ (Upwork, Toptal и т.д.)
5. Подтверждение проживания в Таиланде — бронь отеля или договор аренды
6. Медицинская страховка с покрытием от 50 000 USD, действующая в Таиланде
7. Билеты туда-обратно или объяснительное письмо при гибком маршруте

Разные консульства могут запросить дополнительные документы — уточняйте на сайте тайского консульства в вашей стране.`,
      },
      {
        heading: "Где подавать документы",
        body: `Документы подаются в тайском консульстве или посольстве за пределами Таиланда, до поездки.

Получить DTV по прибытии или конвертировать туристическую визу в DTV внутри страны нельзя.

Популярные точки для жителей СНГ и тех, кто уже в ЮВА:
- Пенанг, Малайзия — самый популярный вариант среди номадов в регионе, опытное консульство, быстрое рассмотрение
- Куала-Лумпур, Малайзия — 3–5 дней, стандартный пакет документов
- Консульства в России — Москва, Санкт-Петербург (уточняйте текущий режим работы)
- Тбилиси, Грузия — активно используют россияне, живущие в Грузии

Срок рассмотрения: 3–10 рабочих дней в зависимости от консульства.`,
      },
      {
        heading: "Сколько можно находиться",
        body: `Один въезд: до 180 дней.

После 180 дней нужно выехать из Таиланда — граница с Малайзией, Камбоджей или Лаосом в рамках короткой поездки. После въезда снова получаете 180 дней.

Альтернатива: продление без выезда. В местном иммиграционном офисе можно продлить пребывание ещё на 180 дней за 1 900 THB — без необходимости выезжать.

Виза действует 5 лет с момента выдачи.`,
      },
      {
        heading: "Налоги — важно знать",
        body: `Если вы находитесь в Таиланде более 180 дней в календарном году, вы становитесь налоговым резидентом Таиланда.

С 2024 года Таиланд изменил налоговые правила: иностранный доход, переводимый в Таиланд или используемый там, может облагаться тайским подоходным налогом по ставке 5–35%.

Если доход поступает и расходуется за пределами Таиланда — правила менее строгие, но ситуация развивается. Рекомендуем проконсультироваться с налоговым специалистом, знакомым с тайским законодательством.`,
      },
      {
        heading: "Практика от тех, кто уже получил",
        body: `— Пенанг — лучший вариант для тех, кто уже в Юго-Восточной Азии. Консульство в Пенанге работает с DTV постоянно и хорошо знает процесс.

— Берите физические копии всех документов. Некоторые консульства не принимают цифровые.

— Страховка должна явно указывать Таиланд в зоне покрытия. Формулировка "весь мир" иногда отклоняется.

— Выписку из банка лучше брать за 6 месяцев, даже если просят 3 — снижает риск запроса дополнительных документов.

— Для подтверждения жилья подходит бронь отеля. С Airbnb тоже принимают, но письмо от отеля выглядит надёжнее.`,
      },
    ],
    cta: {
      text: "Есть вопросы по визе или жизни в Таиланде? Задайте в сообществе — там найдётся тот, кто уже через это прошёл.",
      href: "/community",
      label: "Перейти в сообщество",
    },
  },
  {
    slug: "vietnam-remote-work-visa-2026",
    lang: "en",
    country: "Vietnam",
    title: "Vietnam for Digital Nomads 2026: Visa Options & Setup",
    description:
      "Vietnam has no dedicated digital nomad visa yet. Here are the real, working options in 2026 — the 90-day e-visa, temporary residence cards, costs, and the legal grey zone.",
    updatedAt: "2026-06-21",
    readingTime: 7,
    tags: ["Vietnam", "visa", "digital nomad", "e-visa", "Da Nang", "2026"],
    sections: [
      {
        heading: "There is no dedicated nomad visa (yet)",
        body: `As of 2026, Vietnam does not offer a standalone digital nomad visa. This surprises a lot of people, because cities like Da Nang and Ho Chi Minh City are full of remote workers.

What people actually use is the 90-day multiple-entry e-visa. It is the most practical legal option for staying several months at a time, and it is fast and cheap compared to other countries in the region.`,
      },
      {
        heading: "The e-visa — your main option",
        body: `Vietnam's e-visa is applied for fully online, no consulate visit needed.

- Single-entry e-visa: $25 (about 625,000 VND)
- Multiple-entry e-visa: $50 (about 1,250,000 VND), valid up to 90 days
- Processing: 3–7 business days; urgent service (1–2 days) for an extra $10–$50

Citizens of many countries also get 14–45 days visa-free, but for a real stay the 90-day multiple-entry e-visa is what most nomads choose.`,
      },
      {
        heading: "Temporary Residence Card (TRC)",
        body: `If you want to stay longer than 90 days at a time, the path is a Temporary Residence Card. The catch: it normally requires a work permit tied to a Vietnamese company or a family/investment basis.

- TRC is issued at the Provincial Immigration Department
- Processing: 5–7 working days after the work permit is issued
- Fees typically range from $100 to $300 depending on type and duration

For a pure remote worker with no local employer, the TRC is hard to get directly. Most long-stayers rotate e-visas instead.`,
      },
      {
        heading: "The legal grey zone — read this",
        body: `Be honest with yourself about the rules. Article 8.2 of Vietnam's 2014 Law on Entry, Exit, Transit and Residence bars foreigners on tourist visas from "labour activities."

Ho Chi Minh City's Department of Labour has classified working online while on a tourist visa as illegal employment, with administrative fines of 15–25 million VND ($600–$1,000).

In practice, enforcement against quiet remote workers is rare. But it is a real law, not a myth. Know the risk you are taking, especially if you plan to stay long term or work with any local clients.`,
      },
      {
        heading: "Cost of living reality",
        body: `Vietnam is one of the cheapest bases in Southeast Asia. Da Nang in particular has become a nomad favorite: beach, fast internet, and low prices.

Rough monthly budget for a comfortable solo nomad in Da Nang:
- Apartment (1BR, decent area): $350–$600
- Coworking: $80–$120
- Food (mix of local and Western): $300–$450
- Transport (motorbike rental + fuel): $60–$90

A comfortable life runs $850–$1,200/month. Living more local brings it well under $800.`,
      },
      {
        heading: "Practical tips",
        body: `— Apply for the e-visa on the official government portal, not a lookalike agency site. Many third-party sites charge 3–5x the real fee.

— Da Nang is the easiest soft landing: smaller, cleaner, and cheaper than HCMC, with a strong nomad community.

— Keep your work quiet and your clients foreign. Do not take on Vietnamese clients on a tourist/e-visa.

— Border runs to Laos, Cambodia, or a quick flight to Bangkok reset your stay cleanly.

— Get a local SIM (Viettel or Mobifone) on arrival — cheap data, works almost everywhere.`,
      },
    ],
    cta: {
      text: "Already in Da Nang or planning the move? Ask someone in the community who's living there now.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "indonesia-bali-e33g-remote-worker-visa-2026",
    lang: "en",
    country: "Indonesia",
    title: "Bali Remote Worker Visa (E33G) 2026: Complete Guide",
    description:
      "Indonesia's E33G remote worker KITAS lets you live in Bali for a year legally. Here are the income requirements, real costs, the $60K rule, and the tax traps.",
    updatedAt: "2026-06-21",
    readingTime: 8,
    tags: ["Indonesia", "Bali", "visa", "E33G", "KITAS", "digital nomad", "2026"],
    sections: [
      {
        heading: "What is the E33G?",
        body: `The E33G is Indonesia's Remote Worker Visa — a type of KITAS (temporary stay permit) created specifically for people who work for companies registered outside Indonesia.

It is the closest thing Indonesia has to a real digital nomad visa, and it finally lets remote workers live in Bali legally for a full year instead of cycling tourist visas.`,
      },
      {
        heading: "Income requirement — the $60K rule",
        body: `This is the part that filters most people out.

- You must show an annual income of at least $60,000 USD (or local-currency equivalent)
- You need a personal bank balance of at least $2,000 USD, shown over the last 3 months of statements

The income proof usually comes from salary statements plus your employment contract. If you earn under $60K/year, the E33G is not an option — a regular tourist or B211A visa is your fallback.`,
      },
      {
        heading: "Cost and timeline",
        body: `Realistic total budget through a licensed agent:

- Official visa fee: roughly $150–$300 depending on permit type
- Agent service fee: 8–15 million IDR (about $500–$950) depending on complexity
- Onshore processing: around 30 days

You can apply onshore (already in Indonesia) or offshore. Onshore E33G runs about 15 million IDR all-in and takes roughly a month.`,
      },
      {
        heading: "The hard rules",
        body: `Two non-negotiable conditions:

1. You must have an employment contract with an organization registered OUTSIDE Indonesia (company, NGO, or government body).

2. You strictly cannot work for, get paid by, or provide paid services to Indonesian companies or Indonesian clients.

Break the second rule and you are working illegally, regardless of the E33G. The visa is for foreign income only.`,
      },
      {
        heading: "Duration and renewal",
        body: `The E33G is issued for up to one year.

Important: it is NOT automatically renewable. When it approaches expiry, you apply for a brand-new E33G from scratch — fresh documents, fresh proof of employment, fresh proof of income.

Plan for that. Keep your income documentation organized so re-applying is painless.`,
      },
      {
        heading: "Tax traps to know",
        body: `Spending most of the year in Indonesia can make you an Indonesian tax resident (generally 183+ days in a 12-month period).

Tax residents can be liable for Indonesian income tax on worldwide income, with rates that climb to 35%. The E33G being a "remote worker" permit does not automatically exempt you.

This is the most overlooked part of the E33G. If you plan to stay the full year, talk to an Indonesian tax advisor before you assume you owe nothing.`,
      },
      {
        heading: "Practical tips",
        body: `— Use a licensed, reputable agent. Bali is full of visa agents; quality varies a lot. Ask for their license and recent client references.

— Canggu and Ubud are the two main nomad hubs. Canggu for beach + cafes + nightlife, Ubud for quiet, nature, and yoga.

— Keep clean PDF copies of 3+ months of bank statements and your employment contract ready before you start.

— Budget realistically: Bali is cheap day-to-day, but the E33G itself plus a year of nicer Canggu housing is not.`,
      },
    ],
    cta: {
      text: "Thinking about Bali? Ask someone in the community who's already on an E33G how it really went.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "malaysia-de-rantau-nomad-pass-2026",
    lang: "en",
    country: "Malaysia",
    title: "Malaysia DE Rantau Nomad Pass 2026: Complete Guide",
    description:
      "Malaysia's DE Rantau Nomad Pass is one of the most accessible nomad visas in Asia — lower income bar, English everywhere, and up to 24 months. Full breakdown.",
    updatedAt: "2026-06-21",
    readingTime: 7,
    tags: ["Malaysia", "visa", "DE Rantau", "digital nomad", "Kuala Lumpur", "2026"],
    sections: [
      {
        heading: "What is the DE Rantau Nomad Pass?",
        body: `DE Rantau is Malaysia's official digital nomad programme, built to make the country a regional hub for location-independent professionals.

It is one of the most accessible nomad visas in Asia: the income bar is lower than Indonesia's, English is spoken everywhere, and Kuala Lumpur offers big-city infrastructure at a fraction of Singapore's cost.`,
      },
      {
        heading: "Income requirement",
        body: `The bar depends on your profession:

- Digital / IT roles: $24,000 USD per year
- Other professional fields: $60,000 USD per year

The programme started tech-focused but has expanded to non-tech professionals, as long as you meet the income threshold. The $24K tier for digital/IT work is what makes DE Rantau realistic for many freelancers and remote employees.`,
      },
      {
        heading: "Duration",
        body: `The pass is issued for up to 12 months initially, renewable for another 12 — so up to 24 months total.

That is a genuinely long runway compared to the 90-day cycles elsewhere in the region, and the renewal path is built into the programme rather than requiring a full restart.`,
      },
      {
        heading: "Cost and fees",
        body: `DE Rantau is cheap by nomad-visa standards:

- Principal applicant: about MYR 1,060 (~$225 USD)
- Each dependent family member: about MYR 500 (~$110 USD)

That makes it one of the most affordable options for bringing a partner or family along.`,
      },
      {
        heading: "Who qualifies",
        body: `DE Rantau is for location-independent professionals earning income from OUTSIDE Malaysia:

- Remote employees
- Freelancers
- Self-employed professionals in digital or professional fields

The pass does not allow you to work for Malaysian companies or earn income from Malaysian sources. As with the rest of the region, it is a foreign-income visa.`,
      },
      {
        heading: "How to apply and timeline",
        body: `Applications go through the official DE Rantau portal run by MDEC (Malaysia Digital Economy Corporation).

- Submit income proof, passport, employment/freelance documentation online
- Processing typically takes up to 4 weeks, with most approvals in 2–3 weeks

Once approved, you complete the endorsement and can enter on the pass. The fully-online front end makes it one of the smoother applications in the region.`,
      },
      {
        heading: "Practical tips",
        body: `— Kuala Lumpur is the obvious base: world-class infrastructure, fast internet, huge food scene, and very low cost for a capital city. Penang is the laid-back alternative with great food and a coastal feel.

— The $24K digital/IT tier is the key. If your work is digital, document it clearly to qualify under the lower threshold.

— English is an official working language — paperwork, banking, and daily life are all far easier than in Thailand, Vietnam, or Indonesia.

— Malaysia is a strong "first base" for nomads new to Asia: easy visa, easy language, central flights to the whole region.`,
      },
    ],
    cta: {
      text: "Considering KL or Penang on DE Rantau? Ask the community how the application and life there actually compare.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCountry(country: string): Guide[] {
  return guides.filter((g) => g.country === country);
}
