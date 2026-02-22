import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getBrandBySlug, getProductsByModel, getModelsForBrand } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function ModelPage({ params }: { params: Promise<{ slug: string; model: string }> }) {
  const { slug, model: modelSlug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) notFound()

  const modelObj = brand.models.find((m) => m.slug === modelSlug)
  if (!modelObj) notFound()

  const modelProducts = getProductsByModel(modelSlug)
  const allModels = getModelsForBrand(slug)

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
            <Link href={`/brand/${slug}`} className="hover:text-primary transition-colors">{brand.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{modelObj.name}</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar - other models */}
            <aside className="hidden w-56 flex-shrink-0 lg:block">
              <div className="border border-border bg-card p-4">
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {brand.name} Models
                </h3>
                <ul className="flex flex-col gap-0.5">
                  {allModels.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={`/brand/${slug}/${m.slug}`}
                        className={`block py-1.5 px-2 text-xs transition-colors ${
                          m.slug === modelSlug
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {m.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-2xl font-black text-foreground">
                  {brand.name} {modelObj.name}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {modelProducts.length} products for {modelObj.name}
                </p>
              </div>

              {/* Mobile model selector */}
              <div className="mb-6 flex flex-wrap gap-2 lg:hidden">
                {allModels.slice(0, 12).map((m) => (
                  <Link
                    key={m.slug}
                    href={`/brand/${slug}/${m.slug}`}
                    className={`border px-2.5 py-1 text-xs font-medium transition-colors ${
                      m.slug === modelSlug
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-card-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>

              {modelProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  {modelProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border border-border bg-card py-20 text-center">
                  <p className="text-lg font-semibold text-foreground">No products yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Products for {brand.name} {modelObj.name} will be available soon.
                  </p>
                  <Link href={`/brand/${slug}`} className="mt-4 bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    View all {brand.name}
                  </Link>
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
