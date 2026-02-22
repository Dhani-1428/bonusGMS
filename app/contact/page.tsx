import Link from "next/link"
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Contact</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground">Contact Us</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact info */}
            <div>
              <div className="rounded-xl border border-border bg-card p-6 mb-6">
                <h2 className="mb-4 text-lg font-bold text-card-foreground">Get in Touch</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">Your Address Here, City, Country</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+31 38 337 3797</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+31 651 919 833</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@bonusgsm.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 - 17:00</p>
                      <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-bold text-card-foreground">Send us a Message</h2>
              <form className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-card-foreground">Name</label>
                    <input id="name" type="text" placeholder="Your name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-card-foreground">Email</label>
                    <input id="contact-email" type="email" placeholder="your@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-card-foreground">Subject</label>
                  <input id="subject" type="text" placeholder="Subject" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-card-foreground">Message</label>
                  <textarea id="message" rows={5} placeholder="Your message..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none" />
                </div>
                <button type="submit" className="rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
