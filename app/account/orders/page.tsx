import Link from "next/link"
import { ChevronRight, Package } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrdersPage() {
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
            <span className="text-foreground font-medium">Orders</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-10">
          <h1 className="mb-8 text-3xl font-black text-foreground">Order History</h1>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
            <Package className="mb-4 h-16 w-16 text-muted-foreground/20" />
            <p className="text-lg font-semibold text-foreground">No orders yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Please sign in to view your order history.
            </p>
            <Link
              href="/account"
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
