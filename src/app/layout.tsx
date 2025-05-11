import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Provider as JotaiProvider } from "jotai";
import { Toaster } from "sonner";
import Header from "~/components/Header";
import { SEO } from "~/constants";
import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";

export const metadata: Metadata = {
  title: SEO.appTitle,
  description: SEO.appDescription,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  authors: [{ name: SEO.appAuthor }],
  keywords: SEO.appKeywords,
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <ClerkProvider>
          <TRPCReactProvider>
            <JotaiProvider>
              <HydrateClient>
                <Toaster richColors />
                <Header />
                {children}
              </HydrateClient>
            </JotaiProvider>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
