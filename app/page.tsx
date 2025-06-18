import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Truck, Shield, Heart } from "lucide-react"

export default function Home() {
  const featuredProducts = [
    {
      id: "1",
      name: "Blush Elegance Tote",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
    },
    {
      id: "2",
      name: "Rose Gold Clutch",
      price: 45.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4,
    },
    {
      id: "3",
      name: "Pink Paradise Crossbody",
      price: 67.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 5,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
                Bag It Like It's <span className="text-blush-600">Hot</span>
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-blush-700 mb-4">Hot Bags, Hotter You</p>
              <p className="text-lg text-gray-600 mb-8 italic">Dripping in thrift. Literally.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/shop">
                  <Button className="bg-blush-500 hover:bg-blush-600 text-white px-8 py-3 text-lg rounded-full hover-lift">
                    Shop Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-blush-500 text-blush-600 hover:bg-blush-50 px-8 py-3 text-lg rounded-full"
                >
                  View Collection
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Featured Handbag"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl hover-lift"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-blush-200 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blush-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over KsH1000</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blush-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">30-day money back guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blush-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-gray-600">Carefully crafted with attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600">Discover our most loved handbags</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-6 card-shadow hover-lift">
                <div className="relative mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-blush-500 cursor-pointer transition-colors" />
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blush-600 mb-4">KsH{product.price}</p>
                <Link href={`/shop/${product.id}`}>
                  <Button className="w-full bg-blush-500 hover:bg-blush-600 text-white rounded-full">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button className="bg-white text-blush-600 hover:bg-gray-50 px-8 py-3 text-lg rounded-full border border-blush-200">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blush-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Bag It?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who've found their perfect bag</p>
          <Link href="/shop">
            <Button className="bg-white text-blush-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
