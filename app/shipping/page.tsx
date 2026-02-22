import Link from "next/link"
import { ChevronRight, Truck, Clock, Globe, Package } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Shipping Info</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground">Shipping Information</h1>

          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-4">
              <Truck className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-card-foreground">Free Shipping</h3>
                <p className="mt-1 text-sm text-muted-foreground">Free shipping on all orders within Europe. No minimum order required.</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-4">
              <Clock className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-card-foreground">Same-Day Dispatch</h3>
                <p className="mt-1 text-sm text-muted-foreground">Orders placed before 7 PM are shipped the same business day.</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-4">
              <Globe className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-card-foreground">EU-Wide Delivery</h3>
                <p className="mt-1 text-sm text-muted-foreground">We deliver to all European Union countries.</p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-4">
              <Package className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-card-foreground">Secure Packaging</h3>
                <p className="mt-1 text-sm text-muted-foreground">All items are carefully packaged to prevent damage during transit.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-4 text-lg font-bold text-card-foreground">Delivery Times</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 text-left font-semibold text-card-foreground">Destination</th>
                    <th className="py-3 pr-4 text-left font-semibold text-card-foreground">Delivery Time</th>
                    <th className="py-3 text-left font-semibold text-card-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border"><td className="py-3 pr-4">Netherlands</td><td className="py-3 pr-4">1 business day</td><td className="py-3 font-semibold text-accent">Free</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pr-4">Belgium / Germany</td><td className="py-3 pr-4">1-2 business days</td><td className="py-3 font-semibold text-accent">Free</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pr-4">France / Spain / Italy</td><td className="py-3 pr-4">2-4 business days</td><td className="py-3 font-semibold text-accent">Free</td></tr>
                  <tr className="border-b border-border"><td className="py-3 pr-4">Other EU Countries</td><td className="py-3 pr-4">3-5 business days</td><td className="py-3 font-semibold text-accent">Free</td></tr>
                  <tr><td className="py-3 pr-4">Non-EU Countries</td><td className="py-3 pr-4">5-10 business days</td><td className="py-3">Contact us</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
