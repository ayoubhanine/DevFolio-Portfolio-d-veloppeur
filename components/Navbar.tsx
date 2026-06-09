'use client'; // Obligatoire pour utiliser usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wider text-blue-400">
          DEV.PORTFOLIO
        </Link>
        
        <ul className="flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    isActive ? 'text-blue-400 font-semibold underline underline-offset-4' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}