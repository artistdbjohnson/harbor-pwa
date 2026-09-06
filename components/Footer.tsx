'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/plate' || pathname?.startsWith('/plate/')) return null;

  return (
    <footer className="bg-ink text-paper/80 mt-0 border-t border-clay/25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-paper">Harbor</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            You are not alone. You are not to blame. With help, you will be well.
          </p>
        </div>
        <div className="text-sm grid grid-cols-2 gap-2">
          <Link className="hover:text-paper" href="/help">Get Help</Link>
          <Link className="hover:text-paper" href="/learn/ppd">Postpartum depression</Link>
          <Link className="hover:text-paper" href="/learn/ppp">Postpartum psychosis</Link>
          <Link className="hover:text-paper" href="/check-in">Check-in</Link>
          <Link className="hover:text-paper" href="/partners">Partners</Link>
          <Link className="hover:text-paper" href="/prevention">Prevention</Link>
          <Link className="hover:text-paper" href="/resources">Resources</Link>
          <Link className="hover:text-paper" href="/about">About</Link>
          <Link className="hover:text-paper" href="/plate">Template plate</Link>
        </div>
        <div className="text-sm space-y-2">
          <p>988 · 1-833-852-6262 · 1-800-944-4773</p>
          <p>
            Helpline numbers and clinical facts are published by PSI, HRSA, and 988. Harbor is not
            affiliated with Postpartum Support International.
          </p>
          <p>Not a substitute for emergency care or a clinician.</p>
        </div>
      </div>
    </footer>
  );
}
