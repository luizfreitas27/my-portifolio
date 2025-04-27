import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/styles/globals.css";
import { Header } from "@/app/_components/Header";
import React from "react";
import { Raleway } from "next/font/google";
import { Footer } from "./_components/Footer";

const raleway = Raleway({
  weight: ["400", "300", "100", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumière | Portfolio",
  description: "My newest portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${raleway.className} dark scroll-smooth scroll-pt-40 overflow-y-scroll`}
    >
      <body className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-20 mx-auto w-full max-w-5xl px-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
