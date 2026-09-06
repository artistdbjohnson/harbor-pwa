import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return (
    <PageShell title="About Harbor" lead="A small public help surface for postpartum depression and postpartum psychosis.">
      <p className="leading-relaxed text-mute">Not a clinic. Not a diagnostic tool. Not affiliated with PSI, HRSA, or 988. The numbers in the bar are the product.</p>
    </PageShell>
  );
}
