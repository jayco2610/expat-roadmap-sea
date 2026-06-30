const TELEGRAM_COMMUNITY = "https://t.me/expat_roadmap_bot";

export function AskCommunity({ topic }: { topic?: string }) {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#2AABEE]/20 bg-[#2AABEE]/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-display text-lg font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
          Still have a question?
        </p>
        <p className="mt-1 text-sm text-[#6e7167] dark:text-[#9a9c8f]">
          {topic
            ? `Real expats who've done it answer in our community.`
            : `Ask real expats living across Southeast Asia.`}
        </p>
      </div>
      <a
        href={TELEGRAM_COMMUNITY}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#2AABEE] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1d97d6]"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.57-.46.71-.93.44l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.52.26l.18-2.63 4.72-4.27c.21-.18-.04-.28-.32-.1L7.9 14.49l-2.53-.79c-.55-.17-.56-.55.12-.81l9.88-3.81c.46-.17.86.1.27.72z" />
        </svg>
        Ask the community
      </a>
    </div>
  );
}
