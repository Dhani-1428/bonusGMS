import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/account" className="hover:text-primary transition-colors">My Account</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Register</span>
          </div>
        </div>

        <div className="mx-auto max-w-lg px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground text-center">Create Account</h1>
          <div className="rounded-xl border border-border bg-card p-6">
            <form className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-card-foreground">First Name</label>
                  <input id="firstName" type="text" placeholder="John" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-card-foreground">Last Name</label>
                  <input id="lastName" type="text" placeholder="Doe" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="mb-1 block text-sm font-medium text-card-foreground">Company Name</label>
                <input id="company" type="text" placeholder="Your Company" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="reg-email" className="mb-1 block text-sm font-medium text-card-foreground">Email Address</label>
                <input id="reg-email" type="email" placeholder="your@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="reg-password" className="mb-1 block text-sm font-medium text-card-foreground">Password</label>
                <input id="reg-password" type="password" placeholder="Create a password" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
              </div>
              <div>
                <label htmlFor="reg-confirm" className="mb-1 block text-sm font-medium text-card-foreground">Confirm Password</label>
                <input id="reg-confirm" type="password" placeholder="Confirm your password" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none" />
              </div>
              <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded border-input text-primary focus:ring-primary" />
                <span>I agree to the <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></span>
              </label>
              <button type="submit" className="rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Create Account
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Already have an account? <Link href="/account" className="text-primary hover:underline">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
