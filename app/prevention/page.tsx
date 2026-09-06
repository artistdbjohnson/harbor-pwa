import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "Prevention" };
export default function PreventionPage() {
  return (
    <PageShell title="Before the ground gives way" lead="You cannot promise an easy night. You can build a shorter fall.">
      <ul className="space-y-3 text-sm">
        <li className="border-[3px] border-ink bg-white p-4"><p className="font-semibold">Tell the obstetric team the history.</p></li>
        <li className="border-[3px] border-ink bg-white p-4"><p className="font-semibold">One protected four-hour sleep block.</p></li>
        <li className="border-[3px] border-ink bg-white p-4"><p className="font-semibold">Numbers on paper: 988 · 1-833-852-6262 · 1-800-944-4773</p></li>
      </ul>
      <Link href="/check-in" className="mt-4 inline-flex border-b-2 border-moss pb-0.5 text-sm font-semibold">Use the check-in</Link>
    </PageShell>
  );
}
