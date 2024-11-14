"use client"
import React, { useState } from 'react'
import { Search, User, Clock, Star, Heart, Share2, ChevronRight, Twitter, Facebook, Instagram, MoreHorizontal } from 'lucide-react'

const ingredients = [
  { name: 'Mixed white fish fillets (like sea bass, red snapper, or monkfish)', amount: '1.5 kg' },
  { name: 'Mussels, cleaned and debearded', amount: '1 kg' },
  { name: 'Clams, cleaned', amount: '1 kg' },
  { name: 'Shrimp or prawns, peeled and deveined', amount: '500 g' },
  { name: 'Squid, cleaned and cut into rings', amount: '500 g' },
  { name: 'Tomatoes, chopped', amount: '1.5 kg' },
  { name: 'Potatoes, peeled and sliced', amount: '500 g' },
  { name: 'Large onion, chopped', amount: '1' },
  { name: 'Garlic cloves, minced', amount: '4' },
  { name: 'Fennel bulb, sliced', amount: '1' },
  { name: 'Leek (white part only), sliced', amount: '1' },
  { name: 'Bay leaves', amount: '2' },
  { name: 'Small bunch of thyme', amount: '1' },
  { name: 'Small bunch of parsley, chopped (for garnish)', amount: '1' },
  { name: 'Orange peel (zest of 1 orange)', amount: '1' },
  { name: 'Saffron threads', amount: '3-4' },
  { name: 'Tsp paprika', amount: '1' },
  { name: 'Olive oil', amount: '200 ml' },
  { name: 'Fish stock or water', amount: '1 l' },
  { name: 'Salt and black pepper to taste', amount: '' },
]

const steps = [
  {
    title: 'Prepare the Base Broth:',
    instructions: [
      'In a large pot, heat the olive oil over medium heat.',
      'Add the onion, fennel, leek, and garlic and sauté until softened (about 5 minutes).',
      'Add the tomatoes, orange peel, bay leaves, thyme, and paprika. Cook for 10 minutes until the tomatoes begin to break down.',
      'Pour in the fish stock, add the saffron threads, and bring to a simmer.',
      'Let the broth simmer for 20-30 minutes, allowing the flavors to meld.',
    ]
  },
  {
    title: 'Add Potatoes:',
    instructions: [
      'Add the sliced potatoes to the broth and cook for 15 minutes until tender.',
    ]
  },
  {
    title: 'Cook the Seafood:',
    instructions: [
      'Gently add the firm white fish fillets first and cook for 2-3 minutes.',
      'Add the mussels, clams, squid, and shrimp, and cook until the mussels and clams open and the squid and shrimp are cooked through (about 5 minutes).',
      'Season the stew with salt and pepper to taste.',
    ]
  },
  {
    title: 'Prepare the Rouille (Optional but Traditional):',
    instructions: [
      'In a mortar and pestle or blender, mash the boiled potato with garlic.',
      'Slowly add olive oil, egg yolk, and paprika, and blend until smooth.',
      'Add a small amount of the hot broth to thin to a mayonnaise-like consistency.',
      'Season with salt and pepper to taste.',
    ]
  },
  {
    title: 'Serve:',
    instructions: [
      'Ladle the bouillabaisse into bowls, making sure each serving gets a variety of seafood.',
      'Garnish with chopped parsley.',
      'Serve with crusty bread and the rouille, and optionally, the broth for dipping.',
    ]
  },
]

export default function RecipePage() {
  const [isLiked, setIsLiked] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[rgba(255, 245, 236, 1)]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Cook.</div>
          <div className="flex-grow flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search by ingredients (e.g., chicken, garlic, lemon)"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <a href='/sign-in'><button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300">
            <User className="h-5 w-5" />
          </button></a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          <div className="bg-gray-200 h-96 rounded-lg mb-8">
            {/* Placeholder for recipe image */}
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full ${
                isLiked ? 'bg-orange-500' : 'bg-white'
              } shadow-md transition duration-300`}
            >
              <Heart className={`h-6 w-6 ${isLiked ? 'text-white' : 'text-orange-500'}`} />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="p-3 rounded-full bg-white shadow-md transition duration-300"
              >
                <Share2 className="h-6 w-6 text-gray-600" />
              </button>
              {isShareOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <Facebook className="inline-block w-5 h-5 mr-2" /> Facebook
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <Instagram className="inline-block w-5 h-5 mr-2" /> Instagram
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <Twitter className="inline-block w-5 h-5 mr-2" /> X (Twitter)
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      <MoreHorizontal className="inline-block w-5 h-5 mr-2" /> More
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Bouillabaisse (Classic French Fish Soup)</h1>
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-500 mr-1" />
            <span className="text-gray-500">40 mins</span>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black-900 mb-4" >Ingredients</h2>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                <span>{ingredient.name}</span>
                <span className="text-gray-500">{ingredient.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps to Prepare Bouillabaisse</h2>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{index + 1}. {step.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {step.instructions.map((instruction, i) => (
                    <li key={i} className="text-gray-700">{instruction}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cook.</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Recipes</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">FAQ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Feedbacks</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Customer Care</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Terms & Condition</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Have a Great Recipe to Share?</h3>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 flex items-center">
                Send Recipe
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
            <p className="text-gray-400">
              © Cook 2024 / All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}