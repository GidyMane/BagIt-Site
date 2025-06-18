"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "../contexts/CartContext"

export default function Cart() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  if (state.items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/shop">
            <Button className="bg-blush-500 hover:bg-blush-600 text-white px-8 py-3 rounded-full">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-2xl card-shadow overflow-hidden">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center p-6 border-b last:border-b-0">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={100}
                height={100}
                className="w-20 h-20 object-cover rounded-lg mr-6"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-xl font-bold text-blush-600">KsH{item.price}</p>
              </div>

              <div className="flex items-center space-x-3 mr-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full p-0"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full p-0"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-right mr-6">
                <p className="text-lg font-bold">KsH{(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-2xl card-shadow p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-2xl font-bold text-blush-600">KsH{state.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
            <span>Shipping:</span>
            <span>{state.total > 75 ? "Free" : "KsH9.99"}</span>
          </div>
          <div className="border-t pt-4 flex justify-between items-center mb-6">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-blush-600">
              KsH{(state.total + (state.total > 75 ? 0 : 9.99)).toFixed(2)}
            </span>
          </div>

          <div className="flex gap-4">
            <Link href="/shop" className="flex-1">
              <Button
                variant="outline"
                className="w-full border-blush-500 text-blush-600 hover:bg-blush-50 rounded-full"
              >
                Continue Shopping
              </Button>
            </Link>
            <Link href="/checkout" className="flex-1">
              <Button className="w-full bg-blush-500 hover:bg-blush-600 text-white rounded-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
