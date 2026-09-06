import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "How they differ" };

const ROWS = [
  ["How common", "About 1 in 7 births", "About 1 to 2 in 1,000 births"],
  ["The tell", "Mood will not lift", "Reality slips"],
  ["Sleep", "Broken, but you know night from day", "May not sleep at all; time unhooks"],
  ["Thoughts", "Guilt, rage, numbness, fear of failing the baby", "Strange beliefs, voices, the baby is not the baby"],
  ["Speed", "Days to weeks", "Hours to a few days, often sudden"],
  ["Clock", "Call a clinician this week — sooner if you are sinking", "Emergency now. 911 or an ER. Say the words."],
];

export default function DifferencePage() {
  return (
    <PageShell
      title="Depression is not psychosis"
      lead="Both can arrive after a birth. They are not the same illness and they do not use the same clock."
    >
      <div className="space-y-3 md:hidden">
        {ROWS.map((row) => (
          <article key={row[0]} className="liquid-glass rounded-2xl p-4">
            <p className="font-cond text-xs tracking-[0.14em] text-mute">{row[0]}</p>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-ink">Depression</dt>
                <dd className="mt-1 text-mute">{row[1]}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Psychosis</dt>
                <dd className="mt-1 text-mute">{row[2]}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-[3px] border-ink text-left text-sm">
          <thead className="bg-ink text-clay">
            <tr>
              <th className="px-3 py-3 font-cond tracking-wide"> </th>
              <th className="px-3 py-3 font-cond tracking-wide">Depression</th>
              <th className="px-3 py-3 font-cond tracking-wide">Psychosis</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {ROWS.map((row) => (
              <tr key={row[0]} className="border-t-[3px] border-ink/15">
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-3 align-top leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm leading-relaxed text-mute">
        You can have depression without psychosis. Psychosis can arrive with or after depression.
        Either way, treatment exists. You are not to blame.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href="/learn/ppd" className="border-[3px] border-ink px-4 py-4 text-sm font-semibold uppercase">
          Depression ›
        </Link>
        <Link href="/learn/ppp" className="bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase text-white">
          Psychosis ›
        </Link>
      </div>
    </PageShell>
  );
}
