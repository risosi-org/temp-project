import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FacebookPixel } from "@/components/facebook-pixel";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexsolution - দ্রুত ফলোয়ার গ্রোথ সমাধান",
  description:
    "আপনার পেজ হোক আরও জনপ্রিয় ও বিশ্বাসযোগ্য — বাড়বে ফলোয়ার, বাড়বে ক্রেতাদের ট্রাস্ট। দ্রুত ফলোয়ার গ্রোথ, দৃশ্যমান রেজাল্ট!",
  keywords: ["ফলোয়ার", "সোশ্যাল মিডিয়া", "গ্রোথ", "মার্কেটিং", "Nexsolution"],
  authors: [{ name: "Nexsolution" }],
  creator: "Nexsolution",
  publisher: "Nexsolution",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    title: "Nexsolution - দ্রুত ফলোয়ার গ্রোথ সমাধান",
    description:
      "আপনার পেজ হোক আরও জনপ্রিয় ও বিশ্বাসযোগ্য — বাড়বে ফলোয়ার, বাড়বে ক্রেতাদের ট্রাস্ট।",
    siteName: "Nexsolution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexsolution - দ্রুত ফলোয়ার গ্রোথ সমাধান",
    description:
      "আপনার পেজ হোক আরও জনপ্রিয় ও বিশ্বাসযোগ্য — বাড়বে ফলোয়ার, বাড়বে ক্রেতাদের ট্রাস্ট।",
  },
  icons: {
    icon: [
      {
        url: "/nexsolution-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/nexsolution-logo.png",
    shortcut: "/nexsolution-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappLink =
    "https://wa.me/8801631137868?text=আসসালামু%20আলাইকুম।%20স্যার্ভিসটি%20নিতে%20চাচ্ছি";
  return (
    <html lang="bn">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/nexsolution-logo.png" />
        <link rel="apple-touch-icon" href="/nexsolution-logo.png" />
        <link rel="shortcut icon" href="/nexsolution-logo.png" />
      </head>
      <body className={`font-sans antialiased`}>
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <a href={whatsappLink}>
          {children}
          <Analytics />
        </a>
      </body>
    </html>
  );
}
