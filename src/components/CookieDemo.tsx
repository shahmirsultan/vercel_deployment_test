"use client";

import { useState } from "react";
import { setAuthCookie, removeAuthCookie } from "@/actions/cookieActions";
import { useRouter } from "next/navigation";

export default function CookieDemo() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSetCookie() {
    setIsLoading(true);
    try {
      const result = await setAuthCookie();
      setMessage(result.message);
      router.refresh();
    } catch (error) {
      setMessage("Error setting cookie");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemoveCookie() {
    setIsLoading(true);
    try {
      const result = await removeAuthCookie();
      setMessage(result.message);
      router.refresh();
    } catch (error) {
      setMessage("Error removing cookie");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Cookie + middleware lab
            </h2>
            <p className="text-sm text-slate-300">
              Set or drop the auth cookie, then hit /admin to watch the guard
              respond.
            </p>
          </div>
          <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
            Edge
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            onClick={handleSetCookie}
            disabled={isLoading}
            className="w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_40px_rgba(52,211,153,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(52,211,153,0.45)] disabled:translate-y-0 disabled:bg-slate-500 disabled:shadow-none"
          >
            Set auth cookie
          </button>
          <button
            onClick={handleRemoveCookie}
            disabled={isLoading}
            className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100 border border-white/10 transition hover:-translate-y-0.5 hover:border-white/25 disabled:translate-y-0 disabled:bg-slate-700"
          >
            Remove cookie
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-200">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Middleware redirect is enabled</span>
          </div>
          <a
            href="/admin"
            className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-2 font-semibold text-white transition hover:bg-white/20"
          >
            Go to admin <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {message && (
        <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm text-emerald-50">
          <p className="font-semibold text-emerald-100">Status</p>
          <p className="mt-1">{message}</p>
        </div>
      )}
    </div>
  );
}
