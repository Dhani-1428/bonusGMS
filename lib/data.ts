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
          { name: "IPhone X", slug: "iphone-x" },
          { name: "IPhone XS", slug: "iphone-xs" },
          { name: "IPhone XR", slug: "iphone-xr" },
          { name: "IPhone XS Max", slug: "iphone-xs-max" },
          { name: "IPhone 11", slug: "iphone-11" },
          { name: "IPhone 11 Pro", slug: "iphone-11-pro" },
          { name: "IPhone 11 Pro Max", slug: "iphone-11-pro-max" },
          { name: "IPhone 12 Mini", slug: "iphone-12-mini" },
          { name: "IPhone 12 / 12 Pro", slug: "iphone-12-12-pro" },
          { name: "IPhone 12 Pro Max", slug: "iphone-12-pro-max" },
          { name: "IPhone 13 Mini", slug: "iphone-13-mini" },
          { name: "IPhone 13", slug: "iphone-13" },
          { name: "iPhone 13 Pro", slug: "iphone-13-pro" },
          { name: "iPhone 13 Pro Max", slug: "iphone-13-pro-max" },
          { name: "iPhone 14", slug: "iphone-14" },
          { name: "iPhone 14 Plus", slug: "iphone-14-plus" },
          { name: "IPhone 14 Pro", slug: "iphone-14-pro" },
          { name: "IPhone 14 Pro Max", slug: "iphone-14-pro-max" },
          { name: "IPhone 15", slug: "iphone-15" },
          { name: "IPhone 15 Plus", slug: "iphone-15-plus" },
          { name: "IPhone 15 Pro", slug: "iphone-15-pro" },
          { name: "IPhone 15 Pro Max", slug: "iphone-15-pro-max" },
          { name: "IPhone 8 Plus", slug: "iphone-8-plus" },
          { name: "IPhone 8 / SE 2020 / SE 2022", slug: "iphone-8-se" },
          { name: "IPhone 7 Plus", slug: "iphone-7-plus" },
          { name: "IPhone 7", slug: "iphone-7" },
          { name: "IPhone 6S Plus", slug: "iphone-6s-plus" },
          { name: "IPhone 6S", slug: "iphone-6s" },
          { name: "IPhone 6 Plus", slug: "iphone-6-plus" },
          { name: "IPhone 6", slug: "iphone-6" },
          { name: "IPhone 5S / SE", slug: "iphone-5s-se" },
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
          { name: "Galaxy M Serie", slug: "galaxy-m-serie" },
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
        ],
      },
      {
        name: "LCD Oppo",
        slug: "lcd-oppo",
        children: [
          { name: "OPPO A Serie", slug: "oppo-a-serie" },
          { name: "OPPO Find Serie", slug: "oppo-find-serie" },
          { name: "OPPO Reno Serie", slug: "oppo-reno-serie" },
        ],
      },
      {
        name: "LCD Xiaomi",
        slug: "lcd-xiaomi",
        children: [
          { name: "Xiaomi Note Serie", slug: "xiaomi-note-serie" },
          { name: "Xiaomi MI Serie", slug: "xiaomi-mi-serie" },
          { name: "Xiaomi Redmi Serie", slug: "xiaomi-redmi-serie" },
          { name: "Poco Xiaomi Series", slug: "poco-xiaomi-series" },
        ],
      },
      {
        name: "LCD Realme",
        slug: "lcd-realme",
        children: [
          { name: "Realme 11 Serie", slug: "realme-11-serie" },
          { name: "Realme 10 Series", slug: "realme-10-series" },
          { name: "Realme 9 Series", slug: "realme-9-series" },
          { name: "Realme C series", slug: "realme-c-series" },
          { name: "Realme GT Series", slug: "realme-gt-series" },
        ],
      },
      { name: "LCD Laptop", slug: "lcd-laptop" },
      { name: "LCD Samsung Tablets", slug: "lcd-samsung-tablets" },
      {
        name: "LCD for IPad",
        slug: "lcd-ipad",
        children: [
          { name: "iPad Pro 11-Inch", slug: "ipad-pro-11" },
          { name: "iPad Pro 12.9-Inch", slug: "ipad-pro-12" },
          { name: "iPad Air", slug: "ipad-air" },
          { name: "IPad 10 10.9 2022", slug: "ipad-10-2022" },
        ],
      },
      { name: "LCD for MacBook", slug: "lcd-macbook" },
      { name: "LCD for IMac", slug: "lcd-imac" },
      { name: "LCD For Apple Watch", slug: "lcd-apple-watch" },
      {
        name: "LCD Honor",
        slug: "lcd-honor",
        children: [
          { name: "Honor 90 Serie", slug: "honor-90-serie" },
          { name: "Honor 50 Series", slug: "honor-50-series" },
          { name: "Honor Magic Series", slug: "honor-magic-series" },
        ],
      },
      {
        name: "LCD OnePlus",
        slug: "lcd-oneplus",
        children: [
          { name: "OnePlus 11 Series", slug: "oneplus-11-series" },
          { name: "OnePlus 10 Series", slug: "oneplus-10-series" },
          { name: "OnePlus 9 Series", slug: "oneplus-9-series" },
          { name: "OnePlus Nord Series", slug: "oneplus-nord-series" },
        ],
      },
      { name: "LCD GG Pixel", slug: "lcd-gg-pixel" },
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
          { name: "Xperia 10 Series", slug: "xperia-10-series" },
          { name: "Xperia 5 Series", slug: "xperia-5-series" },
        ],
      },
      { name: "LCD Wiko", slug: "lcd-wiko" },
      { name: "LCD ZTE", slug: "lcd-zte" },
      { name: "LCD Alcatel", slug: "lcd-alcatel" },
      { name: "LCD CAT", slug: "lcd-cat" },
      { name: "LCD Infinix", slug: "lcd-infinix" },
      { name: "LCD LG", slug: "lcd-lg" },
      { name: "LCD Excellent", slug: "lcd-excellent" },
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
      { name: "Micro SD Cards", slug: "kingston-micro-sd" },
      { name: "SD Cards", slug: "kingston-sd" },
      { name: "USB Flash Drives", slug: "kingston-usb-flash" },
      { name: "SSD", slug: "kingston-ssd" },
      { name: "Memory Cards", slug: "kingston-memory-cards" },
      { name: "Card Readers", slug: "kingston-card-readers" },
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
      { name: "Silicone Case", slug: "green-on-silicone" },
      { name: "Leather Bookcase", slug: "green-on-leather-bookcase" },
      { name: "Pro 3D Glass Protector", slug: "green-on-pro-3d" },
      { name: "HD Glass Protector", slug: "green-on-hd-glass" },
      { name: "Privacy Glass Protector", slug: "green-on-privacy" },
      { name: "For IPhone", slug: "green-on-iphone" },
      { name: "For Samsung", slug: "green-on-samsung" },
      { name: "For Xiaomi", slug: "green-on-xiaomi" },
      { name: "For Huawei", slug: "green-on-huawei" },
      { name: "For Oppo", slug: "green-on-oppo" },
    ],
  },
  {
    name: "Cable",
    slug: "cable",
    children: [
      { name: "USB-C Cable", slug: "cable-usb-c" },
      { name: "Lightning Cable", slug: "cable-lightning" },
      { name: "Micro USB Cable", slug: "cable-micro-usb" },
      { name: "HDMI Cable", slug: "cable-hdmi" },
      { name: "AUX Cable", slug: "cable-aux" },
      { name: "Display Cable", slug: "cable-display" },
      { name: "Network Cable", slug: "cable-network" },
      { name: "Data Transfer Cable", slug: "cable-data-transfer" },
      { name: "Fast Charging Cable", slug: "cable-fast-charging" },
      { name: "Multi Cable", slug: "cable-multi" },
    ],
  },
  {
    name: "Charger",
    slug: "charger",
    children: [
      { name: "USB-C Charger", slug: "charger-usb-c" },
      { name: "Lightning Charger", slug: "charger-lightning" },
      { name: "Wireless Charger", slug: "charger-wireless" },
      { name: "Car Charger", slug: "charger-car" },
      { name: "Fast Charger", slug: "charger-fast" },
      { name: "Laptop Charger", slug: "charger-laptop" },
      { name: "Power Bank", slug: "charger-power-bank" },
      { name: "Wall Charger", slug: "charger-wall" },
      { name: "MagSafe Charger", slug: "charger-magsafe" },
      { name: "Charger Adapter", slug: "charger-adapter" },
    ],
  },
  {
    name: "cell phone",
    slug: "cell-phone",
    children: [
      { name: "Apple", slug: "cell-phone-apple" },
      { name: "Samsung", slug: "cell-phone-samsung" },
      { name: "Xiaomi", slug: "cell-phone-xiaomi" },
      { name: "Huawei", slug: "cell-phone-huawei" },
      { name: "OnePlus", slug: "cell-phone-oneplus" },
      { name: "Google Pixel", slug: "cell-phone-google-pixel" },
      { name: "Motorola", slug: "cell-phone-motorola" },
      { name: "Nokia", slug: "cell-phone-nokia" },
      { name: "Oppo", slug: "cell-phone-oppo" },
      { name: "Realme", slug: "cell-phone-realme" },
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
      { name: "Headsets", slug: "other-headsets" },
      { name: "Earphones", slug: "other-earphones" },
      { name: "Holders & Stands", slug: "other-holders-stands" },
      { name: "Speakers", slug: "other-speakers" },
      { name: "Selfie Sticks", slug: "other-selfie-sticks" },
      { name: "Stylus Pen", slug: "other-stylus-pen" },
      { name: "SIM Card Adapter", slug: "other-sim-adapter" },
      { name: "Cleaning Kit", slug: "other-cleaning-kit" },
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
