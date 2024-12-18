import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import TransistionProvider from "./component/transitionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "The Rajesh Portfolio",
  description: "The Rajesh Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransistionProvider>{children}</TransistionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
