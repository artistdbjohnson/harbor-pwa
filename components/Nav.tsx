"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/help", label: "Get Help" },
  { href: "/learn", label: "Learn" },
  { href: "/check-in", label: "Check-in" },
  { href: "/partners", label: "Partners" },
  { href: "/prevention", label: "Prevention" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Nav({ tone = "hero" }: { tone?: "hero" | "page" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="bubble shrink-0 px-3 py-1.5 text-sm font-semibold tracking-wide">
          Harbor
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-between rounded-full bg-[#E6EEF8] px-2 py-1 md:flex">
          <nav className="flex flex-wrap items-center">
            {LINKS.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium text-[#0B1F3A]",
                    active && "bg-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <Link
          href="/help"
          className="cta-grad hidden shrink-0 rounded-full px-4 py-2 text-sm font-semibold md:inline-flex"
        >
          Get help now
        </Link>

        <Link
          href="/help"
          className="ml-auto bg-[#1565FF] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white md:hidden"
        >
          Get help
        </Link>
        <button
          type="button"
          className="rounded-md border-[3px] border-clay p-2 text-clay md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-xl bg-[#E6EEF8] p-3 text-[#0B1F3A] md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/help"
            className="cta-grad mt-2 block rounded-full px-4 py-3 text-center text-sm font-semibold"
          >
            Get help now
          </Link>
        </div>
      )}
    </header>
  );
}
