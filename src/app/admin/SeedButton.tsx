"use client";

import { useState } from "react";

function AdminSeedRow({
  title,
  description,
  endpoint,
  danger,
}: {
  title: string;
  description: string;
  endpoint: string;
  danger?: boolean;
}) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handle() {
    setState("loading");
    try {
      const res = await fetch(endpoint, { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setState("done");
        setMessage(data.message ?? "Done");
      } else {
        setState("error");
        setMessage(data.error ?? "Unknown error");
      }
    } catch {
      setState("error");
      setMessage("Network error");
    }
  }

  return (
    <div className="glass-card flex flex-wrap items-center justify-between gap-4 p-5">
      <div className="min-w-0">
        <p className="font-semibold text-[#2b2e28] dark:text-[#ecebe3]">{title}</p>
        <p className="text-sm text-[#6e7167]">
          {state === "idle" && description}
          {state === "loading" && "Running…"}
          {state === "done" && `✓ ${message}`}
          {state === "error" && `Error: ${message}`}
        </p>
      </div>
      <button
        onClick={handle}
        disabled={state === "loading" || state === "done"}
        className={`shrink-0 text-sm disabled:opacity-50 ${danger ? "btn-secondary" : "btn-primary"}`}
      >
        {state === "loading" ? "Running…" : state === "done" ? "Done" : "Run"}
      </button>
    </div>
  );
}

export function SeedCommunityButton() {
  return (
    <AdminSeedRow
      title="Seed community (35 expats)"
      description="Add 35 demo expats with avatars from 18+ countries. Skip-duplicates safe."
      endpoint="/api/admin/seed-community"
    />
  );
}

export function SeedRuBeautyButton() {
  return (
    <AdminSeedRow
      title="Add Russian beauty profiles"
      description="Remove old placeholders (Mia/Arun/Lena) and add 8 Russian girls: tattoo artist, photographer, nail artist, MUA, lash specialist, blogger, massage therapist, salon owner."
      endpoint="/api/admin/seed-ru-beauty"
    />
  );
}

export function ResetCommunityButton() {
  return (
    <AdminSeedRow
      danger
      title="Hard reset community profiles"
      description="Delete ALL demo profiles and re-insert 43 members (8 Russian girls first, then 35 expats) with gender-correct photos from randomuser.me."
      endpoint="/api/admin/reset-community"
    />
  );
}
