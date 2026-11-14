import Link from "next/link";
import { PropertyImage } from "@/components/media/property-image";
import { PropertyCard } from "@/components/property/property-card";
import { SearchWidget } from "@/components/search/search-widget";
import { FaqSection } from "@/components/marketing/faq-section";
import { PartnersStrip } from "@/components/marketing/partners-strip";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { getFeaturedProperties, localities } from "@/data/mock/properties";
import { getPublishedTestimonials } from "@/data/mock/reviews";
import { faqs } from "@/data/mock/faqs";
import { brand, whatsappLink, whyUs } from "@/lib/brand";
import { brandImages } from "@/lib/media";
import { StarRating } from "@/components/property/property-meta";

const pillars = [
  {
    title: "Buy with clarity",
    desc: "Verified listings, fair pricing advice, and paperwork support through registration.",
  },
  {
    title: "Sell with confidence",
    desc: "Honest valuation and serious buyer outreach — without marketplace noise.",
  },
  {
    title: "Rent & lease simply",
    desc: "Homes and commercial spaces matched carefully for owners and tenants.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 6);
  const testimonials = getPublishedTestimonials().slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-accent text-accent-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 72px, currentColor 72px, currentColor 73px)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, white 18%, transparent), transparent 55%)",
          }}
          aria-hidden
        />

        <div className="container-page relative flex flex-col items-center px-4 pb-14 pt-16 text-center sm:pb-16 sm:pt-20 animate-fade-up">
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-accent-foreground/80 uppercase sm:text-xs">
            <span className="hidden h-px w-10 bg-accent-foreground/35 sm:block" aria-hidden />
            Top property advisors in Udaipur
            <span className="hidden h-px w-10 bg-accent-foreground/35 sm:block" aria-hidden />
          </p>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.15] text-accent-foreground/95 sm:text-5xl lg:text-6xl">
            Find your{" "}
            <em className="italic font-normal text-accent-foreground/95">perfect</em>{" "}
            property in Udaipur
          </h1>

          <p className="mt-5 max-w-2xl text-base text-accent-foreground/85 text-balance sm:text-lg">
            Buy, sell or rent with {brand.name} — verified listings, clear local advice, and
            guidance from first visit to registration.
          </p>

          <div className="mt-10 w-full max-w-4xl text-left text-foreground">
            <SearchWidget variant="hero" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-accent-foreground/80">
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase">
              Popular
            </span>
            {localities.slice(0, 5).map((locality) => (
              <Link
                key={locality}
                href={`/properties?locality=${encodeURIComponent(locality)}`}
                className="underline-offset-4 transition-opacity hover:text-accent-foreground hover:underline"
              >
                {locality}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-8">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: `${brand.stats.years}+`, label: "Years advising" },
              {
                value: `${brand.stats.clients.toLocaleString("en-IN")}+`,
                label: "Families & investors",
              },
              { value: `${brand.stats.localities}+`, label: "Localities" },
              { value: `${brand.stats.listings}+`, label: "Active listings" },
            ].map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="font-serif text-2xl text-foreground sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl">Featured properties</h2>
                <p className="mt-2 text-muted">Homes, villas and rentals across Udaipur.</p>
              </div>
              <ButtonLink href="/properties" variant="outline">
                View all
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property, i) => (
              <Reveal key={property.id} delayMs={i * 40}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl sm:text-4xl text-secondary-foreground">
                How we help
              </h2>
              <p className="mt-3 text-secondary-foreground/70">
                Local knowledge, verified listings, and one advisor with you from shortlist to handover.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.title} className="border-t border-secondary-foreground/20 pt-6">
                <h3 className="font-serif text-xl text-secondary-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink
              href="/services"
              variant="outline"
              className="border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              See all services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl sm:text-4xl">Why clients choose us</h2>
              <p className="mt-3 text-muted">
                RERA-aware shortlists, NRI-ready process, and support that continues past the
                handshake.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersStrip />

      <section className="section-padding">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-xl">
            <PropertyImage
              src={brandImages.about}
              alt={brand.founder.name}
              className="rounded-xl"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Meet the founder
            </p>
            <h2 className="mt-2 font-serif text-3xl">{brand.founder.name}</h2>
            <p className="mt-1 text-muted">{brand.founder.title}</p>
            <p className="mt-4 leading-relaxed text-muted">
              {brand.founder.experienceYears}+ years in Udaipur&apos;s market and{" "}
              {brand.founder.clientsServed.toLocaleString("en-IN")}+ clients served — with
              transparent advice and end-to-end support.
            </p>
            <ButtonLink href="/about" variant="outline" className="mt-6">
              Our story
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-serif text-3xl sm:text-4xl text-secondary-foreground">
              Client stories
            </h2>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-highlight hover:underline"
            >
              Read all testimonials
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((review) => (
              <div key={review.id} className="border-t border-secondary-foreground/20 pt-6">
                <StarRating rating={review.rating} />
                <p className="mt-4 text-sm leading-relaxed text-secondary-foreground">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-secondary-foreground">
                  {review.guestName}
                </p>
                <p className="text-xs text-secondary-foreground/65">{review.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={faqs} />

      <section className="section-padding bg-hero-overlay text-background">
        <div className="container-page text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-background">
            Ready to talk property?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-background/70">
            Share your budget and locality — we&apos;ll shortlist options and arrange visits.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Book consultation
            </ButtonLink>
            <ButtonLink
              href={whatsappLink("Hi, I'd like help finding a property in Udaipur.")}
              variant="inverse"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp an advisor
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
