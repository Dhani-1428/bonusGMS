import Link from "next/link"
import { Search, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { searchProducts, products, brands, getBrandName } from "@/lib/data"

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; brand?: string; model?: string }> }) {
  const { q, brand: brandFilter, model: modelFilter } = await searchParams
  const query = q ?? ""

  let results = query ? searchProducts(query) : []

  // Filter by brand if specified
  if (brandFilter) {
    results = results.filter((p) => p.brand === brandFilter)
  }
  // Filter by model if specified
  if (modelFilter) {
    results = results.filter((p) => p.model === modelFilter)
  }

  // Get unique brands from results for filter chips
  const resultBrands = [...new Set(results.map((p) => p.brand))].filter(b => b !== "generic")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Search</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-black text-foreground">
              {query ? (
                <>Search results for: <span className="text-primary">{`"${query}"`}</span></>
              ) : (
                "Search Products"
              )}
            </h1>
            {query && (
              <p className="mt-1 text-sm text-muted-foreground">
                {results.length} {results.length === 1 ? "product" : "products"} found
                {brandFilter && <> in <span className="font-semibold text-foreground">{getBrandName(brandFilter)}</span></>}
              </p>
            )}
          </div>

          {/* Search form */}
          <form action="/search" className="mb-6">
            <div className="relative max-w-2xl">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search by brand, model or product name..."
                className="w-full border border-input bg-background px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 flex h-full items-center justify-center bg-primary px-5 text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Brand filter chips */}
          {query && resultBrands.length > 1 && !brandFilter && (
            <div className="mb-6">
              <span className="mr-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Filter by brand:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {resultBrands.map((b) => (
                  <Link
                    key={b}
                    href={`/search?q=${encodeURIComponent(query)}&brand=${b}`}
                    className="border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {getBrandName(b)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Active brand filter */}
          {brandFilter && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Filtered by:</span>
              <Link
                href={`/search?q=${encodeURIComponent(query)}`}
                className="flex items-center gap-1 border border-primary bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
              >
                {getBrandName(brandFilter)}
                <span className="ml-1 text-primary/60">x</span>
              </Link>
            </div>
          )}

          {/* Results */}
          {results.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : query ? (
            <div className="flex flex-col items-center justify-center border border-border bg-card py-20 text-center">
              <Search className="mb-4 h-12 w-12 text-muted-foreground/20" />
              <p className="text-lg font-semibold text-foreground">No results found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try different keywords or browse our brands.
              </p>
              <Link href="/brands" className="mt-4 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Browse Brands
              </Link>
            </div>
          ) : (
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Popular Products</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {products.slice(0, 10).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
