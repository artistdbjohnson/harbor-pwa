import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "How they differ" };
export default function DifferencePage() {
  return (
    <PageShell title="Depression is not psychosis" lead="Both can arrive after a birth. They are not the same illness.">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-[3px] border-ink text-left text-sm">
          <thead className="bg-ink text-clay"><tr><th className="px-3 py-3" /><th className="px-3 py-3">Depression</th><th className="px-3 py-3">Psychosis</th></tr></thead>
          <tbody className="bg-white">
            {[
              ["How common", "About 1 in 7 births", "About 1 to 2 in 1,000 births"],
              ["The tell", "Mood will not lift", "Reality slips"],
              ["Clock", "Call a clinician this week", "Emergency now. 911. Say the words."],
            ].map((row) => (
              <tr key={row[0]} className="border-t-[3px] border-ink/15">{row.map((cell) => <td key={cell} className="px-3 py-3">{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/learn/ppd" className="border-[3px] border-ink px-4 py-4 text-sm font-semibold uppercase">Depression ›</Link>
        <Link href="/learn/ppp" className="bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase text-white">Psychosis ›</Link>
      </div>
    </PageShell>
  );
}
