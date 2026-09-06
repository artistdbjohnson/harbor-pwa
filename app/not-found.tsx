import Link from "next/link";
import PageShell from "@/components/PageShell";
export default function NotFound() {
  return (<PageShell title="That page is not here" lead="The numbers still work."><Link href="/help" className="bg-[#1565FF] px-4 py-3 text-sm font-semibold uppercase text-white">Get help</Link></PageShell>);
}
