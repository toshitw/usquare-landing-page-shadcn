import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USQUARE CONSULTING - IT Consulting & Digital Transformation",
  description:
    "USQUARE CONSULTING helps organizations build, modernize, integrate, and operate enterprise technology platforms through IT consulting, system integration, automation, cloud, AI, cybersecurity, and managed services.",
  openGraph: {
    title: "USQUARE CONSULTING - IT Consulting & Digital Transformation",
    description:
      "Build, modernize, integrate, and operate enterprise technology platforms with less complexity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "USQUARE CONSULTING - IT Consulting & Digital Transformation",
    description:
      "Build, modernize, integrate, and operate enterprise technology platforms with less complexity.",
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
      </body>
    </html>
  );
}
