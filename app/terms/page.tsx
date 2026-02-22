import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground">Terms & Conditions</h1>
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">1. General</h2>
                <p>These terms and conditions apply to all offers, orders and agreements of BonusGSM. By placing an order, you agree to these terms and conditions.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">2. Prices</h2>
                <p>All prices are in Euros and exclude VAT unless stated otherwise. Prices are subject to change without prior notice. The price shown at the time of order placement applies.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">3. Ordering & Payment</h2>
                <p>Orders can be placed through our website 24 hours a day. Payment can be made via PayPal, iDEAL, SOFORT Banking, Bancontact, GiroPay, Cash on Delivery, or Bank Transfer.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">4. Delivery</h2>
                <p>We aim to ship all orders placed before 7 PM on the same business day. Delivery times depend on the shipping destination. Free shipping is available on all orders within Europe.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">5. Returns</h2>
                <p>Products may be returned within 14 days of receipt. Items must be in their original packaging and unused condition. Please contact us before returning any items.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">6. Warranty</h2>
                <p>All products come with a standard warranty. Warranty periods vary by product category. Warranty claims must be accompanied by proof of purchase.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">7. Liability</h2>
                <p>BonusGSM is not liable for any indirect damages. Our total liability is limited to the amount paid for the specific product in question.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
