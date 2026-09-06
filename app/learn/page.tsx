import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Learn" };

const CARDS = [
  {
    href: "/learn/ppd",
    t: "Postpartum depression",
    d: "Sadness, rage, or emptiness that will not lift. Treatable. Do not wait it out.",
  },
  {
    href: "/learn/ppp",
    t: "Postpartum psychosis",
    d: "Reality slips. Voices, strange beliefs, lost time. This is an emergency.",
  },
  {
    href: "/learn/difference",
    t: "How they differ",
    d: "One can wait for a same-week visit. The other cannot wait until morning.",
  },
];

export default function LearnPage() {
  return (
    <PageShell
      title="Learn the difference"
      lead="Baby blues fade. Depression holds. Psychosis breaks the frame. Knowing the names is how you get the right door."
    >
      <div className="space-y-4">
        {CARDS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block border-[3px] border-ink bg-white p-5 transition-colors hover:bg-fog"
          >
            <p className="font-display text-2xl">{c.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-mute">{c.d}</p>
          </Link>
        ))}
      </div>
      <p className="text-sm text-mute">
        Facts here follow public guidance from PSI, HRSA, NIMH, and 988. Harbor does not diagnose.
      </p>
    </PageShell>
  );
}
