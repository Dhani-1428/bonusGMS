import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getBrandBySlug, getProductsByBrand, getModelsForBrand } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) notFound()

  const brandProducts = getProductsByBrand(slug)
  const models = getModelsForBrand(slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/brands" className="hover:text-primary transition-colors">Brands</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{brand.name}</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-black text-foreground">{brand.name}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {brandProducts.length} products available
            </p>
          </div>

          {/* Model chips */}
          {models.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Select a model
              </h2>
              <div className="flex flex-wrap gap-2">
                {models.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/brand/${slug}/${model.slug}`}
                    className="border border-border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {model.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All products for this brand */}
          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {brandProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center border border-border bg-card py-20 text-center">
              <p className="text-lg font-semibold text-foreground">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Products for {brand.name} will be available soon.
              </p>
              <Link href="/" className="mt-4 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
