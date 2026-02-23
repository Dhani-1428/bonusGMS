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
  Wrench,
  Plug,
  Shield,
  Monitor,
  Store,
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

/* ─── Samsung Mega Menu: 3-column layout matching utopya.com ─── */
function SamsungMegaMenu({ alignRight }: { alignRight?: boolean }) {
  const lcdCategory = categories.find(cat => cat.slug === "lcd")
  const samsungCat = lcdCategory?.children?.find(cat => cat.slug === "lcd-samsung")

  // Organize Samsung series
  const galaxyA = samsungCat?.children?.find(series => series.slug === "galaxy-a")
  const galaxyS = samsungCat?.children?.find(series => series.slug === "galaxy-s")
  const galaxyM = samsungCat?.children?.find(series => series.slug === "galaxy-m")
  const galaxyNote = samsungCat?.children?.find(series => series.slug === "galaxy-note")
  const galaxyJ = samsungCat?.children?.find(series => series.slug === "galaxy-j")
  const galaxyZ = samsungCat?.children?.find(series => series.slug === "galaxy-z")
  const galaxyTab = samsungCat?.children?.find(series => series.slug === "galaxy-tab")
  const galaxyXCover = samsungCat?.children?.find(series => series.slug === "galaxy-xcover")
  const galaxyWatch = samsungCat?.children?.find(series => series.slug === "galaxy-watch")

  return (
    <div
      className={`absolute top-full left-0 z-50 hidden border border-gray-200 bg-white shadow-xl group-hover:block w-[1200px] mt-0`}
    >
      <div className="grid grid-cols-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Column 1: Galaxy A */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-a"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy A
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {galaxyA?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Galaxy S */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-s"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy S
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {galaxyS?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Galaxy M, Galaxy Note */}
        <div className="border-r border-gray-200 px-3 py-4">
          {/* Galaxy M Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-m"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy M
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5 mb-6">
            {galaxyM?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Galaxy Note Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-note"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy Note
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {galaxyNote?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Galaxy J, Galaxy Z */}
        <div className="border-r border-gray-200 px-3 py-4">
          {/* Galaxy J Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-j"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy J
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5 mb-6">
            {galaxyJ?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Galaxy Z Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-z"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy Z
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {galaxyZ?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Galaxy Tab */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-tab"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy Tab
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {galaxyTab?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 6: Galaxy XCover, Galaxy Watch */}
        <div className="px-3 py-4">
          {/* Galaxy XCover Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-xcover"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy XCover
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5 mb-6">
            {galaxyXCover?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Galaxy Watch Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/galaxy-watch"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Galaxy Watch
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {galaxyWatch?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ─── Xiaomi Mega Menu: 7-column layout ─── */
function XiaomiMegaMenu({ alignRight }: { alignRight?: boolean }) {
  const lcdCategory = categories.find(cat => cat.slug === "lcd")
  const xiaomiCat = lcdCategory?.children?.find(cat => cat.slug === "lcd-xiaomi")

  // Organize Xiaomi series
  const redmi = xiaomiCat?.children?.find(series => series.slug === "redmi")
  const redmiNote = xiaomiCat?.children?.find(series => series.slug === "redmi-note")
  const xiaomiSeries = xiaomiCat?.children?.find(series => series.slug === "xiaomi-series")
  const miSeries = xiaomiCat?.children?.find(series => series.slug === "mi-series")
  const pocoSeries = xiaomiCat?.children?.find(series => series.slug === "poco-series")
  const mobiliteUrbaine = xiaomiCat?.children?.find(series => series.slug === "mobilite-urbaine")
  const padSeries = xiaomiCat?.children?.find(series => series.slug === "pad-series")

  return (
    <div
      className={`absolute top-full left-0 z-50 hidden border border-gray-200 bg-white shadow-xl group-hover:block w-[1200px] max-w-[calc(100vw-2rem)] mt-0`}
    >
      <div className="grid grid-cols-7 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Column 1: Redmi */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/redmi"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Redmi
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {redmi?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Redmi Note */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/redmi-note"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Redmi Note
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {redmiNote?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Xiaomi */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/xiaomi-series"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Xiaomi
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {xiaomiSeries?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Mi */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/mi-series"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Mi
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {miSeries?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Poco */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/poco-series"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Poco
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {pocoSeries?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 6: Mobilité Urbaine */}
        <div className="border-r border-gray-200 px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/mobilite-urbaine"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Mobilité Urbaine
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {mobiliteUrbaine?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 7: Pad */}
        <div className="px-3 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/pad-series"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Pad
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {padSeries?.children?.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ─── Apple Mega Menu: 5-column layout (iPhone, Apple Watch, iPad Pro+mini, iPad+Air, MacBook) ─── */
function AppleMegaMenu({ alignRight }: { alignRight?: boolean }) {
  // Find LCD category first, then find children within it
  const lcdCategory = categories.find(cat => cat.slug === "lcd")
  const iphoneCat = lcdCategory?.children?.find(cat => cat.slug === "lcd-iphone")
  const ipadCat = lcdCategory?.children?.find(cat => cat.slug === "lcd-ipad")
  const macbookCat = lcdCategory?.children?.find(cat => cat.slug === "lcd-macbook")
  const appleWatchCat = lcdCategory?.children?.find(cat => cat.slug === "lcd-apple-watch")

  // Organize iPhone models
  const iphoneModels = iphoneCat?.children || []
  
  // Organize iPad Pro models (from iPad category)
  const ipadProModels = ipadCat?.children?.filter(item => 
    item.name.toLowerCase().includes("ipad pro")
  ) || []
  
  // Organize standard iPad models (iPad with number, not Pro/Air/mini)
  const standardIpadModels = ipadCat?.children?.filter(item => {
    const name = item.name.toLowerCase()
    return name.startsWith("ipad ") && 
           !name.includes("pro") && 
           !name.includes("air") && 
           !name.includes("mini") &&
           /ipad \d+/.test(name)
  }) || []
  
  // Organize iPad Air models
  const ipadAirModels = ipadCat?.children?.filter(item => 
    item.name.toLowerCase().includes("ipad air")
  ) || []
  
  // Organize iPad mini models
  const ipadMiniModels = ipadCat?.children?.filter(item => 
    item.name.toLowerCase().includes("ipad mini")
  ) || []

  // Apple Watch models (we'll create a simple list)
  const appleWatchModels = [
    { name: "Series 11 (46mm)", slug: "apple-watch-series-11-46mm" },
    { name: "Series 11 (42mm)", slug: "apple-watch-series-11-42mm" },
    { name: "Series 10 (46mm)", slug: "apple-watch-series-10-46mm" },
    { name: "Series 10 (42mm)", slug: "apple-watch-series-10-42mm" },
    { name: "Series 9 (45mm)", slug: "apple-watch-series-9-45mm" },
    { name: "Series 9 (41mm)", slug: "apple-watch-series-9-41mm" },
    { name: "Series 8 (45mm)", slug: "apple-watch-series-8-45mm" },
    { name: "Series 8 (41mm)", slug: "apple-watch-series-8-41mm" },
    { name: "Series 7 (45mm)", slug: "apple-watch-series-7-45mm" },
    { name: "Series 7 (41mm)", slug: "apple-watch-series-7-41mm" },
    { name: "Series 6 (44mm)", slug: "apple-watch-series-6-44mm" },
    { name: "Series 6 (40mm)", slug: "apple-watch-series-6-40mm" },
    { name: "Series SE2 (44mm)", slug: "apple-watch-series-se2-44mm" },
    { name: "Series SE2 (40mm)", slug: "apple-watch-series-se2-40mm" },
    { name: "Series SE (44mm)", slug: "apple-watch-series-se-44mm" },
    { name: "Series SE (40mm)", slug: "apple-watch-series-se-40mm" },
    { name: "Series 5 (44mm)", slug: "apple-watch-series-5-44mm" },
    { name: "Series 5 (40mm)", slug: "apple-watch-series-5-40mm" },
    { name: "Series 4 (44mm)", slug: "apple-watch-series-4-44mm" },
    { name: "Series 4 (40mm)", slug: "apple-watch-series-4-40mm" },
    { name: "Series 3 (42mm)", slug: "apple-watch-series-3-42mm" },
    { name: "Series 3 (38mm)", slug: "apple-watch-series-3-38mm" },
  ]

  // MacBook models
  const macbookModels = [
    { name: "13\" Unibody (A1342)", slug: "macbook-13-unibody-a1342" },
    { name: "12'' Retina (A1534)", slug: "macbook-12-retina-a1534" },
    { name: "Air 15\" Retina (A3241)", slug: "macbook-air-15-retina-a3241" },
    { name: "Air 15\" M3 (A3114)", slug: "macbook-air-15-m3-a3114" },
    { name: "Air 15\" M2 (A2941)", slug: "macbook-air-15-m2-a2941" },
    { name: "Air 13\" M3 (A3113)", slug: "macbook-air-13-m3-a3113" },
    { name: "Air 13\" M2 (A2681)", slug: "macbook-air-13-m2-a2681" },
    { name: "Air 13,3\" M1 (A2337)", slug: "macbook-air-133-m1-a2337" },
    { name: "Air 13'' (A2179)", slug: "macbook-air-13-a2179" },
    { name: "Air 13\" (A1932)", slug: "macbook-air-13-a1932" },
    { name: "Air 13\" (A1466)", slug: "macbook-air-13-a1466" },
    { name: "Air 13\" (A1369)", slug: "macbook-air-13-a1369" },
    { name: "Air 13\" Retina (A3240)", slug: "macbook-air-13-retina-a3240" },
    { name: "Air 11\" (A1465)", slug: "macbook-air-11-a1465" },
    { name: "Air 11\" (A1370)", slug: "macbook-air-11-a1370" },
    { name: "Pro 17\" Unibody (A1297)", slug: "macbook-pro-17-unibody-a1297" },
    { name: "Pro 16\" (A3186)", slug: "macbook-pro-16-a3186" },
    { name: "Pro 16\" (A3403)", slug: "macbook-pro-16-a3403" },
    { name: "Pro 16\" (A2991)", slug: "macbook-pro-16-a2991" },
    { name: "Pro 16\" (A2780)", slug: "macbook-pro-16-a2780" },
    { name: "Pro 16\" (A2485)", slug: "macbook-pro-16-a2485" },
    { name: "Pro 16\" Retina TB (A2141)", slug: "macbook-pro-16-retina-tb-a2141" },
    { name: "Pro 15\" Retina TB (A1990)", slug: "macbook-pro-15-retina-tb-a1990" },
    { name: "Pro 15\" Retina (A1707)", slug: "macbook-pro-15-retina-a1707" },
    { name: "Pro 15\" Retina (A1398)", slug: "macbook-pro-15-retina-a1398" },
    { name: "Pro 15\" Unibody (A1286)", slug: "macbook-pro-15-unibody-a1286" },
    { name: "Pro 14\" (A3185)", slug: "macbook-pro-14-a3185" },
    { name: "Pro 14\" (A3401)", slug: "macbook-pro-14-a3401" },
    { name: "Pro 14\" (A3112)", slug: "macbook-pro-14-a3112" },
    { name: "Pro 14\" (A2992)", slug: "macbook-pro-14-a2992" },
    { name: "Pro 14\" (A2918)", slug: "macbook-pro-14-a2918" },
    { name: "Pro 14\" (A2779)", slug: "macbook-pro-14-a2779" },
    { name: "Pro 14\" (A2442)", slug: "macbook-pro-14-a2442" },
    { name: "Pro 13\" Retina (A2338)", slug: "macbook-pro-13-retina-a2338" },
    { name: "Pro 13\" Retina TB (A2289)", slug: "macbook-pro-13-retina-tb-a2289" },
    { name: "Pro 13\" Retina TB (A2251)", slug: "macbook-pro-13-retina-tb-a2251" },
    { name: "Pro 13\" Retina TB (A2159)", slug: "macbook-pro-13-retina-tb-a2159" },
    { name: "Pro 13\" Retina TB (A1989)", slug: "macbook-pro-13-retina-tb-a1989" },
    { name: "Pro 13\" Retina (A1708)", slug: "macbook-pro-13-retina-a1708" },
    { name: "Pro 13\" Retina TB (A1706)", slug: "macbook-pro-13-retina-tb-a1706" },
    { name: "Pro 13\" Retina (A1502)", slug: "macbook-pro-13-retina-a1502" },
    { name: "Pro 13\" Retina (A1425)", slug: "macbook-pro-13-retina-a1425" },
    { name: "Pro 13\" Unibody (A1278)", slug: "macbook-pro-13-unibody-a1278" },
  ]

  return (
    <div
      className={`absolute top-full z-50 hidden border border-border bg-white shadow-xl group-hover:block w-[1000px] ${
        alignRight ? "right-0" : "left-0"
      }`}
    >
      <div className="grid grid-cols-5 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Column 1: iPhone */}
        <div className="border-r border-gray-200 px-4 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-iphone"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              iPhone
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {iphoneModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Apple Watch */}
        <div className="border-r border-gray-200 px-4 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-apple-watch"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              Apple Watch
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {appleWatchModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: iPad Pro + iPad mini */}
        <div className="border-r border-gray-200 px-4 py-4">
          {/* iPad Pro Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-ipad"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              iPad Pro
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5 mb-6">
            {ipadProModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* iPad mini Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-ipad"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              iPad mini
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {ipadMiniModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: iPad + iPad Air */}
        <div className="border-r border-gray-200 px-4 py-4">
          {/* iPad Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-ipad"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              iPad
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5 mb-6">
            {standardIpadModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* iPad Air Section */}
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-ipad"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              iPad Air
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {ipadAirModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: MacBook */}
        <div className="px-4 py-4">
          <div className="bg-gray-100 rounded-md px-3 py-1.5 mb-3">
            <Link
              href="/category/lcd-macbook"
              className="block text-[12px] font-semibold text-gray-700 hover:text-primary"
            >
              MacBook
            </Link>
          </div>
          <ul className="flex flex-col space-y-0.5">
            {macbookModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/category/${model.slug}`}
                  className="block py-1 text-[12px] leading-tight text-gray-900 hover:text-primary transition-colors"
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ─── Mega Menu: compressed LCD-style grid with subcategories + grandchildren ─── */
function CategoryMegaMenu({ category, alignRight }: { category: Category; alignRight?: boolean }) {
  /* Separate children WITH grandchildren from those WITHOUT */
  const withKids = category.children?.filter((c) => c.children && c.children.length > 0) ?? []
  const withoutKids = category.children?.filter((c) => !c.children || c.children.length === 0) ?? []

  // Calculate number of columns (max 4 columns like the image)
  const totalWithKids = withKids.length
  const cols = totalWithKids <= 4 ? totalWithKids : 4
  const colClass = cols === 1 ? "grid-cols-1" : cols === 2 ? "grid-cols-2" : cols === 3 ? "grid-cols-3" : "grid-cols-4"
  const widthClass = cols === 1 ? "w-[240px]" : cols === 2 ? "w-[480px]" : cols === 3 ? "w-[720px]" : "w-[960px]"

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

      {/* Grid of subcategories that have grandchildren - Column layout like image */}
      <div className={`grid ${colClass} max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent`}>
        {withKids.map((child) => (
          <div
            key={child.slug}
            className="border-r border-border last:border-r-0 px-4 py-3 hover:bg-primary/[0.02] transition-colors"
          >
            {/* Blue bold title */}
            <Link
              href={`/category/${child.slug}`}
              className="block mb-2 text-[12px] font-bold uppercase tracking-wide text-primary hover:underline"
            >
              {child.name}
            </Link>
            {/* Items list */}
            <ul className="flex flex-col space-y-0.5">
              {child.children!.slice(0, 7).map((grandchild) => (
                <li key={grandchild.slug}>
                  <Link
                    href={`/category/${grandchild.slug}`}
                    className="block py-1 text-[11px] leading-tight text-foreground hover:text-primary transition-colors"
                  >
                    {grandchild.name}
                  </Link>
                </li>
              ))}
              {child.children!.length > 7 && (
                <li>
                  <Link
                    href={`/category/${child.slug}`}
                    className="block py-1 text-[11px] font-semibold text-primary hover:underline"
                  >
                    + {child.children!.length - 7} more
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
  const i18n = useI18n()
  
  // Ensure translation function is always available, fallback to English
  const t: (key: string) => string = (i18n && i18n.t) ? i18n.t : ((key: string) => {
    const enTranslations = translations.en as Record<string, string>
    return enTranslations[key] || key
  })

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
        <div className="absolute right-0 top-full z-50 mt-1 w-[200px] border border-border bg-card shadow-xl rounded-md overflow-hidden">
          <div className="max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
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

      {/* ── Bottom bar (Utopya-style: Brands left, Product Types right) ── */}
      <nav className="hidden border-b border-gray-200 bg-white md:block">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-2.5">
          {/* Left Section: Brands */}
          <div className="flex items-center gap-6 border-r border-gray-300 pr-6">
            <Wrench className="h-4 w-4 text-primary flex-shrink-0" />
            {(() => {
              // Get brands in the order shown in utopya.com: Apple, Samsung, Xiaomi, Honor, Motorola, Others
              const brandOrder = ["Apple", "Samsung", "Xiaomi", "Honor", "Motorola"]
              const orderedBrands = brandOrder
                .map(name => brands.find(b => b.name === name))
                .filter(Boolean) as Brand[]
              
              // Add "Others" as a special case
              const otherBrands = brands.filter(b => !brandOrder.includes(b.name))
              
              return (
                <>
                  {orderedBrands.map((brand) => {
                    // Special handling for Apple - use the 7-column mega menu
                    if (brand.name === "Apple") {
                      return (
                        <div key={brand.slug} className="group relative">
                          <Link
                            href={`/brand/${brand.slug}`}
                            className="flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
                          >
                            {brand.name}
                            <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <AppleMegaMenu alignRight={false} />
                        </div>
                      )
                    }
                    
                    // Find the LCD category first, then find children within it
                    // Special handling for Samsung - use the 3-column mega menu
                    if (brand.name === "Samsung") {
                      return (
                        <div key={brand.slug} className="group relative">
                          <Link
                            href={`/brand/${brand.slug}`}
                            className="flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
                          >
                            {brand.name}
                            <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <SamsungMegaMenu alignRight={false} />
                        </div>
                      )
                    }
                    
                    // Special handling for Xiaomi - use the 7-column mega menu
                    if (brand.name === "Xiaomi") {
                      return (
                        <div key={brand.slug} className="group relative">
                          <Link
                            href={`/brand/${brand.slug}`}
                            className="flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
                          >
                            {brand.name}
                            <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <XiaomiMegaMenu alignRight={false} />
                        </div>
                      )
                    }
                    
                    // Find the LCD category for other brands
                    const lcdCategory = categories.find(cat => cat.slug === "lcd")
                    let brandCategory: Category | undefined
                    if (brand.name === "Honor") {
                      brandCategory = lcdCategory?.children?.find((cat) => cat.slug === "lcd-honor" || cat.name === "LCD Honor")
                    } else if (brand.name === "Motorola") {
                      brandCategory = lcdCategory?.children?.find((cat) => cat.slug === "lcd-motorola" || cat.name === "LCD Motorola")
                    }
                    
                    // Fallback: search by slug or name within LCD category
                    if (!brandCategory && lcdCategory) {
                      brandCategory = lcdCategory.children?.find((cat) => 
                        cat.slug.includes(brand.slug.toLowerCase()) || 
                        cat.name.toLowerCase().includes(brand.name.toLowerCase())
                      )
                    }
                    
                    const hasDropdown = brandCategory?.children && brandCategory.children.length > 0
                    
                    return (
                      <div key={brand.slug} className="group relative">
                        <Link
                          href={`/brand/${brand.slug}`}
                          className="flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
                        >
                          {brand.name}
                          {hasDropdown && (
                            <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                          )}
                        </Link>
                        {hasDropdown && brandCategory && (
                          hasGrandchildren(brandCategory) ? (
                            <CategoryMegaMenu category={brandCategory} alignRight={false} />
                          ) : (
                            <SimpleDropdown category={brandCategory} alignRight={false} />
                          )
                        )}
                      </div>
                    )
                  })}
                  {otherBrands.length > 0 && (
                    <div className="group relative">
                      <Link
                        href="/brands"
                        className="flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
                      >
                        Others
                        <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                      </Link>
                      <div className="absolute top-full left-0 z-50 hidden w-[200px] border border-border bg-card shadow-xl group-hover:block">
                        <div className="py-2">
                          {otherBrands.slice(0, 10).map((brand) => (
                            <Link
                              key={brand.slug}
                              href={`/brand/${brand.slug}`}
                              className="block px-3.5 py-[5px] text-[12px] text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                            >
                              {brand.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )
            })()}
          </div>

          {/* Right Section: Product Types */}
          <div className="flex items-center gap-6 pl-6">
            <Link
              href="/category/parts"
              className="group relative flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              <Plug className="h-4 w-4 text-primary mr-1.5 flex-shrink-0" />
              Accessories
              <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
              {(() => {
                const accessoriesCat = categories.find(cat => cat.slug === "parts" || cat.name.toLowerCase().includes("accessories"))
                if (accessoriesCat && accessoriesCat.children && accessoriesCat.children.length > 0) {
                  return hasGrandchildren(accessoriesCat) ? (
                    <CategoryMegaMenu category={accessoriesCat} alignRight={true} />
                  ) : (
                    <SimpleDropdown category={accessoriesCat} alignRight={true} />
                  )
                }
              })()}
            </Link>
            
            <Link
              href="/category/glass-protector"
              className="group relative flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              <Shield className="h-4 w-4 text-primary mr-1.5 flex-shrink-0" />
              Protection
              <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
              {(() => {
                const protectionCat = categories.find(cat => cat.slug === "glass-protector" || cat.name.toLowerCase().includes("protection"))
                if (protectionCat && protectionCat.children && protectionCat.children.length > 0) {
                  return hasGrandchildren(protectionCat) ? (
                    <CategoryMegaMenu category={protectionCat} alignRight={true} />
                  ) : (
                    <SimpleDropdown category={protectionCat} alignRight={true} />
                  )
                }
              })()}
            </Link>
            
            <Link
              href="/category/lcd"
              className="group relative flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              <Monitor className="h-4 w-4 text-primary mr-1.5 flex-shrink-0" />
              Computing
              <ChevronDown className="ml-0.5 h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
              {(() => {
                const computingCat = categories.find(cat => 
                  cat.slug === "lcd" || 
                  cat.slug === "lcd-laptop" || 
                  cat.slug === "lcd-for-ipad" ||
                  cat.slug === "lcd-for-macbook" ||
                  cat.name.toLowerCase().includes("computing") ||
                  cat.name.toLowerCase().includes("laptop")
                )
                if (computingCat && computingCat.children && computingCat.children.length > 0) {
                  return hasGrandchildren(computingCat) ? (
                    <CategoryMegaMenu category={computingCat} alignRight={true} />
                  ) : (
                    <SimpleDropdown category={computingCat} alignRight={true} />
                  )
                }
              })()}
            </Link>
            
            <Link
              href="/store"
              className="flex items-center text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors"
            >
              <Store className="h-4 w-4 text-primary mr-1.5 flex-shrink-0" />
              Store
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
