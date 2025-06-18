"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Plus, Package } from "lucide-react"

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = ["Tote", "Clutch", "Crossbody", "Satchel", "Backpack", "Mini"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, image: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Product uploaded successfully!")
    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      image: null,
    })
    setIsSubmitting(false)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-blush-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">Upload new products to your store</p>
        </div>

        {/* Upload Form */}
        <div className="bg-white rounded-2xl card-shadow p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Plus className="w-6 h-6 mr-2 text-blush-600" />
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="mt-1 rounded-full"
                placeholder="e.g., Blush Elegance Tote"
              />
            </div>

            {/* Price and Category */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="price">Price (KsH)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  required
                  className="mt-1 rounded-full"
                  placeholder="89.99"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="mt-1 rounded-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                required
                rows={4}
                className="mt-1 rounded-2xl"
                placeholder="Describe the product features, materials, and style..."
              />
            </div>

            {/* Image Upload */}
            <div>
              <Label htmlFor="image">Product Image</Label>
              <div className="mt-1">
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blush-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-700">Upload product image</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="mt-4"
                  />
                  {formData.image && <p className="mt-2 text-sm text-blush-600">Selected: {formData.image.name}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blush-500 hover:bg-blush-600 text-white py-3 text-lg rounded-full disabled:bg-gray-400"
            >
              {isSubmitting ? "Uploading..." : "Upload Product"}
            </Button>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl card-shadow p-6 text-center">
            <div className="text-3xl font-bold text-blush-600 mb-2">24</div>
            <div className="text-gray-600">Total Products</div>
          </div>
          <div className="bg-white rounded-2xl card-shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <div className="text-gray-600">In Stock</div>
          </div>
          <div className="bg-white rounded-2xl card-shadow p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
            <div className="text-gray-600">Low Stock</div>
          </div>
        </div>
      </div>
    </div>
  )
}
