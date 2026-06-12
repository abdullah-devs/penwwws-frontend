import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import NProgressProvider from "@/providers/ProgressBarProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Penwwws | AI-native school operations",
  description:
    "A premium AI-powered platform for modern schools to manage students, staff, attendance, and workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <TanstackQueryProvider>
          <Toaster />
          <Suspense fallback={null}>
            <NProgressProvider>{children}</NProgressProvider>
          </Suspense>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
