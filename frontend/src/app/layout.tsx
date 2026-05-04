import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { createMetadata } from "@/lib/seo";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full scroll-smooth", "font-sans", geist.variable)}>
      <body className="flex min-h-full flex-col antialiased">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
