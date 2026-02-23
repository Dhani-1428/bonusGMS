"use client"

import Link from "next/link"
import { categories, findCategoryBySlug } from "@/lib/data"
import type { Category } from "@/lib/data"
import { useI18n, translations } from "@/lib/i18n"

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
  const i18n = useI18n()
  const t = i18n?.t || ((key: string) => {
    const enTranslations = translations.en as Record<string, string>
    return enTranslations[key] || key
  })
  
  // Find which top-level category we're in
  let activeCat: Category | undefined
  for (const cat of categories) {
    if (cat.slug === currentSlug || findCategoryBySlug(currentSlug, cat.children)) {
      activeCat = cat
      break
    }
  }

  const displayCategories = activeCat ? [activeCat] : categories

  // Collect all category items to display in two columns
  const allCategoryItems: { name: string; slug: string }[] = []
  displayCategories.forEach((cat) => {
    if (cat.children && cat.children.length > 0) {
      cat.children.forEach((child) => {
        allCategoryItems.push({ name: child.name, slug: child.slug })
      })
    } else {
      allCategoryItems.push({ name: cat.name, slug: cat.slug })
    }
  })

  // Split into two columns with 7 items each
  const leftColumn = allCategoryItems.slice(0, 7)
  const rightColumn = allCategoryItems.slice(7, 14)

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">{t("categories")}</h3>
      <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {/* Left Column */}
          <div className="flex flex-col space-y-1.5">
            {leftColumn.map((item) => {
              const isActive = item.slug === currentSlug
              return (
                <Link
                  key={item.slug}
                  href={`/category/${item.slug}`}
                  className={`block py-1.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-primary underline decoration-2 underline-offset-2"
                      : "text-primary hover:opacity-90 hover:underline decoration-1 underline-offset-2"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          {/* Right Column */}
          <div className="flex flex-col space-y-1.5">
            {rightColumn.map((item) => {
              const isActive = item.slug === currentSlug
              return (
                <Link
                  key={item.slug}
                  href={`/category/${item.slug}`}
                  className={`block py-1.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-primary underline decoration-2 underline-offset-2"
                      : "text-primary hover:opacity-90 hover:underline decoration-1 underline-offset-2"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
        {/* Show remaining items if more than 14 */}
        {allCategoryItems.length > 14 && (
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {allCategoryItems.slice(14).map((item) => {
              const isActive = item.slug === currentSlug
              return (
                <Link
                  key={item.slug}
                  href={`/category/${item.slug}`}
                  className={`block py-1.5 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-primary underline decoration-2 underline-offset-2"
                      : "text-primary hover:opacity-90 hover:underline decoration-1 underline-offset-2"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>

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
