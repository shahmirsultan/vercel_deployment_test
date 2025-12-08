'use client'

import { useState } from 'react';
import { setAuthCookie, removeAuthCookie } from '@/actions/cookieActions';
import { useRouter } from 'next/navigation';

export default function CookieDemo() {
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSetCookie() {
    setIsLoading(true);
    try {
      const result = await setAuthCookie();
      setMessage(result.message);
      router.refresh();
    } catch (error) {
      setMessage('Error setting cookie');
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
      setMessage('Error removing cookie');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        🔒 Middleware Demo
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Test Next.js 15 Middleware by managing auth cookies
      </p>
      
      <div className="flex gap-3 justify-center mb-4">
        <button
          onClick={handleSetCookie}
          disabled={isLoading}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm"
        >
          Set Auth Cookie
        </button>
        <button
          onClick={handleRemoveCookie}
          disabled={isLoading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-colors text-sm"
        >
          Remove Auth Cookie
        </button>
      </div>

      <div className="text-center">
        <a
          href="/admin"
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
        >
          Try Accessing /admin →
        </a>
      </div>

      {message && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm text-center">{message}</p>
        </div>
      )}
    </div>
  );
}


