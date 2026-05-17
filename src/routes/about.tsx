import { createFileRoute } from "@tanstack/react-router";
import coffee from "@/assets/coffee.png";
import toast from "@/assets/french-toast.png";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Café Lélunar" },
      { name: "description", content: "The story behind Café Lélunar — a neighbourhood café in Blacktown built on hospitality, quality, and a love of coffee." },
      { property: "og:title", content: "About — Café Lélunar" },
      { property: "og:description", content: "Hospitality, quality and a love of coffee in Blacktown NSW." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">— Our story</p>
      <h1 className="font-display text-6xl md:text-8xl leading-[0.95] max-w-4xl">A café built on<br/><em className="text-accent">warmth.</em></h1>

      <div className="grid md:grid-cols-12 gap-12 mt-20 items-start">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>Café Lélunar opened its doors to bring a slower, more considered kind of café experience to Blacktown — somewhere guests could linger over coffee, share a long breakfast, and always be greeted by name.</p>
          <p>Our kitchen draws from Mediterranean roots and classic Australian café fare. We bake our pastries fresh, plate every dish with care, and treat each cup of coffee like it matters — because it does.</p>
          <p className="font-display italic text-2xl text-accent">"It's rare to find someone so dedicated and genuine in customer service."</p>
          <p className="text-sm text-muted-foreground">— from a recent Google review</p>
        </div>
        <div className="md:col-span-5 space-y-6">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={toast} alt="Plated brioche french toast" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-sm ml-12">
            <img src={coffee} alt="Coffee with rosetta latte art" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-24 grid sm:grid-cols-3 gap-8 border-t border-border pt-16">
        {[
          { n: "4.2", l: "Google rating" },
          { n: "539", l: "Happy reviews" },
          { n: "92", l: "Locals reporting prices" },
        ].map(s => (
          <div key={s.l}>
            <div className="font-display text-6xl text-accent">{s.n}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
