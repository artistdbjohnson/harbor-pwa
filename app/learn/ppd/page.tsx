import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Postpartum depression" };
export default function PpdPage() {
  return (
    <PageShell title="Postpartum depression" lead="Baby blues usually ease within two weeks. Depression does not. It is common. It is treatable.">
      <ul className="space-y-2 text-sm leading-relaxed">
        {["Sadness, emptiness, or rage lasting more than two weeks", "Sleep will not come even when the baby sleeps", "Guilt that feels bigger than the room", "Trouble bonding, or fear you are a bad parent"].map((s) => (
          <li key={s} className="border-l-4 border-moss bg-white px-4 py-3">{s}</li>
        ))}
      </ul>
      <Link href="/help" className="flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase text-white">Get help now <span>›</span></Link>
    </PageShell>
  );
}
