"use client";

import { useState, useTransition } from "react";
import { subscribeToNewsletter } from "@/actions/newsletter";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    startTransition(async () => {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setDone(true);
      } else {
        setError(result.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <section className="px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16"
          style={{
            background:
              "radial-gradient(120% 120% at 100% 0%, rgba(125,140,99,0.35), transparent 55%), linear-gradient(135deg, #2b2e28, #3a4032)",
          }}
        >
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get the inside track on expat life
            </h2>
            <p className="mt-3 text-white/80">
              New visa guides, city breakdowns, and community picks. One useful
              email, no spam.
            </p>

            {done ? (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                ✓ You&apos;re on the list. Talk soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  disabled={pending}
                  className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white/50 focus:outline-none disabled:opacity-60 sm:max-w-xs"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="rounded-lg bg-white px-6 py-3 text-[0.9375rem] font-medium text-[#2b2e28] transition hover:bg-white/90 disabled:opacity-60"
                >
                  {pending ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            )}
            {error && (
              <p className="mt-2 text-sm text-red-300">{error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
