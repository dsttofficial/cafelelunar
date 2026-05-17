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
      { name: "description", content: "All-day breakfast, toasted sandwiches, melts, coffee and Lélunar signature drinks in Blacktown NSW." },
      { property: "og:title", content: "Menu — Café Lélunar" },
      { property: "og:description", content: "Bruschetta, pancakes, melts, sandwiches and Lélunar signature lemonades." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

type Item = { name: string; desc?: string; price?: string; tag?: string };
type Section = { title: string; image?: string; note?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Bruschetta",
    image: toast,
    items: [
      { name: "Tomato Bruschetta", desc: "Tomato, Spanish onion, olive oil, fetta, drizzled with balsamic reduction on sourdough toast", price: "14.90" },
      { name: "Light Bruschetta", desc: "Tomato, avocado, ricotta cheese, basil pesto on sourdough toast", price: "14.90" },
      { name: "Brekky Bruschetta", desc: "Bacon, avocado & cherry tomato salsa, poached eggs & balsamic reduction on sourdough toast", price: "19.90", tag: "Popular" },
      { name: "Smoked Salmon", desc: "Avocado, capsicum, Spanish onion & rocket topped with herb mayo on sourdough toast", price: "20.90" },
    ],
  },
  {
    title: "Healthy",
    image: eggs,
    items: [
      { name: "Açaí Bowl", desc: "Seasonal fruits, coconut flakes, chia seed and granola", price: "18.90" },
      { name: "Granola and Yoghurt", desc: "Seasonal fruits, coconut flakes and granola", price: "18.90" },
      { name: "Healthy Brekky", desc: "Avocado, fetta, pesto, roasted tomato, Spanish onion, corn on multigrain", price: "17.90" },
    ],
  },
  {
    title: "Pancakes & Waffles",
    image: hero,
    items: [
      { name: "Pancake / Waffles", desc: "With crispy chicken served with sriracha butter and maple syrup", price: "22.90", tag: "Signature" },
      { name: "Fruity Pancake / Waffles", desc: "Seasonal fruits, maple syrup and ice cream", price: "19.90" },
      { name: "Just Pancake / Waffle", desc: "With maple syrup", price: "15.90" },
    ],
  },
  {
    title: "Toasted Sandwiches & Wraps",
    image: toast,
    note: "Sandwiches served on focaccia, white or multigrain bread",
    items: [
      { name: "Pesto Chicken", desc: "Grilled or crispy chicken, lettuce, cheese and home-made pesto sauce", price: "14.90" },
      { name: "Club Sandwich", desc: "Ham, egg, cheese, tomato, lettuce and plain mayo", price: "15.90" },
      { name: "Grilled Chicken & Avo", desc: "With lettuce, cheese and herb mayo", price: "14.90" },
      { name: "Crispy Chicken", desc: "With lettuce, tomato & aioli sauce", price: "14.90" },
      { name: "Roasted Eggplant", desc: "With roasted capsicum, grilled mushroom, lettuce and herb mayo", price: "14.90" },
      { name: "B.L.A.T", desc: "Bacon, lettuce, avocado, tomato & herb mayo", price: "14.90" },
      { name: "Ham & Cheese", desc: "With lettuce and aioli", price: "13.90" },
      { name: "Smoked Salmon", desc: "With cream cheese, onion, pickle", price: "15.90" },
    ],
  },
  {
    title: "Open Melts",
    image: eggs,
    items: [
      { name: "Plain Melt", price: "10.90" },
      { name: "Hawaiian Melt", price: "15.90" },
      { name: "Ham Melt", price: "14.90" },
      { name: "Mushroom Melt", price: "15.90" },
      { name: "Chicken & Avocado Melt", price: "17.90" },
      { name: "Tomato Melt", price: "11.90" },
      { name: "Avocado Melt", price: "14.90" },
      { name: "Bacon Melt", price: "15.90" },
      { name: "Chicken Melt", price: "15.90" },
    ],
  },
  {
    title: "Traditional Sandwiches",
    image: toast,
    note: "Served on white or multigrain",
    items: [
      { name: "Cheese", price: "8.90" },
      { name: "Ham, Cheese", price: "9.90" },
      { name: "Ham, Cheese, Tomato", price: "10.90" },
      { name: "Cheese, Tomato", price: "9.90" },
      { name: "Ham, Tomato", price: "9.90" },
    ],
  },
  {
    title: "Toast / Croissant / Focaccia",
    image: hero,
    note: "Add cheese +$1.00 · ham & cheese +$2.00 · ham, cheese & avocado +$3.00",
    items: [
      { name: "Banana Bread", price: "6.90" },
      { name: "Raisin (2pc)", price: "5.90" },
      { name: "White Bread / Multigrain / Turkish", price: "6.90" },
      { name: "English Muffin / Sourdough", price: "6.90" },
      { name: "Plain Croissant / Focaccia", price: "7.90" },
    ],
  },
  {
    title: "Coffee",
    image: coffee,
    note: "Extras: caramel, vanilla, hazelnut, extra shot, soy milk, almond milk, lactose-free milk, oat milk, decaf — $0.80",
    items: [
      { name: "Cappuccino", desc: "Sml $4.20 · Lrg $4.90", tag: "Popular" },
      { name: "Café Latte", desc: "Sml $4.20 · Lrg $4.90" },
      { name: "Flat White", desc: "Sml $4.20 · Lrg $4.90" },
      { name: "Long Black", desc: "Sml $4.20 · Lrg $4.90" },
      { name: "Café Mocha", desc: "Sml $4.70 · Lrg $5.20" },
      { name: "White Mocha", desc: "Sml $4.80 · Lrg $5.20" },
      { name: "Espresso", desc: "Sml $3.80" },
      { name: "Macchiato", desc: "Sml $4.20" },
      { name: "Piccolo Latte", desc: "Sml $4.20" },
      { name: "Vienna Coffee", desc: "Sml $4.70" },
      { name: "Affogato with Flavour", desc: "$6.50" },
    ],
  },
  {
    title: "Non-Caffeine & Teas",
    image: coffee,
    items: [
      { name: "Hot Chocolate", desc: "Sml $4.70 · Lrg $5.20" },
      { name: "White Chocolate", desc: "Sml $4.90 · Lrg $5.50" },
      { name: "Chai Latte", desc: "Sml $4.70 · Lrg $5.20" },
      { name: "Taro Latte", desc: "Sml $4.70 · Lrg $5.20" },
      { name: "Green Tea Latte", desc: "Sml $4.70 · Lrg $5.20" },
      { name: "Pot of Tea", desc: "English Breakfast · Earl Grey · Green Sencha · Peppermint · Chai · Jasmine · Chamomile", price: "5.00" },
    ],
  },
  {
    title: "Cold Beverages",
    image: coffee,
    items: [
      { name: "Milkshake (Kids)", price: "5.00" },
      { name: "Milkshake", desc: "Chocolate, strawberry, caramel, vanilla, banana, lime", price: "7.00" },
      { name: "Thickshake", price: "8.00" },
      { name: "Iced Chocolate / Coffee / Mocha / Green Tea / Taro / Milo", desc: "With whipped cream and ice cream", price: "8.00" },
      { name: "Iced Chai", price: "8.00" },
      { name: "Iced Latte / Long Black", desc: "No whipped cream or ice cream", price: "7.00" },
      { name: "Iced Tea", desc: "Peach or Berry", price: "8.00" },
      { name: "Frosty Lemonade", desc: "Mango or Berry", price: "8.00" },
      { name: "Smoothies", desc: "Mango, Berry or Banana", price: "8.50" },
      { name: "Frappés", desc: "Mango or Berry", price: "8.00" },
    ],
  },
  {
    title: "Lélunar Signature",
    image: hero,
    items: [
      { name: "Blue Lemonade", price: "8.00", tag: "Signature" },
      { name: "Hibiscus Grapefruit", price: "8.00" },
      { name: "Hibiscus Lemonade", price: "8.00" },
      { name: "Green Grapes & Apple", price: "8.00" },
      { name: "Green Apple Lemonade", price: "8.00" },
    ],
  },
  {
    title: "Fresh Juice",
    image: coffee,
    note: "No ice — $1.00 extra",
    items: [
      { name: "Orange Juice", price: "8.00" },
      { name: "Apple Juice", price: "8.00" },
      { name: "Watermelon Juice", price: "8.00" },
      { name: "Apple, Beetroot, Celery & Carrot", price: "8.50" },
    ],
  },
];

function MenuPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">— The menu</p>
        <h1 className="font-display text-6xl md:text-7xl leading-[0.95]">From dawn<br/><em>to dusk.</em></h1>
        <p className="mt-6 text-muted-foreground">All-day breakfast. Toasted sandwiches and melts from open to close. Coffee, signature lemonades and fresh juice. Please order and pay at the counter — 1% EFTPOS and 10% public holiday surcharge applies.</p>
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
              <h2 className="font-display text-4xl md:text-5xl mb-4 flex items-baseline gap-4">
                <span className="text-accent text-base">{String(idx + 1).padStart(2, "0")}</span>
                <em>{sec.title}</em>
              </h2>
              {sec.note && <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">{sec.note}</p>}
              <ul className="divide-y divide-border">
                {sec.items.map(item => (
                  <li key={item.name} className="py-5 flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
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
