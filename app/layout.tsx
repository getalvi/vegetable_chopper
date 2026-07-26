import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "4-in-1 Rechargeable Electric Chopper | Best Kitchen Gadget in BD",
  description: "রান্নাঘরের কাজ হোক আরও সহজ! 4-in-1 রিচার্জেবল ইলেকট্রিক চপার দিয়ে রসুন, পেঁয়াজ, সবজি কাটুন মাত্র কয়েক সেকেন্ডে। ক্যাশ অন ডেলিভারিতে অর্ডার করুন।",
  openGraph: {
    title: "4-in-1 Rechargeable Electric Chopper | Premium Kitchen Gadget",
    description: "সবজি কাটা, কুচানো এবং ব্লেন্ড করা এখন আরও সহজ। 100% Cash on Delivery in Bangladesh.",
    url: "https://yourdomain.com",
    siteName: "KitchenPro BD",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "4-in-1 Electric Chopper",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4-in-1 Rechargeable Electric Chopper",
    description: "Order the best handheld vegetable cutter in Bangladesh today.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "4-in-1 Rechargeable Electric Vegetable Chopper",
    image: "https://yourdomain.com/product.jpg",
    description: "Handheld Electric Vegetable Cutter, Rechargeable Garlic Chopper & Mini Food Processor.",
    brand: {
      "@type": "Brand",
      name: "KitchenPro",
    },
    offers: {
      "@type": "Offer",
      url: "https://yourdomain.com",
      priceCurrency: "BDT",
      price: "1250",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansBengali.variable} font-bengali bg-slate-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
