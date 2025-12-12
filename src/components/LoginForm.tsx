"use client";

import { useState } from "react";
import { loginUser } from "@/actions/authActions";

export default function LoginForm() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setError("");

    try {
      const result = await loginUser(formData);
      if (result && !result.success) {
        setError(result.message);
      }
      // If success, the server action will redirect
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <form action={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/70"
            placeholder="Enter username"
            autoComplete="username"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 shadow-sm focus:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400/70"
            placeholder="Enter password"
            autoComplete="current-password"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 py-3 px-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(168,85,247,0.38)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(168,85,247,0.48)] disabled:translate-y-0 disabled:bg-slate-400 disabled:shadow-none"
        >
          {isLoading ? "Signing in..." : "Sign in securely"}
        </button>
      </form>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">Demo credentials</p>
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-600">
          <span className="rounded-lg bg-white px-3 py-1 font-mono font-semibold text-slate-900 shadow-inner">
            admin
          </span>
          <span className="rounded-lg bg-white px-3 py-1 font-mono font-semibold text-slate-900 shadow-inner">
            password123
          </span>
        </div>
      </div>
    </div>
  );
}
