import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell title="About Harbor" lead="A small public help surface for postpartum depression and postpartum psychosis.">
      <p className="leading-relaxed text-mute">
        Harbor exists so a person at 3 a.m. can find the difference between baby blues, depression, and psychosis without wading through ads. It is not a clinic, not a diagnostic tool, and not affiliated with Postpartum Support International, HRSA, or 988.
      </p>
      <p className="leading-relaxed text-mute">
        The campaign photographs are original stills made for this site. The visual language borrows the grit of public-health work — ordinary rooms, ordinary years — because the point of getting through the night is the ordinary years.
      </p>
      <p className="leading-relaxed text-mute">
        Built as an installable PWA. If something is wrong on the page, the numbers in the bar are still the product.
      </p>
    </PageShell>
  );
}
