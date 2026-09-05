import Link from "next/link";
import { Nav } from "@/components/Nav";

const ZONES = [
  { t: "Mood and sleep", src: "/zones/mood.svg", pos: "col-start-1 row-start-1" },
  { t: "Appetite and energy", src: "/zones/energy.svg", pos: "col-start-3 row-start-1" },
  { t: "Thoughts about the baby", src: "/zones/baby.svg", pos: "col-start-2 row-start-2" },
  { t: "Sense of time", src: "/zones/time.svg", pos: "col-start-1 row-start-3" },
  { t: "What is real", src: "/zones/real.svg", pos: "col-start-3 row-start-3" },
];

const FUTURE = [
  { t: "Tee-ball Saturdays", src: "/campaign-teeball.jpg", alt: "A child at tee-ball dusk. A parent on the sideline. Ordinary and enormous." },
  { t: "Recital wings", src: "/campaign-ballet.jpg", alt: "Recital wings. A mother tying a slipper. Pride, not performance." },
  { t: "School-play bow", src: "/campaign-play.jpg", alt: "School-play bow. A parent in the aisle with flowers." },
  { t: "Good grades", src: "/campaign-grades.jpg", alt: "Kitchen table homework. A report card on the fridge." },
  { t: "Blue-hour dock", src: "/campaign-fishing.jpg", alt: "Blue-hour dock. A kid and a parent fishing. Quiet on purpose." },
  { t: "The hug", src: "/campaign-grad-hs.jpg", alt: "High-school graduation parking lot. The hug is the headline." },
  { t: "Years-later table", src: "/campaign-table.jpg", alt: "Years-later dinner. The baby is a kid passing a plate." },
  { t: "Commencement", src: "/campaign-grad-college.jpg", alt: "Campus lawn after commencement. A parent holding the program." },
];

export default function HomePage() {
  return (
    <>
      <Nav tone="hero" />

      <section className="relative bg-[#041536]">
        <img
          src="/campaign-hero.jpg"
          alt="Three mothers in a pre-dawn living room, planted like a line. Hoodies, cardigans, a sleeping infant in a wrap. No uniforms."
          className="h-[58vh] w-full object-cover object-[center_28%] sm:h-[72vh]"
        />
      </section>

      <section className="bg-[#0B1F3A] px-5 pb-10 pt-6 text-white sm:px-8">
        <p className="hero-box font-display text-5xl uppercase leading-[0.82] tracking-tight sm:text-7xl">
          After
        </p>
        <h1 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-[#B8DCFF] sm:text-5xl">
          You know the baby blues.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
          But if the ground gives way, it might be the other emergency —{" "}
          <span className="font-semibold text-[#B8DCFF]">postpartum psychosis</span>.
        </p>
      </section>

      <section className="bg-[#B8DCFF] px-5 py-8 text-[#0B1F3A] sm:px-8">
        <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed sm:text-lg">
          If you just had a baby and the sadness, rage, or sleeplessness will
          not lift, it could be postpartum depression. If reality itself slips —
          voices, strange beliefs, lost time — it could be postpartum psychosis.
          Both can be treated. One is an emergency.
        </p>
      </section>

      <section className="bg-[#0B1F3A] px-5 py-12 text-[#B8DCFF] sm:px-8">
        <h2 className="mx-auto max-w-md text-center font-cond text-xl tracking-[0.14em] sm:text-2xl">
          Signs can show up in the:
        </h2>
        <div className="mx-auto mt-10 grid max-w-md grid-cols-3 grid-rows-3 items-center justify-items-center gap-y-8">
          {ZONES.map((z) => (
            <figure key={z.t} className={`${z.pos} flex flex-col items-center gap-2 text-center`}>
              <img src={z.src} alt="" className="h-16 w-16" />
              <figcaption className="max-w-[7rem] text-sm font-medium text-white">
                {z.t}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-md">
          <Link
            href="/learn/difference"
            className="flex items-center justify-between border-[3px] border-[#B8DCFF] px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white"
          >
            See how they differ
            <span aria-hidden>›</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#F5F8FC] px-5 py-12 text-[#0B1F3A] sm:px-8">
        <p className="mx-auto max-w-md text-lg leading-relaxed">
          Even if the change feels mild, team up with your healthcare provider.
        </p>
        <p className="mx-auto mt-3 max-w-md text-lg font-semibold">
          Depression and psychosis can be treated. You do not have to wait for a courtroom.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <Link
            href="/help"
            className="flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white"
          >
            Get help now
            <span aria-hidden>›</span>
          </Link>
        </div>
      </section>

      <section className="relative bg-[#1565FF]">
        <img
          src="/campaign-mid.jpg"
          alt="One mother in a coat over pajamas standing in an empty pediatric waiting room at night. Baby carrier on the chair behind her. Stillness is the fight."
          className="h-[64vh] w-full object-cover object-[center_20%] sm:h-[72vh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1565FF] via-[#1565FF]/20 to-transparent" />
      </section>

      <section className="bg-[#F5F8FC] px-5 py-12 text-[#0B1F3A] sm:px-8">
        <p className="hope-kicker font-display text-4xl uppercase tracking-tight sm:text-6xl">
          There is a light.
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3D5A80]">
          Treatment works. The years after this night are supposed to be ordinary and good.
        </p>
        <figure className="mx-auto mt-8 max-w-5xl overflow-hidden">
          <img
            src="/campaign-light.jpg"
            alt="A child running toward a parent at ice dawn. Light at the end."
            className="h-[42vh] w-full object-cover object-center sm:h-[48vh]"
          />
        </figure>
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {FUTURE.map((f) => (
            <figure key={f.t} className="hope-card aspect-[4/5] sm:aspect-[3/4]">
              <img src={f.src} alt={f.alt} className="h-full w-full object-cover" />
              <figcaption className="hope-cap">{f.t}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative bg-[#0B1F3A]">
        <img
          src="/campaign-future.jpg"
          alt="Years later. Same family. Kids in motion in the yard. The fight was for this."
          className="h-[64vh] w-full object-cover object-[center_30%] sm:h-[78vh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/10 to-transparent" />
      </section>

      <section className="bg-[#0B1F3A] px-5 py-12 text-[#B8DCFF] sm:px-8">
        <p className="mx-auto max-w-md text-lg leading-relaxed text-white">
          This night is not the whole story. Get help so they get the rest of it.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <Link
            href="/help"
            className="flex items-center justify-between bg-[#1565FF] px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white"
          >
            Get help now
            <span aria-hidden>›</span>
          </Link>
        </div>
      </section>
    </>
  );
}
