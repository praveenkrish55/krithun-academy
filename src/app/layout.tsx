import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krithun Academy | Learn Today. Lead Tomorrow.",
  description: "Expert coaching for CA Foundation & Intermediate, CMA Foundation & Intermediate, Tally Prime, GST Filing, and Practical Accounting in Coimbatore, Tamil Nadu.",
  metadataBase: new URL("https://krithunacademy.com"),
  keywords: [
    "CA Foundation",
    "CA Intermediate",
    "CMA Foundation",
    "CMA Intermediate",
    "Tally Prime",
    "GST Filing",
    "Practical Accounting",
    "Commerce Coaching Coimbatore",
    "Accounting Course Coimbatore",
    "Krithun Academy",
    "Coimbatore CA Academy"
  ],
  authors: [{ name: "Krithun Academy" }],
  openGraph: {
    title: "Krithun Academy | Premium Commerce & Accountancy Coaching",
    description: "Learn Today. Lead Tomorrow. Expert coaching for CA, CMA, Tally Prime, GST Filing, and Practical Accounting with expert faculty in Coimbatore.",
    url: "https://krithunacademy.com",
    siteName: "Krithun Academy",
    images: [
      {
        url: "/images/hero_commerce_students.png",
        width: 1200,
        height: 630,
        alt: "Krithun Academy - Premium Commerce Education",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krithun Academy | Premium Commerce & Accountancy Coaching",
    description: "Learn Today. Lead Tomorrow. Expert coaching for CA, CMA, Tally Prime, GST Filing, and Practical Accounting.",
    images: ["/images/hero_commerce_students.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans">
        {children}
      </body>
    </html>
  );
}
