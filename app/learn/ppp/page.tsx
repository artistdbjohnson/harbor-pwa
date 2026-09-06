import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Postpartum psychosis" };

const SIGNS = [
  "Seeing or hearing things other people do not",
  "Beliefs that will not yield — the baby is not yours, you are being watched, messages in the walls",
  "Confusion so thick that night and day trade places",
  "No sleep for a night or more, with energy that does not match",
  "Rapid speech, frantic plans, or a sudden calm that feels wrong to the people who know you",
  "Thoughts of harm that feel commanded, not just feared",
];

export default function PppPage() {
  return (
    <PageShell
      title="Postpartum psychosis"
      lead="Rare. Fast. Treatable. This is a medical emergency, not a character test."
    >
      <p className="border-[3px] border-alert bg-white px-4 py-4 text-sm leading-relaxed">
        If these signs are in the room, call 911 or go to an emergency department. Say
        “postpartum psychosis.” Do not wait for morning. Do not leave the person alone.
      </p>
      <ul className="space-y-2">
        {SIGNS.map((s) => (
          <li key={s} className="border-l-4 border-alert bg-white px-4 py-3 text-sm leading-relaxed">
            {s}
          </li>
        ))}
      </ul>
      <p className="leading-relaxed text-mute">
        Risk is higher with a personal or family history of bipolar disorder or previous
        postpartum psychosis. It often starts in the first two weeks after birth. With
        treatment — hospital care, medication, sleep, a team — people get well and parent
        the years that were supposed to come after this night.
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
