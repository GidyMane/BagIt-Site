"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question about our bags or need styling advice? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl card-shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="mt-1 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-1 rounded-full"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  rows={6}
                  className="mt-1 rounded-2xl"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blush-500 hover:bg-blush-600 text-white py-3 text-lg rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl card-shadow p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blush-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Fashion Street
                      <br />
                      Style District, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blush-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blush-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@bagitlikeitsHot.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blush-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl card-shadow p-8">
              <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Interactive map would go here</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl card-shadow p-6">
              <h3 className="text-lg font-semibold mb-3">What is your return policy?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for all unused items in original condition.
              </p>
            </div>
            <div className="bg-white rounded-2xl card-shadow p-6">
              <h3 className="text-lg font-semibold mb-3">Do you offer international shipping?</h3>
              <p className="text-gray-600">
                Currently, we ship within the United States. International shipping coming soon!
              </p>
            </div>
            <div className="bg-white rounded-2xl card-shadow p-6">
              <h3 className="text-lg font-semibold mb-3">How do I care for my bag?</h3>
              <p className="text-gray-600">
                Each bag comes with care instructions. Generally, wipe with a damp cloth and store in dust bag when not
                in use.
              </p>
            </div>
            <div className="bg-white rounded-2xl card-shadow p-6">
              <h3 className="text-lg font-semibold mb-3">Do you offer gift wrapping?</h3>
              <p className="text-gray-600">
                Yes! We offer complimentary gift wrapping for all orders. Just select the option at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
