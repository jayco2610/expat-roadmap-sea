export type Source = { label: string; url: string };

// Official government / immigration sources per country, so visa guides
// show where the information comes from (trust signal).
export function officialSources(country: string): Source[] {
  const c = country.toLowerCase();
  if (c.includes("thai") || c.includes("таил"))
    return [
      { label: "Thailand e-Visa (official)", url: "https://www.thaievisa.go.th" },
      { label: "Thai Immigration Bureau", url: "https://www.immigration.go.th" },
    ];
  if (c.includes("viet") || c.includes("вьет"))
    return [
      { label: "Vietnam National e-Visa (official)", url: "https://evisa.gov.vn" },
    ];
  if (c.includes("indo") || c.includes("bali") || c.includes("бали"))
    return [
      { label: "Indonesia Immigration e-Visa (official)", url: "https://evisa.imigrasi.go.id" },
    ];
  if (c.includes("malay") || c.includes("малай"))
    return [
      { label: "DE Rantau Nomad Pass — MDEC (official)", url: "https://mdec.my/derantau" },
    ];
  return [];
}
