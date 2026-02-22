"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

/* ─── Supported Languages ─── */
export type Locale = "en" | "nl" | "de" | "fr" | "es" | "it" | "el" | "pt"

export const languages: { code: Locale; name: string; flag: string }[] = [
  { code: "nl", name: "Nederlands", flag: "\u{1F1F3}\u{1F1F1}" },
  { code: "de", name: "Deutsch", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "en", name: "English", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "fr", name: "Fran\u00e7ais", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "es", name: "Espa\u00f1ol", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "it", name: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
  { code: "el", name: "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac", flag: "\u{1F1EC}\u{1F1F7}" },
  { code: "pt", name: "Portugu\u00eas", flag: "\u{1F1F5}\u{1F1F9}" },
]

/* ─── Translation Keys ─── */
type TranslationKeys = {
  // Top bar
  freeShipment: string
  highQuality: string
  veryLowPrice: string
  blog: string
  support: string
  // Search
  searchPlaceholder: string
  noProductsFound: string
  viewAllResults: string
  // Account actions
  account: string
  wishlist: string
  cart: string
  menu: string
  // Navigation
  home: string
  homepage: string
  back: string
  viewAll: string
  allBrands: string
  // Home page
  shopNow: string
  viewProducts: string
  lcdScreens: string
  batteries: string
  partsTools: string
  officialPartner: string
  popularProducts: string
  shopByBrand: string
  latestProducts: string
  products: string
  more: string
  // Footer
  freeShipmentDesc: string
  highQualityDesc: string
  veryLowPriceDesc: string
  support247: string
  support247Desc: string
  information: string
  aboutUs: string
  contact: string
  termsConditions: string
  privacyPolicy: string
  shippingInfo: string
  faq: string
  categories: string
  myAccount: string
  shoppingCart: string
  orderHistory: string
  paymentMethods: string
  allRightsReserved: string
  wholesaleSmartphone: string
  // Product card
  addToWishlist: string
  addToCart: string
  // Brand mega menu
  brands: string
  models: string
  viewAllBrandProducts: string
  hoverBrand: string
  // SEO
  seoTitle: string
  seoDesc1: string
  seoDesc2: string
  seoHighlight: string
  seoBar: string
  seoPayments: string
  // Category page
  premiumQuality: string
  allBrandsModels: string
  description: string
  // Misc
  compareProducts: string
}

/* ─── Translations ─── */
const translations: Record<Locale, TranslationKeys> = {
  en: {
    freeShipment: "Free Shipment",
    highQuality: "High Quality",
    veryLowPrice: "Very Low Price",
    blog: "Blog",
    support: "Support",
    searchPlaceholder: "What are you searching for?",
    noProductsFound: "No products found for",
    viewAllResults: "View all results for",
    account: "Account",
    wishlist: "Wishlist",
    cart: "Cart",
    menu: "Menu",
    home: "Home",
    homepage: "Homepage",
    back: "Back",
    viewAll: "View All",
    allBrands: "All Brands",
    shopNow: "Shop Now",
    viewProducts: "View Products",
    lcdScreens: "LCD Screens",
    batteries: "Batteries",
    partsTools: "Parts & Tools",
    officialPartner: "Official GX Partner",
    popularProducts: "Popular Products",
    shopByBrand: "Shop by Brand",
    latestProducts: "Latest Products",
    products: "products",
    more: "more",
    freeShipmentDesc: "On all orders",
    highQualityDesc: "Tested products",
    veryLowPriceDesc: "Best wholesale prices",
    support247: "24/7 Support",
    support247Desc: "WhatsApp available",
    information: "Information",
    aboutUs: "About Us",
    contact: "Contact",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    shippingInfo: "Shipping Info",
    faq: "FAQ",
    categories: "Categories",
    myAccount: "My Account",
    shoppingCart: "Shopping Cart",
    orderHistory: "Order History",
    paymentMethods: "Payment Methods",
    allRightsReserved: "All rights reserved.",
    wholesaleSmartphone: "Wholesale Smartphone LCD Parts & Accessories",
    addToWishlist: "Add to wishlist",
    addToCart: "Add to cart",
    brands: "Brands",
    models: "Models",
    viewAllBrandProducts: "View all products",
    hoverBrand: "Hover over a brand to see models",
    seoTitle: "Wholesale Smartphone / Accessories / LCD / Parts",
    seoDesc1: "BonusGSM is the wholesale cell phone accessories and high quality parts at the lowest prices. Of cases and chargers to parts and equipment, the wholesale GSM mobile phone accessories and spare parts has it all.",
    seoDesc2: "As a wholesale phone accessories and parts we have GSM / mobile phone covers, telecom accessories and parts for nearly every brand and type of cell, cell phone, smartphone and tablet at home.",
    seoHighlight: "More than 23,000 kinds of accessories available immediately! Fast delivery within 24 hours!",
    seoBar: "Sharp Prices / Free Shipment / 24 Hours Delivery / High Quality / 25 Years Experience / 23,000 Items",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Cash on Delivery / Bank Transfer",
    premiumQuality: "Premium quality at wholesale prices",
    allBrandsModels: "All brands and models",
    description: "Description",
    compareProducts: "Compare products",
  },
  nl: {
    freeShipment: "Gratis Verzending",
    highQuality: "Hoge Kwaliteit",
    veryLowPrice: "Zeer Lage Prijs",
    blog: "Blog",
    support: "Ondersteuning",
    searchPlaceholder: "Waar bent u naar op zoek?",
    noProductsFound: "Geen producten gevonden voor",
    viewAllResults: "Bekijk alle resultaten voor",
    account: "Account",
    wishlist: "Verlanglijst",
    cart: "Winkelwagen",
    menu: "Menu",
    home: "Home",
    homepage: "Startpagina",
    back: "Terug",
    viewAll: "Alles Bekijken",
    allBrands: "Alle Merken",
    shopNow: "Nu Winkelen",
    viewProducts: "Bekijk Producten",
    lcdScreens: "LCD Schermen",
    batteries: "Batterijen",
    partsTools: "Onderdelen & Gereedschap",
    officialPartner: "Offici\u00eble GX Partner",
    popularProducts: "Populaire Producten",
    shopByBrand: "Winkel per Merk",
    latestProducts: "Nieuwste Producten",
    products: "producten",
    more: "meer",
    freeShipmentDesc: "Op alle bestellingen",
    highQualityDesc: "Geteste producten",
    veryLowPriceDesc: "Beste groothandelsprijzen",
    support247: "24/7 Ondersteuning",
    support247Desc: "WhatsApp beschikbaar",
    information: "Informatie",
    aboutUs: "Over Ons",
    contact: "Contact",
    termsConditions: "Algemene Voorwaarden",
    privacyPolicy: "Privacybeleid",
    shippingInfo: "Verzendinfo",
    faq: "FAQ",
    categories: "Categorie\u00ebn",
    myAccount: "Mijn Account",
    shoppingCart: "Winkelwagen",
    orderHistory: "Bestelgeschiedenis",
    paymentMethods: "Betaalmethoden",
    allRightsReserved: "Alle rechten voorbehouden.",
    wholesaleSmartphone: "Groothandel Smartphone LCD Onderdelen & Accessoires",
    addToWishlist: "Toevoegen aan verlanglijst",
    addToCart: "Toevoegen aan winkelwagen",
    brands: "Merken",
    models: "Modellen",
    viewAllBrandProducts: "Bekijk alle producten",
    hoverBrand: "Beweeg over een merk om modellen te zien",
    seoTitle: "Groothandel Smartphone / Accessoires / LCD / Onderdelen",
    seoDesc1: "BonusGSM is de groothandel in mobiele telefoon accessoires en onderdelen van hoge kwaliteit tegen de laagste prijzen.",
    seoDesc2: "Als groothandel in telefoon accessoires en onderdelen hebben wij GSM / mobiele telefoon hoesjes, telecom accessoires en onderdelen voor bijna elk merk.",
    seoHighlight: "Meer dan 23.000 soorten accessoires direct beschikbaar! Snelle levering binnen 24 uur!",
    seoBar: "Scherpe Prijzen / Gratis Verzending / 24 Uur Levering / Hoge Kwaliteit / 25 Jaar Ervaring / 23.000 Artikelen",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Rembours / Bankoverschrijving",
    premiumQuality: "Premiumkwaliteit tegen groothandelsprijzen",
    allBrandsModels: "Alle merken en modellen",
    description: "Beschrijving",
    compareProducts: "Producten vergelijken",
  },
  de: {
    freeShipment: "Kostenloser Versand",
    highQuality: "Hohe Qualit\u00e4t",
    veryLowPrice: "Sehr G\u00fcnstiger Preis",
    blog: "Blog",
    support: "Support",
    searchPlaceholder: "Wonach suchen Sie?",
    noProductsFound: "Keine Produkte gefunden f\u00fcr",
    viewAllResults: "Alle Ergebnisse anzeigen f\u00fcr",
    account: "Konto",
    wishlist: "Wunschliste",
    cart: "Warenkorb",
    menu: "Men\u00fc",
    home: "Startseite",
    homepage: "Startseite",
    back: "Zur\u00fcck",
    viewAll: "Alle Anzeigen",
    allBrands: "Alle Marken",
    shopNow: "Jetzt Einkaufen",
    viewProducts: "Produkte Ansehen",
    lcdScreens: "LCD Bildschirme",
    batteries: "Batterien",
    partsTools: "Teile & Werkzeuge",
    officialPartner: "Offizieller GX Partner",
    popularProducts: "Beliebte Produkte",
    shopByBrand: "Nach Marke Einkaufen",
    latestProducts: "Neueste Produkte",
    products: "Produkte",
    more: "mehr",
    freeShipmentDesc: "Auf alle Bestellungen",
    highQualityDesc: "Getestete Produkte",
    veryLowPriceDesc: "Beste Gro\u00dfhandelspreise",
    support247: "24/7 Support",
    support247Desc: "WhatsApp verf\u00fcgbar",
    information: "Information",
    aboutUs: "\u00dcber Uns",
    contact: "Kontakt",
    termsConditions: "AGB",
    privacyPolicy: "Datenschutz",
    shippingInfo: "Versandinfo",
    faq: "FAQ",
    categories: "Kategorien",
    myAccount: "Mein Konto",
    shoppingCart: "Warenkorb",
    orderHistory: "Bestellverlauf",
    paymentMethods: "Zahlungsmethoden",
    allRightsReserved: "Alle Rechte vorbehalten.",
    wholesaleSmartphone: "Gro\u00dfhandel Smartphone LCD Teile & Zubeh\u00f6r",
    addToWishlist: "Zur Wunschliste hinzuf\u00fcgen",
    addToCart: "In den Warenkorb",
    brands: "Marken",
    models: "Modelle",
    viewAllBrandProducts: "Alle Produkte anzeigen",
    hoverBrand: "Marke \u00fcberfahren um Modelle zu sehen",
    seoTitle: "Gro\u00dfhandel Smartphone / Zubeh\u00f6r / LCD / Teile",
    seoDesc1: "BonusGSM ist der Gro\u00dfhandel f\u00fcr Handyzubeh\u00f6r und hochwertige Teile zu den niedrigsten Preisen.",
    seoDesc2: "Als Gro\u00dfhandel f\u00fcr Telefonzubeh\u00f6r haben wir Teile f\u00fcr nahezu jede Marke und jeden Typ.",
    seoHighlight: "Mehr als 23.000 Arten von Zubeh\u00f6r sofort verf\u00fcgbar! Schnelle Lieferung innerhalb von 24 Stunden!",
    seoBar: "Scharfe Preise / Kostenloser Versand / 24 Stunden Lieferung / Hohe Qualit\u00e4t / 25 Jahre Erfahrung / 23.000 Artikel",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Nachnahme / Bank\u00fcberweisung",
    premiumQuality: "Premium-Qualit\u00e4t zu Gro\u00dfhandelspreisen",
    allBrandsModels: "Alle Marken und Modelle",
    description: "Beschreibung",
    compareProducts: "Produkte vergleichen",
  },
  fr: {
    freeShipment: "Livraison Gratuite",
    highQuality: "Haute Qualit\u00e9",
    veryLowPrice: "Tr\u00e8s Bas Prix",
    blog: "Blog",
    support: "Support",
    searchPlaceholder: "Que recherchez-vous?",
    noProductsFound: "Aucun produit trouv\u00e9 pour",
    viewAllResults: "Voir tous les r\u00e9sultats pour",
    account: "Compte",
    wishlist: "Favoris",
    cart: "Panier",
    menu: "Menu",
    home: "Accueil",
    homepage: "Accueil",
    back: "Retour",
    viewAll: "Tout Voir",
    allBrands: "Toutes les Marques",
    shopNow: "Acheter Maintenant",
    viewProducts: "Voir les Produits",
    lcdScreens: "\u00c9crans LCD",
    batteries: "Batteries",
    partsTools: "Pi\u00e8ces & Outils",
    officialPartner: "Partenaire Officiel GX",
    popularProducts: "Produits Populaires",
    shopByBrand: "Acheter par Marque",
    latestProducts: "Derniers Produits",
    products: "produits",
    more: "plus",
    freeShipmentDesc: "Sur toutes les commandes",
    highQualityDesc: "Produits test\u00e9s",
    veryLowPriceDesc: "Meilleurs prix de gros",
    support247: "Support 24/7",
    support247Desc: "WhatsApp disponible",
    information: "Information",
    aboutUs: "\u00c0 Propos",
    contact: "Contact",
    termsConditions: "Conditions G\u00e9n\u00e9rales",
    privacyPolicy: "Politique de Confidentialit\u00e9",
    shippingInfo: "Info Livraison",
    faq: "FAQ",
    categories: "Cat\u00e9gories",
    myAccount: "Mon Compte",
    shoppingCart: "Panier",
    orderHistory: "Historique des Commandes",
    paymentMethods: "M\u00e9thodes de Paiement",
    allRightsReserved: "Tous droits r\u00e9serv\u00e9s.",
    wholesaleSmartphone: "Grossiste Pi\u00e8ces LCD & Accessoires Smartphone",
    addToWishlist: "Ajouter aux favoris",
    addToCart: "Ajouter au panier",
    brands: "Marques",
    models: "Mod\u00e8les",
    viewAllBrandProducts: "Voir tous les produits",
    hoverBrand: "Survolez une marque pour voir les mod\u00e8les",
    seoTitle: "Grossiste Smartphone / Accessoires / LCD / Pi\u00e8ces",
    seoDesc1: "BonusGSM est le grossiste en accessoires et pi\u00e8ces de haute qualit\u00e9 pour t\u00e9l\u00e9phones portables aux prix les plus bas.",
    seoDesc2: "En tant que grossiste en accessoires nous avons des pi\u00e8ces pour presque toutes les marques et types.",
    seoHighlight: "Plus de 23 000 types d'accessoires disponibles imm\u00e9diatement! Livraison rapide sous 24 heures!",
    seoBar: "Prix Nets / Livraison Gratuite / Livraison 24h / Haute Qualit\u00e9 / 25 Ans d'Exp\u00e9rience / 23 000 Articles",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Contre Remboursement / Virement",
    premiumQuality: "Qualit\u00e9 premium \u00e0 prix de gros",
    allBrandsModels: "Toutes marques et mod\u00e8les",
    description: "Description",
    compareProducts: "Comparer les produits",
  },
  es: {
    freeShipment: "Env\u00edo Gratuito",
    highQuality: "Alta Calidad",
    veryLowPrice: "Precio Muy Bajo",
    blog: "Blog",
    support: "Soporte",
    searchPlaceholder: "\u00bfQu\u00e9 est\u00e1s buscando?",
    noProductsFound: "No se encontraron productos para",
    viewAllResults: "Ver todos los resultados para",
    account: "Cuenta",
    wishlist: "Favoritos",
    cart: "Carrito",
    menu: "Men\u00fa",
    home: "Inicio",
    homepage: "Inicio",
    back: "Volver",
    viewAll: "Ver Todo",
    allBrands: "Todas las Marcas",
    shopNow: "Comprar Ahora",
    viewProducts: "Ver Productos",
    lcdScreens: "Pantallas LCD",
    batteries: "Bater\u00edas",
    partsTools: "Piezas y Herramientas",
    officialPartner: "Socio Oficial GX",
    popularProducts: "Productos Populares",
    shopByBrand: "Comprar por Marca",
    latestProducts: "\u00daltimos Productos",
    products: "productos",
    more: "m\u00e1s",
    freeShipmentDesc: "En todos los pedidos",
    highQualityDesc: "Productos probados",
    veryLowPriceDesc: "Mejores precios mayoristas",
    support247: "Soporte 24/7",
    support247Desc: "WhatsApp disponible",
    information: "Informaci\u00f3n",
    aboutUs: "Sobre Nosotros",
    contact: "Contacto",
    termsConditions: "T\u00e9rminos y Condiciones",
    privacyPolicy: "Pol\u00edtica de Privacidad",
    shippingInfo: "Info de Env\u00edo",
    faq: "FAQ",
    categories: "Categor\u00edas",
    myAccount: "Mi Cuenta",
    shoppingCart: "Carrito de Compras",
    orderHistory: "Historial de Pedidos",
    paymentMethods: "M\u00e9todos de Pago",
    allRightsReserved: "Todos los derechos reservados.",
    wholesaleSmartphone: "Mayorista Piezas LCD & Accesorios Smartphone",
    addToWishlist: "A\u00f1adir a favoritos",
    addToCart: "A\u00f1adir al carrito",
    brands: "Marcas",
    models: "Modelos",
    viewAllBrandProducts: "Ver todos los productos",
    hoverBrand: "Pase el rat\u00f3n sobre una marca para ver modelos",
    seoTitle: "Mayorista Smartphone / Accesorios / LCD / Piezas",
    seoDesc1: "BonusGSM es el mayorista de accesorios y piezas de alta calidad para m\u00f3viles a los precios m\u00e1s bajos.",
    seoDesc2: "Como mayorista de accesorios tenemos piezas para casi todas las marcas y tipos.",
    seoHighlight: "\u00a1M\u00e1s de 23.000 tipos de accesorios disponibles de inmediato! \u00a1Entrega r\u00e1pida en 24 horas!",
    seoBar: "Precios Netos / Env\u00edo Gratuito / Entrega 24h / Alta Calidad / 25 A\u00f1os de Experiencia / 23.000 Art\u00edculos",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Contra Reembolso / Transferencia",
    premiumQuality: "Calidad premium a precios de mayorista",
    allBrandsModels: "Todas las marcas y modelos",
    description: "Descripci\u00f3n",
    compareProducts: "Comparar productos",
  },
  it: {
    freeShipment: "Spedizione Gratuita",
    highQuality: "Alta Qualit\u00e0",
    veryLowPrice: "Prezzo Molto Basso",
    blog: "Blog",
    support: "Supporto",
    searchPlaceholder: "Cosa stai cercando?",
    noProductsFound: "Nessun prodotto trovato per",
    viewAllResults: "Vedi tutti i risultati per",
    account: "Account",
    wishlist: "Preferiti",
    cart: "Carrello",
    menu: "Menu",
    home: "Home",
    homepage: "Home",
    back: "Indietro",
    viewAll: "Vedi Tutto",
    allBrands: "Tutti i Marchi",
    shopNow: "Acquista Ora",
    viewProducts: "Vedi Prodotti",
    lcdScreens: "Schermi LCD",
    batteries: "Batterie",
    partsTools: "Parti e Strumenti",
    officialPartner: "Partner Ufficiale GX",
    popularProducts: "Prodotti Popolari",
    shopByBrand: "Acquista per Marca",
    latestProducts: "Ultimi Prodotti",
    products: "prodotti",
    more: "altri",
    freeShipmentDesc: "Su tutti gli ordini",
    highQualityDesc: "Prodotti testati",
    veryLowPriceDesc: "Migliori prezzi all'ingrosso",
    support247: "Supporto 24/7",
    support247Desc: "WhatsApp disponibile",
    information: "Informazioni",
    aboutUs: "Chi Siamo",
    contact: "Contatti",
    termsConditions: "Termini e Condizioni",
    privacyPolicy: "Informativa Privacy",
    shippingInfo: "Info Spedizione",
    faq: "FAQ",
    categories: "Categorie",
    myAccount: "Il Mio Account",
    shoppingCart: "Carrello",
    orderHistory: "Storico Ordini",
    paymentMethods: "Metodi di Pagamento",
    allRightsReserved: "Tutti i diritti riservati.",
    wholesaleSmartphone: "Ingrosso Parti LCD & Accessori Smartphone",
    addToWishlist: "Aggiungi ai preferiti",
    addToCart: "Aggiungi al carrello",
    brands: "Marchi",
    models: "Modelli",
    viewAllBrandProducts: "Vedi tutti i prodotti",
    hoverBrand: "Passa sopra un marchio per vedere i modelli",
    seoTitle: "Ingrosso Smartphone / Accessori / LCD / Parti",
    seoDesc1: "BonusGSM \u00e8 il grossista di accessori e parti di alta qualit\u00e0 per cellulari ai prezzi pi\u00f9 bassi.",
    seoDesc2: "Come grossista di accessori abbiamo parti per quasi tutti i marchi e tipi.",
    seoHighlight: "Pi\u00f9 di 23.000 tipi di accessori disponibili immediatamente! Consegna rapida entro 24 ore!",
    seoBar: "Prezzi Netti / Spedizione Gratuita / Consegna 24h / Alta Qualit\u00e0 / 25 Anni di Esperienza / 23.000 Articoli",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Contrassegno / Bonifico",
    premiumQuality: "Qualit\u00e0 premium a prezzi all'ingrosso",
    allBrandsModels: "Tutti i marchi e modelli",
    description: "Descrizione",
    compareProducts: "Confronta prodotti",
  },
  el: {
    freeShipment: "\u0394\u03c9\u03c1\u03b5\u03ac\u03bd \u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae",
    highQuality: "\u03a5\u03c8\u03b7\u03bb\u03ae \u03a0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1",
    veryLowPrice: "\u03a0\u03bf\u03bb\u03cd \u03a7\u03b1\u03bc\u03b7\u03bb\u03ae \u03a4\u03b9\u03bc\u03ae",
    blog: "Blog",
    support: "\u03a5\u03c0\u03bf\u03c3\u03c4\u03ae\u03c1\u03b9\u03be\u03b7",
    searchPlaceholder: "\u03a4\u03b9 \u03c8\u03ac\u03c7\u03bd\u03b5\u03c4\u03b5;",
    noProductsFound: "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1 \u03b3\u03b9\u03b1",
    viewAllResults: "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1 \u03b3\u03b9\u03b1",
    account: "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2",
    wishlist: "\u039b\u03af\u03c3\u03c4\u03b1 \u0395\u03c0\u03b9\u03b8\u03c5\u03bc\u03b9\u03ce\u03bd",
    cart: "\u039a\u03b1\u03bb\u03ac\u03b8\u03b9",
    menu: "\u039c\u03b5\u03bd\u03bf\u03cd",
    home: "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae",
    homepage: "\u0391\u03c1\u03c7\u03b9\u03ba\u03ae \u03a3\u03b5\u03bb\u03af\u03b4\u03b1",
    back: "\u03a0\u03af\u03c3\u03c9",
    viewAll: "\u0394\u03b5\u03af\u03c4\u03b5 \u038c\u03bb\u03b1",
    allBrands: "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u039c\u03ac\u03c1\u03ba\u03b5\u03c2",
    shopNow: "\u0391\u03b3\u03bf\u03c1\u03ac\u03c3\u03c4\u03b5 \u03a4\u03ce\u03c1\u03b1",
    viewProducts: "\u0394\u03b5\u03af\u03c4\u03b5 \u03a0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1",
    lcdScreens: "\u039f\u03b8\u03cc\u03bd\u03b5\u03c2 LCD",
    batteries: "\u039c\u03c0\u03b1\u03c4\u03b1\u03c1\u03af\u03b5\u03c2",
    partsTools: "\u0395\u03be\u03b1\u03c1\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1 & \u0395\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1",
    officialPartner: "\u0395\u03c0\u03af\u03c3\u03b7\u03bc\u03bf\u03c2 \u03a3\u03c5\u03bd\u03b5\u03c1\u03b3\u03ac\u03c4\u03b7\u03c2 GX",
    popularProducts: "\u0394\u03b7\u03bc\u03bf\u03c6\u03b9\u03bb\u03ae \u03a0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1",
    shopByBrand: "\u0391\u03b3\u03bf\u03c1\u03ac \u03b1\u03bd\u03ac \u039c\u03ac\u03c1\u03ba\u03b1",
    latestProducts: "\u039d\u03b5\u03cc\u03c4\u03b5\u03c1\u03b1 \u03a0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1",
    products: "\u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1",
    more: "\u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
    freeShipmentDesc: "\u03a3\u03b5 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03c0\u03b1\u03c1\u03b1\u03b3\u03b3\u03b5\u03bb\u03af\u03b5\u03c2",
    highQualityDesc: "\u0394\u03bf\u03ba\u03b9\u03bc\u03b1\u03c3\u03bc\u03ad\u03bd\u03b1 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1",
    veryLowPriceDesc: "\u039a\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c7\u03bf\u03bd\u03b4\u03c1\u03b9\u03ba\u03ae\u03c2",
    support247: "\u03a5\u03c0\u03bf\u03c3\u03c4\u03ae\u03c1\u03b9\u03be\u03b7 24/7",
    support247Desc: "WhatsApp \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf",
    information: "\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2",
    aboutUs: "\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac",
    contact: "\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1",
    termsConditions: "\u038c\u03c1\u03bf\u03b9 & \u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2",
    privacyPolicy: "\u03a0\u03bf\u03bb\u03b9\u03c4\u03b9\u03ba\u03ae \u0391\u03c0\u03bf\u03c1\u03c1\u03ae\u03c4\u03bf\u03c5",
    shippingInfo: "\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae\u03c2",
    faq: "FAQ",
    categories: "\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b5\u03c2",
    myAccount: "\u039f \u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u039c\u03bf\u03c5",
    shoppingCart: "\u039a\u03b1\u03bb\u03ac\u03b8\u03b9 \u0391\u03b3\u03bf\u03c1\u03ce\u03bd",
    orderHistory: "\u0399\u03c3\u03c4\u03bf\u03c1\u03b9\u03ba\u03cc \u03a0\u03b1\u03c1\u03b1\u03b3\u03b3\u03b5\u03bb\u03b9\u03ce\u03bd",
    paymentMethods: "\u039c\u03ad\u03b8\u03bf\u03b4\u03bf\u03b9 \u03a0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2",
    allRightsReserved: "\u039c\u03b5 \u03b5\u03c0\u03b9\u03c6\u03cd\u03bb\u03b1\u03be\u03b7 \u03c0\u03b1\u03bd\u03c4\u03cc\u03c2 \u03b4\u03b9\u03ba\u03b1\u03b9\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2.",
    wholesaleSmartphone: "\u03a7\u03bf\u03bd\u03b4\u03c1\u03b9\u03ba\u03ae LCD & \u0391\u03be\u03b5\u03c3\u03bf\u03c5\u03ac\u03c1 Smartphone",
    addToWishlist: "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c4\u03b1 \u03b1\u03b3\u03b1\u03c0\u03b7\u03bc\u03ad\u03bd\u03b1",
    addToCart: "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c4\u03bf \u03ba\u03b1\u03bb\u03ac\u03b8\u03b9",
    brands: "\u039c\u03ac\u03c1\u03ba\u03b5\u03c2",
    models: "\u039c\u03bf\u03bd\u03c4\u03ad\u03bb\u03b1",
    viewAllBrandProducts: "\u0394\u03b5\u03af\u03c4\u03b5 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03b1",
    hoverBrand: "\u03a0\u03b5\u03c1\u03ac\u03c3\u03c4\u03b5 \u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc \u03bc\u03b9\u03b1 \u03bc\u03ac\u03c1\u03ba\u03b1",
    seoTitle: "\u03a7\u03bf\u03bd\u03b4\u03c1\u03b9\u03ba\u03ae Smartphone / \u0391\u03be\u03b5\u03c3\u03bf\u03c5\u03ac\u03c1 / LCD / \u0395\u03be\u03b1\u03c1\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1",
    seoDesc1: "\u0397 BonusGSM \u03b5\u03af\u03bd\u03b1\u03b9 \u03c7\u03bf\u03bd\u03b4\u03c1\u03b9\u03ba\u03ae \u03b1\u03be\u03b5\u03c3\u03bf\u03c5\u03ac\u03c1 \u03ba\u03b1\u03b9 \u03b1\u03bd\u03c4\u03b1\u03bb\u03bb\u03b1\u03ba\u03c4\u03b9\u03ba\u03ac \u03c5\u03c8\u03b7\u03bb\u03ae\u03c2 \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03c3\u03c4\u03b9\u03c2 \u03c7\u03b1\u03bc\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2.",
    seoDesc2: "\u0388\u03c7\u03bf\u03c5\u03bc\u03b5 \u03b5\u03be\u03b1\u03c1\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1 \u03b3\u03b9\u03b1 \u03c3\u03c7\u03b5\u03b4\u03cc\u03bd \u03ba\u03ac\u03b8\u03b5 \u03bc\u03ac\u03c1\u03ba\u03b1 \u03ba\u03b1\u03b9 \u03c4\u03cd\u03c0\u03bf.",
    seoHighlight: "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03b1\u03c0\u03cc 23.000 \u03b5\u03af\u03b4\u03b7 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b1! \u0393\u03c1\u03ae\u03b3\u03bf\u03c1\u03b7 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7 \u03c3\u03b5 24 \u03ce\u03c1\u03b5\u03c2!",
    seoBar: "\u039a\u03b1\u03bb\u03ad\u03c2 \u03a4\u03b9\u03bc\u03ad\u03c2 / \u0394\u03c9\u03c1\u03b5\u03ac\u03bd \u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae / \u03a0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7 24\u03c9\u03c1 / 25 \u03a7\u03c1\u03cc\u03bd\u03b9\u03b1 \u0395\u03bc\u03c0\u03b5\u03b9\u03c1\u03af\u03b1",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / \u0391\u03bd\u03c4\u03b9\u03ba\u03b1\u03c4\u03b1\u03b2\u03bf\u03bb\u03ae / \u0395\u03bc\u03b2\u03ac\u03c3\u03bc\u03b1",
    premiumQuality: "\u03a0\u03c1\u03ad\u03bc\u03b9\u03bf\u03c5\u03bc \u03c0\u03bf\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1 \u03c3\u03b5 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c7\u03bf\u03bd\u03b4\u03c1\u03b9\u03ba\u03ae\u03c2",
    allBrandsModels: "\u038c\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03bc\u03ac\u03c1\u03ba\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03b1",
    description: "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
    compareProducts: "\u03a3\u03cd\u03b3\u03ba\u03c1\u03b9\u03c3\u03b7 \u03c0\u03c1\u03bf\u03ca\u03cc\u03bd\u03c4\u03c9\u03bd",
  },
  pt: {
    freeShipment: "Envio Gratuito",
    highQuality: "Alta Qualidade",
    veryLowPrice: "Pre\u00e7o Muito Baixo",
    blog: "Blog",
    support: "Suporte",
    searchPlaceholder: "O que procura?",
    noProductsFound: "Nenhum produto encontrado para",
    viewAllResults: "Ver todos os resultados para",
    account: "Conta",
    wishlist: "Favoritos",
    cart: "Carrinho",
    menu: "Menu",
    home: "In\u00edcio",
    homepage: "In\u00edcio",
    back: "Voltar",
    viewAll: "Ver Tudo",
    allBrands: "Todas as Marcas",
    shopNow: "Comprar Agora",
    viewProducts: "Ver Produtos",
    lcdScreens: "Ecr\u00e3s LCD",
    batteries: "Baterias",
    partsTools: "Pe\u00e7as e Ferramentas",
    officialPartner: "Parceiro Oficial GX",
    popularProducts: "Produtos Populares",
    shopByBrand: "Comprar por Marca",
    latestProducts: "\u00daltimos Produtos",
    products: "produtos",
    more: "mais",
    freeShipmentDesc: "Em todas as encomendas",
    highQualityDesc: "Produtos testados",
    veryLowPriceDesc: "Melhores pre\u00e7os de atacado",
    support247: "Suporte 24/7",
    support247Desc: "WhatsApp dispon\u00edvel",
    information: "Informa\u00e7\u00e3o",
    aboutUs: "Sobre N\u00f3s",
    contact: "Contacto",
    termsConditions: "Termos e Condi\u00e7\u00f5es",
    privacyPolicy: "Pol\u00edtica de Privacidade",
    shippingInfo: "Info de Envio",
    faq: "FAQ",
    categories: "Categorias",
    myAccount: "Minha Conta",
    shoppingCart: "Carrinho de Compras",
    orderHistory: "Hist\u00f3rico de Pedidos",
    paymentMethods: "M\u00e9todos de Pagamento",
    allRightsReserved: "Todos os direitos reservados.",
    wholesaleSmartphone: "Grossista Pe\u00e7as LCD & Acess\u00f3rios Smartphone",
    addToWishlist: "Adicionar aos favoritos",
    addToCart: "Adicionar ao carrinho",
    brands: "Marcas",
    models: "Modelos",
    viewAllBrandProducts: "Ver todos os produtos",
    hoverBrand: "Passe sobre uma marca para ver modelos",
    seoTitle: "Grossista Smartphone / Acess\u00f3rios / LCD / Pe\u00e7as",
    seoDesc1: "BonusGSM \u00e9 o grossista de acess\u00f3rios e pe\u00e7as de alta qualidade para telem\u00f3veis aos pre\u00e7os mais baixos.",
    seoDesc2: "Como grossista de acess\u00f3rios temos pe\u00e7as para quase todas as marcas e tipos.",
    seoHighlight: "Mais de 23.000 tipos de acess\u00f3rios dispon\u00edveis imediatamente! Entrega r\u00e1pida em 24 horas!",
    seoBar: "Pre\u00e7os Netos / Envio Gratuito / Entrega 24h / Alta Qualidade / 25 Anos de Experi\u00eancia / 23.000 Artigos",
    seoPayments: "PayPal / SOFORT / Bancontact / GiroPay / iDEAL / Contra Reembolso / Transfer\u00eancia",
    premiumQuality: "Qualidade premium a pre\u00e7os de grossista",
    allBrandsModels: "Todas as marcas e modelos",
    description: "Descri\u00e7\u00e3o",
    compareProducts: "Comparar produtos",
  },
}

/* ─── Context ─── */
type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: keyof TranslationKeys) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    if (typeof document !== "undefined") {
      document.documentElement.lang = l
    }
  }, [])

  const t = useCallback(
    (key: keyof TranslationKeys) => translations[locale]?.[key] ?? translations.en[key] ?? key,
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
