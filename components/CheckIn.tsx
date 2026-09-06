"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const QUESTIONS = [
  { id: "mood", q: "Has your mood stayed heavy, empty, or sharp for more than two weeks?" },
  { id: "sleep", q: "When the baby sleeps, can you sleep — or does the night refuse you?" },
  { id: "bond", q: "Do you feel far from the baby, or afraid you will fail them?" },
  { id: "harm", q: "Have you had thoughts of disappearing, or of harm coming to you or the baby?" },
  { id: "real", q: "Has reality slipped — voices, strange beliefs, lost time, the baby not being the baby?" },
];

type Ans = "yes" | "no" | "unsure" | null;

export default function CheckIn() {
  const [answers, setAnswers] = useState<Record<string, Ans>>({});
  const done = QUESTIONS.every((q) => answers[q.id]);
  const flag = useMemo(() => {
    if (answers.real === "yes") return "psychosis";
    if (answers.harm === "yes") return "urgent";
    const weight = QUESTIONS.filter((q) => answers[q.id] === "yes" || answers[q.id] === "unsure").length;
    if (weight >= 2) return "depression";
    if (done) return "ok";
    return null;
  }, [answers, done]);

  return (
    <div className="space-y-6">
      {QUESTIONS.map((item) => (
        <fieldset key={item.id} className="border-[3px] border-ink bg-white p-4">
          <legend className="px-1 text-sm font-semibold">{item.q}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["yes", "no", "unsure"] as const).map((opt) => {
              const on = answers[item.id] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAnswers((a) => ({ ...a, [item.id]: opt }))}
                  className={
                    on
                      ? "bg-[#1565FF] px-3 py-2 text-xs font-semibold uppercase text-white"
                      : "border-[3px] border-ink px-3 py-2 text-xs font-semibold uppercase"
                  }
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </fieldset>
      ))}
      {flag === "psychosis" && (
        <aside className="border-[3px] border-alert bg-white p-5">
          <p className="font-display text-2xl">This is the emergency door.</p>
          <p className="mt-2 text-sm leading-relaxed">
            Reality slipping is postpartum psychosis until a clinician says otherwise. Call 911 or go to an ER. Say the words. Do not wait.
          </p>
          <a href="tel:911" className="mt-4 inline-block bg-[#1565FF] px-4 py-3 text-sm font-semibold uppercase text-white">Call 911</a>
        </aside>
      )}
      {flag === "urgent" && (
        <aside className="border-[3px] border-alert bg-white p-5">
          <p className="font-display text-2xl">Get a person on the line.</p>
          <p className="mt-2 text-sm leading-relaxed">Thoughts of harm are a reason to call today, not a reason to be ashamed.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="tel:988" className="bg-[#1565FF] px-4 py-3 text-sm font-semibold uppercase text-white">Call 988</a>
            <a href="tel:18338526262" className="border-[3px] border-ink px-4 py-3 text-sm font-semibold uppercase">1-833-852-6262</a>
          </div>
        </aside>
      )}
      {flag === "depression" && (
        <aside className="border-[3px] border-ink bg-white p-5">
          <p className="font-display text-2xl">Tell a clinician this week.</p>
          <p className="mt-2 text-sm leading-relaxed text-mute">More than one of these holding on is how postpartum depression often looks. It is treatable. You do not have to prove it first.</p>
          <Link href="/help" className="mt-4 inline-block bg-[#1565FF] px-4 py-3 text-sm font-semibold uppercase text-white">Get help now</Link>
        </aside>
      )}
      {flag === "ok" && (
        <aside className="border-[3px] border-ink bg-fog p-5">
          <p className="font-display text-2xl">Keep the number anyway.</p>
          <p className="mt-2 text-sm leading-relaxed text-mute">A quiet week is not a promise. If the ground gives way later, the numbers on this site still work at 3 a.m.</p>
        </aside>
      )}
      <p className="text-xs leading-relaxed text-mute">Not a screening instrument and not the Edinburgh scale. Answers stay on this device.</p>
    </div>
  );
}
