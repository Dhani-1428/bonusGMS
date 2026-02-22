import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { brands, getProductsByBrand } from "@/lib/data"

export default function BrandsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">All Brands</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-6 text-2xl font-black text-foreground">All Brands</h1>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {brands.map((brand) => {
              const count = getProductsByBrand(brand.slug).length
              return (
                <Link
                  key={brand.slug}
                  href={`/brand/${brand.slug}`}
                  className="flex flex-col items-center border border-border bg-card p-5 text-center transition-all hover:border-primary hover:shadow-sm group"
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center bg-secondary text-lg font-black text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {brand.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-card-foreground">{brand.name}</span>
                  <span className="mt-0.5 text-[11px] text-muted-foreground">
                    {count} {count === 1 ? "product" : "products"}
                  </span>
                  <span className="mt-1.5 text-[11px] text-muted-foreground">
                    {brand.models.length} models
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
