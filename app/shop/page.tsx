"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Heart } from "lucide-react"
import { useCart, type Product } from "../contexts/CartContext"

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Blush Elegance Tote",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Tote",
    description: "A sophisticated tote bag perfect for everyday use",
    inStock: true,
  },
  {
    id: "2",
    name: "Rose Gold Clutch",
    price: 900.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clutch",
    description: "Elegant clutch for special occasions",
    inStock: true,
  },
  {
    id: "3",
    name: "Pink Paradise Crossbody",
    price: 1000.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Crossbody",
    description: "Stylish crossbody bag for hands-free convenience",
    inStock: true,
  },
  {
    id: "4",
    name: "Coral Dream Satchel",
    price: 687.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Satchel",
    description: "Professional satchel with modern flair",
    inStock: false,
  },
  {
    id: "5",
    name: "Dusty Rose Backpack",
    price: 980.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Backpack",
    description: "Trendy backpack for the modern woman",
    inStock: true,
  },
  {
    id: "6",
    name: "Blush Mini Bag",
    price: 870.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Mini",
    description: "Cute mini bag for essentials only",
    inStock: true,
  },
]

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const { dispatch } = useCart()

  const categories = ["all", "Tote", "Clutch", "Crossbody", "Satchel", "Backpack", "Mini"]

  const filteredProducts = mockProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop Our Collection</h1>
          <p className="text-xl text-gray-600">Find your perfect bag from our curated selection</p>
        </div>

        {/* Filters */}
        {/* <div className="bg-white rounded-2xl p-4 sm:p-6 mb-8 card-shadow">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search bags..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 rounded-full border border-gray-200 focus:border-blush-500 text-black placeholder:text-gray-400"
      />
    </div>
    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
      <SelectTrigger className="w-full rounded-full border border-gray-200 focus:border-blush-500 text-black">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category === "all" ? "All Categories" : category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-full rounded-full border border-gray-200 focus:border-blush-500 text-black">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name">Name</SelectItem>
        <SelectItem value="price-low">Price: Low to High</SelectItem>
        <SelectItem value="price-high">Price: High to Low</SelectItem>
      </SelectContent>
    </Select>
    <Button className="w-full bg-blush-500 hover:bg-blush-600 text-white rounded-full">
      <Filter className="w-4 h-4 mr-2" />
      Apply Filters
    </Button>
  </div>
</div> */}
<div className="bg-white rounded-2xl p-4 sm:p-6 mb-8 card-shadow">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {/* Search Input */}
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search bags..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 rounded-full border border-gray-200 focus:border-blush-500 text-black placeholder:text-gray-400"
      />
    </div>

    {/* Category Select */}
    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
      <SelectTrigger className="w-full rounded-full border border-gray-200 focus:border-blush-500 text-black">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="bg-white text-gray-800">
        {categories.map((category) => (
          <SelectItem
            key={category}
            value={category}
            className="text-gray-800 hover:bg-blush-50"
          >
            {category === "all" ? "All Categories" : category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

    {/* Sort By Select */}
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-full rounded-full border border-gray-200 focus:border-blush-500 text-black">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-white text-gray-800">
        <SelectItem value="name" className="text-gray-800 hover:bg-blush-50">Name</SelectItem>
        <SelectItem value="price-low" className="text-gray-800 hover:bg-blush-50">Price: Low to High</SelectItem>
        <SelectItem value="price-high" className="text-gray-800 hover:bg-blush-50">Price: High to Low</SelectItem>
      </SelectContent>
    </Select>

    {/* Apply Filters Button */}
    <Button className="w-full bg-blush-500 hover:bg-blush-600 text-white rounded-full">
      <Filter className="w-4 h-4 mr-2" />
      Apply Filters
    </Button>
  </div>
</div>



        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-blush-500 cursor-pointer transition-colors" />
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-2xl font-bold text-blush-600 mb-4">ksh {product.price}</p>
                <div className="flex gap-2">
                  <Link href={`/shop/${product.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-blush-500 text-blush-600 hover:bg-blush-50 rounded-full"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="flex-1 bg-blush-500 hover:bg-blush-600 text-white rounded-full disabled:bg-gray-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
