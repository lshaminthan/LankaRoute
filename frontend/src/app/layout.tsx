import type { Metadata } from "next";
import { Inter, Baloo_2 } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { AuthProvider } from "@/features/auth/components/AuthProvider";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
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
      <body className={`${inter.variable} ${baloo.variable} font-sans antialiased bg-light-grey`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <ConditionalFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
