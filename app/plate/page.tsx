import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
export const metadata: Metadata = { title: "Educational plate" };
export default function PlatePage() {
  return (<><Nav tone="page" /><main className="bg-[#0B1F3A] px-5 pb-28 pt-28 text-[#B8DCFF]"><p className="text-[11px] font-semibold uppercase tracking-[0.18em]">Educational plate</p><p className="hero-box mt-6 font-display text-5xl uppercase text-white">After</p><h1 className="mt-6 font-display text-3xl uppercase">You know the baby blues.</h1><p className="mt-6 max-w-lg">If reality slips after a birth, call 911. Say postpartum psychosis.</p></main></>);
}
