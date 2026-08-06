import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import heroImage from "@/assets/hero-stationery.jpg";
import notebookImage from "@/assets/product-notebook.jpg";
import cardsImage from "@/assets/product-cards.jpg";
import penImage from "@/assets/product-pen.jpg";

const LUMA_EVENT_URL = "https://luma.com/5l796cbd";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Common Goods Stationery — Popup at The Collective Brew" },
      {
        name: "description",
        content:
          "Join Common Goods Stationery for a curated popup at The Collective Brew in Jersey City. Register on Luma to save your spot and get shop updates.",
      },
      {
        property: "og:title",
        content: "Common Goods Stationery — Popup at The Collective Brew",
      },
      {
        property: "og:description",
        content:
          "A curated stationery popup at The Collective Brew in Jersey City. Register on Luma to save your spot.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <EventSection />
        <ProductsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
          Common Goods
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#event" className="text-muted-foreground transition-colors hover:text-foreground">
            The Popup
          </a>
          <a href="#products" className="text-muted-foreground transition-colors hover:text-foreground">
            Products
          </a>
          <a href="#updates" className="text-muted-foreground transition-colors hover:text-foreground">
            Updates
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 font-heading text-sm font-medium uppercase tracking-widest text-primary">
          Stationery popup
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Paper, pens & coffee at The Collective Brew
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Common Goods Stationery is popping up in Jersey City. Come browse a curated selection of
          notebooks, cards, and writing tools over a cup of coffee.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer">
              Register on Luma
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#products">See the products</a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Date TBA — The Collective Brew, Jersey City</p>
      </div>

      <div className="mx-auto mt-12 max-w-7xl">
        <img
          src={heroImage}
          alt="A flat lay of artisan stationery, notebooks, and a coffee cup on warm terracotta and sage tones"
          width={1920}
          height={1080}
          className="h-auto w-full rounded-2xl object-cover shadow-sm"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}

function EventSection() {
  return (
    <section id="event" className="bg-secondary/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The popup
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A relaxed afternoon of stationery, coffee, and conversation. Save your spot and be the first to know
            when the date is locked in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <EventDetailCard icon={Calendar} label="Date" value="To be announced" />
          <EventDetailCard icon={Clock} label="Time" value="Afternoon hours TBA" />
          <EventDetailCard
            icon={MapPin}
            label="Location"
            value="The Collective Brew, Jersey City"
          />
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href={LUMA_EVENT_URL} target="_blank" rel="noopener noreferrer">
              Register on Luma
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function EventDetailCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className="mt-4 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-heading text-lg font-medium text-card-foreground">{value}</p>
    </div>
  );
}

function ProductsSection() {
  const products = [
    {
      name: "Daily notebook",
      description: "Hardcover kraft journal with a sage ribbon marker.",
      image: notebookImage,
    },
    {
      name: "Botanical cards",
      description: "Letterpress greeting cards in terracotta and sage.",
      image: cardsImage,
    },
    {
      name: "Brass & wood pen",
      description: "A weighted fountain pen that feels as good as it writes.",
      image: penImage,
    },
  ];

  return (
    <section id="products" className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Coming to the online shop
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A few pieces that will be available at the popup and in the store after launch.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden border-border bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-medium text-card-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (email.trim()) {
      setStatus("success");
      setEmail("");
    }
  }

  return (
    <section id="updates" className="bg-muted px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Stay in the loop
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get the event date, location details, and shop announcements when they drop.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="font-heading text-lg font-medium text-card-foreground">You're on the list.</p>
            <p className="mt-1 text-sm text-muted-foreground">We'll send updates as soon as the event is confirmed.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:max-w-sm"
              aria-label="Email address for updates"
            />
            <Button type="submit" size="lg">
              Get updates
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-heading text-lg font-semibold text-foreground">Common Goods Stationery</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Common Goods Stationery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
