"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "../contexts/CartContext"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { state } = useCart()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
    { href: "/admin", label: "Admin" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blush-400 to-blush-600 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blush-600">Bag It Like It's Hot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blush-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-blush-600 transition-colors duration-200"
            >
              <ShoppingBag className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blush-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-blush-600 transition-colors duration-200"
            >
              <ShoppingBag className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blush-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blush-600 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blush-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
