import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = "https://usquare.id";
const siteTitle = "USQUARE CONSULTING - IT Consulting & Digital Transformation";
const siteDescription =
  "USQUARE CONSULTING helps organizations build, modernize, integrate, and operate enterprise technology platforms through IT consulting, system integration, automation, cloud, AI, cybersecurity, and managed services.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "USQUARE CONSULTING",
      alternateName: ["USQUARE", "USQUARE.ID"],
      url: siteUrl,
      logo: `${siteUrl}/brand/usquare-consulting-logo.svg`,
      email: "info@usquare.id",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Progo No. 3",
        addressLocality: "Bandung",
        addressRegion: "West Java",
        postalCode: "40115",
        addressCountry: "ID",
      },
      areaServed: ["Indonesia", "Southeast Asia"],
      description: siteDescription,
      sameAs: [siteUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "USQUARE CONSULTING",
      alternateName: "USQUARE",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "USQUARE CONSULTING",
  authors: [{ name: "USQUARE CONSULTING", url: siteUrl }],
  creator: "USQUARE CONSULTING",
  publisher: "USQUARE CONSULTING",
  keywords: [
    "USQUARE",
    "USQUARE CONSULTING",
    "usquare.id",
    "IT consulting Indonesia",
    "system integration Indonesia",
    "digital transformation consulting",
    "NEXTPLATFORM",
    "enterprise technology platform",
    "application modernization",
    "API enablement",
    "workflow automation",
    "managed IT services",
  ],
  alternates: {
    canonical: siteUrl,
  },
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
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "USQUARE CONSULTING",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brand/usquare-consulting-logo.svg",
        width: 1200,
        height: 630,
        alt: "USQUARE CONSULTING logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/brand/usquare-consulting-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
