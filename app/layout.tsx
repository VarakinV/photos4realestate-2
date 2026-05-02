import type { Metadata, Viewport } from "next";
import { DM_Sans, Rubik, Geist } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/components/seo/schemas";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { PromoStrip } from "@/components/site/PromoStrip";
import { Footer } from "@/components/site/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.shortName}`,
    default: `Real Estate Photography Calgary | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `Real Estate Photography Calgary | ${siteConfig.shortName}`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Real Estate Photography Calgary`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Real Estate Photography Calgary | ${siteConfig.shortName}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/logos/map-pin-logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logos/map-pin-1000.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#131d3b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={cn(rubik.variable, dmSans.variable, "font-sans", geist.variable)}>
      <body suppressHydrationWarning>
        <TopBar />
        <Header />
        <PromoStrip />
        <main>{children}</main>
        <Footer />
        <JsonLd id="ld-localbusiness" data={localBusinessSchema} />
        <JsonLd id="ld-website" data={websiteSchema} />
      </body>
    </html>
  );
}
