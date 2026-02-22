import Link from "next/link"
import { ChevronRight, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WishlistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Wishlist</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-8 text-2xl font-black text-foreground">My Wishlist</h1>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
            <Heart className="mb-4 h-16 w-16 text-muted-foreground/20" />
            <p className="text-lg font-semibold text-foreground">Your wishlist is empty</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Save your favorite products for later.
            </p>
            <Link
              href="/"
              className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
