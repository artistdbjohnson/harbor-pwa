"use client";

import { usePathname } from "next/navigation";

export default function CrisisBar() {
  const pathname = usePathname();
  const plate = pathname === "/plate" || pathname?.startsWith("/plate/");

  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-[80] bg-[#0B1F3A]/92 text-[#B8DCFF] text-[13px] leading-tight backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-2.5 sm:px-6">
        {plate ? (
          <>
            <span className="text-[11px] font-semibold uppercase tracking-wide">Educational plate</span>
            <span className="text-paper/80">
              Not affiliated with Teva. Not medical advice. Talk with a healthcare provider.
            </span>
          </>
        ) : (
          <>
            <span className="text-[11px] font-semibold uppercase tracking-wide">If this is an emergency</span>
            <a className="underline underline-offset-2" href="tel:911">Call 911</a>
            <a className="underline underline-offset-2" href="tel:988">988</a>
            <a className="underline underline-offset-2" href="tel:18338526262">1-833-852-6262</a>
            <a className="underline underline-offset-2" href="tel:18009444773">PSI 1-800-944-4773</a>
            <span className="text-paper/80">Harbor is not a diagnostic tool.</span>
          </>
        )}
      </div>
    </div>
  );
}
