'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-line">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-ink">
          Whitney Zilton
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href
                    ? 'text-ink font-medium'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-ink-2 hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-line px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${
                    pathname === href ? 'text-ink font-medium' : 'text-ink-2'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
