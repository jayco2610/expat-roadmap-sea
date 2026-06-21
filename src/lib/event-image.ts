export function eventImage(title: string): string {
  const t = title.toLowerCase();
  if (/(dinner|breakfast|brunch|food|yoga|sunrise|beach|retreat)/.test(t))
    return "/images/events/dinner.jpg";
  if (/(workshop|talk|class|learn|seminar|demo|hack)/.test(t))
    return "/images/events/workshop.jpg";
  if (/(coffee|meetup|nomad|social|mixer|network|hangout)/.test(t))
    return "/images/events/meetup.jpg";
  return "/images/events/social.jpg";
}
