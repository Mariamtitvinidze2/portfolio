import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["500", "700"]
});

export const metadata: Metadata = {
  icons: {
    icon: "/portfolio.svg",
  },
  title: "Portfolio",
  description: "David Abutidze's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  );
}
