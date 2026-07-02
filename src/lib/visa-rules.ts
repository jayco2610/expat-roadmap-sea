// Visa decision data for /tools/visa-checker.
// Sourced from the published guides — each option links back to its guide.
// Rules vary by nationality; the tool always shows the official-source caveat.

export type StayLength = "1m" | "3m" | "6m" | "12m";

export type VisaOption = {
  name: string;
  cost: string;
  maxStay: string;
  requirements: string;
  fitsRemoteWork: boolean;
  guideSlug?: string;
};

export type CountryVisas = {
  slug: string;
  name: string;
  options: Record<StayLength, VisaOption>;
};

const thailandDtv: VisaOption = {
  name: "DTV (Destination Thailand Visa)",
  cost: "10,000 THB one-time",
  maxStay: "180 days per entry, 5-year validity",
  requirements: "Proof of remote income or freelance work, ~$14k in savings",
  fitsRemoteWork: true,
  guideSlug: "thailand-digital-nomad-visa-2026",
};

const vietnamEvisa: VisaOption = {
  name: "90-day e-visa",
  cost: "$25",
  maxStay: "90 days, single or multiple entry",
  requirements: "Online application, approval in ~3 business days",
  fitsRemoteWork: true,
  guideSlug: "vietnam-remote-work-visa-2026",
};

export const countryVisas: CountryVisas[] = [
  {
    slug: "thailand",
    name: "Thailand",
    options: {
      "1m": {
        name: "Visa exemption + extension",
        cost: "Free entry, ~1,900 THB extension",
        maxStay: "30 + 30 days",
        requirements: "Passport valid 6+ months, most nationalities",
        fitsRemoteWork: false,
        guideSlug: "thailand-digital-nomad-visa-2026",
      },
      "3m": thailandDtv,
      "6m": thailandDtv,
      "12m": thailandDtv,
    },
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    options: {
      "1m": vietnamEvisa,
      "3m": vietnamEvisa,
      "6m": {
        name: "E-visa + border run",
        cost: "$25 per 90 days",
        maxStay: "90 days at a time, re-enter after exit",
        requirements: "No dedicated nomad visa — most expats cycle e-visas",
        fitsRemoteWork: true,
        guideSlug: "vietnam-remote-work-visa-2026",
      },
      "12m": {
        name: "Temporary Residence Card (TRC)",
        cost: "Varies",
        maxStay: "1–2 years",
        requirements: "Requires a sponsor: employer or locally-registered company",
        fitsRemoteWork: false,
        guideSlug: "ho-chi-minh-city-expat-guide-2026",
      },
    },
  },
  {
    slug: "indonesia",
    name: "Indonesia (Bali)",
    options: {
      "1m": {
        name: "Visa on Arrival",
        cost: "~$35",
        maxStay: "60 days (30 + 30 extension)",
        requirements: "Available at airport for most nationalities",
        fitsRemoteWork: false,
        guideSlug: "indonesia-bali-e33g-remote-worker-visa-2026",
      },
      "3m": {
        name: "VOA + extension, then E33G",
        cost: "$35 VOA; E33G varies",
        maxStay: "60 days VOA, then switch",
        requirements: "E33G needs employer letter + $60k/yr income",
        fitsRemoteWork: true,
        guideSlug: "indonesia-bali-e33g-remote-worker-visa-2026",
      },
      "6m": {
        name: "E33G Remote Worker Visa",
        cost: "Varies",
        maxStay: "6 months",
        requirements: "Employer letter, $60,000/yr income requirement",
        fitsRemoteWork: true,
        guideSlug: "indonesia-bali-e33g-remote-worker-visa-2026",
      },
      "12m": {
        name: "KITAS",
        cost: "Varies (agent-assisted)",
        maxStay: "1 year, renewable",
        requirements: "Complex process, usually done through an agent",
        fitsRemoteWork: true,
        guideSlug: "indonesia-bali-e33g-remote-worker-visa-2026",
      },
    },
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    options: {
      "1m": {
        name: "Visa-free entry",
        cost: "Free",
        maxStay: "90 days for most nationalities",
        requirements: "Passport valid 6+ months",
        fitsRemoteWork: false,
        guideSlug: "malaysia-de-rantau-nomad-pass-2026",
      },
      "3m": {
        name: "Visa-free entry",
        cost: "Free",
        maxStay: "90 days for most nationalities",
        requirements: "Passport valid 6+ months",
        fitsRemoteWork: false,
        guideSlug: "malaysia-de-rantau-nomad-pass-2026",
      },
      "6m": {
        name: "DE Rantau Nomad Pass",
        cost: "~$220 application",
        maxStay: "12 months, renewable for 12 more",
        requirements: "$24,000/yr income for digital/IT work, fully online",
        fitsRemoteWork: true,
        guideSlug: "malaysia-de-rantau-nomad-pass-2026",
      },
      "12m": {
        name: "DE Rantau Nomad Pass",
        cost: "~$220 application",
        maxStay: "12 months, renewable for 12 more (24 total)",
        requirements: "$24,000/yr income for digital/IT work, fully online",
        fitsRemoteWork: true,
        guideSlug: "malaysia-de-rantau-nomad-pass-2026",
      },
    },
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    options: {
      "1m": {
        name: "E-Visa (tourist)",
        cost: "$30",
        maxStay: "30 days, extendable once (+30)",
        requirements: "Online at evisa.gov.kh",
        fitsRemoteWork: false,
        guideSlug: "cambodia-phnom-penh-expat-guide-2026",
      },
      "3m": {
        name: "EB Business Visa",
        cost: "$35 + renewal fees",
        maxStay: "Renewable 1/3/6/12 months inside the country",
        requirements: "$1,000 USD proof of funds",
        fitsRemoteWork: true,
        guideSlug: "cambodia-phnom-penh-expat-guide-2026",
      },
      "6m": {
        name: "EB Business Visa",
        cost: "$35 + renewal fees",
        maxStay: "Renewable 1/3/6/12 months inside the country",
        requirements: "$1,000 USD proof of funds",
        fitsRemoteWork: true,
        guideSlug: "cambodia-phnom-penh-expat-guide-2026",
      },
      "12m": {
        name: "EB Business Visa",
        cost: "$35 + renewal fees",
        maxStay: "Renewable up to 12 months",
        requirements: "$1,000 USD proof of funds",
        fitsRemoteWork: true,
        guideSlug: "cambodia-phnom-penh-expat-guide-2026",
      },
    },
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    options: {
      "1m": {
        name: "ETA",
        cost: "$50",
        maxStay: "30 days, double entry",
        requirements: "Apply online at eta.gov.lk before departure",
        fitsRemoteWork: false,
        guideSlug: "sri-lanka-expat-guide-2026",
      },
      "3m": {
        name: "ETA + in-country extension",
        cost: "$50 + $40–60 extension",
        maxStay: "90 days total",
        requirements: "Extension at the immigration office in Colombo",
        fitsRemoteWork: false,
        guideSlug: "sri-lanka-expat-guide-2026",
      },
      "6m": {
        name: "ETA cycles",
        cost: "$90–110 per 90 days",
        maxStay: "90 days at a time, exit and re-enter",
        requirements: "No dedicated nomad visa yet",
        fitsRemoteWork: false,
        guideSlug: "sri-lanka-expat-guide-2026",
      },
      "12m": {
        name: "ETA cycles",
        cost: "$90–110 per 90 days",
        maxStay: "90 days at a time, exit and re-enter",
        requirements: "No dedicated nomad visa yet — consider Thailand or Malaysia instead",
        fitsRemoteWork: false,
        guideSlug: "sri-lanka-expat-guide-2026",
      },
    },
  },
];
