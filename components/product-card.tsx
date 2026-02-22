import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/data"
import { getBrandName } from "@/lib/data"

export function ProductCard({ product }: { product: Product }) {
  const displayPrice = product.salePrice ?? product.price
  const savings = product.salePrice ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0

  return (
    <div className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md">
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute left-0 top-3 z-10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground ${
            product.badge === "Sale"
              ? "bg-destructive"
              : product.badge === "New"
              ? "bg-accent"
              : "bg-primary"
          }`}
        >
          {product.badge}{product.badge === "Sale" && savings > 0 ? ` -${savings}%` : ""}
        </span>
      )}

      {/* Wishlist */}
      <button
        className="absolute right-2 top-2 z-10 p-1 text-muted-foreground opacity-0 transition-all hover:text-destructive group-hover:opacity-100"
        aria-label="Add to wishlist"
      >
        <Heart className="h-4 w-4" />
      </button>

      {/* Image */}
      <Link href={`/product/${product.slug}`} className="flex items-center justify-center bg-secondary/50 p-6">
        <div className="flex h-28 w-28 items-center justify-center">
          <ShoppingCart className="h-8 w-8 text-muted-foreground/20" />
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3 pt-2">
        {/* Brand tag */}
        {product.brand && product.brand !== "generic" && (
          <Link
            href={`/brand/${product.brand}`}
            className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
          >
            {getBrandName(product.brand)}
          </Link>
        )}

        <Link
          href={`/product/${product.slug}`}
          className="mb-1.5 line-clamp-2 text-xs font-semibold leading-tight text-card-foreground hover:text-primary transition-colors"
        >
          {product.name}
        </Link>

        <span className="mb-2 text-[10px] text-muted-foreground">{product.sku}</span>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-base font-black text-primary leading-none">
              {"€"}{displayPrice.toFixed(2)}
            </span>
            {product.salePrice && (
              <span className="mt-0.5 text-[11px] text-muted-foreground line-through">
                {"€"}{product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className="border border-primary bg-primary p-1.5 text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
