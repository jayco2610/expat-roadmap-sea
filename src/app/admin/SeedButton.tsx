"use client";

import { useState } from "react";

export function SeedCommunityButton() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSeed() {
    setState("loading");
    try {
      const res = await fetch("/api/admin/seed-community", { method: "POST" });
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
      <div>
        <p className="font-semibold text-[#2b2e28] dark:text-[#ecebe3]">Seed community profiles</p>
        <p className="text-sm text-[#6e7167]">
          {state === "idle" && "Add 35 demo members with avatars. Safe to run multiple times."}
          {state === "loading" && "Adding profiles…"}
          {state === "done" && message}
          {state === "error" && `Error: ${message}`}
        </p>
      </div>
      <button
        onClick={handleSeed}
        disabled={state === "loading" || state === "done"}
        className="btn-primary shrink-0 text-sm disabled:opacity-50"
      >
        {state === "loading" ? "Running…" : state === "done" ? "Done" : "Run seed"}
      </button>
    </div>
  );
}
