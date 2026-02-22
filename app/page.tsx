import Link from "next/link"
import { ArrowRight, Smartphone, Battery, Wrench, Monitor, Cpu, ChevronRight, Zap } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts, getLatestProducts, brands } from "@/lib/data"

const promoSlides = [
  {
    title: "GX COF InCell",
    subtitle: "Official GX Partner",
    description: "Premium quality LCD screens at wholesale prices. Free shipping on all orders.",
    cta: "Shop Now",
    href: "/category/gx",
    accent: true,
  },
  {
    title: "iPhone Soft OLED",
    subtitle: "White Box Edition",
    description: "Original color quality displays for all iPhone models. Tested and certified.",
    cta: "View Products",
    href: "/category/lcd-iphone",
    accent: false,
  },
]

const categoryBlocks = [
  { name: "LCD Screens", description: "iPhone, Samsung, Xiaomi & more", icon: Monitor, href: "/category/lcd", count: "15,000+" },
  { name: "GX / MT Tech", description: "Official GX partner products", icon: Cpu, href: "/category/gx", count: "2,000+" },
  { name: "Batteries", description: "All brands and models", icon: Battery, href: "/category/battery", count: "3,000+" },
  { name: "Parts & Tools", description: "Repair tools, cables, covers", icon: Wrench, href: "/category/parts", count: "5,000+" },
]

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const latestProducts = getLatestProducts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="grid gap-3 md:grid-cols-2">
              {promoSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden p-8 ${
                    slide.accent
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  <div className="relative z-10">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
                      {slide.subtitle}
                    </p>
                    <h2 className="mb-3 text-2xl font-black tracking-tight md:text-3xl text-balance">
                      {slide.title}
                    </h2>
                    <p className="mb-5 max-w-xs text-sm leading-relaxed opacity-70">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                        slide.accent
                          ? "bg-card text-card-foreground hover:bg-card/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      {slide.cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <Smartphone className="absolute -bottom-6 -right-6 h-44 w-44 opacity-[0.07]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Announcement Bar */}
        <section className="bg-accent">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-accent-foreground whitespace-nowrap overflow-x-auto">
            <span className="flex items-center gap-1.5"><Zap className="h-3 w-3" />Free Shipment</span>
            <span className="opacity-30">|</span>
            <span>High Quality</span>
            <span className="opacity-30">|</span>
            <span>Very Low Price</span>
            <span className="opacity-30">|</span>
            <span className="hidden sm:inline">WhatsApp +31 651 919 833 / +31 38 337 3797</span>
          </div>
        </section>

        {/* Category Blocks */}
        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {categoryBlocks.map((block) => (
              <Link
                key={block.name}
                href={block.href}
                className="group flex flex-col items-center border border-border bg-card p-5 text-center transition-all hover:border-primary hover:shadow-sm"
              >
                <div className="mb-2.5 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <block.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-0.5 text-sm font-bold text-card-foreground">{block.name}</h3>
                <p className="mb-1.5 text-[11px] text-muted-foreground">{block.description}</p>
                <span className="text-[11px] font-bold text-primary">{block.count} products</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Products */}
        <section className="mx-auto max-w-7xl px-4 pb-8">
          <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-lg font-black uppercase tracking-tight text-foreground">Popular Products</h2>
            <Link
              href="/category/lcd"
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
            >
              View All
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredProducts.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Shop by Brand */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
              <h2 className="text-lg font-black uppercase tracking-tight text-foreground">Shop by Brand</h2>
              <Link
                href="/brands"
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                All Brands
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {brands.slice(0, 16).map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brand/${brand.slug}`}
                  className="flex flex-col items-center border border-border bg-card px-3 py-3 text-center transition-all hover:border-primary hover:shadow-sm group"
                >
                  <span className="mb-1 flex h-8 w-8 items-center justify-center bg-secondary text-sm font-black text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {brand.name.charAt(0)}
                  </span>
                  <span className="text-[11px] font-semibold text-card-foreground">{brand.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Products */}
        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-5 flex items-center justify-between border-b border-border pb-3">
            <h2 className="text-lg font-black uppercase tracking-tight text-foreground">Latest Products</h2>
            <Link
              href="/category/lcd"
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
            >
              View All
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* SEO Section */}
        <section className="bg-secondary border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <h2 className="mb-3 text-sm font-black uppercase tracking-wider text-foreground">
              Wholesale Smartphone / Accessories / LCD / Parts
            </h2>
            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
              BonusGSM is the wholesale cell phone accessories and high quality parts at the lowest prices. Of cases and chargers to parts and equipment, the wholesale GSM mobile phone accessories and spare parts has it all. Cases, chargers, USB cables, touch, LCD displays, batteries, holders, headsets, screen protectors, USB drives and Micro SD cards, they buy wholesale from BonusGSM.com.
            </p>
            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
              As a wholesale phone accessories and parts we have GSM / mobile phone covers, telecom accessories and parts for nearly every brand and type of cell, cell phone, smartphone and tablet at home. GSM / mobile phone covers, accessories and parts for iPhone, Samsung, Nokia, LG, BlackBerry and HTC to Sony, Motorola and Huawei, we may as import & export telecom wholesale supply directly and quickly in bulk!
            </p>
            <p className="text-xs font-bold text-foreground">
              More than 23,000 kinds of accessories available immediately! Fast delivery within 24 hours!
            </p>

            <div className="mt-5 border border-border bg-card p-4">
              <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Sharp Prices / Free Shipment / 24 Hours Delivery / High Quality / 25 Years Experience / 23,000 Items
              </p>
              <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
                PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Cash on Delivery / Bank Transfer
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
