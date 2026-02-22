import Link from "next/link"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: "We accept PayPal, iDEAL, SOFORT Online Banking, Bancontact/Mister Cash, GiroPay, Cash on Delivery, and Bank Transfer.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes! We offer free shipping on all orders within Europe. Orders placed before 7 PM are shipped the same day.",
  },
  {
    q: "What is your delivery time?",
    a: "We aim for 24-hour delivery within the Netherlands and 2-5 business days for other European countries, depending on the destination.",
  },
  {
    q: "Can I return products?",
    a: "Yes, you can return products within 14 days of receipt. Items must be in their original packaging and unused condition. Please contact us before returning.",
  },
  {
    q: "Do you offer warranty on products?",
    a: "Yes, all our products come with a standard warranty. Warranty periods vary by product category. Please contact us for specific warranty details.",
  },
  {
    q: "Is BonusGSM a B2B supplier?",
    a: "Yes, BonusGSM primarily serves B2B customers including repair shops, retailers, and resellers. However, individual customers are also welcome.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package through the carrier's website.",
  },
  {
    q: "Do you ship outside of Europe?",
    a: "We primarily ship within Europe, but we can arrange international shipping on request. Please contact us for a shipping quote.",
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">FAQ</span>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground text-center">Frequently Asked Questions</h1>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-card-foreground">
                  {faq.q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
