import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar/navbar";
import Breadcrumbs from "@/components/layout/breadcrumbs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title:
    "Montessori School Serving in West Hartford CT, Windsor CT, Simsbury CT, Bloomfield CT - Wellspring Montessori | Montessori School in a School Setting",
  description:
    "Montessori School Serving in West Hartford, Windsor, Simsbury, Bloomfield - Wellspring Montessori. We offer a unique and effective approach to education that fosters creativity, independence, and a love of learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className,
          inter.variable,
        )}
      >
        <Navbar />
        <Breadcrumbs />
        <main>{children}</main>
      </body>
    </html>
  );
}
