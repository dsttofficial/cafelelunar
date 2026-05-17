import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-pancakes.png";
import coffee from "@/assets/coffee.png";
import toast from "@/assets/french-toast.png";
import eggs from "@/assets/eggs-benedict.png";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Café Lélunar" },
      { name: "description", content: "All-day breakfast, Mediterranean classics, coffee, and sweets at Café Lélunar in Blacktown NSW." },
      { property: "og:title", content: "Menu — Café Lélunar" },
      { property: "og:description", content: "From Canadian pancakes to lamb souvlaki — explore the Lélunar menu." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

type Item = { name: string; desc?: string; price?: string; tag?: string };

const sections: { title: string; image?: string; items: Item[] }[] = [
  {
    title: "All-Day Breakfast",
    image: eggs,
    items: [
      { name: "Eggs Benedict", desc: "Poached eggs, smoked salmon or bacon, hollandaise", price: "24" },
      { name: "Scrambled Eggs", desc: "Free-range eggs, sourdough toast", price: "16", tag: "Popular" },
      { name: "Avo Stack", desc: "Smashed avocado, feta, heirloom tomato, seeds", price: "22" },
      { name: "Bacon & Egg Roll", desc: "Brioche bun, crispy bacon, BBQ relish", price: "14" },
      { name: "Canadian Bacon", desc: "Maple-glazed bacon, hash, two eggs", price: "23" },
      { name: "Steak & Egg", desc: "Grilled steak, asparagus, hollandaise", price: "32" },
    ],
  },
  {
    title: "Sweet Things",
    image: hero,
    items: [
      { name: "Canadian Pancakes", desc: "Maple syrup, berries, double cream", price: "21", tag: "Signature" },
      { name: "Hotcakes with Fairy Floss", desc: "Caramelised banana, seasonal fruit, fairy floss", price: "24" },
      { name: "Brioche French Toast", desc: "Figs, berries, chocolate drizzle, mascarpone", price: "23" },
      { name: "Macaroons", desc: "Selection of four", price: "12" },
      { name: "Ham & Cheese Croissant", desc: "All-butter pastry, leg ham, gruyère", price: "11" },
    ],
  },
  {
    title: "Mediterranean & Mains",
    image: toast,
    items: [
      { name: "Lamb Souvlaki", desc: "Marinated lamb, pita, tzatziki, salad", price: "26" },
      { name: "Penne Boscaiola", desc: "Bacon, mushroom, cream, parmesan", price: "24" },
      { name: "Salt & Pepper Squid", desc: "Lemon aioli, rocket", price: "22" },
      { name: "Seafood Basket", desc: "Squid, prawns, fish, chips, tartare", price: "28" },
      { name: "Chicken Burger & Fries", desc: "Buttermilk chicken, slaw, chipotle mayo", price: "23" },
      { name: "Grilled Vegetable Sandwich", desc: "Sourdough, pesto, halloumi", price: "18" },
      { name: "Chicken Roll", desc: "Grilled chicken, aioli, cos lettuce", price: "15" },
    ],
  },
  {
    title: "Coffee & Drinks",
    image: coffee,
    items: [
      { name: "Cappuccino", desc: "House blend, velvety microfoam", price: "5", tag: "Popular" },
      { name: "Mocha", desc: "Espresso, chocolate, steamed milk", price: "5.5" },
      { name: "Flat White", price: "5" },
      { name: "Long Black", price: "4.5" },
      { name: "Chai Latte", desc: "Spiced loose-leaf", price: "5.5" },
      { name: "Iced Latte", price: "6" },
    ],
  },
];

function MenuPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">— The menu</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">From dawn<br/><em>to dusk.</em></h1>
        <p className="mt-6 text-muted-foreground">Breakfast served all day. Lunch from 11. Coffee from open to close. $20–40 per person.</p>
      </div>

      <div className="space-y-28">
        {sections.map((sec, idx) => (
          <section key={sec.title} className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={sec.image} alt={sec.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl md:text-5xl mb-10 flex items-baseline gap-4">
                <span className="text-accent text-base">0{idx + 1}</span>
                <em>{sec.title}</em>
              </h2>
              <ul className="divide-y divide-border">
                {sec.items.map(item => (
                  <li key={item.name} className="py-5 flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl">{item.name}</h3>
                        {item.tag && <span className="text-[10px] uppercase tracking-widest bg-accent text-accent-foreground px-2 py-0.5 rounded-full">{item.tag}</span>}
                      </div>
                      {item.desc && <p className="text-sm text-muted-foreground mt-1 max-w-md">{item.desc}</p>}
                    </div>
                    {item.price && <span className="font-display text-xl text-accent shrink-0">${item.price}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
