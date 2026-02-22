import Link from "next/link"
import { ChevronRight, Trash2, Minus, Plus, ShoppingCart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Shopping Cart</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-8 text-2xl font-black text-foreground">Shopping Cart</h1>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Cart items */}
            <div className="flex-1">
              {/* Empty state */}
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
                <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground/20" />
                <p className="text-lg font-semibold text-foreground">Your cart is empty</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Add products to your cart to start shopping.
                </p>
                <Link
                  href="/"
                  className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Sample cart item (shown for design reference) */}
              <div className="mt-4 rounded-xl border border-border bg-card p-4">
                <p className="mb-3 text-xs text-muted-foreground">Order before 7 PM, shipped today!</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <ShoppingCart className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-card-foreground">LCD Incell IPhone 11 Pro</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">SKU: LCD-IP11P-INC</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded border border-border">
                        <button className="px-2 py-1 text-muted-foreground hover:text-foreground" aria-label="Decrease">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-foreground">1</span>
                        <button className="px-2 py-1 text-muted-foreground hover:text-foreground" aria-label="Increase">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">{"€"}7.95</p>
                    <p className="text-xs text-muted-foreground line-through">{"€"}12.95</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="w-full lg:w-80">
              <div className="sticky top-32 rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-lg font-bold text-card-foreground">Order Summary</h2>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Excl. tax</span>
                    <span className="text-foreground font-medium">{"€"}0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">TAX</span>
                    <span className="text-foreground font-medium">{"€"}0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-accent font-semibold">Free</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-bold">Total</span>
                    <span className="text-lg font-black text-primary">{"€"}0.00</span>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
