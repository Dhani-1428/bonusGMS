import Link from "next/link"
import { ChevronRight, SlidersHorizontal } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { CategorySidebar } from "@/components/category-sidebar"
import { findCategoryBySlug, products, brands, getBrandName } from "@/lib/data"

export default async function CategoryPage({ params, searchParams }: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ brand?: string; model?: string }>
}) {
  const { slug } = await params
  const { brand: brandFilter, model: modelFilter } = await searchParams
  const category = findCategoryBySlug(slug)

  // Find products in this category or subcategory
  let categoryProducts = products.filter(
    (p) => p.category === slug || p.subcategory === slug
  )

  // Apply brand filter
  if (brandFilter) {
    categoryProducts = categoryProducts.filter((p) => p.brand === brandFilter)
  }
  // Apply model filter
  if (modelFilter) {
    categoryProducts = categoryProducts.filter((p) => p.model === modelFilter)
  }

  const displayProducts = categoryProducts.length > 0 ? categoryProducts : products.slice(0, 16)

  // Get unique brands from this category's products for filter
  const categoryBrands = [...new Set(
    products.filter((p) => p.category === slug || p.subcategory === slug).map((p) => p.brand)
  )].filter(b => b !== "generic")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 text-[11px] text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold text-foreground">
              {category?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex gap-6">
            {/* Sidebar */}
            <aside className="hidden w-60 flex-shrink-0 lg:block">
              <CategorySidebar currentSlug={slug} />
            </aside>

            {/* Main */}
            <div className="flex-1">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-xl font-black uppercase tracking-tight text-foreground">
                    {category?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </h1>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {displayProducts.length} products
                    {brandFilter && <> by <span className="font-semibold text-foreground">{getBrandName(brandFilter)}</span></>}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 border border-border px-3 py-2 text-xs text-foreground hover:bg-secondary transition-colors lg:hidden">
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    Filters
                  </button>
                  <select className="border border-border bg-card px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none">
                    <option>Sort by: Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Name: A to Z</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* Brand filter chips */}
              {categoryBrands.length > 0 && (
                <div className="mb-5">
                  <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Brand:</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <Link
                      href={`/category/${slug}`}
                      className={`border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        !brandFilter
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-card-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      All
                    </Link>
                    {categoryBrands.map((b) => (
                      <Link
                        key={b}
                        href={`/category/${slug}?brand=${b}`}
                        className={`border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          brandFilter === b
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-card-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {getBrandName(b)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Subcategory chips */}
              {category?.children && category.children.length > 0 && (
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {category.children.map((child) => (
                    <Link
                      key={child.slug}
                      href={`/category/${child.slug}`}
                      className="border border-border bg-card px-2.5 py-1 text-[11px] font-medium text-card-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Product grid */}
              {displayProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  {displayProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border border-border bg-card py-20 text-center">
                  <p className="text-lg font-semibold text-foreground">No products found</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try browsing a different category or use the search bar.
                  </p>
                  <Link href="/" className="mt-4 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    Back to Home
                  </Link>
                </div>
              )}

              {/* Pagination */}
              {displayProducts.length > 0 && (
                <div className="mt-8 flex items-center justify-center gap-0.5">
                  <button className="bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">1</button>
                  <button className="border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary transition-colors">2</button>
                  <button className="border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary transition-colors">3</button>
                  <span className="px-2 text-xs text-muted-foreground">...</span>
                  <button className="border border-border px-3 py-1.5 text-xs text-muted-foreground hover:bg-secondary transition-colors">12</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
