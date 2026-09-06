import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell title="That page is not here" lead="The numbers still work.">
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="border-[3px] border-ink px-4 py-3 text-sm font-semibold uppercase">Home</Link>
        <Link href="/help" className="bg-[#1565FF] px-4 py-3 text-sm font-semibold uppercase text-white">Get help</Link>
      </div>
    </PageShell>
  );
}
