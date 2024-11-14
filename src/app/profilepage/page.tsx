import Link from 'next/link'
import Image from 'next/image'
import { Clock, Heart, User } from 'lucide-react'

export default function SavedRecipes() {
  // This would typically come from an API or database
  const savedRecipes = [
    {
      id: 1,
      title: 'Bouillabaisse',
      time: '40 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 2,
      title: 'Coconut Curry Shrimp',
      time: '37 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 3,
      title: 'Ogbono soup',
      time: '15 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 4,
      title: 'Afang Soup',
      time: '24 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 5,
      title: 'Okro Soup',
      time: '24 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 6,
      title: 'Egusi Soup',
      time: '32 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 7,
      title: 'Chipotle Lime keto Chicken',
      time: '42 mins',
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      id: 8,
      title: 'white Soup',
      time: '32 mins',
      image: '/placeholder.svg?height=400&width=600',
    }
  ]

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/app" className="text-2xl font-bold text-gray-900">
              Cook.
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/recipes" className="text-gray-900 hover:text-orange-500 transition-colors">
                Recipes
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>

            <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">
          <span className="text-orange-500">Favorite</span> Recipes
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="relative h-64">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white-500 rounded-full text-white hover:bg-orange-600 transition-colors">
                  <Heart className="h-5 w-5 fill-current" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center text-white/90">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}