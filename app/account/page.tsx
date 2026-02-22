import Link from "next/link"
import { ChevronRight, User, Package, Heart, Settings, LogOut } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccountPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">My Account</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Sign In */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-6 text-xl font-black text-card-foreground">Sign In</h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-card-foreground">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-1 block text-sm font-medium text-card-foreground">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                </div>
                <Link href="/account" className="text-xs text-primary hover:underline">
                  Forgot your password?
                </Link>
                <button
                  type="submit"
                  className="rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* Register */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-6 text-xl font-black text-card-foreground">New Customer?</h2>
              <ul className="mb-6 flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">1</span>
                  Make Your Experience Better & Faster
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">2</span>
                  Business To Business Smartphone Parts & Accessories
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">3</span>
                  Free Shipping on 15,000+ Products
                </li>
              </ul>
              <Link
                href="/account/register"
                className="block w-full rounded-lg bg-accent py-2.5 text-center text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Register
              </Link>

              {/* Quick links */}
              <div className="mt-8 flex flex-col gap-2">
                <Link href="/account/orders" className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-card-foreground hover:bg-secondary transition-colors">
                  <Package className="h-5 w-5 text-primary" />
                  My Orders
                </Link>
                <Link href="/wishlist" className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-card-foreground hover:bg-secondary transition-colors">
                  <Heart className="h-5 w-5 text-primary" />
                  My Wishlist
                </Link>
                <Link href="/account" className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-card-foreground hover:bg-secondary transition-colors">
                  <Settings className="h-5 w-5 text-primary" />
                  Account Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
