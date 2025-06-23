export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to ProfitNexus</h1>
        <p className="text-lg">Grow your network. Earn rewards. Build your future.</p>
        <div className="space-x-4">
          <a href="/register" className="bg-white text-blue-600 px-4 py-2 rounded shadow">Get Started</a>
          <a href="/login" className="border border-white px-4 py-2 rounded">Login</a>
        </div>
      </div>
    </main>
  );
}