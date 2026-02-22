import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Privacy Policy</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground">Privacy Policy</h1>
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">1. Data Collection</h2>
                <p>We collect personal data that you provide when creating an account, placing an order, or contacting us. This includes your name, email address, shipping address, and payment information.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">2. Use of Data</h2>
                <p>Your personal data is used solely for processing orders, providing customer service, and improving our services. We do not sell your data to third parties.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">3. Cookies</h2>
                <p>Our website uses cookies to enhance your browsing experience, remember preferences, and analyze website traffic. You can disable cookies through your browser settings.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">5. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal data. You may also object to the processing of your data. Please contact us to exercise these rights.</p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-bold text-card-foreground">6. Contact</h2>
                <p>For any privacy-related questions, please contact us at info@bonusgsm.com or via WhatsApp at +31 651 919 833.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
