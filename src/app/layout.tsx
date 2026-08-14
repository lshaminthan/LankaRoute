import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lankaroute.com"),
  title: {
    default: "AI Sri Lanka Trip Planner — Itinerary, Transport & Hotels | LankaRoute",
    template: "%s | LankaRoute",
  },
  description:
    "LankaRoute is an AI-powered Sri Lanka trip planner. Pick your interests and districts and get a personalized day-by-day itinerary with accurate public transport times and hotel booking.",
  keywords: [
    "Sri Lanka trip planner",
    "AI Sri Lanka itinerary",
    "Sri Lanka travel planner",
    "Sri Lanka public transport",
    "Sri Lanka hotels",
  ],
  openGraph: {
    title: "AI Sri Lanka Trip Planner — Itinerary, Transport & Hotels | LankaRoute",
    description:
      "Pick your interests and districts and get a personalized day-by-day Sri Lanka itinerary with accurate public transport and hotel suggestions.",
    siteName: "LankaRoute",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
