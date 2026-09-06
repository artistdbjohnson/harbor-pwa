import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Partners" };
export default function PartnersPage() {
  return (
    <PageShell title="If you live with them" lead="You are often the first person who notices the ground moving.">
      <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
        <li>Name it without debate. We are getting help today.</li>
        <li>If reality has slipped, call 911. Stay.</li>
        <li>If mood will not lift, call 1-833-852-6262 with them in the room.</li>
        <li>Protect a block of sleep. Sleep is treatment.</li>
      </ol>
      <Link href="/help" className="mt-6 flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase text-white">Numbers to call <span>›</span></Link>
    </PageShell>
  );
}
