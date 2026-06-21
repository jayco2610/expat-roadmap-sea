"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
};

export function InstallPrompt() {
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (localStorage.getItem("install-dismissed")) return;

    const nav = window.navigator as Navigator & { standalone?: boolean };
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches || nav.standalone === true;
    if (standalone) return;

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(ios);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    let timer: ReturnType<typeof setTimeout> | undefined;
    if (ios) {
      timer = setTimeout(() => setShow(true), 2500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  function dismiss() {
    localStorage.setItem("install-dismissed", "1");
    setShow(false);
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    dismiss();
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-2xl border border-black/8 bg-white/95 p-4 shadow-[0_10px_40px_rgba(20,22,16,0.18)] backdrop-blur-md sm:right-4 sm:left-auto sm:mx-0">
      <div className="flex items-start gap-3">
        {/* Pin icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5c6b4a] to-[#7d8c63]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2.5c-4 0-7.2 3.2-7.2 7.2 0 5.4 7.2 12.3 7.2 12.3s7.2-6.9 7.2-12.3c0-4-3.2-7.2-7.2-7.2z"
              fill="#fff"
            />
            <circle cx="12" cy="9.6" r="3" fill="#5c6b4a" />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-medium text-[#2b2e28]">Install Expat Roadmap</p>
          {isIOS ? (
            <p className="mt-0.5 flex flex-wrap items-center gap-1 text-sm text-[#6e7167]">
              Tap
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#55633f"
                strokeWidth="2"
                className="inline"
              >
                <path d="M12 16V4M8 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4" strokeLinecap="round" />
              </svg>
              then &ldquo;Add to Home Screen&rdquo;
            </p>
          ) : (
            <p className="mt-0.5 text-sm text-[#6e7167]">
              Add it to your home screen for quick access.
            </p>
          )}

          {!isIOS && deferred ? (
            <button onClick={install} className="btn-primary mt-2.5 text-sm">
              Install
            </button>
          ) : null}
        </div>

        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded-full p-1 text-[#6e7167] transition hover:bg-black/5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
