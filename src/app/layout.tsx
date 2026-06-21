import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { InstallPrompt } from "@/components/InstallPrompt";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://expat-roadmap-sea.vercel.app"),
  title: {
    default: "Expat Roadmap SEA — Community Platform for Expats in Southeast Asia",
    template: "%s · Expat Roadmap SEA",
  },
  description:
    "Find housing, jobs, events and connect with expats in Thailand, Bali, Vietnam and across Southeast Asia. Visa guides, community reviews, and group tours.",
  keywords: [
    "expat community SEA",
    "digital nomad Southeast Asia",
    "expat housing Thailand",
    "digital nomad Bali",
    "expat jobs Vietnam",
    "Thailand visa guide 2026",
    "KITAS Indonesia",
    "expat forum Southeast Asia",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expat-roadmap-sea.vercel.app",
    siteName: "Expat Roadmap SEA",
    title: "Expat Roadmap SEA — Community Platform for Expats in Southeast Asia",
    description:
      "Find housing, jobs, events and connect with expats in Thailand, Bali, Vietnam and across Southeast Asia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expat Roadmap SEA",
    description:
      "Housing, jobs, events and community for expats across Southeast Asia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ermUeuFnbtJDN2Fsof7M6jpEmSM4Zb_VmMgJyhAfgX8",
  },
  appleWebApp: {
    capable: true,
    title: "Expat Roadmap",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#55633f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <InstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
