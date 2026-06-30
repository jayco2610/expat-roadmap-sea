"use client";

import { useState, useTransition } from "react";
import { reportListing } from "@/actions/report";

type Props = {
  listingType: "housing" | "job" | "event";
  listingId: string;
};

export function ReportButton({ listingType, listingId }: Props) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();

  if (done) {
    return (
      <p className="text-xs text-[#6e7167]">
        Thanks — reported. We&apos;ll review it.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-[#6e7167] underline-offset-2 hover:underline"
      >
        ⚐ Report this listing
      </button>
    );
  }

  return (
    <div className="space-y-2">
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        rows={2}
        placeholder="What's wrong with this listing? (optional)"
        className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm focus:border-[#7d8c63] focus:outline-none dark:border-white/15 dark:bg-[#1c1c1e]"
      />
      <div className="flex gap-2">
        <button
          type="button"
          disabled={pending}
          onClick={() =>
            startTransition(async () => {
              await reportListing(listingType, listingId, reason);
              setDone(true);
            })
          }
          className="rounded-lg bg-[#55633f] px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60"
        >
          {pending ? "Sending…" : "Submit report"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg px-3 py-1.5 text-xs text-[#6e7167]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
