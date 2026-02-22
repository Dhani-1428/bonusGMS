"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronLeft, Home, User, Heart, ShoppingCart } from "lucide-react"
import { categories } from "@/lib/data"
import type { Category } from "@/lib/data"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [menuStack, setMenuStack] = useState<{ title: string; items: Category[] }[]>([])

  const currentMenu = menuStack.length > 0 ? menuStack[menuStack.length - 1] : null
  const displayItems = currentMenu ? currentMenu.items : categories

  function pushMenu(title: string, items: Category[]) {
    setMenuStack((prev) => [...prev, { title, items }])
  }

  function popMenu() {
    setMenuStack((prev) => prev.slice(0, -1))
  }

  function closeAll() {
    setIsOpen(false)
    setMenuStack([])
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col items-center rounded-lg p-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
        <span className="mt-0.5">Menu</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/40 md:hidden" onClick={closeAll}>
          <div
            className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-primary p-4">
              {menuStack.length > 0 ? (
                <button
                  onClick={popMenu}
                  className="flex items-center gap-1 text-sm font-medium text-primary-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <span className="text-sm font-bold text-primary-foreground">Menu</span>
              )}
              <button onClick={closeAll} className="text-primary-foreground" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Current title */}
            {currentMenu && (
              <div className="border-b border-border bg-secondary px-4 py-2">
                <span className="text-sm font-semibold text-secondary-foreground">{currentMenu.title}</span>
              </div>
            )}

            {/* Menu items */}
            <div className="flex-1 overflow-y-auto">
              {!currentMenu && (
                <Link
                  href="/"
                  onClick={closeAll}
                  className="flex items-center gap-3 border-b border-border px-4 py-3 text-sm text-foreground hover:bg-secondary"
                >
                  <Home className="h-4 w-4 text-muted-foreground" />
                  Homepage
                </Link>
              )}
              {displayItems.map((item) => (
                <div key={item.slug} className="border-b border-border">
                  <div className="flex items-center">
                    <Link
                      href={`/category/${item.slug}`}
                      onClick={closeAll}
                      className="flex-1 px-4 py-3 text-sm text-foreground hover:bg-secondary"
                    >
                      {item.name}
                    </Link>
                    {item.children && item.children.length > 0 && (
                      <button
                        onClick={() => pushMenu(item.name, item.children!)}
                        className="px-4 py-3 text-muted-foreground hover:text-foreground"
                        aria-label={`View ${item.name} subcategories`}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom actions */}
            {!currentMenu && (
              <div className="border-t border-border bg-secondary">
                <Link
                  href="/account"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-secondary-foreground hover:bg-muted"
                >
                  <User className="h-4 w-4" />
                  My Account
                </Link>
                <Link
                  href="/wishlist"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-secondary-foreground hover:bg-muted"
                >
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Link>
                <Link
                  href="/cart"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-secondary-foreground hover:bg-muted"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Cart
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
