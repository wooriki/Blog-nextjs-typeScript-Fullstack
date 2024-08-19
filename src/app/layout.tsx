import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/next-auth-provider";
import NextThemeProvider from "@/providers/theme-provider";
import GlobalState from "@/context";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Content",
  description: "NextJS build with prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <NextThemeProvider>
          <NextAuthProvider>
            <GlobalState>
              <Header />
              {children}
            </GlobalState>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
