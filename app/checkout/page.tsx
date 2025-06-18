"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Lock } from "lucide-react"
import { useCart } from "../contexts/CartContext"

export default function Checkout() {
  const { state, dispatch } = useCart()
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle checkout logic here
    alert("Order placed successfully!")
    dispatch({ type: "CLEAR_CART" })
  }

  const subtotal = state.total
  const shipping = subtotal > 75 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-2xl card-shadow p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Information
                </h2>
                <div>
                  <Label htmlFor="nameOnCard">Name on Card</Label>
                  <Input
                    id="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={(e) => handleInputChange("nameOnCard", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="mt-4">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blush-500 hover:bg-blush-600 text-white py-3 text-lg rounded-full flex items-center justify-center"
              >
                <Lock className="w-5 h-5 mr-2" />
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl card-shadow p-8">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">KsH{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>KsH{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `KsH${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>KsH{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 border-t">
                <span>Total:</span>
                <span className="text-blush-600">KsH{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blush-50 rounded-lg">
              <p className="text-sm text-blush-700 flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
