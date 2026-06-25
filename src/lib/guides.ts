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
  {
    slug: "sri-lanka-expat-guide-2026",
    lang: "ru",
    country: "Шри-Ланка",
    title: "Шри-Ланка для экспатов 2026: визы, районы, реальная жизнь",
    description:
      "ETA, продление, районы (Гале, Хиккадува, Велигама, Бинтота), депозиты, плесень в сезон — всё что нужно знать до переезда. Без воды.",
    updatedAt: "2026-06-25",
    readingTime: 9,
    tags: ["Шри-Ланка", "ETA", "виза", "Гале", "Хиккадува", "экспат", "2026"],
    sections: [
      {
        heading: "Виза — ETA",
        body: `ETA (Electronic Travel Authorization) — основная виза для большинства экспатов на Шри-Ланке. Оформляется онлайн до вылета.

Стоимость: $50 на 30 дней, двукратный въезд.

Продление: внутри страны в иммиграционном офисе — ещё на 60 дней (итого 90 дней). Стоимость продления около $40–60.

Подавать только на официальном сайте: eta.gov.lk. Агентские сайты-клоны берут x2–3 цены за то же самое.

Долгосрочные варианты: резидентская виза через Board of Investment для инвесторов, пенсионная виза (RES) от $2000/год депозита в местном банке. Для обычного номада — ETA + продление, повторяется каждые 3 месяца.`,
      },
      {
        heading: "Районы: где жить",
        body: `Шри-Ланка небольшая, но районы очень разные по атмосфере.

**Гале (Galle)** — столица экспатов. Самая большая русскоязычная тусовка на острове. Старый форт, кафе, рестораны, Sea Fair (магазин с русскими продуктами — творог, хлеб, крупы). Минус: в сезон дождей (ноябрь–февраль) в плохих квартирах появляется плесень.

**Хиккадува (Hikkaduwa)** — расслабленно и дёшево, атмосфера как в Анапе. Серфинг, много русских, несложная жизнь. Хорошо для первого раза.

**Велигама (Weligama)** — тише чем Хиккадува, хороший серфинг. Там оседают те, кто хочет работать, а не тусить.

**Бинтота (Bentota)** — очень тихо, почти без движения. Подойдёт пенсионерам или тем кто хочет полную изоляцию. Не для активных номадов.

**Коломбо** — столица. Дороже, но там банки, визовые офисы, нормальный интернет, английский везде. Удобно для решения бюрократических вопросов.`,
      },
      {
        heading: "Сезоны — важно до выбора района",
        body: `На Шри-Ланке два разных сезона дождей в разных частях острова.

Ноябрь–февраль: дожди на юго-западном побережье (Гале, Хиккадува, Велигама). В квартирах с плохой вентиляцией появляется плесень. Всегда проверяй углы, ванную и под кроватью до того как подписал договор.

Май–октябрь: дожди на севере и востоке. Юго-запад в это время сухой и солнечный — лучший период для Гале и Хиккадувы.

Если хочешь избежать дождей — следи за сезоном по нужному берегу, а не по общим датам.`,
      },
      {
        heading: "Жильё: как снять и что знать про депозиты",
        body: `Снять жильё сложнее чем в Таиланде или Вьетнаме — меньше английского у хозяев, меньше онлайн-листингов.

Где искать:
- Facebook-группы: "Sri Lanka Expats", "Galle Expats", "Rent in Galle", "Hikkaduwa Expats"
- Booking.com на первые 1–2 недели пока смотришь варианты вживую
- Местные хозяева общаются через WhatsApp или Viber — нужна местная SIM

Нужна SIM-карта: Dialog или Mobitel, купить прямо в аэропорту. Без местного номера не выйдет связаться с хозяевами.

Про депозиты — честно: возвращают редко, особенно иностранцам. Это не закон и не норма, просто реальность. Не оставляй больше чем готов потерять. Снимай на короткий срок пока не убедишься в хозяине.

Договор: многие хозяева сдают без письменного договора. Юридически ты не защищён. Если хочешь официально — требуй договор с подписью и печатью.`,
      },
      {
        heading: "Еда и быт",
        body: `Где найти русские продукты в Гале: магазин Sea Fair — там творог, сметана, хлеб, крупы. Небольшой, гуглится плохо — адрес лучше спросить в местных чатах или у других экспатов.

Местная еда дешёвая и вкусная. Рис с карри — основа, везде от $1–2. В Гале и Коломбо много кафе с европейской едой.

Интернет: стабильный в Коломбо и туристических зонах. В глухих местах — нестабильный. Dialog 4G работает в большинстве популярных районов.

Деньги: банкоматы есть везде, но часто берут комиссию. Карта Wise — лучший вариант для конвертации. Наличные рупии удобнее для местных рынков и транспорта.`,
      },
      {
        heading: "Плюсы и минусы для экспата",
        body: `Плюсы:
- Очень дёшево. Комфортная жизнь от $700–900/месяц
- Красиво и разнообразно: океан, горы, джунгли, чайные плантации
- Местные в туристических районах добродушные
- Visa-run не нужен — продление делается внутри страны
- Сильное русское комьюнити в Гале и Хиккадуве

Минусы:
- Депозиты часто не возвращают
- Интернет нестабильный за пределами городов
- Жара и влажность круглый год — привыкаешь не сразу
- Мало онлайн-инфраструктуры (мало листингов жилья онлайн, нужна местная SIM)
- Плесень в дешёвых квартирах в сезон дождей`,
      },
    ],
    cta: {
      text: "Есть вопросы по Шри-Ланке — по визе, районам или жилью? Спроси в боте или в сообществе.",
      href: "/community",
      label: "Перейти в сообщество",
    },
  },
  {
    slug: "chiang-mai-digital-nomad-guide-2026",
    lang: "en",
    country: "Thailand",
    title: "Chiang Mai for Digital Nomads 2026: Neighborhoods, Costs & Real Warnings",
    description:
      "Chiang Mai is still the best value nomad hub in Asia — but the smoke season and 90-day reporting trip people up. Full breakdown with real numbers.",
    updatedAt: "2026-06-25",
    readingTime: 9,
    tags: ["Thailand", "Chiang Mai", "digital nomad", "cost of living", "neighborhoods", "2026"],
    sections: [
      {
        heading: "Why Chiang Mai still wins",
        body: `Chiang Mai has led quality-adjusted nomad rankings for years and still does in 2026. Mountains, temples, $2 street food, and fiber internet at $25/month. It is not Bangkok — it is quieter, cooler, and much cheaper.

The nomad community here is large enough that you can show up without knowing anyone and be fully plugged in within a week. The downside: it can feel like a bubble. Mostly expats, mostly nomads, limited depth with locals unless you make effort.`,
      },
      {
        heading: "Neighborhoods — where to actually live",
        body: `**Nimmanhaemin (Nimman)** is the nomad core. Craft coffee shops with 200 Mbps, coworking spaces, Western restaurants, boutique gyms. Rent for a furnished 1BR: $350–550/month. Most convenient, most expensive, most social.

**Old City** sits inside the moat. More temples, more character, slightly cheaper at $250–400/month. Good if you want atmosphere over nightlife. Punspace coworking has a branch here.

**Santitham** is north of center, quieter, mostly local with some expat spillover. Cheapest of the three at $200–350/month. You need a scooter or Grab for everything.

Tip from people who live there: many of the best apartments never get listed online. Walk into condo buildings directly and ask the management desk. This alone saves 20–30% vs. booking platforms.`,
      },
      {
        heading: "Real costs (2026)",
        body: `Monthly budget, comfortable solo nomad:

- Rent (furnished 1BR, Nimman): $350–550
- Utilities + internet: $70–125
- Food (mix local + occasional Western): $200–400
- Coworking (Punspace unlimited): $150–250
- Transport (scooter rental + fuel): $100–150
- Healthcare (1–2 private visits): $50–100

Total comfortable range: $1,800–2,500/month. Budget setup under $1,500 is possible with Santitham rent and street food only.

Internet: 300–1,000 Mbps fiber at $20–35/month. Reliable. AIS and True offer 5G mobile backup if you need redundancy.`,
      },
      {
        heading: "The smoke season — this is not a minor inconvenience",
        body: `February through April is burning season. Farmers burn fields across northern Thailand and Myanmar. AQI regularly hits 200+ in Chiang Mai — that is "very unhealthy" on the US scale and some days hit "hazardous."

This is not an abstract warning. People with respiratory conditions get seriously affected. Even healthy people notice it. Many long-term nomads leave Chiang Mai entirely during this period and return in May.

If you are planning to be in Chiang Mai from February to April, either get a good N95 mask and an air purifier for your room, or plan a side trip elsewhere. Bali, Da Nang, or Koh Samui are common escapes.`,
      },
      {
        heading: "90-day reporting — do not forget this",
        body: `Every foreigner in Thailand on a long-stay visa must report to immigration every 90 days. It is called a "90-day notification" and it is mandatory.

Options:
- Do it in person at the Chiang Mai Immigration Office (queues can be 2–4 hours)
- Submit online at immigration.go.th/onlinereport (works about 60% of the time, system is unreliable)
- Hire an agent to do it for you (~500–800 THB)

Miss it: 5,000 THB fine ($140). Not the end of the world, but annoying and avoidable.

Set a phone reminder 7 days before it is due.`,
      },
      {
        heading: "Coworking spaces",
        body: `**Punspace** — the Chiang Mai original. Two locations (Nimman and Old City). Unlimited monthly: 3,500–5,500 THB ($100–165). Reliable internet, good vibe, lots of nomads.

**CAMP** — coffee shop with long tables, open 24/7. Day drop-in, pay for coffee and get a seat. Inconsistent wifi but great atmosphere for a few hours.

**Yellow** — Nimman area, modern, 24/7 access. Monthly around 6,500 THB ($190). Good for people who work irregular hours.

Most apartments in Nimman also have private work nooks or lobbies with decent wifi if you do not need a full coworking setup.`,
      },
      {
        heading: "What people get wrong about Chiang Mai",
        body: `— It can feel socially shallow if you only hang out with other nomads. Worth making effort to get out of the expat circuit.

— The "cheap" is real but not extreme. Budget under $1,200/month requires discipline. Comfortable is $1,800+.

— Seasonality matters: November–February is peak season, Nimman gets crowded and rents spike slightly. June–October is rainy but quieter and cheaper.

— Healthcare is genuinely good and affordable. Chiang Mai Ram and Bangkok Hospital Chiang Mai are English-speaking private hospitals. A specialist visit is $30–50.`,
      },
    ],
    cta: {
      text: "Questions about Chiang Mai or planning a move to Thailand? Ask someone in the community who is already there.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "bali-neighborhoods-guide-2026",
    lang: "en",
    country: "Indonesia",
    title: "Bali Areas Guide 2026: Canggu vs Ubud vs Sanur vs Uluwatu",
    description:
      "Which part of Bali actually fits your life? Honest comparison of the four main nomad zones — costs, vibe, internet, and who each one is really for.",
    updatedAt: "2026-06-25",
    readingTime: 8,
    tags: ["Bali", "Indonesia", "Canggu", "Ubud", "Sanur", "digital nomad", "neighborhoods", "2026"],
    sections: [
      {
        heading: "The short version",
        body: `Canggu: social, expensive, surfy, noisy. Ubud: quiet, cheaper, focused, no beach. Sanur: calm, stable, family. Uluwatu: best waves, isolated, impractical for full-time work.

None is objectively better. They attract different people. Read through and pick the one that matches what you actually want from Bali, not what Instagram says Bali is.`,
      },
      {
        heading: "Canggu — the nomad poster child",
        body: `Canggu is where the largest concentration of remote workers live. The strip around Jl. Batu Bolong has coworking spaces, vegan cafes, CrossFit boxes, rooftop bars, and surf schools within walking distance.

Rent 2026: 1BR villa with pool at 12–18 million rupiah/month ($750–1,100). Shared co-living room from 5 million ($310). Prices rose sharply post-2023 and have not come back down.

Internet: 50–100 Mbps fiber in most places. Reliable enough for video calls. Dojo Bali coworking: 1.8 million rupiah/month (~$110).

The problem: traffic. 4–7 PM on Jl. Batu Bolong and Jl. Pantai Berawa is gridlocked. Do not try to cross town on a scooter during this window. Also the "Canggu bubble" — you can spend months here and barely interact with actual Indonesian culture.

Best for: people who want an active social life, surfing, and maximum nomad infrastructure.`,
      },
      {
        heading: "Ubud — the quiet alternative",
        body: `Ubud is the cultural heart of Bali. Rice paddies, monkey forests, traditional ceremonies, yoga studios every 50 meters. No beach.

Rent: 8–14 million rupiah/month ($500–875) for similar square footage to Canggu — 20–30% cheaper. Internet averages 20–60 Mbps, lower than Canggu but sufficient for standard remote work.

Outpost Ubud coworking: 2 million rupiah/month ($125), includes community dinners and yoga. Hubud is the other anchor space.

The trade-off: to get to a beach you need 1.5–2 hours. If you need beach access regularly, Ubud is the wrong base. If you need to actually focus and get work done without constant social distraction, Ubud is dramatically better.

Best for: freelancers who need deep work time, people into wellness/yoga, those who want lower costs with a cultural experience.`,
      },
      {
        heading: "Sanur — the underrated long-stayer",
        body: `Sanur gets less hype than Canggu or Ubud but consistently ranks high among people who actually stay in Bali for 6+ months. Calmer beach, established infrastructure, a mix of retirees and families alongside younger nomads.

Rents are between Ubud and Canggu. Internet is reliable — often fiber from PLN or Biznet. Less traffic than Canggu.

Best for: people past the "first Bali trip" phase who want to settle, couples, and anyone who values routine and stability over scene.`,
      },
      {
        heading: "Uluwatu — the surf decision",
        body: `Uluwatu has the best waves in Bali. It also has the most dramatic cliffs, sunset spots, and the kind of views that end up in travel magazines.

The practical reality: it is isolated. The nearest proper supermarket is a 30-minute drive. Getting to Canggu or the airport takes 45–75 minutes. Most food options are tourist-price restaurants.

If surfing is the primary reason you are in Bali and you are okay with limited infrastructure and higher food costs, Uluwatu makes sense. For working nomads without surfing as a priority, it does not.`,
      },
      {
        heading: "Monthly costs across areas (2026)",
        body: `Rough monthly budgets for a single person:

**Canggu:** $1,500–3,000
**Ubud:** $900–1,800
**Sanur:** $1,100–2,200
**Uluwatu:** $1,200–2,500 (lower rent, higher food/transport costs)

Most nomads actually spend $900–1,500/month if they avoid the premium beach clubs and Western-price restaurants. Eating at warungs (local restaurants) keeps food at $2–4 per meal.`,
      },
    ],
    cta: {
      text: "Already in Bali or deciding which area to base yourself? Ask someone in the community who has done the comparison firsthand.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "cambodia-phnom-penh-expat-guide-2026",
    lang: "en",
    country: "Cambodia",
    title: "Phnom Penh for Expats 2026: The Cheapest Capital in Southeast Asia",
    description:
      "Cambodia runs on dollars, has no income tax on foreign earnings, and costs half of Bangkok. Here is what the visa situation actually looks like and which neighborhoods work for nomads.",
    updatedAt: "2026-06-25",
    readingTime: 7,
    tags: ["Cambodia", "Phnom Penh", "expat", "digital nomad", "EB visa", "cost of living", "2026"],
    sections: [
      {
        heading: "Why Cambodia is worth considering",
        body: `Phnom Penh is the cheapest capital city in Southeast Asia for expats and it runs entirely on US dollars — no currency conversion needed day-to-day. It does not have the nomad density of Chiang Mai or Bali, which for some people is exactly the point.

The city is developing fast. BKK1 (the main expat district) looks nothing like it did five years ago. Coworking spaces, good coffee, international restaurants, and fiber internet are all present.

The reason Cambodia is not more popular: reputation and infrastructure outside the main zones lag behind Thailand and Vietnam. But for people who want low cost and do not need the full nomad ecosystem, it delivers.`,
      },
      {
        heading: "Visa — no dedicated nomad visa but EB works",
        body: `Cambodia does not offer a specific digital nomad visa. Two real options:

**E-Visa (tourist):** $30, valid 30 days, extendable once for another 30 days ($30–50). Fast to get online at evisa.gov.kh. Fine for short stays.

**EB Business Visa:** $35 initially, renewable inside Cambodia for 1, 3, 6, or 12 months at reasonable cost. Requires $1,000 USD in funds as proof. This is what most long-term expats use — it allows you to live legally and work remotely for foreign employers. Renewals done in-country at the Immigration Department or through a visa agent ($50–100 agent fee).

No minimum income requirement, no remote work employer verification, no interview. Straightforward by regional standards.

Official e-visa portal: evisa.gov.kh`,
      },
      {
        heading: "Neighborhoods",
        body: `**BKK1 (Boeung Keng Kang 1)** is the main expat district. Coffee shops, coworking spaces, Western and Asian restaurants, English-speaking clinics, night life. Rent for a good 1BR: $500–900/month. This is where most newcomers land.

**Tuol Tom Poung (Russian Market area)** is cheaper and more authentic. The market itself sells everything from tailored clothing to electronics. Rent: $350–600/month. More local vibe, still walkable to expat services. Great food scene.

**Tonle Bassac** is the upscale new development zone on the river. Modern high-rises, river views, bars. 1BR: $800–1,500. For people who want the newest infrastructure.

Being slightly outside the prime zones cuts rent significantly — factor in transport (Grab rides, ~$2–5 per trip) and decide if the savings are worth the commute.`,
      },
      {
        heading: "Real costs (2026)",
        body: `Single person, comfortable lifestyle in Phnom Penh:

- Rent (good 1BR in BKK1): $500–900/month
- Food (local + occasional Western): $250–400/month
- Utilities and internet: $80–150/month (30–60 Mbps standard)
- Transport (Grab + moto-dop): $60–120/month
- Total: $780–1,250/month

Dollar economy means pricing is transparent and you never lose money on exchange. Tip from residents: moto-dop (local moto-taxi) is faster and cheaper than Grab for short hops — negotiate $1–2 per ride before getting on.`,
      },
      {
        heading: "Taxes and the dollar economy",
        body: `Cambodia does not apply local income tax to foreign-sourced income. This is a meaningful advantage for freelancers and remote workers.

The entire economy runs on US dollars — you withdraw dollars from ATMs, pay rent in dollars, and shop in dollars (small purchases use local riel as change). No conversion loss, no currency volatility for your day-to-day life.

Standard disclaimer: tax rules change and your home country obligations still apply. Confirm your specific situation with a tax professional.`,
      },
      {
        heading: "What to watch out for",
        body: `— Infrastructure quality varies sharply by neighborhood. Coworking and fast internet exist in BKK1 but thin out quickly outside central zones.

— Phnom Penh traffic has worsened as the city grows. Rush hours can be slow. A scooter gives you flexibility.

— Healthcare: private hospitals like Royal Phnom Penh Hospital and Sunrise Japan Hospital are good. For serious procedures most expats fly to Bangkok.

— The nomad community is smaller than Bangkok or Bali. You will not find the same density of events and meetups. Some people love this, others find it limiting.

— Siem Reap (Angkor Wat city) has a separate expat scene, smaller, cheaper, very different pace. Worth a visit if you are already in Cambodia.`,
      },
    ],
    cta: {
      text: "Considering Phnom Penh as your next base? Connect with expats who are already living there.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "kuala-lumpur-expat-neighborhoods-2026",
    lang: "en",
    country: "Malaysia",
    title: "Living in Kuala Lumpur 2026: Neighborhoods, Costs & Why It Is Underrated",
    description:
      "KL has Singapore-level infrastructure at a third of the price, English everywhere, and DE Rantau visa for up to 24 months. Here is where to actually live.",
    updatedAt: "2026-06-25",
    readingTime: 7,
    tags: ["Malaysia", "Kuala Lumpur", "KL", "expat", "neighborhoods", "DE Rantau", "cost of living", "2026"],
    sections: [
      {
        heading: "Why KL is underrated",
        body: `Kuala Lumpur consistently gets skipped in favor of Thailand or Bali, and the nomads who actually move there tend to wonder why they waited. English is an official working language — you can live your entire life in KL without learning a word of Malay. Banks, hospitals, government offices, supermarkets: all English.

Infrastructure is Singapore-tier. The MRT connects most areas. Fiber internet at 500 Mbps for $30–50/month is standard. Private hospitals with English-speaking doctors are everywhere and affordable.

The cost is Southeast Asian. A comfortable life in KL runs $1,200–2,000/month. Singapore with equivalent infrastructure costs $4,000+.`,
      },
      {
        heading: "Neighborhoods",
        body: `**Mont Kiara** is expat central — a self-contained enclave northwest of downtown packed with international schools, Western supermarkets (Jaya Grocer, Village Grocer), English-speaking clinics, and condo towers. Rent 1BR: $900–1,200/month. Best for families and people who want maximum English-speaking infrastructure. Can feel insular.

**Bangsar** is the hip alternative — restaurants, wine bars, weekend market, walkable streets (rare in KL). 1BR: $600–900/month. Better balance of expat amenities and local character. Preferred by younger nomads and couples without kids.

**Bukit Bintang** is the shopping and entertainment district — Pavilion mall, Jalan Alor street food, rooftop bars. Central but noisy. Studio/1BR: $700–1,000/month. Good if you want to be in the middle of everything.

**KLCC** (around the Petronas Towers) is the financial district, high-end, expensive. 1BR: $1,000+/month. For people on corporate expense accounts.`,
      },
      {
        heading: "Real costs (2026)",
        body: `Single person, comfortable in KL:

- Rent (1BR, Bangsar or Mont Kiara): $600–1,200/month
- Utilities + internet 500 Mbps fiber: $80–130/month
- Food (hawker center + occasional restaurant): $250–400/month
- Transport (Grab + MRT): $60–120/month
- Total: $1,200–2,000/month

Hawker center breakfast (nasi lemak or roti canai with teh tarik): $2–3. Lunch at a mamak stall: $3–5. Dinner at a mid-range restaurant: $10–20/person.

Healthcare: private GP consultation $25–50. Private specialist $50–100. KL has internationally accredited private hospitals — Gleneagles, Pantai, Sunway Medical.`,
      },
      {
        heading: "DE Rantau — the visa that makes sense here",
        body: `The DE Rantau Nomad Pass lets you live legally in Malaysia for 12 months, renewable for another 12 (24 months total). Income requirement for digital/IT work: $24,000 USD/year — far lower than Indonesia's $60,000.

Apply at derantau.mdec.com.my. Fully online process, no consulate visit. Processing: 2–4 weeks. Fee: approximately $225 for the main applicant, $110 per dependent.

You cannot work for Malaysian companies or earn Malaysian-sourced income on this pass. Foreign income only.

After 24 months you can apply again — the program does not currently have a hard lifetime limit.`,
      },
      {
        heading: "What people get wrong about KL",
        body: `— "It is too hot." Yes, it is equatorial. 28–33°C year-round with humidity. But every building has AC and most places you spend time are air-conditioned. Outdoors is the challenge, not indoors.

— "There is nothing to do." This is wrong and usually said by people who stayed in the tourist zone. KL has a genuinely good food scene (arguably the best in the region), art galleries, live music, hiking trails 30 minutes from downtown (Bukit Tabur, FRIM).

— "I need a car." Not in Bangsar or KLCC. The MRT expansion has made central KL increasingly walkable between stations. Grab fills the gaps cheaply.

— Air quality: KL occasionally has haze from Indonesian forest fires (typically August–October). Not as severe as Chiang Mai smoke season but worth monitoring.`,
      },
    ],
    cta: {
      text: "Questions about KL or the DE Rantau application? Connect with people who have already done it.",
      href: "/community",
      label: "Browse expat profiles",
    },
  },
  {
    slug: "vietnam-da-nang-neighborhood-guide-2026",
    lang: "ru",
    country: "Вьетнам",
    title: "Дананг: где жить, сколько стоит и что важно знать в 2026",
    description:
      "Дананг стал главным номад-хабом Вьетнама. Какой район выбрать, сколько реально стоит жизнь, где русское комьюнити и что проверить до подписания договора.",
    updatedAt: "2026-06-25",
    readingTime: 7,
    tags: ["Вьетнам", "Дананг", "районы", "экспат", "стоимость жизни", "е-виза", "2026"],
    sections: [
      {
        heading: "Почему Дананг",
        body: `Дананг — средний по размеру вьетнамский город между Ханоем и Хошимином. Пляж прямо в городе. Горы в 30 минутах. Без мегаполисного хаоса. Интернет стабильный, еда дешёвая, экспатов достаточно чтобы не чувствовать себя одиноким.

Русскоязычных здесь заметно больше чем в других вьетнамских городах. Есть сформировавшееся комьюнити, русскоязычные чаты, магазины с привычными продуктами.`,
      },
      {
        heading: "Районы — где жить",
        body: `Дананг делится рекой Han на две части: правый берег (пляж, экспаты) и левый берег (жилой, местный).

**Мой Ан (My An)** — главный район для иностранцев. Вдоль пляжа, кафе, рестораны, спортивные магазины, аренда велосипедов и SUP. 1BR с видом на море или рядом: $350–500/мес. Большинство новоприбывших оседают здесь.

**Ан Тыонг (An Thuong)** — "улица кафе". Несколько кварталов с коворкингами, работающими кофейнями, баром, едой. Хорошее место если приоритет — работа и нетворкинг. Здесь больше украинцев и русских постоянно живущих.

**Хай Тяу (Hai Chau)** — деловой центр, левый берег. Дешевле, местнее. Хорошо если хочешь жить среди вьетнамцев, далеко от турист-инфраструктуры.`,
      },
      {
        heading: "Реальные цифры (2026)",
        body: `Одиночка, комфортная жизнь в Дананге:

- Аренда 1BR (Мой Ан, близко к пляжу): $400–600/мес
- Интернет в квартире: $15–25/мес, скорость 50–150 Мбит/с
- Еда на местном рынке: $1.5–3 за блюдо
- Кафе Grab of coffee: $1.5–2.5
- Grab по городу: $1.5–4
- Скутер аренда: $80–120/мес

Итого комфортно: $700–1,200/мес.

Дополнительно: медстраховка SafetyWing $40/мес или местная — значительно дешевле. Посещение частного врача $20–40.`,
      },
      {
        heading: "Как снять жильё и что проверить",
        body: `Самый рабочий способ — агент. Не берёт с тебя деньги (зарабатывает с хозяина), знает English, покажет несколько вариантов в день. Ищи в Facebook-группах "Da Nang Expats", "Rent in Da Nang".

Что проверить при просмотре:
- Скорость интернета прямо на месте (Speed Test на телефоне)
- Напор воды в душе и кране
- Работает ли кондиционер (и не воняет ли он)
- Мусоропровод или куда выносить мусор — здесь это нетривиально
- Депозит: обычно $200–400. Вьетнамцы депозиты возвращают — это норма, не исключение

Документы: паспорта достаточно. Официальный договор аренды не всегда делают, но лучше попросить.`,
      },
      {
        heading: "Плюсы и минусы Дананга",
        body: `Плюсы:
- Пляж в городе — встал и пошёл плавать
- Дешевле Таиланда при похожем уровне
- Хоян в 30 мин на скутере — отдельный красивый город
- Сильное русскоязычное комьюнити
- Депозиты возвращают, отношение к иностранцам дружелюбное

Минусы:
- Туристическая е-виза 90 дней — потом выезд
- Работа на турвизе технически нелегальна (но тихих номадов не трогают)
- Жара и влажность июль–август — дискомфортно
- Не такая развитая ночная жизнь как Бангкок или Бали`,
      },
      {
        heading: "Где русское комьюнити",
        body: `Основная тусовка — улица Ан Тыонг. Несколько кафе где русскоязычные работают и общаются постоянно. Telegram-чаты — поищи "Русские в Дананге" или "Экспаты Дананг".

Рядом — Хойан (40 мин). Там своя более спокойная атмосфера, меньше города, больше туристики. Часть русских живёт именно там.`,
      },
    ],
    cta: {
      text: "Есть вопросы по Дананге или планируешь переезд? Задай вопрос в боте или найди тех кто уже там.",
      href: "/community",
      label: "Перейти в сообщество",
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCountry(country: string): Guide[] {
  return guides.filter((g) => g.country === country);
}
