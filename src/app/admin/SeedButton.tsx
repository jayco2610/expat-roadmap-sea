"use client";

import { useState } from "react";

function AdminSeedRow({
  title,
  description,
  endpoint,
}: {
  title: string;
  description: string;
  endpoint: string;
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
        className="btn-primary shrink-0 text-sm disabled:opacity-50"
      >
        {state === "loading" ? "Running…" : state === "done" ? "Done" : "Run"}
      </button>
    </div>
  );
}

export function SeedCommunityButton() {
  return (
    <AdminSeedRow
      title="Seed community profiles (35 members)"
      description="Add 35 demo expats with avatars from 18+ countries. Safe to run multiple times."
      endpoint="/api/admin/seed-community"
    />
  );
}

export function SeedRuBeautyButton() {
  return (
    <AdminSeedRow
      title="Replace placeholders → Russian beauty profiles"
      description="Remove Mia Chen / Arun Patel / Lena Kowalski (no-avatar duplicates) and add 8 Russian girls: tattoo artist, photographer, nail artist, MUA, lash specialist, blogger, massage therapist, salon owner."
      endpoint="/api/admin/seed-ru-beauty"
    />
  );
}
