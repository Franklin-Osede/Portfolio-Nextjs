import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}

