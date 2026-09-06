import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CheckIn from "@/components/CheckIn";
export const metadata: Metadata = { title: "Check-in" };
export default function CheckInPage() {
  return (
    <PageShell title="A quiet check-in" lead="This is not a diagnosis. If anything here is loud, get a human on the phone.">
      <CheckIn />
    </PageShell>
  );
}
