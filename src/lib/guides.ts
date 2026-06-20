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
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCountry(country: string): Guide[] {
  return guides.filter((g) => g.country === country);
}
