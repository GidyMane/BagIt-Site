import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./contexts/CartContext"
import Navigation from "./components/Navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Bag It Like It's Hot - Hot Bags, Hotter You",
  description: "Stylish handbags for the modern woman. Dripping in thrift. Literally.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
