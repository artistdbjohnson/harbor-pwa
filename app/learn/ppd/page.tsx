import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Postpartum depression" };

const SIGNS = [
  "Sadness, emptiness, or rage that lasts more than two weeks",
  "No pleasure in things that used to register",
  "Sleep will not come even when the baby sleeps — or you cannot get out of bed",
  "Appetite gone, or eating without noticing",
  "Guilt that feels bigger than the room",
  "Trouble bonding, or fear that you are a bad parent",
  "Thoughts of disappearing, or that the family would be better without you",
];

export default function PpdPage() {
  return (
    <PageShell
      title="Postpartum depression"
      lead="Baby blues usually ease within two weeks. Depression does not take the hint. It is common. It is treatable."
    >
      <ul className="space-y-2">
        {SIGNS.map((s) => (
          <li key={s} className="border-l-4 border-moss bg-white px-4 py-3 text-sm leading-relaxed">
            {s}
          </li>
        ))}
      </ul>
      <p className="leading-relaxed text-mute">
        Talk to your obstetrician, midwife, or a maternal mental-health clinician. Medication,
        therapy, and support groups all have evidence behind them. If thoughts of harming yourself
        or the baby appear, treat that as urgent — call 988 or 1-833-852-6262 now.
      </p>
      <p className="text-sm text-mute">
        If reality itself slips — voices, strange beliefs, lost time — that is not depression
        alone. Go to <Link href="/learn/ppp" className="underline">postpartum psychosis</Link>.
      </p>
      <Link
        href="/help"
        className="flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white"
      >
        Get help now
        <span aria-hidden>›</span>
      </Link>
    </PageShell>
  );
}
