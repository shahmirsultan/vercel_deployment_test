import GreetForm from "@/components/GreetForm";
import CookieDemo from "@/components/CookieDemo";
import LogoutButton from "@/components/LogoutButton";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(168,85,247,0.22),transparent_36%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_14%,rgba(236,72,153,0.20),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_76%,rgba(59,130,246,0.14),transparent_32%)]" />
        <div className="absolute inset-0 opacity-55 bg-[linear-gradient(108deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0)_54%)]" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-14 space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Live workspace
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Server actions, but tactile
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Trigger greetings, flip cookies, and guard admin routes from a
              single console. Everything runs against real server actions—no
              mock UI states.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-100">
              {[
                "App Router",
                "Server Actions",
                "Edge Middleware",
                "Cookie Auth",
                "TypeScript",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-200">
                Session
              </p>
              <p className="font-semibold">Authenticated</p>
            </div>
            <LogoutButton />
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-purple-200">
                  Server greeting
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Streamlined name prompt
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Submit a name, watch the server respond instantly.
                </p>
              </div>
              <div className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200">
                Action
              </div>
            </div>

            <div className="mt-6">
              <GreetForm />
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-pink-200">
                  Edge middleware
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Cookie-driven access
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Toggle the auth cookie and hit the protected admin path.
                </p>
              </div>
              <div className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-200">
                Guard
              </div>
            </div>

            <div className="mt-6">
              <CookieDemo />
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Middleware redirect",
              detail:
                "Try /admin without a cookie and watch the guard take over.",
            },
            {
              title: "Server components",
              detail:
                "No client hydration on the greeting surface unless needed.",
            },
            {
              title: "Deploy ready",
              detail:
                "Layouts and actions tuned for Vercel hosting out of the box.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Highlight
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
