import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <PageShell
      title="If you live with them"
      lead="Partners, parents, friends. You are often the first person who notices the ground moving."
    >
      <section>
        <h2 className="font-display text-2xl">Watch for the shift</h2>
        <p className="mt-3 leading-relaxed text-mute">
          Not “she is tired.” Tired is the job. Watch for a person who is not reachable inside their own face. Watch for no sleep, new beliefs, rage that scares them too, or a sudden serenity that does not belong.
        </p>
      </section>
      <section>
        <h2 className="font-display text-2xl">What to do</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          <li>Name it without debate. “I think this is postpartum. We are getting help today.”</li>
          <li>If reality has slipped, call 911. Stay. Bring the baby only if a second adult can hold them.</li>
          <li>If it is mood that will not lift, call 1-833-852-6262 with them in the room.</li>
          <li>Take over nights for one stretch so they can sleep in a dark room. Sleep is treatment.</li>
          <li>Do not leave them alone with the baby if you are afraid. That is protection, not accusation.</li>
        </ol>
      </section>
      <section>
        <h2 className="font-display text-2xl">What not to say</h2>
        <p className="mt-3 leading-relaxed text-mute">
          “Enjoy every minute.” “Other people have it worse.” “It is just hormones.” Those sentences close the door you need open.
        </p>
      </section>
      <Link href="/help" className="flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white">
        Numbers to call
        <span aria-hidden>›</span>
      </Link>
    </PageShell>
  );
}
