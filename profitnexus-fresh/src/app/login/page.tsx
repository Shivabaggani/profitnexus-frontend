export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to ProfitNexus</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </main>
  );
}