export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <main className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-block p-4 bg-purple-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            🎉 Protected Admin Area
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            You successfully accessed the protected route!
          </p>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ✅ Middleware verified your auth cookie
            </p>
          </div>

          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <p>This page is protected by Next.js 15 Middleware</p>
            <p className="text-xs text-gray-500">
              Try accessing /admin without the auth cookie - you'll be redirected!
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}


