import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const neueHaas = localFont({
  src: [
    {
      path: "../fonts/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
});

export const metadata: Metadata = {
  title: "Yashdeep Travels - Premium Car Rental & Cab Services in Vadodara",
  description:
    "Book comfortable outstation tours, local rides, and round trip cabs with Yashdeep Travels. Clean cars, professional drivers, and 24/7 support in Gujarat, Rajasthan, Maharashtra and MP.",
  keywords: [
    "cab booking",
    "taxi service",
    "outstation cabs",
    "Vadodara taxi",
    "Yashdeep Travels",
    "car hire Vadodara",
    "innova on rent",
  ],
  metadataBase: new URL("https://yashdeeptravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yashdeep Travels - Premium Car Rental & Cab Services",
    description:
      "Book clean cars and professional drivers for outstation & local travel.",
    url: "https://yashdeeptravels.com",
    siteName: "Yashdeep Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "../public/images/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Yashdeeep Cabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashdeep Travels - Premium Car Rental & Cab Services",
    description:
      "Book comfortable outstation tours, local rides, and round trip cabs with Yashdeep Travels. Clean cars, professional drivers, and 24/7 support in Gujarat, Rajasthan, Maharashtra and MP.",
    images: ["../public/images/ogimage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/image.png",
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${neueHaas.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#111827]">
        {children}
        <ToastContainer position="top-right" autoClose={4000} theme="light" />
      </body>
      <Analytics />
    </html>
  );
}
