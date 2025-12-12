export default function AdminPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(168,85,247,0.20),transparent_36%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_14%,rgba(236,72,153,0.20),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_78%,rgba(59,130,246,0.14),transparent_32%)]" />
        <div className="absolute inset-0 opacity-55 bg-[linear-gradient(112deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_54%)]" />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-14">
        <div className="glass-panel rounded-3xl p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-100">
                <span className="h-2 w-2 rounded-full bg-purple-300" />
                Access granted
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white">
                Protected Admin Area
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                Middleware validated your auth cookie before letting you in. Use
                this space to prove the guardrail is working.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Guard", value: "Edge middleware" },
                  { label: "Session", value: "Cookie backed" },
                  { label: "Status", value: "Healthy" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-purple-400/30 bg-purple-500/10 p-6 text-purple-50">
              <div className="flex items-center gap-3 text-purple-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-400/20 text-lg font-bold">
                  OK
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Middleware
                  </p>
                  <p className="text-sm">Auth cookie verified</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-purple-50/90">
                Try hitting /admin without the cookie to see the redirect in
                action.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-100">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Zero client-side auth
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Edge redirect
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Next.js 15
            </span>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-300">
              You are viewing a protected surface; keep exploring the cookie
              controls on the home screen.
            </p>
            <a
              href="/home"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            >
              <span>Back to workspace</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
