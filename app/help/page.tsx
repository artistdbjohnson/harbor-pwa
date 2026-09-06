import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Get help now" };

const LINES = [
  { name: "Emergency", n: "911", href: "tel:911", note: "If anyone is in immediate danger, or reality has slipped, call emergency services first." },
  { name: "988 Suicide & Crisis Lifeline", n: "988", href: "tel:988", note: "24/7. Voice, text, and chat. Tell them this is postpartum." },
  { name: "National Maternal Mental Health Hotline", n: "1-833-852-6262", href: "tel:18338526262", note: "1-833-TLC-MAMA. 24/7, English and Spanish, voice and text. HRSA." },
  { name: "Postpartum Support International", n: "1-800-944-4773", href: "tel:18009444773", note: "Helpline and local coordinator network. Harbor is not affiliated with PSI." },
];

export default function HelpPage() {
  return (
    <PageShell title="Get help now" lead="You do not have to wait until it is unbearable. Help is a phone, not a courtroom.">
      <p className="rounded-md border-[3px] border-alert/40 bg-white px-4 py-3 text-sm text-ink">
        Harbor is not a diagnostic tool and not a substitute for emergency care or a clinician.
      </p>
      <ol className="space-y-4">
        {LINES.map((l) => (
          <li key={l.n} className="border-[3px] border-ink bg-white p-5">
            <p className="font-cond text-xs tracking-[0.16em] text-mute">{l.name}</p>
            <a href={l.href} className="mt-1 block font-display text-3xl text-moss">{l.n}</a>
            <p className="mt-2 text-sm leading-relaxed text-mute">{l.note}</p>
          </li>
        ))}
      </ol>
      <Link href="/learn/difference" className="flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white">
        See how depression and psychosis differ <span aria-hidden>›</span>
      </Link>
    </PageShell>
  );
}
