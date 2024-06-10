import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./contexts/context";
import TopNavigation from "./components/top-navigation";
import { ModalProvider } from "./contexts/modal-context";
import React, { Suspense } from "react";
import { NavigationEvents } from "./components/navigation-events";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cross Stitch Designer Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <ModalProvider>
            <TopNavigation />
            {children}
            <Suspense fallback={null}>
              <NavigationEvents />
            </Suspense>
          </ModalProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
