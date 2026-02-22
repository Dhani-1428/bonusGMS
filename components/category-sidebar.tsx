import Link from "next/link"
import { categories, findCategoryBySlug } from "@/lib/data"
import type { Category } from "@/lib/data"

function CategoryItem({ cat, currentSlug, depth = 0 }: { cat: Category; currentSlug: string; depth?: number }) {
  const isActive = cat.slug === currentSlug

  return (
    <li>
      <Link
        href={`/category/${cat.slug}`}
        className={`block py-1.5 text-sm transition-colors ${
          isActive
            ? "font-semibold text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
        style={{ paddingLeft: `${depth * 12 + 4}px` }}
      >
        {cat.name}
      </Link>
      {cat.children && cat.children.length > 0 && (
        <ul>
          {cat.children.map((child) => (
            <CategoryItem key={child.slug} cat={child} currentSlug={currentSlug} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function CategorySidebar({ currentSlug }: { currentSlug: string }) {
  // Find which top-level category we're in
  let activeCat: Category | undefined
  for (const cat of categories) {
    if (cat.slug === currentSlug || findCategoryBySlug(currentSlug, cat.children)) {
      activeCat = cat
      break
    }
  }

  const displayCategories = activeCat ? [activeCat] : categories

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-card-foreground">Categories</h3>
      <ul className="flex flex-col">
        {displayCategories.map((cat) => (
          <CategoryItem key={cat.slug} cat={cat} currentSlug={currentSlug} />
        ))}
      </ul>

      {/* Price Filter */}
      <div className="mt-6 border-t border-border pt-4">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-card-foreground">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full rounded-lg border border-input bg-background px-2 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
          />
          <span className="text-muted-foreground">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full rounded-lg border border-input bg-background px-2 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
          />
        </div>
        <button className="mt-2 w-full rounded-lg bg-primary py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          Apply
        </button>
      </div>

      {/* Stock filter */}
      <div className="mt-4 border-t border-border pt-4">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-card-foreground">Availability</h3>
        <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
          <input type="checkbox" defaultChecked className="rounded border-input text-primary focus:ring-primary" />
          In Stock
        </label>
      </div>
    </div>
  )
}
