import type { Metadata } from "next";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = { title: "Educational plate" };

export default function PlatePage() {
  return (
    <>
      <Nav tone="page" />
      <main className="bg-[#0B1F3A] px-5 pb-28 pt-28 text-[#B8DCFF] sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Educational plate</p>
        <p className="hero-box mt-6 font-display text-5xl uppercase text-white">After</p>
        <h1 className="mt-6 max-w-xl font-display text-3xl uppercase leading-tight text-[#B8DCFF]">
          You know the baby blues.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85">
          If reality slips after a birth — voices, strange beliefs, lost time — it may be postpartum psychosis. Call 911. Say the words.
        </p>
        <p className="mt-10 max-w-lg text-xs leading-relaxed text-white/55">
          Not affiliated with Teva or any manufacturer. Not medical advice. Talk with a healthcare provider.
        </p>
      </main>
    </>
  );
}
