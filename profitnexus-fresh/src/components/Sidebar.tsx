import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Wallet', href: '/dashboard/wallet' },
  { name: 'Referrals', href: '/dashboard/referrals' },
  { name: 'Tasks', href: '/dashboard/tasks' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">ProfitNexus</h2>
      <nav className="flex flex-col space-y-2">
        {navItems.map(item => (
          <Link key={item.href} href={item.href} className={`${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-800'} px-4 py-2 rounded`}>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
