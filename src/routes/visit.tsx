import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/visit")({
  component: Visit,
  head: () => ({
    meta: [
      { title: "Visit — Café Lélunar, Blacktown" },
      { name: "description", content: "Find Café Lélunar at Shop 2028/17 Patrick St, Blacktown NSW 2148. Open daily until 4:45 pm. Call (02) 9621 2466." },
      { property: "og:title", content: "Visit Café Lélunar" },
      { property: "og:description", content: "Shop 2028/17 Patrick St, Blacktown NSW. Open daily until 4:45 pm." },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
  }),
});

function Visit() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">— Visit us</p>
      <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">Come for coffee,<br/><em>stay a while.</em></h1>

      <div className="grid lg:grid-cols-2 gap-12 mt-20">
        <div className="space-y-10">
          {[
            { icon: MapPin, title: "Address", lines: ["Shop 2028/17 Patrick St", "Blacktown NSW 2148"] },
            { icon: Phone, title: "Phone", lines: ["(02) 9621 2466"] },
            { icon: Clock, title: "Hours", lines: ["Mon – Fri · 7:00 am – 4:45 pm", "Sat – Sun · 7:30 am – 4:45 pm"] },
          ].map(b => (
            <div key={b.title} className="flex gap-6 border-b border-border pb-8">
              <b.icon className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{b.title}</p>
                {b.lines.map(l => <p key={l} className="font-display text-2xl leading-snug">{l}</p>)}
              </div>
            </div>
          ))}
          <div className="flex gap-4">
            <a href="tel:0296212466" className="rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-widest hover:bg-accent transition-colors">Call us</a>
            <a target="_blank" rel="noopener" href="https://maps.google.com/?q=Shop+2028/17+Patrick+St,+Blacktown+NSW+2148" className="rounded-full border border-foreground px-6 py-3.5 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">Get directions</a>
          </div>
        </div>

        <div className="aspect-square lg:aspect-auto rounded-sm overflow-hidden border border-border">
          <iframe
            title="Map to Café Lélunar"
            className="w-full h-full min-h-[500px] grayscale-[0.4]"
            src="https://www.google.com/maps?q=Shop+2028%2F17+Patrick+St,+Blacktown+NSW+2148&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
