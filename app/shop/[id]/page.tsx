"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Star, Truck, Shield, ArrowLeft } from "lucide-react"
import { useCart, type Product } from "../../contexts/CartContext"

// Mock product data - in a real app, this would come from an API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Blush Elegance Tote",
    price: 89.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Tote",
    description:
      "A sophisticated tote bag perfect for everyday use. Crafted from premium vegan leather with gold-tone hardware. Features multiple compartments to keep your essentials organized. The perfect blend of style and functionality for the modern woman.",
    inStock: true,
  },
  {
    id: "2",
    name: "Rose Gold Clutch",
    price: 45.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Clutch",
    description:
      "Elegant clutch for special occasions. Features a detachable chain strap and magnetic closure. Perfect for evening events and formal occasions.",
    inStock: true,
  },
  {
    id: "3",
    name: "Pink Paradise Crossbody",
    price: 67.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Crossbody",
    description:
      "Stylish crossbody bag for hands-free convenience. Adjustable strap and multiple pockets for organization.",
    inStock: true,
  },
]

const relatedProducts = [
  {
    id: "4",
    name: "Coral Dream Satchel",
    price: 95.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Dusty Rose Backpack",
    price: 78.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Blush Mini Bag",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()

  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/shop">
            <Button className="bg-blush-500 hover:bg-blush-600 text-white">Back to Shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_TO_CART", payload: product })
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/shop" className="inline-flex items-center text-blush-600 hover:text-blush-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
              <Heart className="w-6 h-6 text-gray-400 hover:text-blush-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <div className="mb-6">
              <span className="inline-block bg-blush-100 text-blush-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">(4.8) 124 reviews</span>
              </div>
              <p className="text-4xl font-bold text-blush-600 mb-6">KsH{product.price}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full"
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-blush-500 hover:bg-blush-600 text-white py-3 text-lg rounded-full mb-6 disabled:bg-gray-300"
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-blush-600" />
                <span className="text-sm text-gray-600">Free shipping over KsH 75</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blush-600" />
                <span className="text-sm text-gray-600">30-day returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-2xl font-bold text-blush-600 mb-4">KsH{relatedProduct.price}</p>
                  <Link href={`/shop/KsH{relatedProduct.id}`}>
                    <Button className="w-full bg-blush-500 hover:bg-blush-600 text-white rounded-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
