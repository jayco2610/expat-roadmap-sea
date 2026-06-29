"use client";

import { useState, useTransition } from "react";

type Props = {
  onDelete: () => Promise<void>;
  label?: string;
};

export function DeleteButton({ onDelete, label = "Delete listing" }: Props) {
  const [confirm, setConfirm] = useState(false);
  const [pending, startTransition] = useTransition();

  if (!confirm) {
    return (
      <button
        onClick={() => setConfirm(true)}
        className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
      >
        {label}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[#6e7167]">Are you sure?</span>
      <button
        disabled={pending}
        onClick={() => startTransition(() => onDelete())}
        className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
      >
        {pending ? "Deleting…" : "Yes, delete"}
      </button>
      <button
        onClick={() => setConfirm(false)}
        className="text-sm text-[#6e7167] underline underline-offset-2"
      >
        Cancel
      </button>
    </div>
  );
}
