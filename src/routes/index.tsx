import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Clock, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-pancakes.png";
import coffee from "@/assets/coffee.png";
import toast from "@/assets/french-toast.png";
import eggs from "@/assets/eggs-benedict.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Café Lélunar — Blacktown's beloved all-day café" },
      { name: "description", content: "Beautiful coffee, all-day breakfast and Mediterranean plates in Blacktown NSW. 4.2★ from 539 guests." },
    ],
  }),
});

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-10 bg-accent" /> Blacktown · Est. café culture
            </div>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95]">
              Slow mornings,<br/>
              <span className="italic text-accent">beautiful</span> plates.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              A neighbourhood café pouring honest coffee and serving all-day breakfast, Mediterranean classics, and the kind of pancakes worth the drive.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-widest hover:bg-accent transition-colors">
                See the menu <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link to="/visit" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
                Find us
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-accent text-accent" : "fill-accent/40 text-accent/40"}`} />)}
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">4.2 · 539 Google reviews</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-xs text-muted-foreground">
                <p className="font-medium text-foreground">Open today</p>
                <p>Closes 4:45 pm</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src={hero} alt="Pancake stack with fairy floss, figs and berries" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-background border border-border rounded-sm p-5 max-w-[220px] shadow-xl hidden md:block">
              <p className="font-display italic text-lg leading-snug">"Cozy ambiance, amazing staff."</p>
              <p className="text-xs text-muted-foreground mt-2">— Google review</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground rounded-full w-28 h-28 flex flex-col items-center justify-center text-center rotate-12">
              <span className="font-display text-3xl leading-none">4.2</span>
              <span className="text-[10px] uppercase tracking-widest mt-1">539 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-border bg-primary text-primary-foreground py-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] font-display text-2xl italic">
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex gap-12">
              {["Cappuccino", "Canadian Pancakes", "Eggs Benedict", "Lamb Souvlaki", "Avo Stack", "Hotcakes", "Salt & Pepper Squid", "Mocha"].map(t => (
                <span key={t} className="flex items-center gap-12">{t}<span className="text-accent">✦</span></span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">— Menu highlights</p>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">Made with care,<br/><em>plated with love.</em></h2>
          </div>
          <p className="text-muted-foreground max-w-md md:justify-self-end leading-relaxed">
            From fluffy Canadian pancakes crowned with fairy floss to silky eggs benedict, every dish is built from quality produce and a little bit of Lélunar magic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: toast, name: "Brioche French Toast", note: "Figs · chocolate · cream" },
            { img: eggs, name: "Eggs Benedict", note: "Smoked salmon or bacon" },
            { img: coffee, name: "Signature Cappuccino", note: "House blend, single origin" },
          ].map(d => (
            <article key={d.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-baseline justify-between mt-5">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <ArrowUpRight className="w-5 h-5 text-accent group-hover:rotate-45 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground mt-1">{d.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">What guests say</p>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight">
            "Great coffee, cozy ambiance, and <em className="text-accent">amazing staff</em> — it's rare to find somewhere so dedicated and genuine."
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">Google review · ★ ★ ★ ★ ★</p>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">— Come say hello</p>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">A corner of<br/><em>Blacktown.</em></h2>
          <div className="space-y-5 text-base">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium">Shop 2028/17 Patrick St</p>
                <p className="text-muted-foreground">Blacktown NSW 2148</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <p className="font-medium">Open daily</p>
                <p className="text-muted-foreground">Until 4:45 pm</p>
              </div>
            </div>
          </div>
          <Link to="/visit" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-widest hover:bg-accent transition-colors">
            Plan your visit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="aspect-square rounded-sm overflow-hidden">
          <img src={coffee} alt="Latte art cappuccino" className="w-full h-full object-cover" />
        </div>
      </section>
    </main>
  );
}
