// ============================================================
// BonusGSM – Full product catalogue with Brand → Model → Product
// ============================================================

export interface Category {
  name: string;
  slug: string;
  children?: Category[];
}

export interface Brand {
  name: string;
  slug: string;
  models: Model[];
}

export interface Model {
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;      // top-level: gx | lcd | battery | parts
  subcategory?: string;   // child slug
  brand: string;          // brand slug
  model: string;          // model slug
  price: number;
  salePrice?: number;
  image: string;
  badge?: string;
  sku: string;
  description: string;
  inStock: boolean;
}

// --------------- Brands & Models ---------------

export const brands: Brand[] = [
  {
    name: "Apple",
    slug: "apple",
    models: [
      { name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },
      { name: "iPhone 15 Pro", slug: "iphone-15-pro" },
      { name: "iPhone 15 Plus", slug: "iphone-15-plus" },
      { name: "iPhone 15", slug: "iphone-15" },
      { name: "iPhone 14 Pro Max", slug: "iphone-14-pro-max" },
      { name: "iPhone 14 Pro", slug: "iphone-14-pro" },
      { name: "iPhone 14 Plus", slug: "iphone-14-plus" },
      { name: "iPhone 14", slug: "iphone-14" },
      { name: "iPhone 13 Pro Max", slug: "iphone-13-pro-max" },
      { name: "iPhone 13 Pro", slug: "iphone-13-pro" },
      { name: "iPhone 13 Mini", slug: "iphone-13-mini" },
      { name: "iPhone 13", slug: "iphone-13" },
      { name: "iPhone 12 Pro Max", slug: "iphone-12-pro-max" },
      { name: "iPhone 12 / 12 Pro", slug: "iphone-12-12-pro" },
      { name: "iPhone 12 Mini", slug: "iphone-12-mini" },
      { name: "iPhone 11 Pro Max", slug: "iphone-11-pro-max" },
      { name: "iPhone 11 Pro", slug: "iphone-11-pro" },
      { name: "iPhone 11", slug: "iphone-11" },
      { name: "iPhone XS Max", slug: "iphone-xs-max" },
      { name: "iPhone XS", slug: "iphone-xs" },
      { name: "iPhone XR", slug: "iphone-xr" },
      { name: "iPhone X", slug: "iphone-x" },
      { name: "iPhone 8 Plus", slug: "iphone-8-plus" },
      { name: "iPhone 8 / SE 2020 / SE 2022", slug: "iphone-8-se" },
      { name: "iPhone 7 Plus", slug: "iphone-7-plus" },
      { name: "iPhone 7", slug: "iphone-7" },
      { name: "iPhone 6S Plus", slug: "iphone-6s-plus" },
      { name: "iPhone 6S", slug: "iphone-6s" },
      { name: "iPhone 6 Plus", slug: "iphone-6-plus" },
      { name: "iPhone 6", slug: "iphone-6" },
      { name: "iPhone 5S / SE", slug: "iphone-5s-se" },
      { name: "iPad Pro", slug: "ipad-pro" },
      { name: "iPad Air", slug: "ipad-air" },
      { name: "iPad 10", slug: "ipad-10" },
      { name: "Apple Watch", slug: "apple-watch" },
      { name: "MacBook Pro", slug: "macbook-pro" },
      { name: "MacBook Air", slug: "macbook-air" },
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    models: [
      { name: "Galaxy S24 Ultra", slug: "galaxy-s24-ultra" },
      { name: "Galaxy S24+", slug: "galaxy-s24-plus" },
      { name: "Galaxy S24", slug: "galaxy-s24" },
      { name: "Galaxy S23 Ultra", slug: "galaxy-s23-ultra" },
      { name: "Galaxy S23 FE", slug: "galaxy-s23-fe" },
      { name: "Galaxy S23", slug: "galaxy-s23" },
      { name: "Galaxy S22 Ultra", slug: "galaxy-s22-ultra" },
      { name: "Galaxy S22", slug: "galaxy-s22" },
      { name: "Galaxy S21 Ultra", slug: "galaxy-s21-ultra" },
      { name: "Galaxy S21", slug: "galaxy-s21" },
      { name: "Galaxy A54", slug: "galaxy-a54" },
      { name: "Galaxy A53", slug: "galaxy-a53" },
      { name: "Galaxy A34", slug: "galaxy-a34" },
      { name: "Galaxy A24", slug: "galaxy-a24" },
      { name: "Galaxy A14", slug: "galaxy-a14" },
      { name: "Galaxy Note 20 Ultra", slug: "galaxy-note-20-ultra" },
      { name: "Galaxy Note 20", slug: "galaxy-note-20" },
      { name: "Galaxy Z Fold 5", slug: "galaxy-z-fold-5" },
      { name: "Galaxy Z Flip 5", slug: "galaxy-z-flip-5" },
      { name: "Galaxy M34", slug: "galaxy-m34" },
      { name: "Galaxy Tab S9", slug: "galaxy-tab-s9" },
    ],
  },
  {
    name: "Xiaomi",
    slug: "xiaomi",
    models: [
      { name: "Redmi Note 13 Pro", slug: "redmi-note-13-pro" },
      { name: "Redmi Note 13", slug: "redmi-note-13" },
      { name: "Redmi Note 12 Pro", slug: "redmi-note-12-pro" },
      { name: "Redmi Note 12", slug: "redmi-note-12" },
      { name: "Redmi Note 11 Pro", slug: "redmi-note-11-pro" },
      { name: "Redmi Note 11", slug: "redmi-note-11" },
      { name: "Poco X5 Pro", slug: "poco-x5-pro" },
      { name: "Poco X4 Pro", slug: "poco-x4-pro" },
      { name: "Poco F5", slug: "poco-f5" },
      { name: "Xiaomi 14 Pro", slug: "xiaomi-14-pro" },
      { name: "Xiaomi 13T Pro", slug: "xiaomi-13t-pro" },
      { name: "Xiaomi 13", slug: "xiaomi-13" },
      { name: "Mi 11", slug: "mi-11" },
    ],
  },
  {
    name: "Huawei",
    slug: "huawei",
    models: [
      { name: "P60 Pro", slug: "p60-pro" },
      { name: "P50 Pro", slug: "p50-pro" },
      { name: "P40 Pro", slug: "p40-pro" },
      { name: "P30 Pro", slug: "p30-pro" },
      { name: "P30 Lite", slug: "p30-lite" },
      { name: "Mate 50 Pro", slug: "mate-50-pro" },
      { name: "Mate 40 Pro", slug: "mate-40-pro" },
      { name: "Nova 11", slug: "nova-11" },
      { name: "Nova 10", slug: "nova-10" },
      { name: "Y9 Prime", slug: "y9-prime" },
    ],
  },
  {
    name: "Oppo",
    slug: "oppo",
    models: [
      { name: "A78 5G", slug: "oppo-a78-5g" },
      { name: "A58", slug: "oppo-a58" },
      { name: "A38", slug: "oppo-a38" },
      { name: "Find X6 Pro", slug: "find-x6-pro" },
      { name: "Reno 10 Pro", slug: "reno-10-pro" },
      { name: "Reno 10", slug: "reno-10" },
      { name: "Reno 8", slug: "reno-8" },
    ],
  },
  {
    name: "Realme",
    slug: "realme",
    models: [
      { name: "GT Neo 5", slug: "gt-neo-5" },
      { name: "GT 3", slug: "gt-3" },
      { name: "11 Pro+", slug: "realme-11-pro-plus" },
      { name: "11 Pro", slug: "realme-11-pro" },
      { name: "10 Pro+", slug: "realme-10-pro-plus" },
      { name: "C55", slug: "realme-c55" },
      { name: "Narzo 60 Pro", slug: "narzo-60-pro" },
    ],
  },
  {
    name: "OnePlus",
    slug: "oneplus",
    models: [
      { name: "12", slug: "oneplus-12" },
      { name: "11", slug: "oneplus-11" },
      { name: "Nord CE 3", slug: "nord-ce-3" },
      { name: "Nord 3", slug: "nord-3" },
      { name: "10 Pro", slug: "oneplus-10-pro" },
      { name: "9 Pro", slug: "oneplus-9-pro" },
      { name: "8 Pro", slug: "oneplus-8-pro" },
    ],
  },
  {
    name: "Motorola",
    slug: "motorola",
    models: [
      { name: "Moto G84", slug: "moto-g84" },
      { name: "Moto G73", slug: "moto-g73" },
      { name: "Moto G54", slug: "moto-g54" },
      { name: "Moto Edge 40", slug: "moto-edge-40" },
      { name: "Moto E13", slug: "moto-e13" },
    ],
  },
  {
    name: "Nokia",
    slug: "nokia",
    models: [
      { name: "G42", slug: "nokia-g42" },
      { name: "G22", slug: "nokia-g22" },
      { name: "C32", slug: "nokia-c32" },
      { name: "C22", slug: "nokia-c22" },
      { name: "X30", slug: "nokia-x30" },
    ],
  },
  {
    name: "Honor",
    slug: "honor",
    models: [
      { name: "90", slug: "honor-90" },
      { name: "Magic 5 Pro", slug: "magic-5-pro" },
      { name: "X9b", slug: "honor-x9b" },
      { name: "X8b", slug: "honor-x8b" },
    ],
  },
  {
    name: "Google Pixel",
    slug: "google-pixel",
    models: [
      { name: "Pixel 8 Pro", slug: "pixel-8-pro" },
      { name: "Pixel 8", slug: "pixel-8" },
      { name: "Pixel 7a", slug: "pixel-7a" },
      { name: "Pixel 7 Pro", slug: "pixel-7-pro" },
      { name: "Pixel 7", slug: "pixel-7" },
    ],
  },
  {
    name: "Sony",
    slug: "sony",
    models: [
      { name: "Xperia 1 V", slug: "xperia-1-v" },
      { name: "Xperia 5 V", slug: "xperia-5-v" },
      { name: "Xperia 10 V", slug: "xperia-10-v" },
    ],
  },
  {
    name: "Vivo",
    slug: "vivo",
    models: [
      { name: "Y100", slug: "vivo-y100" },
      { name: "Y36", slug: "vivo-y36" },
      { name: "V29", slug: "vivo-v29" },
      { name: "X90 Pro", slug: "vivo-x90-pro" },
    ],
  },
  {
    name: "TCL",
    slug: "tcl",
    models: [
      { name: "30 SE", slug: "tcl-30-se" },
      { name: "20 SE", slug: "tcl-20-se" },
      { name: "10L", slug: "tcl-10l" },
    ],
  },
  {
    name: "LG",
    slug: "lg",
    models: [
      { name: "Velvet", slug: "lg-velvet" },
      { name: "V60", slug: "lg-v60" },
      { name: "G8", slug: "lg-g8" },
    ],
  },
];

// --------------- Navigation / Category tree ---------------

export const categories: Category[] = [
  {
    name: "GX",
    slug: "gx",
    children: [
      { name: "LCD Incell iPhone", slug: "lcd-incell-iphone" },
      { name: "LCD Excellent Incell IPhone", slug: "lcd-excellent-incell-iphone" },
      { name: "LCD Hard Oled iPhone", slug: "lcd-hard-oled-iphone" },
      { name: "LCD Soft Oled iPhone", slug: "lcd-soft-oled-iphone" },
      { name: "LCD Galaxy A Series", slug: "lcd-galaxy-a-series" },
      { name: "LCD Galaxy S Series", slug: "lcd-galaxy-s-series" },
      { name: "LCD Galaxy Note Series", slug: "lcd-galaxy-note-series" },
      { name: "LCD Xiaomi", slug: "lcd-xiaomi-gx" },
      { name: "LCD Huawei", slug: "lcd-huawei-gx" },
      { name: "LCD Oppo", slug: "lcd-oppo-gx" },
      { name: "LCD Google Pixel", slug: "lcd-google-pixel-gx" },
      { name: "LCD Realme", slug: "lcd-realme-gx" },
      { name: "LCD Motorola", slug: "lcd-motorola-gx" },
      { name: "LCD Nokia", slug: "lcd-nokia-gx" },
      { name: "LCD Touch IPad", slug: "lcd-touch-ipad" },
      { name: "Tools", slug: "tools-gx" },
      { name: "Parts", slug: "parts-gx" },
      { name: "Middle Frame", slug: "middle-frame" },
    ],
  },
  {
    name: "LCD",
    slug: "lcd",
    children: [
      {
        name: "LCD for IPhone",
        slug: "lcd-iphone",
        children: [
          { name: "iPhone", slug: "iphone" },
          { name: "iPhone Air", slug: "iphone-air" },
          { name: "iPhone 17 Pro Max", slug: "iphone-17-pro-max" },
          { name: "iPhone 17 Pro", slug: "iphone-17-pro" },
          { name: "iPhone 17", slug: "iphone-17" },
          { name: "iPhone 16e", slug: "iphone-16e" },
          { name: "iPhone 16 Pro Max", slug: "iphone-16-pro-max" },
          { name: "iPhone 16 Pro", slug: "iphone-16-pro" },
          { name: "iPhone 16 Plus", slug: "iphone-16-plus" },
          { name: "iPhone 16", slug: "iphone-16" },
          { name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },
          { name: "iPhone 15 Pro", slug: "iphone-15-pro" },
          { name: "iPhone 15 Plus", slug: "iphone-15-plus" },
          { name: "iPhone 15", slug: "iphone-15" },
          { name: "iPhone 14 Pro Max", slug: "iphone-14-pro-max" },
          { name: "iPhone 14 Pro", slug: "iphone-14-pro" },
          { name: "iPhone 14 Plus", slug: "iphone-14-plus" },
          { name: "iPhone 14", slug: "iphone-14" },
          { name: "iPhone SE 2022 (SE3)", slug: "iphone-se-2022-se3" },
          { name: "iPhone 13 Pro Max", slug: "iphone-13-pro-max" },
          { name: "iPhone 13 Pro", slug: "iphone-13-pro" },
          { name: "iPhone 13 mini", slug: "iphone-13-mini" },
          { name: "iPhone 13", slug: "iphone-13" },
          { name: "iPhone 12 Pro Max", slug: "iphone-12-pro-max" },
          { name: "iPhone 12 Pro", slug: "iphone-12-pro" },
          { name: "iPhone 12 mini", slug: "iphone-12-mini" },
          { name: "iPhone 12", slug: "iphone-12" },
          { name: "iPhone SE 2020 (SE2)", slug: "iphone-se-2020-se2" },
          { name: "iPhone 11 Pro Max", slug: "iphone-11-pro-max" },
          { name: "iPhone 11 Pro", slug: "iphone-11-pro" },
          { name: "iPhone 11", slug: "iphone-11" },
          { name: "iPhone XR", slug: "iphone-xr" },
          { name: "iPhone XS Max", slug: "iphone-xs-max" },
          { name: "iPhone XS", slug: "iphone-xs" },
          { name: "iPhone X", slug: "iphone-x" },
          { name: "iPhone SE 2016 (SE)", slug: "iphone-se-2016" },
          { name: "iPhone 8 Plus", slug: "iphone-8-plus" },
          { name: "iPhone 8", slug: "iphone-8" },
          { name: "iPhone 7 Plus", slug: "iphone-7-plus" },
          { name: "iPhone 7", slug: "iphone-7" },
          { name: "iPhone 6S Plus", slug: "iphone-6s-plus" },
          { name: "iPhone 6S", slug: "iphone-6s" },
          { name: "iPhone 6 Plus", slug: "iphone-6-plus" },
          { name: "iPhone 6", slug: "iphone-6" },
          { name: "iPhone 5S", slug: "iphone-5s" },
          { name: "iPhone 5C", slug: "iphone-5c" },
        ],
      },
      {
        name: "LCD Samsung",
        slug: "lcd-samsung",
        children: [
          { name: "Galaxy S Series", slug: "galaxy-s-series" },
          { name: "Galaxy A Series", slug: "galaxy-a-series" },
          { name: "Galaxy J Serie", slug: "galaxy-j-serie" },
          { name: "Galaxy Note Serie", slug: "galaxy-note-serie" },
          { name: "Xcover Serie", slug: "xcover-serie" },
          { name: "Galaxy Fold Serie", slug: "galaxy-fold-serie" },
          { name: "Gear Fit2", slug: "gear-fit2" },
          { name: "Galaxy M Serie", slug: "galaxy-m-serie" },
          { name: "Other models", slug: "samsung-other-models" },
        ],
      },
      {
        name: "LCD Huawei",
        slug: "lcd-huawei",
        children: [
          { name: "P Smart Series", slug: "p-smart-series" },
          { name: "P Serie", slug: "p-serie" },
          { name: "Mate Serie", slug: "mate-serie" },
          { name: "Y Series", slug: "y-series" },
          { name: "Nova Serie", slug: "nova-serie" },
          { name: "G Serie", slug: "g-serie" },
          { name: "Enjoy Serie", slug: "enjoy-serie" },
        ],
      },
      {
        name: "LCD Oppo",
        slug: "lcd-oppo",
        children: [
          { name: "OPPO A Serie", slug: "oppo-a-serie" },
          { name: "OPPO Find Serie", slug: "oppo-find-serie" },
          { name: "OPPO Reno Serie", slug: "oppo-reno-serie" },
          { name: "OPPO F Serie", slug: "oppo-f-serie" },
          { name: "OPPO K Serie", slug: "oppo-k-serie" },
          { name: "OPPO R Serie", slug: "oppo-r-serie" },
        ],
      },
      {
        name: "LCD Xiaomi",
        slug: "lcd-xiaomi",
        children: [
          { name: "Xiaomi Series", slug: "xiaomi-series" },
          { name: "Xiaomi Redmi Series", slug: "xiaomi-redmi-series" },
          { name: "Xiaomi Redmi Note Series", slug: "xiaomi-redmi-note-series" },
          { name: "Xiaomi MI Series", slug: "xiaomi-mi-series" },
          { name: "Xiaomi Poco Series", slug: "xiaomi-poco-series" },
          { name: "Xiaomi Pad Series", slug: "xiaomi-pad-series" },
          { name: "Redmi K Series", slug: "redmi-k-series" },
          { name: "Shark Series", slug: "shark-series" },
        ],
      },
      {
        name: "LCD Realme",
        slug: "lcd-realme",
        children: [
          { name: "Realme 14 Serie", slug: "realme-14-serie" },
          { name: "Realme 12 Serie", slug: "realme-12-serie" },
          { name: "Realme 11 Serie", slug: "realme-11-serie" },
          { name: "Realme 10 Series", slug: "realme-10-series" },
          { name: "Realme 9 Series", slug: "realme-9-series" },
          { name: "Realme 8 Series", slug: "realme-8-series" },
          { name: "Realme 7 Series", slug: "realme-7-series" },
          { name: "Realme 6 Series", slug: "realme-6-series" },
          { name: "Realme 5 Series", slug: "realme-5-series" },
          { name: "Realme C series", slug: "realme-c-series" },
          { name: "Realme V Series", slug: "realme-v-series" },
          { name: "Realme Narzo Series", slug: "realme-narzo-series" },
          { name: "Realme GT Series", slug: "realme-gt-series" },
          { name: "Realme X50", slug: "realme-x50" },
          { name: "Realme Q5i", slug: "realme-q5i" },
        ],
      },
      {
        name: "LCD Laptop",
        slug: "lcd-laptop",
        children: [
          { name: "11.6\"", slug: "lcd-laptop-116" },
          { name: "12.5\"", slug: "lcd-laptop-125" },
          { name: "13.1\"", slug: "lcd-laptop-131" },
          { name: "13.3\"", slug: "lcd-laptop-133" },
          { name: "14.0\"", slug: "lcd-laptop-140" },
          { name: "14.1\"", slug: "lcd-laptop-141" },
          { name: "15.6\"", slug: "lcd-laptop-156" },
          { name: "17.3\"", slug: "lcd-laptop-173" },
        ],
      },
      {
        name: "LCD Samsung Tablets",
        slug: "lcd-samsung-tablets",
        children: [
          { name: "Tab S9 FE Plus X610 / X615B", slug: "tab-s9-fe-plus" },
          { name: "Tab S7 2020 T870 / T875", slug: "tab-s7-2020" },
          { name: "Tab S6 2019 T865 / T860", slug: "tab-s6-2019" },
          { name: "Tab S6 Lite 2020 P610 / P615", slug: "tab-s6-lite-2020" },
          { name: "Tab S4 2018 T835", slug: "tab-s4-2018" },
          { name: "Tab S2 2015 T810 / T815", slug: "tab-s2-2015" },
          { name: "Tab A9 Plus X210 / X215", slug: "tab-a9-plus" },
          { name: "Tab A9 X110 / X115", slug: "tab-a9" },
          { name: "Tab A8 10.5 2021 X200", slug: "tab-a8-105-2021" },
          { name: "Tab A7 2020 T500 / T505", slug: "tab-a7-2020" },
          { name: "Tab A7 Lite 2021 T220", slug: "tab-a7-lite-2021" },
          { name: "Tab A 2019 T590 / T595", slug: "tab-a-2019-t590" },
          { name: "Tab A 2019 T510 / T515", slug: "tab-a-2019-t510" },
          { name: "Tab A 2016 T580 / T585", slug: "tab-a-2016-t580" },
          { name: "Tab A 2015 T550", slug: "tab-a-2015-t550" },
          { name: "Tab A 8.0 2020 T307U", slug: "tab-a-80-2020" },
          { name: "Tab 8.0 2019 T295", slug: "tab-80-2019" },
          { name: "Tab A 2019 T290", slug: "tab-a-2019-t290" },
          { name: "Tab A 2016 T285", slug: "tab-a-2016-t285" },
          { name: "Tab Active 3 T570/T575", slug: "tab-active-3" },
          { name: "Tab Active 2 2017 T395", slug: "tab-active-2-2017" },
        ],
      },
      {
        name: "LCD for IPad",
        slug: "lcd-ipad",
        children: [
          // iPad Pro models
          { name: "iPad Pro 13\" 7e Gén (2024)", slug: "ipad-pro-13-7e-gen-2024" },
          { name: "iPad Pro 12.9\" 6e Gén (2022)", slug: "ipad-pro-129-6e-gen-2022" },
          { name: "iPad Pro 12.9\" 5e Gén (2021)", slug: "ipad-pro-129-5e-gen-2021" },
          { name: "iPad Pro 12.9\" 4e Gén (2020)", slug: "ipad-pro-129-4e-gen-2020" },
          { name: "iPad Pro 12.9\" 3e Gén (2018)", slug: "ipad-pro-129-3e-gen-2018" },
          { name: "iPad Pro 12.9\" 2e Gén (2017)", slug: "ipad-pro-129-2e-gen-2017" },
          { name: "iPad Pro 12.9\" 1e Gén (2015)", slug: "ipad-pro-129-1e-gen-2015" },
          { name: "iPad Pro 11\" 5e Gén (2024)", slug: "ipad-pro-11-5e-gen-2024" },
          { name: "iPad Pro 11\" 4e Gén (2022)", slug: "ipad-pro-11-4e-gen-2022" },
          { name: "iPad Pro 11\" 3e Gén (2021)", slug: "ipad-pro-11-3e-gen-2021" },
          { name: "iPad Pro 11\" 2e Gén (2020)", slug: "ipad-pro-11-2e-gen-2020" },
          { name: "iPad Pro 11\" 1e gén (2018)", slug: "ipad-pro-11-1e-gen-2018" },
          { name: "iPad Pro 10.5\" (2017)", slug: "ipad-pro-105-2017" },
          { name: "iPad Pro 9.7\" (2016)", slug: "ipad-pro-97-2016" },
          // Standard iPad models
          { name: "iPad 11 (2025)", slug: "ipad-11-2025" },
          { name: "iPad 10 (2022)", slug: "ipad-10-2022" },
          { name: "iPad 9 (2021)", slug: "ipad-9-2021" },
          { name: "iPad 8 (2020)", slug: "ipad-8-2020" },
          { name: "iPad 7 (2019)", slug: "ipad-7-2019" },
          { name: "iPad 6 (2018)", slug: "ipad-6-2018" },
          { name: "iPad 5 (2017)", slug: "ipad-5-2017" },
          { name: "iPad 4 (2012)", slug: "ipad-4-2012" },
          { name: "iPad 3 (2012)", slug: "ipad-3-2012" },
          { name: "iPad 2 (2011)", slug: "ipad-2-2011" },
          // iPad Air models
          { name: "iPad Air 7 13\" (2025)", slug: "ipad-air-7-13-2025" },
          { name: "iPad Air 7 11\" (2025)", slug: "ipad-air-7-11-2025" },
          { name: "iPad Air 6 13\" (2024)", slug: "ipad-air-6-13-2024" },
          { name: "iPad Air 6 11\" (2024)", slug: "ipad-air-6-11-2024" },
          { name: "iPad Air 5 (2022)", slug: "ipad-air-5-2022" },
          { name: "iPad Air 4 (2020)", slug: "ipad-air-4-2020" },
          { name: "iPad Air 3 (2019)", slug: "ipad-air-3-2019" },
          { name: "iPad Air 2 (2014)", slug: "ipad-air-2-2014" },
          { name: "iPad Air (2013)", slug: "ipad-air-2013" },
          // iPad mini models
          { name: "iPad mini 7 (2024)", slug: "ipad-mini-7-2024" },
          { name: "iPad mini 6 (2021)", slug: "ipad-mini-6-2021" },
          { name: "iPad mini 5 (2019)", slug: "ipad-mini-5-2019" },
          { name: "iPad mini 4 (2015)", slug: "ipad-mini-4-2015" },
          { name: "iPad mini 3 (2014)", slug: "ipad-mini-3-2014" },
          { name: "iPad mini 2 (2013)", slug: "ipad-mini-2-2013" },
          { name: "iPad mini 1 (2012)", slug: "ipad-mini-1-2012" },
        ],
      },
      { name: "LCD for MacBook", slug: "lcd-macbook" },
      { name: "LCD for IMac", slug: "lcd-imac" },
      { name: "LCD For Apple Watch", slug: "lcd-apple-watch" },
      {
        name: "LCD Google Pixel",
        slug: "lcd-google-pixel",
        children: [
          { name: "Google Pixel 10 Pro XL", slug: "pixel-10-pro-xl" },
          { name: "Google Pixel 10 Pro", slug: "pixel-10-pro" },
          { name: "Google Pixel 10", slug: "pixel-10" },
          { name: "Google Pixel 9a", slug: "pixel-9a" },
          { name: "Google Pixel 9 Pro XL", slug: "pixel-9-pro-xl" },
          { name: "Google Pixel 9 Pro", slug: "pixel-9-pro" },
          { name: "Google pixel 9", slug: "pixel-9" },
          { name: "Google Pixel 8a", slug: "pixel-8a" },
          { name: "Google Pixel 8 Pro", slug: "pixel-8-pro" },
          { name: "Google Pixel 8", slug: "pixel-8" },
          { name: "Google Pixel 7a", slug: "pixel-7a" },
          { name: "Google Pixel 7 Pro", slug: "pixel-7-pro" },
          { name: "Google Pixel 7", slug: "pixel-7" },
          { name: "Google Pixel 6a", slug: "pixel-6a" },
          { name: "Google Pixel 6 Pro", slug: "pixel-6-pro" },
          { name: "Google Pixel 6", slug: "pixel-6" },
          { name: "Google Pixel 5", slug: "pixel-5" },
          { name: "Google Pixel 4", slug: "pixel-4" },
          { name: "Google Pixel 3", slug: "pixel-3" },
          { name: "Google Pixel 2", slug: "pixel-2" },
          { name: "Google Pixel 9 Pro Fold", slug: "pixel-9-pro-fold" },
        ],
      },
      {
        name: "LCD Honor",
        slug: "lcd-honor",
        children: [
          { name: "Honor 90 Serie", slug: "honor-90-serie" },
          { name: "Honor 80 Series", slug: "honor-80-series" },
          { name: "Honor 50 Series", slug: "honor-50-series" },
          { name: "Honor 30 Series", slug: "honor-30-series" },
          { name: "Honor x30 Series", slug: "honor-x30-series" },
          { name: "Honor V30 Series", slug: "honor-v30-series" },
          { name: "Honor Play 30 Series", slug: "honor-play-30-series" },
          { name: "Honor X20 Series", slug: "honor-x20-series" },
          { name: "Honor V20 Serie", slug: "honor-v20-serie" },
          { name: "Honor 20 Serie", slug: "honor-20-serie" },
          { name: "Honor View 20 Series", slug: "honor-view-20-series" },
          { name: "Honor Play 20 Series", slug: "honor-play-20-series" },
          { name: "Honor 10 Serie", slug: "honor-10-serie" },
          { name: "Honor X10 Series", slug: "honor-x10-series" },
          { name: "Honor V10 Serie", slug: "honor-v10-serie" },
          { name: "Honor 9 Series", slug: "honor-9-series" },
          { name: "Honor X9 Series", slug: "honor-x9-series" },
          { name: "Honor 8 Series", slug: "honor-8-series" },
          { name: "Honor X8 Series", slug: "honor-x8-series" },
          { name: "Honor X7 Series", slug: "honor-x7-series" },
          { name: "Honor X6 Series", slug: "honor-x6-series" },
          { name: "Honor Play 6 Series", slug: "honor-play-6-series" },
          { name: "Honor X5 Series", slug: "honor-x5-series" },
          { name: "Honor Play 4 Series", slug: "honor-play-4-series" },
          { name: "Honor Magic Series", slug: "honor-magic-series" },
        ],
      },
      {
        name: "LCD OnePlus",
        slug: "lcd-oneplus",
        children: [
          { name: "OnePlus 13 Series", slug: "oneplus-13-series" },
          { name: "OnePlus 12 Series", slug: "oneplus-12-series" },
          { name: "OnePlus 11 Series", slug: "oneplus-11-series" },
          { name: "OnePlus 10 Series", slug: "oneplus-10-series" },
          { name: "OnePlus 9 Series", slug: "oneplus-9-series" },
          { name: "OnePlus 8 Series", slug: "oneplus-8-series" },
          { name: "OnePlus 7 Series", slug: "oneplus-7-series" },
          { name: "OnePlus Nord Series", slug: "oneplus-nord-series" },
        ],
      },
      {
        name: "LCD Motorola",
        slug: "lcd-motorola",
        children: [
          { name: "Motorola Moto E Series", slug: "motorola-moto-e" },
          { name: "Motorola Moto G Series", slug: "motorola-moto-g" },
          { name: "Motorola Moto Edge Series", slug: "motorola-moto-edge" },
        ],
      },
      {
        name: "LCD Nokia",
        slug: "lcd-nokia",
        children: [
          { name: "Nokia C Series", slug: "nokia-c-series" },
          { name: "Nokia G Series", slug: "nokia-g-series" },
          { name: "Nokia X Series", slug: "nokia-x-series" },
        ],
      },
      {
        name: "LCD Vivo",
        slug: "lcd-vivo",
        children: [
          { name: "Vivo Y Series", slug: "vivo-y-series" },
          { name: "Vivo V Series", slug: "vivo-v-series" },
          { name: "Vivo X Series", slug: "vivo-x-series" },
        ],
      },
      {
        name: "LCD TCL",
        slug: "lcd-tcl",
        children: [
          { name: "TCL 30 Series", slug: "tcl-30-series" },
          { name: "TCL 20 Series", slug: "tcl-20-series" },
        ],
      },
      { name: "LCD General Mobile", slug: "lcd-general-mobile" },
      {
        name: "LCD Sony",
        slug: "lcd-sony",
        children: [
          { name: "Xperia 1 V", slug: "xperia-1-v" },
          { name: "Xperia 5 V", slug: "xperia-5-v" },
          { name: "Xperia 10 V", slug: "xperia-10-v" },
          { name: "Xperia 1 III", slug: "xperia-1-iii" },
          { name: "Xperia 5 IV", slug: "xperia-5-iv" },
          { name: "Xperia 10 IV", slug: "xperia-10-iv" },
        ],
      },
      { name: "LCD Wiko", slug: "lcd-wiko" },
      { name: "LCD ZTE", slug: "lcd-zte" },
      { name: "LCD Alcatel", slug: "lcd-alcatel" },
      { name: "LCD CAT", slug: "lcd-cat" },
      { name: "LCD Infinix", slug: "lcd-infinix" },
      { name: "LCD LG", slug: "lcd-lg" },
      { name: "LCD Excellent", slug: "lcd-excellent" },
      { name: "HTC", slug: "lcd-htc" },
      { name: "LG", slug: "lcd-lg-brand" },
      { name: "A-pple Watch Bands", slug: "apple-watch-bands" },
      { name: "Air-Tag", slug: "air-tag" },
      { name: "Phone Lanyard", slug: "phone-lanyard" },
      { name: "Bags Smartphone / Tablet", slug: "bags-smartphone-tablet" },
      { name: "Air-Pods Hoesjes", slug: "airpods-cases" },
      {
        name: "Universal Cases",
        slug: "universal-cases",
        children: [
          { name: "Universal Tablet Cases", slug: "universal-tablet-cases" },
          { name: "Universal Smartphone Cases", slug: "universal-smartphone-cases" },
          { name: "Water Protection / Sports Cases", slug: "water-protection-sports-cases" },
          { name: "Beltcase (Belt)", slug: "beltcase-belt" },
          { name: "Extreme Fitting Belt", slug: "extreme-fitting-belt" },
        ],
      },
      { name: "Magnetic Wallet", slug: "magnetic-wallet" },
    ],
  },
  {
    name: "Battery",
    slug: "battery",
    children: [
      {
        name: "For IPhone",
        slug: "battery-iphone",
        children: [
          { name: "IPhone 14 Pro Max", slug: "battery-iphone-14-pro-max" },
          { name: "IPhone 14 Pro", slug: "battery-iphone-14-pro" },
          { name: "IPhone 14", slug: "battery-iphone-14" },
          { name: "IPhone 13 Pro Max", slug: "battery-iphone-13-pro-max" },
          { name: "IPhone 13 Pro", slug: "battery-iphone-13-pro" },
          { name: "IPhone 13", slug: "battery-iphone-13" },
          { name: "IPhone 12 Pro Max", slug: "battery-iphone-12-pro-max" },
          { name: "IPhone 12", slug: "battery-iphone-12" },
          { name: "IPhone 11 Pro Max", slug: "battery-iphone-11-pro-max" },
          { name: "IPhone 11", slug: "battery-iphone-11" },
          { name: "IPhone XS Max", slug: "battery-iphone-xs-max" },
          { name: "IPhone XR", slug: "battery-iphone-xr" },
          { name: "IPhone X", slug: "battery-iphone-x" },
          { name: "IPhone 8 Plus", slug: "battery-iphone-8-plus" },
          { name: "IPhone 7 Plus", slug: "battery-iphone-7-plus" },
          { name: "IPhone 6S Plus", slug: "battery-iphone-6s-plus" },
        ],
      },
      { name: "I-Pad", slug: "battery-ipad" },
      {
        name: "Samsung",
        slug: "battery-samsung",
        children: [
          { name: "Galaxy S Serie", slug: "battery-galaxy-s" },
          { name: "Galaxy A Series", slug: "battery-galaxy-a" },
          { name: "Galaxy Note Series", slug: "battery-galaxy-note" },
          { name: "Galaxy Watch Serie", slug: "battery-galaxy-watch" },
          { name: "Galaxy Z Serie", slug: "battery-galaxy-z" },
          { name: "Galaxy M Series", slug: "battery-galaxy-m" },
        ],
      },
      {
        name: "Xiaomi",
        slug: "battery-xiaomi",
        children: [
          { name: "Xiaomi Original Battery", slug: "xiaomi-original-battery" },
          { name: "Xiaomi Battery", slug: "xiaomi-battery" },
        ],
      },
      { name: "Oppo", slug: "battery-oppo" },
      { name: "OnePlus", slug: "battery-oneplus" },
      { name: "Apple Watch", slug: "battery-apple-watch" },
      {
        name: "Macbook",
        slug: "battery-macbook",
        children: [
          { name: "MacBook Pro", slug: "battery-macbook-pro" },
          { name: "MacBook Air", slug: "battery-macbook-air" },
        ],
      },
      {
        name: "Laptop",
        slug: "battery-laptop",
        children: [
          { name: "DELL", slug: "battery-dell" },
          { name: "HP", slug: "battery-hp" },
          { name: "Lenovo", slug: "battery-lenovo" },
          { name: "ASUS", slug: "battery-asus" },
        ],
      },
      { name: "GG Pixel", slug: "battery-gg-pixel" },
      {
        name: "Huawei",
        slug: "battery-huawei",
        children: [
          { name: "Huawei Original Battery", slug: "huawei-original-battery" },
          { name: "Huawei Battery", slug: "huawei-battery" },
        ],
      },
      { name: "Nokia", slug: "battery-nokia" },
      { name: "Moto", slug: "battery-moto" },
      { name: "LG", slug: "battery-lg" },
      { name: "Sony", slug: "battery-sony" },
    ],
  },
  {
    name: "Parts",
    slug: "parts",
    children: [
      {
        name: "For IPhone",
        slug: "parts-iphone",
        children: [
          { name: "IPhone 16 Pro Max", slug: "parts-iphone-16-pro-max" },
          { name: "IPhone 16 Pro", slug: "parts-iphone-16-pro" },
          { name: "IPhone 16 Plus", slug: "parts-iphone-16-plus" },
          { name: "IPhone 16", slug: "parts-iphone-16" },
          { name: "IPhone 15 Pro Max", slug: "parts-iphone-15-pro-max" },
          { name: "IPhone 15 Pro", slug: "parts-iphone-15-pro" },
          { name: "IPhone 15 Plus", slug: "parts-iphone-15-plus" },
          { name: "IPhone 15", slug: "parts-iphone-15" },
          { name: "IPhone 14 Pro Max", slug: "parts-iphone-14-pro-max" },
          { name: "IPhone 14 Pro", slug: "parts-iphone-14-pro" },
          { name: "IPhone 14 Plus", slug: "parts-iphone-14-plus" },
          { name: "IPhone 14", slug: "parts-iphone-14" },
          { name: "IPhone 13 Pro Max", slug: "parts-iphone-13-pro-max" },
          { name: "IPhone 13 Pro", slug: "parts-iphone-13-pro" },
          { name: "IPhone 13 Mini", slug: "parts-iphone-13-mini" },
          { name: "IPhone 13", slug: "parts-iphone-13" },
          { name: "IPhone 12 Pro Max", slug: "parts-iphone-12-pro-max" },
          { name: "IPhone 12 Pro", slug: "parts-iphone-12-pro" },
          { name: "IPhone 12", slug: "parts-iphone-12" },
          { name: "IPhone 12 Mini", slug: "parts-iphone-12-mini" },
          { name: "IPhone 11 Pro Max", slug: "parts-iphone-11-pro-max" },
          { name: "IPhone 11 Pro", slug: "parts-iphone-11-pro" },
          { name: "IPhone 11", slug: "parts-iphone-11" },
        ],
      },
      {
        name: "Samsung",
        slug: "parts-samsung",
        children: [
          { name: "Tablets", slug: "parts-samsung-tablets" },
          { name: "Galaxy S Series", slug: "parts-galaxy-s" },
          { name: "Galaxy A Series", slug: "parts-galaxy-a" },
          { name: "Galaxy J Series", slug: "parts-galaxy-j" },
          { name: "Galaxy M Series", slug: "parts-galaxy-m" },
          { name: "Galaxy Note Series", slug: "parts-galaxy-note" },
          { name: "Galaxy Core Series", slug: "parts-galaxy-core" },
          { name: "Other models", slug: "parts-samsung-other" },
        ],
      },
      {
        name: "Xiaomi",
        slug: "parts-xiaomi",
        children: [
          { name: "Xiaomi Series", slug: "parts-xiaomi-series" },
          { name: "Xiaomi Mi Series", slug: "parts-xiaomi-mi" },
          { name: "Xiaomi Redmi Series", slug: "parts-xiaomi-redmi" },
          { name: "Xiaomi Redmi Note Series", slug: "parts-xiaomi-redmi-note" },
          { name: "Xiaomi Poco Series", slug: "parts-xiaomi-poco" },
        ],
      },
      {
        name: "OPPO",
        slug: "parts-oppo",
        children: [
          { name: "OPPO A Series", slug: "parts-oppo-a" },
          { name: "OPPO Reno Series", slug: "parts-oppo-reno" },
          { name: "OPPO Find Series", slug: "parts-oppo-find" },
          { name: "OPPO F Series", slug: "parts-oppo-f" },
        ],
      },
      {
        name: "Macbook",
        slug: "parts-macbook",
        children: [
          { name: "Macbook", slug: "parts-macbook-std" },
          { name: "MacBook Pro", slug: "parts-macbook-pro" },
          { name: "MacBook Pro Retina", slug: "parts-macbook-pro-retina" },
          { name: "MacBook Air", slug: "parts-macbook-air" },
          { name: "iMac", slug: "parts-imac" },
        ],
      },
      {
        name: "Desktop / Laptops",
        slug: "parts-desktop-laptops",
        children: [
          { name: "CPU", slug: "parts-cpu" },
          { name: "SSD", slug: "parts-ssd" },
          { name: "Graphic Card", slug: "parts-graphic-card" },
          { name: "Motherboard", slug: "parts-motherboard" },
          { name: "Power Supply", slug: "parts-power-supply" },
          { name: "RAM memory", slug: "parts-ram" },
          { name: "External hard drive", slug: "parts-external-hdd" },
          { name: "Mouse & Keyboard", slug: "parts-mouse-keyboard" },
        ],
      },
      {
        name: "Playstation",
        slug: "parts-playstation",
        children: [
          { name: "Playstation 4", slug: "parts-ps4" },
          { name: "Playstation 4 Pro", slug: "parts-ps4-pro" },
          { name: "Playstation 4 Slim", slug: "parts-ps4-slim" },
          { name: "Playstation 5", slug: "parts-ps5" },
        ],
      },
      {
        name: "Xbox",
        slug: "parts-xbox",
        children: [
          { name: "Xbox Series S", slug: "parts-xbox-series-s" },
          { name: "Xbox Series X", slug: "parts-xbox-series-x" },
          { name: "Xbox One", slug: "parts-xbox-one" },
        ],
      },
      { name: "Nintendo", slug: "parts-nintendo" },
      {
        name: "For iPad",
        slug: "parts-ipad",
        children: [
          { name: "IPad Pro 11-Inch", slug: "parts-ipad-pro-11" },
          { name: "IPad Pro 12.9-Inch", slug: "parts-ipad-pro-12" },
          { name: "IPad Air", slug: "parts-ipad-air" },
          { name: "IPad Mini", slug: "parts-ipad-mini" },
          { name: "IPad 9.7-Inch", slug: "parts-ipad-97" },
          { name: "IPad 10.2-Inch", slug: "parts-ipad-102" },
        ],
      },
      {
        name: "Realme",
        slug: "parts-realme",
        children: [
          { name: "GT Serie", slug: "parts-realme-gt" },
          { name: "Narzo Serie", slug: "parts-realme-narzo" },
          { name: "C Serie", slug: "parts-realme-c" },
          { name: "Realme 11 Serie", slug: "parts-realme-11" },
        ],
      },
      {
        name: "Huawei",
        slug: "parts-huawei",
        children: [
          { name: "Y series", slug: "parts-huawei-y" },
          { name: "P Smart Serie", slug: "parts-huawei-psmart" },
          { name: "P Serie", slug: "parts-huawei-p" },
          { name: "Mate Serie", slug: "parts-huawei-mate" },
          { name: "Nova Serie", slug: "parts-huawei-nova" },
        ],
      },
      {
        name: "Honor",
        slug: "parts-honor",
        children: [
          { name: "50 Serie", slug: "parts-honor-50" },
          { name: "30 Serie", slug: "parts-honor-30" },
          { name: "20 Serie", slug: "parts-honor-20" },
          { name: "10 Serie", slug: "parts-honor-10" },
          { name: "X Serie", slug: "parts-honor-x" },
          { name: "Magic 3 Serie", slug: "parts-honor-magic3" },
        ],
      },
      {
        name: "OnePlus",
        slug: "parts-oneplus",
        children: [
          { name: "OnePlus 10 Serie", slug: "parts-oneplus-10" },
          { name: "OnePlus 9 Pro", slug: "parts-oneplus-9-pro" },
          { name: "OnePlus 8 Pro", slug: "parts-oneplus-8-pro" },
          { name: "OnePlus 7 Pro", slug: "parts-oneplus-7-pro" },
          { name: "OnePlus Nord Series", slug: "parts-oneplus-nord" },
          { name: "OnePlus Ace Serie", slug: "parts-oneplus-ace" },
        ],
      },
      {
        name: "Google Pixel",
        slug: "parts-google-pixel",
        children: [
          { name: "Google Pixel 9 Series", slug: "parts-pixel-9" },
          { name: "Google Pixel 8 Series", slug: "parts-pixel-8" },
          { name: "Google Pixel 7 Series", slug: "parts-pixel-7" },
          { name: "Google Pixel 6 Series", slug: "parts-pixel-6" },
          { name: "Google Pixel 5 Series", slug: "parts-pixel-5" },
        ],
      },
      {
        name: "Nokia",
        slug: "parts-nokia",
        children: [
          { name: "Nokia 8 Series", slug: "parts-nokia-8" },
          { name: "Nokia 7 Series", slug: "parts-nokia-7" },
          { name: "Nokia 6 Series", slug: "parts-nokia-6" },
          { name: "Nokia 5 Series", slug: "parts-nokia-5" },
          { name: "Nokia 3 Series", slug: "parts-nokia-3" },
          { name: "Nokia G Series", slug: "parts-nokia-g" },
          { name: "Nokia C Series", slug: "parts-nokia-c" },
        ],
      },
      {
        name: "Motorola",
        slug: "parts-motorola",
        children: [
          { name: "Moto G Series", slug: "parts-moto-g" },
          { name: "Moto E Series", slug: "parts-moto-e" },
          { name: "Moto Edge Series", slug: "parts-moto-edge" },
          { name: "Moto One", slug: "parts-moto-one" },
        ],
      },
      { name: "HTC", slug: "parts-htc" },
      { name: "LG", slug: "parts-lg" },
      { name: "Sony", slug: "parts-sony" },
      { name: "Vivo", slug: "parts-vivo" },
      { name: "Asus", slug: "parts-asus" },
      { name: "A-pple Watch", slug: "parts-apple-watch" },
      { name: "Alcatel", slug: "parts-alcatel" },
    ],
  },
  {
    name: "Tools",
    slug: "tools",
    children: [
      {
        name: "Brand",
        slug: "tools-brand",
        children: [
          { name: "SUNSHINE", slug: "tools-sunshine" },
          { name: "RELIFE", slug: "tools-relife" },
          { name: "MT TECH", slug: "tools-mt-tech" },
          { name: "REFOX", slug: "tools-refox" },
          { name: "Quick", slug: "tools-quick" },
          { name: "Qianli", slug: "tools-qianli" },
          { name: "Wiha", slug: "tools-wiha" },
          { name: "Baku", slug: "tools-baku" },
          { name: "JCID", slug: "tools-jcid" },
        ],
      },
      { name: "All Tools", slug: "tools-all" },
      { name: "Programmer Devices", slug: "tools-programmer-devices" },
      { name: "Repair Machine", slug: "tools-repair-machine" },
      { name: "Refurbish Solutions", slug: "tools-refurbish" },
      { name: "Microscope", slug: "tools-microscope" },
      { name: "Detection / Testing Tools", slug: "tools-detection-testing" },
      { name: "Cutting Machine & Film", slug: "tools-cutting-machine" },
      { name: "Glue", slug: "tools-glue" },
      { name: "Premium Other Tools", slug: "tools-premium-other" },
      { name: "Battery Solutions", slug: "tools-battery-solutions" },
      { name: "LCD Solutions", slug: "tools-lcd-solutions" },
      { name: "Flex Solutions", slug: "tools-flex-solutions" },
      { name: "Storage Box", slug: "tools-storage-box" },
      { name: "Recovery iPhone / iPad & IOS", slug: "tools-recovery-ios" },
      {
        name: "Opening Tools",
        slug: "tools-opening",
        children: [
          { name: "Baku Opening Tools", slug: "tools-opening-baku" },
          { name: "Wiha Opening Tools", slug: "tools-opening-wiha" },
          { name: "Premium Other Opening Tools", slug: "tools-opening-premium" },
          { name: "Suction Cup", slug: "tools-suction-cup" },
        ],
      },
      { name: "Tweezers", slug: "tools-tweezers" },
      { name: "LCD / Back Glass Repair Kits", slug: "tools-lcd-repair-kits" },
      {
        name: "Solder",
        slug: "tools-solder",
        children: [
          { name: "Solder Tools", slug: "tools-solder-tools" },
          { name: "Solder Wire", slug: "tools-solder-wire" },
          { name: "Solder Paste", slug: "tools-solder-paste" },
        ],
      },
      {
        name: "Screwdriver",
        slug: "tools-screwdriver",
        children: [
          { name: "Screwdriver", slug: "tools-screwdriver-std" },
          { name: "Laptop Screwdriver", slug: "tools-laptop-screwdriver" },
        ],
      },
      { name: "Pliers, Scissors & Blades", slug: "tools-pliers-scissors" },
      { name: "Cleaning", slug: "tools-cleaning" },
      {
        name: "Mat",
        slug: "tools-mat",
        children: [
          { name: "Mat", slug: "tools-mat-std" },
          { name: "Heating Mat", slug: "tools-heating-mat" },
        ],
      },
      { name: "Motherboard / Screen Holder", slug: "tools-holder" },
      { name: "Tape", slug: "tools-tape" },
      { name: "Water Damage", slug: "tools-water-damage" },
      { name: "Thermal Paste", slug: "tools-thermal-paste" },
      { name: "Gloves", slug: "tools-gloves" },
      { name: "Multimeter", slug: "tools-multimeter" },
      { name: "Lamp", slug: "tools-lamp" },
      { name: "Motherboard Rebaling", slug: "tools-rebaling" },
    ],
  },
  {
    name: "Glass Protector",
    slug: "glass-protector",
    children: [
      { name: "For I-Pad", slug: "glass-protector-ipad" },
      {
        name: "For IPhone",
        slug: "glass-protector-iphone",
        children: [
          { name: "IPhone 16 Pro Max", slug: "gp-iphone-16-pro-max" },
          { name: "IPhone 16 Pro", slug: "gp-iphone-16-pro" },
          { name: "IPhone 16 Plus", slug: "gp-iphone-16-plus" },
          { name: "IPhone 16", slug: "gp-iphone-16" },
          { name: "IPhone 15 Pro Max", slug: "gp-iphone-15-pro-max" },
          { name: "IPhone 15 Pro", slug: "gp-iphone-15-pro" },
          { name: "IPhone 15 Plus", slug: "gp-iphone-15-plus" },
          { name: "IPhone 15", slug: "gp-iphone-15" },
          { name: "IPhone 14 Pro Max", slug: "gp-iphone-14-pro-max" },
          { name: "IPhone 14 Pro", slug: "gp-iphone-14-pro" },
          { name: "IPhone 14 / 13 Pro / 13", slug: "gp-iphone-14-13" },
          { name: "IPhone 12 / 12 Pro", slug: "gp-iphone-12" },
          { name: "IPhone 11 / XR", slug: "gp-iphone-11-xr" },
          { name: "IPhone SE / 8 / 7 / 6", slug: "gp-iphone-se-8-7-6" },
        ],
      },
      {
        name: "For Samsung",
        slug: "glass-protector-samsung",
        children: [
          { name: "Galaxy S24 Ultra", slug: "gp-galaxy-s24-ultra" },
          { name: "Galaxy S24 / S24+", slug: "gp-galaxy-s24" },
          { name: "Galaxy S23 Ultra", slug: "gp-galaxy-s23-ultra" },
          { name: "Galaxy S23 / S23+", slug: "gp-galaxy-s23" },
          { name: "Galaxy A54", slug: "gp-galaxy-a54" },
          { name: "Galaxy A34", slug: "gp-galaxy-a34" },
          { name: "Galaxy A14", slug: "gp-galaxy-a14" },
          { name: "Galaxy A Series", slug: "gp-galaxy-a-series" },
        ],
      },
      {
        name: "For Xiaomi",
        slug: "glass-protector-xiaomi",
        children: [
          { name: "Redmi Note 13 Series", slug: "gp-redmi-note-13" },
          { name: "Redmi Note 12 Series", slug: "gp-redmi-note-12" },
          { name: "Poco Series", slug: "gp-poco-series" },
        ],
      },
      { name: "For Huawei", slug: "glass-protector-huawei" },
      { name: "For Oppo", slug: "glass-protector-oppo" },
      { name: "For OnePlus", slug: "glass-protector-oneplus" },
      { name: "For Realme", slug: "glass-protector-realme" },
      { name: "For Nokia", slug: "glass-protector-nokia" },
      { name: "For Motorola", slug: "glass-protector-motorola" },
      { name: "For Honor", slug: "glass-protector-honor" },
      { name: "For Google Pixel", slug: "glass-protector-google-pixel" },
      { name: "For Vivo", slug: "glass-protector-vivo" },
      { name: "Camera Lens Protector", slug: "glass-protector-camera-lens" },
      { name: "Privacy Screen Protectors", slug: "glass-protector-privacy" },
      { name: "Hydrogel Film", slug: "glass-protector-hydrogel" },
    ],
  },
  {
    name: "Case",
    slug: "case",
    children: [
      {
        name: "For IPhone",
        slug: "case-iphone",
        children: [
          { name: "IPhone 16 Pro Max", slug: "case-iphone-16-pro-max" },
          { name: "IPhone 16 Pro", slug: "case-iphone-16-pro" },
          { name: "IPhone 16 Plus", slug: "case-iphone-16-plus" },
          { name: "IPhone 16", slug: "case-iphone-16" },
          { name: "IPhone 15 Pro Max", slug: "case-iphone-15-pro-max" },
          { name: "IPhone 15 Pro", slug: "case-iphone-15-pro" },
          { name: "IPhone 15 Plus", slug: "case-iphone-15-plus" },
          { name: "IPhone 15", slug: "case-iphone-15" },
          { name: "IPhone 14 Pro Max", slug: "case-iphone-14-pro-max" },
          { name: "IPhone 14 Pro", slug: "case-iphone-14-pro" },
          { name: "IPhone 14 Plus", slug: "case-iphone-14-plus" },
          { name: "IPhone 14", slug: "case-iphone-14" },
          { name: "IPhone 13 Pro Max", slug: "case-iphone-13-pro-max" },
          { name: "IPhone 13 / 13 Pro", slug: "case-iphone-13" },
        ],
      },
      {
        name: "For Samsung",
        slug: "case-samsung",
        children: [
          { name: "Galaxy S24 Ultra", slug: "case-galaxy-s24-ultra" },
          { name: "Galaxy S24 / S24+", slug: "case-galaxy-s24" },
          { name: "Galaxy S23 Ultra", slug: "case-galaxy-s23-ultra" },
          { name: "Galaxy S23 / S23+", slug: "case-galaxy-s23" },
          { name: "Galaxy A54", slug: "case-galaxy-a54" },
          { name: "Galaxy A34", slug: "case-galaxy-a34" },
          { name: "Galaxy A14", slug: "case-galaxy-a14" },
          { name: "Galaxy A Series", slug: "case-galaxy-a-series" },
          { name: "Galaxy S Series", slug: "case-galaxy-s-series" },
        ],
      },
      {
        name: "For Xiaomi",
        slug: "case-xiaomi",
        children: [
          { name: "Redmi Note 13 Series", slug: "case-redmi-note-13" },
          { name: "Redmi Note 12 Series", slug: "case-redmi-note-12" },
          { name: "Poco Series", slug: "case-poco-series" },
          { name: "Xiaomi 14 Series", slug: "case-xiaomi-14" },
        ],
      },
      { name: "For Huawei", slug: "case-huawei" },
      { name: "For Oppo", slug: "case-oppo" },
      { name: "For OnePlus", slug: "case-oneplus" },
      { name: "For Realme", slug: "case-realme" },
      { name: "For Nokia", slug: "case-nokia" },
      { name: "For Motorola", slug: "case-motorola" },
      { name: "For Honor", slug: "case-honor" },
      { name: "For Google Pixel", slug: "case-google-pixel" },
      {
        name: "Case Brand",
        slug: "case-brand",
        children: [
          { name: "GREEN ON", slug: "case-green-on" },
          { name: "Lavann", slug: "case-lavann" },
          { name: "Mercury", slug: "case-mercury" },
        ],
      },
      { name: "Silicone Case", slug: "case-silicone" },
      { name: "Leather Bookcase", slug: "case-leather-bookcase" },
      { name: "Wallet Case", slug: "case-wallet" },
      { name: "Clear Case", slug: "case-clear" },
    ],
  },
  {
    name: "Kingston",
    slug: "kingston",
    children: [
      { name: "Micro SD Kingston", slug: "kingston-micro-sd" },
      { name: "SD Memory Card", slug: "kingston-sd" },
      { name: "USB Stick Kingston", slug: "kingston-usb-stick" },
      { name: "SSD Kingston", slug: "kingston-ssd" },
      { name: "Ramgeheugen", slug: "kingston-ram" },
    ],
  },
  {
    name: "MT Tech",
    slug: "mt-tech",
    children: [
      { name: "LCD Incell iPhone", slug: "mt-tech-lcd-incell-iphone" },
      { name: "LCD Excellent Incell IPhone", slug: "mt-tech-lcd-excellent-incell" },
      { name: "LCD Hard Oled iPhone", slug: "mt-tech-lcd-hard-oled" },
      { name: "LCD Soft Oled iPhone", slug: "mt-tech-lcd-soft-oled" },
      { name: "LCD Galaxy A Series", slug: "mt-tech-lcd-galaxy-a" },
      { name: "LCD Galaxy S Series", slug: "mt-tech-lcd-galaxy-s" },
      { name: "LCD Galaxy Note Series", slug: "mt-tech-lcd-galaxy-note" },
      { name: "LCD Xiaomi", slug: "mt-tech-lcd-xiaomi" },
      { name: "LCD Huawei", slug: "mt-tech-lcd-huawei" },
      { name: "LCD Oppo", slug: "mt-tech-lcd-oppo" },
      { name: "LCD Google Pixel", slug: "mt-tech-lcd-pixel" },
      { name: "LCD Realme", slug: "mt-tech-lcd-realme" },
      { name: "LCD Motorola", slug: "mt-tech-lcd-motorola" },
      { name: "LCD Nokia", slug: "mt-tech-lcd-nokia" },
      { name: "LCD Touch IPad", slug: "mt-tech-lcd-ipad" },
      { name: "Tools", slug: "mt-tech-tools" },
      { name: "Parts", slug: "mt-tech-parts" },
      { name: "Middle Frame", slug: "mt-tech-middle-frame" },
    ],
  },
  {
    name: "GREEN ON",
    slug: "green-on",
    children: [
      { name: "GREEN ON Mix", slug: "green-on-mix" },
      { name: "GREEN ON Display Set", slug: "green-on-display-set" },
      { name: "GREEN ON Wireles Speaker", slug: "green-on-wireless-speaker" },
      { name: "GREEN ON Chargers", slug: "green-on-chargers" },
      { name: "GREEN ON Data Cable", slug: "green-on-data-cable" },
      { name: "GREEN ON AUX Cable", slug: "green-on-aux-cable" },
      { name: "GREEN ON HDMI Cable", slug: "green-on-hdmi-cable" },
      { name: "GREEN ON Adapter Converter", slug: "green-on-adapter-converter" },
      { name: "GREEN ON Travel Charger", slug: "green-on-travel-charger" },
      { name: "GREEN ON Houders", slug: "green-on-holders" },
      { name: "GREEN ON Glass", slug: "green-on-glass" },
      { name: "GREEN ON Book Case", slug: "green-on-book-case" },
      { name: "GREEN ON Gorilla Anti Burst", slug: "green-on-gorilla-anti-burst" },
      { name: "GREEN ON Gorilla Anti Burst Black", slug: "green-on-gorilla-anti-burst-black" },
      { name: "GREEN ON Silicone Case", slug: "green-on-silicone-case" },
      { name: "GREEN ON TPU Case", slug: "green-on-tpu-case" },
      { name: "GREEN ON Luxury Book Case", slug: "green-on-luxury-book-case" },
      { name: "GREEN ON Kids Case", slug: "green-on-kids-case" },
      { name: "GREEN ON Card Case Anti Shock Silicone With Camera Slider", slug: "green-on-card-case-camera-slider" },
      { name: "GREEN ON Silicone Leather Card Case", slug: "green-on-silicone-leather-card-case" },
      { name: "GREEN ON Laptop,Desktop Products", slug: "green-on-laptop-desktop" },
      { name: "GREEN ON Camera Protection Case", slug: "green-on-camera-protection-case" },
      { name: "GREEN ON O-Star Case", slug: "green-on-o-star-case" },
      { name: "GREEN ON Printed Bookcase", slug: "green-on-printed-bookcase" },
      { name: "GREEN ON Waterproof Cases", slug: "green-on-waterproof-cases" },
      { name: "GREEN ON Printed TPU Case", slug: "green-on-printed-tpu-case" },
      { name: "GREEN ON Armor Case", slug: "green-on-armor-case" },
      { name: "GREEN ON Armor Card Holder Case", slug: "green-on-armor-card-holder-case" },
      { name: "GREEN ON Armor Transparant Case", slug: "green-on-armor-transparent-case" },
      { name: "GREEN ON Cord Case", slug: "green-on-cord-case" },
    ],
  },
  {
    name: "Cable",
    slug: "cable",
    children: [
      { name: "USB C To USB C", slug: "cable-usb-c-to-usb-c" },
      { name: "USB-C To Lightning", slug: "cable-usb-c-to-lightning" },
      { name: "USB To Lightning", slug: "cable-usb-to-lightning" },
      { name: "USB To USB-C", slug: "cable-usb-to-usb-c" },
      { name: "USB To Micro USB", slug: "cable-usb-to-micro-usb" },
      { name: "For I-Phone 30-Pin", slug: "cable-iphone-30-pin" },
      { name: "HDMI Cable", slug: "cable-hdmi" },
      { name: "AUX cable", slug: "cable-aux" },
      { name: "Charging & Music Converter", slug: "cable-charging-music-converter" },
      { name: "Ethernet Network Cable", slug: "cable-ethernet" },
    ],
  },
  {
    name: "Charger",
    slug: "charger",
    children: [
      { name: "USB Charger", slug: "charger-usb" },
      { name: "Charger 2 in 1", slug: "charger-2-in-1" },
      { name: "Samsung Chargers", slug: "charger-samsung" },
      { name: "Universele laptopladers", slug: "charger-laptop-universal" },
      { name: "Powerbanks", slug: "charger-powerbank" },
      { name: "USB car charger", slug: "charger-usb-car" },
      {
        name: "Car charger 2 in 1",
        slug: "charger-car-2-in-1",
        children: [
          { name: "Lightning", slug: "car-charger-lightning" },
          { name: "USB C / Lightning", slug: "car-charger-usb-c-lightning" },
          { name: "USB C", slug: "car-charger-usb-c" },
          { name: "USB C / USB C", slug: "car-charger-usb-c-usb-c" },
          { name: "Micro", slug: "car-charger-micro" },
          { name: "Other models", slug: "car-charger-other" },
        ],
      },
      { name: "Wireless Chargers", slug: "charger-wireless" },
    ],
  },
  {
    name: "cell phone",
    slug: "cell-phone",
    children: [
      { name: "For IPhone", slug: "cell-phone-iphone" },
      { name: "IPad", slug: "cell-phone-ipad" },
      {
        name: "Samsung New SmartPhone",
        slug: "cell-phone-samsung-new",
        children: [
          { name: "Samsung A56 Series", slug: "samsung-a56-series" },
          { name: "Samsung A36 Series", slug: "samsung-a36-series" },
          { name: "Samsung A26 Series", slug: "samsung-a26-series" },
          { name: "Samsung A17 Series", slug: "samsung-a17-series" },
          { name: "Samsung A16 Series", slug: "samsung-a16-series" },
          { name: "Samsung A07 Series", slug: "samsung-a07-series" },
        ],
      },
      { name: "Samsung Used SmartPhone", slug: "cell-phone-samsung-used" },
      { name: "Xiaomi", slug: "cell-phone-xiaomi" },
      { name: "Oppo", slug: "cell-phone-oppo" },
      { name: "OnePlus", slug: "cell-phone-oneplus" },
      { name: "Samsung Tablet", slug: "cell-phone-samsung-tablet" },
      { name: "Motorola", slug: "cell-phone-motorola" },
    ],
  },
  {
    name: "HOT",
    slug: "hot",
  },
  {
    name: "New",
    slug: "new",
  },
  {
    name: "sale",
    slug: "sale",
  },
  {
    name: "Other",
    slug: "other",
    children: [
      {
        name: "Original",
        slug: "other-original",
        children: [
          { name: "Kingston", slug: "other-original-kingston" },
          { name: "Samsung", slug: "other-original-samsung" },
          { name: "JBL", slug: "other-original-jbl" },
          { name: "Intenso", slug: "other-original-intenso" },
          { name: "Yesido", slug: "other-original-yesido" },
          { name: "LDNIO ®", slug: "other-original-ldnio" },
          { name: "LAVANN ®", slug: "other-original-lavann" },
          { name: "Huawei", slug: "other-original-huawei" },
          { name: "LG", slug: "other-original-lg" },
          { name: "Sony", slug: "other-original-sony" },
          { name: "Nokia", slug: "other-original-nokia" },
          { name: "ZTE", slug: "other-original-zte" },
          { name: "Guess", slug: "other-original-guess" },
          { name: "Football & Cars Cases", slug: "other-original-football-cars" },
          { name: "SUNSHINE", slug: "other-original-sunshine" },
          { name: "RELIFE", slug: "other-original-relife" },
          { name: "BAKU ®", slug: "other-original-baku" },
        ],
      },
      {
        name: "Outlet",
        slug: "other-outlet",
        children: [
          { name: "Case", slug: "outlet-case" },
          { name: "Cable & Charger", slug: "outlet-cable-charger" },
          { name: "Parts", slug: "outlet-parts" },
          { name: "Original Huawei & LG & Sony", slug: "outlet-original-huawei-lg-sony" },
          { name: "Glass", slug: "outlet-glass" },
        ],
      },
      {
        name: "Holders",
        slug: "other-holders",
        children: [
          { name: "Car Holders", slug: "holders-car" },
          { name: "Motor / Bicycle Holders", slug: "holders-motor-bicycle" },
          { name: "Wireless charging holders", slug: "holders-wireless-charging" },
          { name: "Phone stand", slug: "holders-phone-stand" },
        ],
      },
      {
        name: "Headsets",
        slug: "other-headsets",
        children: [
          { name: "Samsung", slug: "headsets-samsung" },
          { name: "Bluetooth Headsets", slug: "headsets-bluetooth" },
          { name: "Other Headsets", slug: "headsets-other" },
        ],
      },
      { name: "Bluetooth Speaker", slug: "other-bluetooth-speaker" },
      { name: "Smart Watch", slug: "other-smart-watch" },
      { name: "Selfie stick", slug: "other-selfie-stick" },
      { name: "Mouse", slug: "other-mouse" },
      { name: "Keyboard", slug: "other-keyboard" },
      { name: "External Drives", slug: "other-external-drives" },
      { name: "Card Reader / USB Hub", slug: "other-card-reader-usb-hub" },
      { name: "Stylus Pen", slug: "other-stylus-pen" },
      { name: "Shop interior", slug: "other-shop-interior" },
      { name: "Ring Holder / Key Chain / Lenyard", slug: "other-ring-holder-keychain" },
      { name: "Bluetooth Keyboard", slug: "other-bluetooth-keyboard" },
      { name: "SIM card accessories", slug: "other-sim-accessories" },
      { name: "Anti Dust Plug", slug: "other-anti-dust-plug" },
      {
        name: "LCD",
        slug: "other-lcd",
        children: [
          { name: "MT TECH Incell", slug: "other-lcd-mt-tech-incell" },
          { name: "MT TECH Excellent", slug: "other-lcd-mt-tech-excellent" },
          { name: "GX Hard OLED", slug: "other-lcd-gx-hard-oled" },
          { name: "GX COF InCell", slug: "other-lcd-gx-cof-incell" },
        ],
      },
      { name: "Diagnosable Battery", slug: "other-diagnosable-battery" },
      { name: "iPod 17 accessories", slug: "other-ipod-17-accessories" },
      { name: "LCD White Box Android", slug: "other-lcd-white-box-android" },
      { name: "Massage Gun", slug: "other-massage-gun" },
      { name: "Promotional Material", slug: "other-promotional-material" },
    ],
  },
];

// --------------- Sample Products (brand + model linked) ---------------

export const products: Product[] = [
  // ===== APPLE LCD =====
  {
    id: "1", name: "LCD Incell IPhone 11 Pro", slug: "lcd-incell-iphone-11-pro",
    category: "lcd", subcategory: "lcd-iphone", brand: "apple", model: "iphone-11-pro",
    price: 12.95, salePrice: 7.95, image: "/products/lcd-iphone.jpg", badge: "Sale",
    sku: "LCD-IP11P-INC", description: "High quality Incell LCD replacement screen for iPhone 11 Pro. Tested and certified for perfect display quality.", inStock: true,
  },
  {
    id: "2", name: "LCD Incell IPhone 12 / 12 Pro", slug: "lcd-incell-iphone-12-pro",
    category: "lcd", subcategory: "lcd-iphone", brand: "apple", model: "iphone-12-12-pro",
    price: 14.95, salePrice: 8.90, image: "/products/lcd-iphone.jpg", badge: "Sale",
    sku: "LCD-IP12P-INC", description: "Premium Incell LCD screen for iPhone 12 and 12 Pro. Full assembly with digitizer.", inStock: true,
  },
  {
    id: "3", name: "LCD Soft OLED IPhone 13 Pro Max", slug: "lcd-soft-oled-iphone-13-pro-max",
    category: "lcd", subcategory: "lcd-iphone", brand: "apple", model: "iphone-13-pro-max",
    price: 45.50, image: "/products/lcd-iphone.jpg",
    sku: "LCD-IP13PM-SOLED", description: "Soft OLED LCD screen for iPhone 13 Pro Max. Original color quality with perfect touch response.", inStock: true,
  },
  {
    id: "4", name: "LCD Hard OLED IPhone 14 Pro", slug: "lcd-hard-oled-iphone-14-pro",
    category: "lcd", subcategory: "lcd-iphone", brand: "apple", model: "iphone-14-pro",
    price: 52.00, image: "/products/lcd-iphone.jpg",
    sku: "LCD-IP14P-HOLED", description: "Hard OLED LCD replacement for iPhone 14 Pro. Premium quality display assembly.", inStock: true,
  },
  {
    id: "5", name: "LCD IPhone 15 Pro Max Soft OLED", slug: "lcd-iphone-15-pro-max-soft-oled",
    category: "lcd", subcategory: "lcd-iphone", brand: "apple", model: "iphone-15-pro-max",
    price: 89.00, image: "/products/lcd-iphone.jpg", badge: "New",
    sku: "LCD-IP15PM-SOLED", description: "Latest Soft OLED LCD for iPhone 15 Pro Max. Factory tested with warranty.", inStock: true,
  },
  // ===== SAMSUNG LCD =====
  {
    id: "6", name: "LCD Samsung Galaxy S24 Ultra", slug: "lcd-samsung-galaxy-s24-ultra",
    category: "lcd", subcategory: "lcd-samsung", brand: "samsung", model: "galaxy-s24-ultra",
    price: 65.00, image: "/products/lcd-samsung.jpg", badge: "New",
    sku: "LCD-SGS24U", description: "AMOLED display assembly for Samsung Galaxy S24 Ultra with frame.", inStock: true,
  },
  {
    id: "7", name: "LCD Samsung Galaxy A54", slug: "lcd-samsung-galaxy-a54",
    category: "lcd", subcategory: "lcd-samsung", brand: "samsung", model: "galaxy-a54",
    price: 22.50, image: "/products/lcd-samsung.jpg",
    sku: "LCD-SGA54", description: "LCD Display with touch screen for Samsung Galaxy A54.", inStock: true,
  },
  {
    id: "8", name: "LCD Samsung Galaxy A34", slug: "lcd-samsung-galaxy-a34",
    category: "lcd", subcategory: "lcd-samsung", brand: "samsung", model: "galaxy-a34",
    price: 18.90, salePrice: 15.50, image: "/products/lcd-samsung.jpg", badge: "Sale",
    sku: "LCD-SGA34", description: "Replacement LCD screen for Samsung Galaxy A34 with digitizer assembly.", inStock: true,
  },
  {
    id: "32", name: "LCD Samsung Galaxy S23 FE", slug: "lcd-samsung-galaxy-s23-fe",
    category: "lcd", subcategory: "lcd-samsung", brand: "samsung", model: "galaxy-s23-fe",
    price: 38.50, image: "/products/lcd-samsung.jpg",
    sku: "LCD-SGS23FE", description: "AMOLED display assembly for Samsung Galaxy S23 FE.", inStock: true,
  },
  // ===== XIAOMI LCD =====
  {
    id: "9", name: "LCD Xiaomi Redmi Note 13 Pro", slug: "lcd-xiaomi-redmi-note-13-pro",
    category: "lcd", subcategory: "lcd-xiaomi", brand: "xiaomi", model: "redmi-note-13-pro",
    price: 19.95, image: "/products/lcd-xiaomi.jpg",
    sku: "LCD-XRN13P", description: "LCD display assembly for Xiaomi Redmi Note 13 Pro.", inStock: true,
  },
  {
    id: "10", name: "LCD Xiaomi Poco X5 Pro", slug: "lcd-xiaomi-poco-x5-pro",
    category: "lcd", subcategory: "lcd-xiaomi", brand: "xiaomi", model: "poco-x5-pro",
    price: 17.50, image: "/products/lcd-xiaomi.jpg",
    sku: "LCD-XPOCOX5P", description: "AMOLED screen replacement for Xiaomi Poco X5 Pro.", inStock: true,
  },
  // ===== HUAWEI LCD =====
  {
    id: "23", name: "LCD Huawei P30 Lite", slug: "lcd-huawei-p30-lite",
    category: "lcd", subcategory: "lcd-huawei", brand: "huawei", model: "p30-lite",
    price: 16.50, image: "/products/lcd-huawei.jpg",
    sku: "LCD-HWP30L", description: "LCD screen with digitizer for Huawei P30 Lite.", inStock: true,
  },
  // ===== OPPO LCD =====
  {
    id: "24", name: "LCD Oppo A78 5G", slug: "lcd-oppo-a78-5g",
    category: "lcd", subcategory: "lcd-oppo", brand: "oppo", model: "oppo-a78-5g",
    price: 14.90, image: "/products/lcd-oppo.jpg",
    sku: "LCD-OPA78", description: "Full LCD display replacement for Oppo A78 5G.", inStock: true,
  },
  // ===== REALME LCD =====
  {
    id: "26", name: "LCD Realme GT Neo 5", slug: "lcd-realme-gt-neo-5",
    category: "lcd", subcategory: "lcd-realme", brand: "realme", model: "gt-neo-5",
    price: 21.00, image: "/products/lcd-realme.jpg",
    sku: "LCD-RMGTN5", description: "AMOLED display for Realme GT Neo 5.", inStock: true,
  },
  // ===== ONEPLUS LCD =====
  {
    id: "27", name: "LCD OnePlus Nord CE 3", slug: "lcd-oneplus-nord-ce-3",
    category: "lcd", subcategory: "lcd-oneplus", brand: "oneplus", model: "nord-ce-3",
    price: 18.50, image: "/products/lcd-oneplus.jpg",
    sku: "LCD-OPNCE3", description: "LCD display assembly for OnePlus Nord CE 3.", inStock: true,
  },
  // ===== MOTOROLA LCD =====
  {
    id: "28", name: "LCD Motorola Moto G84", slug: "lcd-motorola-moto-g84",
    category: "lcd", subcategory: "lcd-motorola", brand: "motorola", model: "moto-g84",
    price: 15.90, image: "/products/lcd-motorola.jpg",
    sku: "LCD-MOTG84", description: "Replacement LCD screen for Motorola Moto G84.", inStock: true,
  },
  // ===== BATTERIES APPLE =====
  {
    id: "11", name: "Battery IPhone 14 Pro Max", slug: "battery-ip14pm",
    category: "battery", subcategory: "battery-iphone", brand: "apple", model: "iphone-14-pro-max",
    price: 12.50, image: "/products/battery-iphone.jpg",
    sku: "BAT-IP14PM", description: "Replacement battery for iPhone 14 Pro Max. 4323mAh capacity with installation tools.", inStock: true,
  },
  {
    id: "12", name: "Battery IPhone 13 Pro", slug: "battery-ip13p",
    category: "battery", subcategory: "battery-iphone", brand: "apple", model: "iphone-13-pro",
    price: 9.95, image: "/products/battery-iphone.jpg",
    sku: "BAT-IP13P", description: "Premium replacement battery for iPhone 13 Pro. High capacity.", inStock: true,
  },
  // ===== BATTERIES SAMSUNG =====
  {
    id: "13", name: "Battery Samsung Galaxy S23 Ultra", slug: "battery-sgs23u",
    category: "battery", subcategory: "battery-samsung", brand: "samsung", model: "galaxy-s23-ultra",
    price: 14.50, image: "/products/battery-samsung.jpg",
    sku: "BAT-SGS23U", description: "OEM quality replacement battery for Samsung Galaxy S23 Ultra.", inStock: true,
  },
  {
    id: "14", name: "Battery Samsung Galaxy A54", slug: "battery-sga54",
    category: "battery", subcategory: "battery-samsung", brand: "samsung", model: "galaxy-a54",
    price: 8.95, salePrice: 6.50, image: "/products/battery-samsung.jpg", badge: "Sale",
    sku: "BAT-SGA54", description: "Replacement battery for Samsung Galaxy A54 5G.", inStock: true,
  },
  // ===== BATTERIES XIAOMI =====
  {
    id: "15", name: "Battery Xiaomi Redmi Note 12", slug: "battery-xrn12",
    category: "battery", subcategory: "battery-xiaomi", brand: "xiaomi", model: "redmi-note-12",
    price: 7.50, image: "/products/battery-xiaomi.jpg",
    sku: "BAT-XRN12", description: "High quality battery replacement for Xiaomi Redmi Note 12.", inStock: true,
  },
  // ===== BATTERIES HUAWEI =====
  {
    id: "25", name: "Battery Huawei P40 Pro", slug: "battery-hwp40p",
    category: "battery", subcategory: "battery-huawei", brand: "huawei", model: "p40-pro",
    price: 11.50, image: "/products/battery-huawei.jpg",
    sku: "BAT-HWP40P", description: "Original quality battery for Huawei P40 Pro.", inStock: true,
  },
  // ===== GX PRODUCTS (Apple brand) =====
  {
    id: "16", name: "GX Hard OLED IPhone 13", slug: "gx-hard-oled-iphone-13",
    category: "gx", subcategory: "lcd-hard-oled-iphone", brand: "apple", model: "iphone-13",
    price: 35.00, image: "/products/lcd-iphone.jpg", badge: "GX",
    sku: "GX-HOLED-IP13", description: "GX Hard OLED screen for iPhone 13. Official GX partner product.", inStock: true,
  },
  {
    id: "17", name: "GX Soft OLED IPhone 14", slug: "gx-soft-oled-iphone-14",
    category: "gx", subcategory: "lcd-soft-oled-iphone", brand: "apple", model: "iphone-14",
    price: 42.00, image: "/products/lcd-iphone.jpg", badge: "GX",
    sku: "GX-SOLED-IP14", description: "GX Soft OLED screen for iPhone 14. Premium display quality.", inStock: true,
  },
  {
    id: "18", name: "GX COF InCell IPhone 12", slug: "gx-cof-incell-iphone-12",
    category: "gx", subcategory: "lcd-incell-iphone", brand: "apple", model: "iphone-12-12-pro",
    price: 15.00, salePrice: 11.50, image: "/products/lcd-iphone.jpg", badge: "Sale",
    sku: "GX-COF-IP12", description: "GX COF InCell LCD for iPhone 12. Excellent quality at competitive price.", inStock: true,
  },
  {
    id: "31", name: "GX Incell LCD IPhone 11", slug: "gx-incell-lcd-iphone-11",
    category: "gx", subcategory: "lcd-incell-iphone", brand: "apple", model: "iphone-11",
    price: 9.50, image: "/products/lcd-iphone.jpg", badge: "GX",
    sku: "GX-INC-IP11", description: "GX InCell LCD for iPhone 11. COF technology for slim bezels.", inStock: true,
  },
  // ===== PARTS APPLE =====
  {
    id: "19", name: "iPhone 14 Pro Back Glass", slug: "iphone-14-pro-back-glass",
    category: "parts", subcategory: "parts-iphone", brand: "apple", model: "iphone-14-pro",
    price: 8.50, image: "/products/parts-iphone.jpg",
    sku: "PRT-IP14P-BG", description: "Replacement back glass panel for iPhone 14 Pro. Easy installation.", inStock: true,
  },
  {
    id: "20", name: "iPhone 13 Charging Port Flex", slug: "iphone-13-charging-port-flex",
    category: "parts", subcategory: "parts-iphone", brand: "apple", model: "iphone-13",
    price: 5.95, image: "/products/parts-iphone.jpg",
    sku: "PRT-IP13-CPF", description: "Charging port flex cable for iPhone 13. Includes microphone and speaker.", inStock: true,
  },
  // ===== PARTS SAMSUNG =====
  {
    id: "21", name: "Samsung Galaxy S23 Back Cover", slug: "samsung-galaxy-s23-back-cover",
    category: "parts", subcategory: "parts-samsung", brand: "samsung", model: "galaxy-s23",
    price: 7.50, image: "/products/parts-samsung.jpg",
    sku: "PRT-SGS23-BC", description: "Original quality back cover replacement for Samsung Galaxy S23.", inStock: true,
  },
  // ===== ACCESSORIES =====
  {
    id: "22", name: "Professional Repair Tool Kit 25-in-1", slug: "professional-repair-tool-kit",
    category: "parts", subcategory: "tools-equipment", brand: "generic", model: "generic",
    price: 12.95, salePrice: 9.95, image: "/products/tools.jpg", badge: "Sale",
    sku: "TL-PRO25", description: "Complete 25-piece professional smartphone repair toolkit.", inStock: true,
  },
  {
    id: "29", name: "Screen Protector Tempered Glass Universal", slug: "screen-protector-tempered-glass",
    category: "parts", subcategory: "screen-protectors", brand: "generic", model: "generic",
    price: 1.50, image: "/products/screen-protector.jpg",
    sku: "SP-TG-UNI", description: "9H hardness tempered glass screen protector. Universal fit.", inStock: true,
  },
  {
    id: "30", name: "USB-C Charging Cable 1m", slug: "usb-c-charging-cable-1m",
    category: "parts", subcategory: "charging-cables", brand: "generic", model: "generic",
    price: 2.50, image: "/products/cable.jpg",
    sku: "CBL-USBC-1M", description: "High quality USB-C fast charging cable 1 meter.", inStock: true,
  },
];

// --------------- Helper functions ---------------

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductsBySubcategory(subcategorySlug: string): Product[] {
  return products.filter((p) => p.subcategory === subcategorySlug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug);
}

export function getProductsByModel(modelSlug: string): Product[] {
  return products.filter((p) => p.model === modelSlug);
}

export function getProductsByBrandAndCategory(brandSlug: string, categorySlug: string): Product[] {
  return products.filter((p) => p.brand === brandSlug && p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  // Search across name, description, sku, category, brand, model
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      getBrandName(p.brand).toLowerCase().includes(q) ||
      getModelName(p.brand, p.model).toLowerCase().includes(q)
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "Sale" || p.badge === "New" || p.badge === "GX");
}

export function getLatestProducts(): Product[] {
  return products.slice(-8);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function findCategoryBySlug(slug: string, cats: Category[] = categories): Category | undefined {
  for (const cat of cats) {
    if (cat.slug === slug) return cat;
    if (cat.children) {
      const found = findCategoryBySlug(slug, cat.children);
      if (found) return found;
    }
  }
  return undefined;
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getBrandName(brandSlug: string): string {
  return brands.find((b) => b.slug === brandSlug)?.name ?? brandSlug;
}

export function getModelName(brandSlug: string, modelSlug: string): string {
  const brand = brands.find((b) => b.slug === brandSlug);
  if (!brand) return modelSlug;
  return brand.models.find((m) => m.slug === modelSlug)?.name ?? modelSlug;
}

export function getModelsForBrand(brandSlug: string): Model[] {
  return brands.find((b) => b.slug === brandSlug)?.models ?? [];
}

// Get brands that have products in a given category
export function getBrandsForCategory(categorySlug: string): Brand[] {
  const brandSlugs = new Set(products.filter((p) => p.category === categorySlug).map((p) => p.brand));
  return brands.filter((b) => brandSlugs.has(b.slug));
}

// Get models that have products for given brand + category
export function getModelsWithProducts(brandSlug: string, categorySlug?: string): Model[] {
  const filtered = categorySlug
    ? products.filter((p) => p.brand === brandSlug && p.category === categorySlug)
    : products.filter((p) => p.brand === brandSlug);
  const modelSlugs = new Set(filtered.map((p) => p.model));
  const brand = brands.find((b) => b.slug === brandSlug);
  if (!brand) return [];
  return brand.models.filter((m) => modelSlugs.has(m.slug));
}
