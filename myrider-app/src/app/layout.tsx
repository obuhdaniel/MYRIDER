import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myrider.com"),
  title: {
    default: "MyRider | Fast, Reliable Delivery at Your Fingertips",
    template: "%s | MyRider",
  },
  description: "MyRider offers on-demand urban logistics with AI-powered dispatch, real-time GPS tracking, dual-valuation security, and instant delivery. Download the app or sign up as a rider today.",
  keywords: ["delivery service", "courier", "last-mile delivery", "AI dispatch", "same day delivery", "package delivery", "ride", "logistics", "food delivery", "document delivery"],
  authors: [{ name: "MyRider Logistics" }],
  creator: "MyRider",
  publisher: "MyRider",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myrider.com",
    siteName: "MyRider",
    title: "MyRider | Fast, Reliable Delivery at Your Fingertips",
    description: "On-demand urban logistics with AI-powered dispatch, real-time GPS tracking, and dual-valuation security. Trust MyRider for fast, reliable deliveries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyRider - Fast, Reliable Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyRider | Fast, Reliable Delivery at Your Fingertips",
    description: "On-demand urban logistics with AI-powered dispatch, real-time GPS tracking, and dual-valuation security.",
    creator: "@myrider",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://myrider.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MyRider",
              "description": "On-demand urban logistics with AI-powered dispatch and dual-valuation security",
              "url": "https://myrider.com",
              "logo": "https://myrider.com/logo.png",
              "image": "https://myrider.com/og-image.png",
              "serviceType": ["Courier Service", "Delivery Service", "Food Delivery"],
              "areaServed": "Urban areas",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1000000"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-XXX-XXXX",
                "contactType": "Customer Service"
              }
            }),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}