import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Postpartum psychosis" };
export default function PppPage() {
  return (
    <PageShell title="Postpartum psychosis" lead="Rare. Fast. Treatable. This is a medical emergency, not a character test.">
      <p className="border-[3px] border-alert bg-white px-4 py-4 text-sm">If these signs are in the room, call 911. Say “postpartum psychosis.” Do not wait for morning.</p>
      <ul className="mt-4 space-y-2 text-sm">
        {["Seeing or hearing things other people do not", "Strange beliefs that will not yield", "No sleep for a night or more", "Thoughts of harm that feel commanded"].map((s) => (
          <li key={s} className="border-l-4 border-alert bg-white px-4 py-3">{s}</li>
        ))}
      </ul>
      <Link href="/help" className="mt-6 flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase text-white">Get help now <span>›</span></Link>
    </PageShell>
  );
}
