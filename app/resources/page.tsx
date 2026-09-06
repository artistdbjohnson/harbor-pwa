import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Resources" };
const LINKS = [
  { href: "https://www.postpartum.net/", t: "Postpartum Support International" },
  { href: "https://mchb.hrsa.gov/national-maternal-mental-health-hotline", t: "National Maternal Mental Health Hotline" },
  { href: "https://988lifeline.org/", t: "988 Suicide & Crisis Lifeline" },
  { href: "https://www.nimh.nih.gov/health/publications/perinatal-depression", t: "NIMH — Perinatal depression" },
];
export default function ResourcesPage() {
  return (
    <PageShell title="Resources" lead="Public organizations. Harbor does not speak for them.">
      <ul className="space-y-3">{LINKS.map((l) => <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer" className="block border-[3px] border-ink bg-white p-4 hover:bg-fog font-semibold">{l.t}</a></li>)}</ul>
    </PageShell>
  );
}
