"use client";

import { useState } from "react";
import { greetUser } from "@/actions/actions";

export default function GreetForm() {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setMessage("");

    try {
      const result = await greetUser(formData);
      if (result.success) {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Error: Could not connect to server");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <form action={handleSubmit} className="space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-200">
            <label htmlFor="name" className="font-semibold">
              Enter name
            </label>
            <span className="rounded-full bg-purple-500/20 px-2 py-1 text-[10px] font-semibold text-purple-100">
              Server action
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/70"
              placeholder="Type a name to greet"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto whitespace-nowrap rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_38px_rgba(168,85,247,0.38)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(168,85,247,0.48)] disabled:translate-y-0 disabled:bg-slate-500 disabled:shadow-none"
            >
              {isLoading ? "Greeting..." : "Send greeting"}
            </button>
          </div>
        </div>
      </form>

      {message && (
        <div className="mt-4 rounded-xl border border-purple-400/30 bg-purple-500/10 p-4 text-sm text-purple-50">
          <p className="font-semibold text-purple-100">Response</p>
          <p className="mt-1">{message}</p>
        </div>
      )}
    </div>
  );
}
