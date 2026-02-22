"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  ChevronRight,
  Phone,
  Truck,
  CheckCircle,
  ArrowLeftRight,
  X,
  Facebook,
} from "lucide-react"
import { categories, brands, searchProducts } from "@/lib/data"
import type { Category, Brand } from "@/lib/data"
import { MobileNav } from "./mobile-nav"
import { useI18n, languages, translations } from "@/lib/i18n"

/* ─── Check if category has any grandchildren (deeper nesting) ─── */
function hasGrandchildren(category: Category): boolean {
  return category.children?.some((child) => child.children && child.children.length > 0) ?? false
}

/* ─── Simple dropdown: compact flat list of names (no grandchildren) ─── */
function SimpleDropdown({ category, alignRight }: { category: Category; alignRight?: boolean }) {
  const count = category.children?.length ?? 0
  /* Use 2 columns if many items, 1 column if few */
  const useTwoCols = count > 8

  return (
    <div
      className={`absolute top-full z-50 hidden border border-border bg-card shadow-xl group-hover:block ${
        useTwoCols ? "w-[360px]" : "w-[200px]"
      } ${alignRight ? "right-0" : "left-0"}`}
    >
      <div className={`py-2 ${useTwoCols ? "columns-2 gap-0" : ""}`}>
        {category.children?.map((child) => (
          <Link
            key={child.slug}
            href={`/category/${child.slug}`}
            className="block px-3.5 py-[5px] text-[12px] text-foreground hover:bg-primary/5 hover:text-primary transition-colors break-inside-avoid"
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ─── Mega Menu: compressed LCD-style grid with subcategories + grandchildren ─── */
function CategoryMegaMenu({ category, alignRight }: { category: Category; alignRight?: boolean }) {
  /* Separate children WITH grandchildren from those WITHOUT */
  const withKids = category.children?.filter((c) => c.children && c.children.length > 0) ?? []
  const withoutKids = category.children?.filter((c) => !c.children || c.children.length === 0) ?? []

  const totalWithKids = withKids.length
  const cols = totalWithKids <= 4 ? 2 : totalWithKids <= 9 ? 3 : 4
  const colClass = cols === 2 ? "grid-cols-2" : cols === 3 ? "grid-cols-3" : "grid-cols-4"
  const widthClass = cols === 2 ? "w-[440px]" : cols === 3 ? "w-[640px]" : "w-[840px]"

  return (
    <div
      className={`absolute top-full z-50 hidden border border-border bg-card shadow-xl group-hover:block ${widthClass} ${
        alignRight ? "right-0" : "left-0"
      }`}
    >
      {/* Vertical list for subcategories WITHOUT grandchildren — at the top, blue titles */}
      {withoutKids.length > 0 && (
        <div className="border-b border-border py-1.5">
          {withoutKids.map((child) => (
            <Link
              key={child.slug}
              href={`/category/${child.slug}`}
              className="block px-4 py-[4px] text-[11px] font-bold uppercase tracking-wide text-primary hover:underline transition-colors"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}

      {/* Grid of subcategories that have grandchildren */}
      <div className={`grid ${colClass} max-h-[400px] overflow-y-auto`}>
        {withKids.map((child) => (
          <div
            key={child.slug}
            className="border-b border-r border-border px-3 py-2.5 hover:bg-primary/[0.02] transition-colors"
          >
            <Link
              href={`/category/${child.slug}`}
              className="text-[11px] font-bold uppercase tracking-wide text-primary hover:underline"
            >
              {child.name}
            </Link>
            <ul className="mt-1 flex flex-col">
              {child.children!.slice(0, 6).map((grandchild) => (
                <li key={grandchild.slug}>
                  <Link
                    href={`/category/${grandchild.slug}`}
                    className="block py-[2px] text-[11px] leading-tight text-muted-foreground hover:text-primary transition-colors"
                  >
                    {grandchild.name}
                  </Link>
                </li>
              ))}
              {child.children!.length > 6 && (
                <li>
                  <Link
                    href={`/category/${child.slug}`}
                    className="block py-[2px] text-[10px] font-semibold text-primary hover:underline"
                  >
                    + {child.children!.length - 6} more
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Brand Mega Menu (hover brand → see models) ─── */
function BrandMegaMenu() {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null)

  return (
    <div className="absolute left-0 top-full z-50 hidden w-[680px] border border-border bg-card shadow-2xl group-hover:block">
      <div className="flex">
        {/* Left: brand list */}
          <div className="w-48 flex-shrink-0 border-r border-border bg-secondary/40">
          <div className="px-3 py-2 border-b border-border">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t("brands")}</span>
          </div>
          <div className="max-h-[380px] overflow-y-auto">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brand/${brand.slug}`}
                className={`flex items-center justify-between px-3 py-2 text-xs transition-colors ${
                  activeBrand?.slug === brand.slug
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:bg-secondary"
                }`}
                onMouseEnter={() => setActiveBrand(brand)}
              >
                {brand.name}
                <ChevronRight className="h-3 w-3 opacity-40" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right: models for hovered brand */}
        <div className="flex-1 p-4">
          {activeBrand ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">{activeBrand.name} {t("models")}</h3>
                <Link
                  href={`/brand/${activeBrand.slug}`}
                  className="text-[11px] font-semibold text-primary hover:underline"
                >
                  {t("viewAllBrandProducts")}
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {activeBrand.models.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/brand/${activeBrand.slug}/${model.slug}`}
                    className="rounded px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {model.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {t("hoverBrand")}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Live Search Dropdown ─── */
function LiveSearch() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = query.length >= 2 ? searchProducts(query).slice(0, 6) : []
  const showDropdown = isFocused && query.length >= 2

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (inputRef.current && !inputRef.current.parentElement?.contains(e.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      setIsFocused(false)
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 max-w-2xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={t("searchPlaceholder")}
          className="w-full border border-input bg-background px-4 py-2.5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); inputRef.current?.focus() }}
            className="absolute right-12 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-0 top-0 flex h-full items-center justify-center bg-primary px-4 text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      {/* Live results dropdown */}
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 border border-t-0 border-border bg-card shadow-xl">
          {results.length > 0 ? (
            <>
              {results.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  onClick={() => setIsFocused(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-secondary">
                    <ShoppingCart className="h-4 w-4 text-muted-foreground/40" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-foreground">{p.name}</p>
                    <p className="text-[11px] text-muted-foreground">{p.sku}</p>
                  </div>
                  <span className="flex-shrink-0 text-sm font-bold text-primary">
                    {"€"}{(p.salePrice ?? p.price).toFixed(2)}
                  </span>
                </Link>
              ))}
              <Link
                href={`/search?q=${encodeURIComponent(query)}`}
                onClick={() => setIsFocused(false)}
                className="block px-4 py-2.5 text-center text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                {t("viewAllResults")} &ldquo;{query}&rdquo;
              </Link>
            </>
          ) : (
              <div className="px-4 py-6 text-center text-xs text-muted-foreground">
              {t("noProductsFound")} &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </form>
  )
}

/* ─── Language Dropdown ─── */
function LanguageDropdown() {
  const i18n = useI18n()
  const locale = i18n?.locale || "en"
  const setLocale = i18n?.setLocale || (() => {})
  const t = i18n?.t || ((key: string) => {
    const enTranslations = translations.en as Record<string, string>
    return enTranslations[key] || key
  })
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const currentLang = languages.find((l) => l.code === locale) || languages[2] // Default to English

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-semibold hover:opacity-80 transition-opacity"
        aria-label="Select language"
      >
        <span className="mr-1">{currentLang.flag}</span>
        {currentLang.code.toUpperCase()}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 w-[180px] border border-border bg-card shadow-xl">
          <div className="max-h-[320px] overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                  locale === lang.code
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-primary/5"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Main Header ─── */
export function Header() {
  const [cartCount] = useState(0)
  const i18n = useI18n()
  
  // Ensure translation function is always available, fallback to English
  const t: (key: string) => string = (i18n && i18n.t) ? i18n.t : ((key: string) => {
    const enTranslations = translations.en as Record<string, string>
    return enTranslations[key] || key
  })

  /* Build category lookup map from the full categories array */
  const categoryMap = new Map<string, Category>()
  for (const cat of categories) {
    categoryMap.set(cat.slug, cat)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top bar (blue) ── */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[12px]">
          {/* Left: promo badges + WhatsApp */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-semibold">
              <Truck className="h-3.5 w-3.5" />
              {t("freeShipment")}
            </span>
            <span className="hidden items-center gap-1.5 font-semibold sm:flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="m 4.5 12.75 l 6 6 9 -13.5" />
              </svg>
              {t("highQuality")}
            </span>
            <span className="hidden items-center gap-1.5 font-semibold md:flex">
              <CheckCircle className="h-3.5 w-3.5" />
              {t("veryLowPrice")}
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Phone className="h-3.5 w-3.5" />
              Whatsapp +31 651 919 833 / +31 38 337 3797
            </span>
          </div>

          {/* Right: utility links */}
          <div className="flex items-center gap-4">
            <Link href="/about" className="hidden font-semibold hover:underline lg:inline">
              {t("blog")}
            </Link>
            <Link href="/brands" className="hidden font-semibold hover:underline lg:inline">
              {t("brands")}
            </Link>
            <button className="hidden items-center hover:opacity-80 transition-opacity lg:flex" aria-label={t("compareProducts")}>
              <ArrowLeftRight className="h-3.5 w-3.5" />
            </button>
            <LanguageDropdown />
            <button className="flex items-center gap-1 font-semibold hover:opacity-80 transition-opacity">
              {t("support")}
              <ChevronDown className="h-3 w-3" />
            </button>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Middle bar (white – logo, search, icons) ── */}
      <div className="bg-card border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-black italic tracking-tight text-primary leading-none">
                Bonus
              </span>
              <span className="text-2xl font-black italic tracking-tight text-accent leading-none">
                GSM
              </span>
              <span className="text-2xl font-black italic tracking-tight text-primary leading-none">
                .com
              </span>
            </div>
            <p className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
              Wholesale Mobile Phone Accessories & Repair Parts 24Hour Delivery
            </p>
          </Link>

          {/* Search bar */}
          <div className="hidden flex-1 md:block">
            <LiveSearch />
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-3">
              <Link
              href="/account"
              className="hidden text-foreground hover:text-primary transition-colors sm:block"
              aria-label={t("account")}
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              href="/wishlist"
              className="hidden text-primary hover:text-primary/80 transition-colors sm:block"
              aria-label={t("wishlist")}
            >
              <Heart className="h-6 w-6 fill-primary" />
            </Link>
            <Link
              href="/cart"
              className="relative text-primary hover:text-primary/80 transition-colors"
              aria-label={t("cart")}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            </Link>
            <MobileNav />
          </div>
        </div>

        {/* Mobile search */}
        <div className="border-t border-border px-4 pb-3 md:hidden">
          <LiveSearch />
        </div>
      </div>

      {/* ── Bottom bar (category navigation links with uniform dropdowns) ── */}
      <nav className="hidden border-b border-border bg-card md:block">
        <div className="mx-auto flex max-w-7xl items-center px-4">
          {categories.map((cat, index) => {
            const isRightSide = index >= categories.length - 5
            if (cat.children && cat.children.length > 0) {
              return (
                <div key={cat.slug} className="group relative">
                  <Link
                    href={`/category/${cat.slug}`}
                    className="flex items-center px-3 py-2.5 text-[13px] font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {cat.name}
                    <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {hasGrandchildren(cat) ? (
                    <CategoryMegaMenu category={cat} alignRight={isRightSide} />
                  ) : (
                    <SimpleDropdown category={cat} alignRight={isRightSide} />
                  )}
                </div>
              )
            }
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="px-3 py-2.5 text-[13px] font-bold text-foreground hover:text-primary transition-colors"
              >
                {cat.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
