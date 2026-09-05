import { Nav } from '@/components/Nav';

export default function PageShell({
  children,
  title,
  lead,
}: {
  children: React.ReactNode;
  title: string;
  lead?: string;
}) {
  return (
    <>
      <Nav tone="page" />
      <main className="pt-24 pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink">{title}</h1>
          {lead && <p className="mt-4 text-lg text-mute max-w-measure">{lead}</p>}
          <div className="mt-10 space-y-8">{children}</div>
        </div>
      </main>
    </>
  );
}
