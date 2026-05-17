import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function SiteHeader() {
  const linkCls = "text-sm tracking-wide uppercase hover:text-accent transition-colors";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight">
          Café <span className="italic text-accent">Lélunar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: linkCls + " text-accent" }}>Home</Link>
          <Link to="/menu" className={linkCls} activeProps={{ className: linkCls + " text-accent" }}>Menu</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: linkCls + " text-accent" }}>About</Link>
          <Link to="/visit" className={linkCls} activeProps={{ className: linkCls + " text-accent" }}>Visit</Link>
        </nav>
        <a href="tel:0296212466" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs tracking-widest uppercase hover:bg-accent transition-colors">
          <Phone className="w-3.5 h-3.5" /> Call
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-3xl">Café Lélunar</h3>
          <p className="mt-3 text-sm opacity-80 max-w-xs">A neighbourhood café in Blacktown serving honest food, beautiful coffee, and a warm welcome.</p>
        </div>
        <div className="text-sm space-y-2 opacity-90">
          <p className="uppercase tracking-widest text-xs opacity-60 mb-3">Find us</p>
          <p>Shop 2028/17 Patrick St</p>
          <p>Blacktown NSW 2148</p>
          <p>(02) 9621 2466</p>
        </div>
        <div className="text-sm space-y-2 opacity-90">
          <p className="uppercase tracking-widest text-xs opacity-60 mb-3">Hours</p>
          <p>Mon – Fri · 7:00 – 4:45</p>
          <p>Sat – Sun · 7:30 – 4:45</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} Café Lélunar · Blacktown</div>
    </footer>
  );
}
