import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Resources" };

const LINKS = [
  { href: "https://www.postpartum.net/", t: "Postpartum Support International", d: "Helpline, coordinators, support groups. Harbor is not affiliated with PSI." },
  { href: "https://mchb.hrsa.gov/national-maternal-mental-health-hotline", t: "National Maternal Mental Health Hotline", d: "HRSA. 1-833-TLC-MAMA. 24/7 voice and text." },
  { href: "https://988lifeline.org/", t: "988 Suicide & Crisis Lifeline", d: "24/7. Voice, text, chat." },
  { href: "https://www.nimh.nih.gov/health/publications/perinatal-depression", t: "NIMH — Perinatal depression", d: "Federal explainer on perinatal mood disorders." },
];

export default function ResourcesPage() {
  return (
    <PageShell title="Resources" lead="Public organizations. Harbor does not take a cut and does not speak for them.">
      <ul className="space-y-3">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noreferrer" className="block border-[3px] border-ink bg-white p-4 hover:bg-fog">
              <p className="font-semibold">{l.t}</p>
              <p className="mt-1 text-sm text-mute">{l.d}</p>
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
