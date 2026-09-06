import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Prevention" };

export default function PreventionPage() {
  return (
    <PageShell
      title="Before the ground gives way"
      lead="You cannot promise an easy night. You can build a net so the fall is shorter."
    >
      <ul className="space-y-4 text-sm leading-relaxed">
        <li className="border-[3px] border-ink bg-white p-4">
          <p className="font-semibold">Tell the obstetric team the history.</p>
          <p className="mt-1 text-mute">Bipolar disorder, previous postpartum psychosis, or a close family member with either raises the stakes. A plan before discharge is not drama. It is medicine.</p>
        </li>
        <li className="border-[3px] border-ink bg-white p-4">
          <p className="font-semibold">Sleep as a protected resource.</p>
          <p className="mt-1 text-mute">One protected four-hour block in twenty-four is a clinical goal, not a luxury. Write who covers that block before the baby arrives.</p>
        </li>
        <li className="border-[3px] border-ink bg-white p-4">
          <p className="font-semibold">A person who will tell the truth.</p>
          <p className="mt-1 text-mute">Pick one adult who is allowed to say “this is not ordinary tired” and to drive.</p>
        </li>
        <li className="border-[3px] border-ink bg-white p-4">
          <p className="font-semibold">Numbers on paper, not only in a phone.</p>
          <p className="mt-1 text-mute">988 · 1-833-852-6262 · 1-800-944-4773 · your clinician after-hours line. Tape them inside a cabinet.</p>
        </li>
      </ul>
      <p className="text-sm text-mute">Prevention is not a guarantee. Early treatment is still the win.</p>
      <Link href="/check-in" className="inline-flex border-b-2 border-moss pb-0.5 text-sm font-semibold">Use the check-in</Link>
    </PageShell>
  );
}
