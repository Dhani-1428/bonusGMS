import Link from "next/link"
import { ChevronRight, Heart, ShoppingCart, Truck, Shield, RotateCcw, Package, Minus, Plus } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getProductBySlug, products } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const displayPrice = product.salePrice ?? product.price
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/category/${product.category}`} className="hover:text-primary transition-colors capitalize">
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Detail */}
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="relative">
              {product.badge && (
                <span
                  className={`absolute left-4 top-4 z-10 rounded px-3 py-1 text-xs font-bold text-primary-foreground ${
                    product.badge === "Sale"
                      ? "bg-destructive"
                      : product.badge === "New"
                      ? "bg-accent"
                      : "bg-primary"
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <div className="flex items-center justify-center rounded-xl border border-border bg-secondary p-12">
                <div className="flex h-64 w-64 items-center justify-center rounded-xl bg-muted">
                  <Package className="h-24 w-24 text-muted-foreground/30" />
                </div>
              </div>
              {/* Thumbnails */}
              <div className="mt-4 flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className={`flex h-16 w-16 items-center justify-center rounded-lg border ${
                      i === 1 ? "border-primary" : "border-border"
                    } bg-secondary`}
                  >
                    <Package className="h-6 w-6 text-muted-foreground/30" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="mb-1 text-xs text-muted-foreground">SKU: {product.sku}</p>
              <h1 className="mb-4 text-2xl font-black text-foreground md:text-3xl text-balance">{product.name}</h1>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-3">
                <span className="text-3xl font-black text-primary">
                  {"€"}{displayPrice.toFixed(2)}
                </span>
                {product.salePrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {"€"}{product.price.toFixed(2)}
                    </span>
                    <span className="rounded bg-destructive/10 px-2 py-0.5 text-xs font-bold text-destructive">
                      Save {"€"}{(product.price - product.salePrice).toFixed(2)}
                    </span>
                  </>
                )}
              </div>

              {/* Stock status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              {/* Quantity & Add to cart */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center rounded-lg border border-border">
                  <button className="px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-semibold text-foreground">1</span>
                  <button className="px-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors" aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <button className="rounded-lg border border-border p-2.5 text-muted-foreground hover:text-destructive hover:border-destructive transition-colors" aria-label="Add to wishlist">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-secondary p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <RotateCcw className="h-4 w-4 text-primary" />
                  <span>Easy Returns</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Package className="h-4 w-4 text-primary" />
                  <span>24h Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Specs */}
          <div className="mt-12 rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-bold text-card-foreground">Product Details</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-2.5">
                <span className="text-sm text-muted-foreground">SKU</span>
                <span className="text-sm font-semibold text-foreground">{product.sku}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-2.5">
                <span className="text-sm text-muted-foreground">Category</span>
                <span className="text-sm font-semibold text-foreground capitalize">{product.category}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-2.5">
                <span className="text-sm text-muted-foreground">Availability</span>
                <span className="text-sm font-semibold text-foreground">{product.inStock ? "In Stock" : "Out of Stock"}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-2.5">
                <span className="text-sm text-muted-foreground">Condition</span>
                <span className="text-sm font-semibold text-foreground">New</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="bg-secondary">
            <div className="mx-auto max-w-7xl px-4 py-10">
              <h2 className="mb-6 text-xl font-black text-foreground">Related Products</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {relatedProducts.map((rp) => (
                  <ProductCard key={rp.id} product={rp} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
