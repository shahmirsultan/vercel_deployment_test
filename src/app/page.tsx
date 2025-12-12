import LoginForm from "@/components/LoginForm";
import { checkAuth } from "@/actions/authActions";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  // Check if user is already logged in
  const isAuthenticated = await checkAuth();

  if (isAuthenticated) {
    redirect("/home");
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(168,85,247,0.20),transparent_36%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_14%,rgba(236,72,153,0.22),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_82%,rgba(59,130,246,0.14),transparent_32%)]" />
        <div className="absolute inset-0 opacity-65 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_52%)]" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 lg:flex-row lg:items-center">
        <section className="glass-panel rounded-3xl p-8 lg:w-7/12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Trusted access
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Atlas Console for server-driven greetings
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Authenticate, greet, and protect routes with a cohesive interface.
            Every screen now ships with a focused, console-inspired design so
            you can demo flows without distraction.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              "Server Actions",
              "Edge Middleware",
              "Cookie Controls",
              "Zero Client Auth",
              "Form Streaming",
              "Next.js 15 Ready",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Latency</p>
              <p className="text-2xl font-semibold text-white">Edge-first</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Sessions</p>
              <p className="text-2xl font-semibold text-white">Cookie-based</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Stack</p>
              <p className="text-2xl font-semibold text-white">App Router</p>
            </div>
          </div>
        </section>

        <section className="card-edge rounded-3xl bg-white p-8 text-slate-900 lg:w-5/12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Sign in
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Enter the greeter workspace
              </h2>
            </div>
            <div className="h-10 w-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-semibold">
              15
            </div>
          </div>

          <div className="mt-6">
            <LoginForm />
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
            <p className="font-semibold text-slate-800">What you get</p>
            <p className="mt-1">
              Protected admin route, cookie playground, and live server
              greetings with no client-side auth scripts.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
