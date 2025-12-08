import GreetForm from '@/components/GreetForm';
import CookieDemo from '@/components/CookieDemo';
import LogoutButton from '@/components/LogoutButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <main className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full relative">
        {/* Logout Button */}
        <div className="absolute top-4 right-4">
          <LogoutButton />
        </div>

        <div className="text-center mb-8 mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Server-Side Greeter
          </h1>
          <p className="text-gray-600 text-lg">
            Experience Next.js 15 Server Actions in real-time
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">App Router</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">Server Actions</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Server Components</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">Middleware</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full">Authentication</span>
          </div>
        </div>

        <div className="flex justify-center">
          <GreetForm />
        </div>

        <CookieDemo />

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Built with Next.js 15 • Ready for Vercel Deployment</p>
        </div>
      </main>
    </div>
  );
}

