import Link from "next/link"
import { ChevronRight, Users, Award, Truck, Globe } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Force dynamic rendering to avoid SSR issues with i18n
export const dynamic = 'force-dynamic'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">About Us</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground text-balance">About BonusGSM</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <Users className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="text-2xl font-black text-card-foreground">25+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <Award className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="text-2xl font-black text-card-foreground">23,000+</h3>
              <p className="text-sm text-muted-foreground">Products Available</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <Truck className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="text-2xl font-black text-card-foreground">24h</h3>
              <p className="text-sm text-muted-foreground">Delivery Time</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <Globe className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="text-2xl font-black text-card-foreground">EU-Wide</h3>
              <p className="text-sm text-muted-foreground">Free Shipping</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold text-card-foreground mb-4">Who We Are</h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                BonusGSM is a leading B2B wholesale supplier of smartphone accessories, LCD screens, batteries, and repair parts. With over 25 years of experience in the telecom industry, we provide high-quality products at the lowest wholesale prices.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Our extensive catalog includes LCD displays, batteries, chargers, cables, screen protectors, cases, and professional repair tools for virtually every smartphone brand and model - including iPhone, Samsung, Xiaomi, Huawei, Oppo, OnePlus, Motorola, Nokia, and many more.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                As an import & export telecom wholesale supplier, we deliver directly and quickly in bulk. With more than 23,000 products available immediately and free shipping across Europe, we are your trusted partner for smartphone parts and accessories.
              </p>

              <h2 className="text-xl font-bold text-card-foreground mb-4 mt-8">Why Choose BonusGSM?</h2>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>Sharp wholesale prices with no minimum order</li>
                <li>Free shipping on all orders within Europe</li>
                <li>Fast delivery within 24 hours</li>
                <li>High quality tested products with warranty</li>
                <li>Over 23,000 products in stock</li>
                <li>25+ years of experience in the industry</li>
                <li>Multiple payment methods: PayPal, iDEAL, SOFORT, Bancontact, GiroPay, Bank Transfer</li>
                <li>Dedicated customer support via WhatsApp and phone</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
