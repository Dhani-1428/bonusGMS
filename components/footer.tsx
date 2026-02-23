"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Truck, Shield, Award, Headphones } from "lucide-react"
import { useI18n, translations } from "@/lib/i18n"

export function Footer() {
  const i18n = useI18n()
  const t = i18n?.t || ((key: string) => {
    const enTranslations = translations.en as Record<string, string>
    return enTranslations[key] || key
  })
  return (
    <footer>
      {/* Features bar */}
      <div className="bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 md:grid-cols-4">
          <div className="flex items-center gap-3 text-primary-foreground">
            <Truck className="h-8 w-8 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">{t("freeShipment")}</p>
              <p className="text-xs opacity-80">{t("freeShipmentDesc")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground">
            <Shield className="h-8 w-8 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">{t("highQuality")}</p>
              <p className="text-xs opacity-80">{t("highQualityDesc")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground">
            <Award className="h-8 w-8 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">{t("veryLowPrice")}</p>
              <p className="text-xs opacity-80">{t("veryLowPriceDesc")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground">
            <Headphones className="h-8 w-8 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">{t("support247")}</p>
              <p className="text-xs opacity-80">{t("support247Desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-bonusgsm-dark text-bonusgsm-light">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="mb-4 flex items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-black text-primary-foreground">B</span>
              </div>
              <span className="text-lg font-black text-primary">Bonus</span>
              <span className="text-lg font-black text-accent">GSM</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed opacity-80">
              BonusGSM is the wholesale smartphone accessories and high quality parts supplier at the lowest prices. More than 23,000 products available.
            </p>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Your Address Here, City, Country
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +31 651 919 833
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@bonusgsm.com
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                Mon - Fri: 9:00 - 17:00
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">{t("information")}</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t("aboutUs")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t("contact")}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t("termsConditions")}</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t("privacyPolicy")}</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">{t("shippingInfo")}</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">{t("faq")}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">{t("categories")}</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li><Link href="/category/gx" className="hover:text-primary transition-colors">GX (MT Tech)</Link></li>
              <li><Link href="/category/lcd" className="hover:text-primary transition-colors">LCD Screens</Link></li>
              <li><Link href="/category/battery" className="hover:text-primary transition-colors">Batteries</Link></li>
              <li><Link href="/category/parts" className="hover:text-primary transition-colors">Parts & Accessories</Link></li>
              <li><Link href="/category/tools-equipment" className="hover:text-primary transition-colors">Repair Tools</Link></li>
              <li><Link href="/category/charging-cables" className="hover:text-primary transition-colors">Charging Cables</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">{t("myAccount")}</h3>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li><Link href="/account" className="hover:text-primary transition-colors">{t("myAccount")}</Link></li>
              <li><Link href="/cart" className="hover:text-primary transition-colors">{t("shoppingCart")}</Link></li>
              <li><Link href="/wishlist" className="hover:text-primary transition-colors">{t("wishlist")}</Link></li>
              <li><Link href="/account/orders" className="hover:text-primary transition-colors">{t("orderHistory")}</Link></li>
            </ul>
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">{t("paymentMethods")}</h3>
              <div className="flex flex-wrap gap-2 text-xs opacity-60">
                <span className="rounded bg-card/10 px-2 py-1">PayPal</span>
                <span className="rounded bg-card/10 px-2 py-1">iDEAL</span>
                <span className="rounded bg-card/10 px-2 py-1">SOFORT</span>
                <span className="rounded bg-card/10 px-2 py-1">Bancontact</span>
                <span className="rounded bg-card/10 px-2 py-1">GiroPay</span>
                <span className="rounded bg-card/10 px-2 py-1">Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs opacity-60 sm:flex-row">
            <p>2024 BonusGSM. {t("allRightsReserved")}</p>
            <p>{t("wholesaleSmartphone")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
