import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">This page wandered off the menu.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something spilled.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Café Lélunar — Blacktown's beloved all-day café" },
      { name: "description", content: "Café Lélunar in Blacktown NSW serves beautiful coffee, all-day breakfast, and Mediterranean plates. Open daily until 4:45pm." },
      { property: "og:title", content: "Café Lélunar — Blacktown" },
      { property: "og:description", content: "All-day breakfast, beautiful coffee and warm hospitality in Blacktown NSW." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Café Lélunar" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        name: "Café Lélunar",
        address: { "@type": "PostalAddress", streetAddress: "Shop 2028/17 Patrick St", addressLocality: "Blacktown", addressRegion: "NSW", postalCode: "2148", addressCountry: "AU" },
        telephone: "+61296212466",
        priceRange: "$20–40",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.2", reviewCount: "539" },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}
