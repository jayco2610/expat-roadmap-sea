export type OfficialLink = {
  label: string;
  url: string;
  note?: string;
};

export const embassyLinks: Record<string, OfficialLink[]> = {
  Thailand: [
    { label: "Apply for DTV visa online", url: "https://www.thaievisa.go.th", note: "Official portal" },
    { label: "Thai Immigration Department", url: "https://www.immigration.go.th" },
    { label: "Thai Embassy Moscow", url: "https://thaiembassy.ru" },
    { label: "Thai Consulate Penang (popular for DTV run)", url: "https://penang.thaiembassy.org" },
    { label: "Thai Consulate Tbilisi", url: "https://tbilisi.thaiembassy.org" },
    { label: "Revenue Department (tax)", url: "https://www.rd.go.th/english/6045.html", note: "Tax residency info" },
  ],
  "Таиланд": [
    { label: "Подать на DTV онлайн", url: "https://www.thaievisa.go.th", note: "Официальный портал" },
    { label: "Иммиграционный департамент Таиланда", url: "https://www.immigration.go.th" },
    { label: "Посольство Таиланда в Москве", url: "https://thaiembassy.ru" },
    { label: "Консульство в Пенанге (популярный DTV-ран)", url: "https://penang.thaiembassy.org" },
    { label: "Консульство в Тбилиси", url: "https://tbilisi.thaiembassy.org" },
    { label: "Налоговый департамент (Revenue Dept.)", url: "https://www.rd.go.th/english/6045.html", note: "Налоговое резидентство" },
  ],
  Vietnam: [
    { label: "Apply for Vietnam e-visa", url: "https://evisa.xuatnhapcanh.gov.vn", note: "Official — avoid third-party sites" },
    { label: "Vietnam Immigration Department", url: "https://immigration.gov.vn" },
    { label: "Vietnam Embassy Moscow", url: "https://vnembassy-moscow.mofa.gov.vn" },
  ],
  "Вьетнам": [
    { label: "Е-виза Вьетнама (только официальный)", url: "https://evisa.xuatnhapcanh.gov.vn", note: "Не через агентов — цена та же, $25/$50" },
    { label: "Иммиграционный департамент Вьетнама", url: "https://immigration.gov.vn" },
    { label: "Посольство Вьетнама в Москве", url: "https://vnembassy-moscow.mofa.gov.vn" },
  ],
  Indonesia: [
    { label: "Indonesia visa portal (B211A / E33G)", url: "https://molina.imigrasi.go.id", note: "Official" },
    { label: "Indonesia Immigration Department", url: "https://www.imigrasi.go.id" },
    { label: "Indonesian Embassy Moscow", url: "https://kemlu.go.id/moskow/id" },
  ],
  "Шри-Ланка": [
    { label: "Е-виза Шри-Ланки (ETA)", url: "https://eta.gov.lk", note: "Только официальный — $50, не через агентов" },
    { label: "Иммиграционный департамент", url: "https://www.immigration.gov.lk" },
    { label: "Посольство Шри-Ланки в Москве", url: "http://www.slembassymoscow.com" },
    { label: "Board of Investment (долгосрочное резидентство)", url: "https://investsrilanka.com" },
  ],
  "Sri Lanka": [
    { label: "Sri Lanka ETA (official)", url: "https://eta.gov.lk", note: "Official — $50, avoid agency sites" },
    { label: "Sri Lanka Immigration Dept.", url: "https://www.immigration.gov.lk" },
    { label: "Board of Investment (long-stay)", url: "https://investsrilanka.com" },
  ],
  Malaysia: [
    { label: "DE Rantau Nomad Pass portal", url: "https://derantau.mdec.com.my", note: "Official MDEC portal" },
    { label: "Malaysia Immigration Dept.", url: "https://www.imi.gov.my" },
    { label: "Malaysian Embassy Moscow", url: "https://www.kln.gov.my/web/rus_moscow/home" },
  ],
};

export function getLinksForCountry(country: string): OfficialLink[] {
  return embassyLinks[country] ?? [];
}
