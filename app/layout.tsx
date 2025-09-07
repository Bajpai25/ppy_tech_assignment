import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CapacitorApp } from "@/components/capacitor-app"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "WealthElite Dashboard",
  description: "Financial Dashboard for Wealth Management",
  generator: "ppy.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CapacitorApp>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </CapacitorApp>
        </ThemeProvider>
      </body>
    </html>
  )
}
